import { NextResponse } from 'next/server';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const RESERVATIONS_EMAIL = 'reservations@madronalvillas.com';
const FROM_EMAIL = 'Madroñal Villas <reservations@madronalvillas.com>';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function sendEmail(payload) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || data?.error || 'Email delivery failed.');
  }

  return data;
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const {
      name = '',
      email = '',
      telephone = '',
      arrival = '',
      departure = '',
      guests = '',
      villa = '',
      contactMethod = '',
      message = '',
      website = '',
    } = body || {};

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name.trim() || !email.trim() || !villa.trim()) {
      return NextResponse.json(
        { error: 'Please complete your name, email address and selected villa.' },
        { status: 400 },
      );
    }

    const safe = {
      name: escapeHtml(name.trim()),
      email: escapeHtml(email.trim()),
      telephone: escapeHtml(telephone.trim()),
      arrival: escapeHtml(arrival),
      departure: escapeHtml(departure),
      guests: escapeHtml(guests),
      villa: escapeHtml(villa),
      contactMethod: escapeHtml(contactMethod),
      message: escapeHtml(message.trim()).replaceAll('\n', '<br />'),
    };

    await sendEmail({
      from: FROM_EMAIL,
      to: [RESERVATIONS_EMAIL],
      reply_to: email.trim(),
      subject: `New reservation enquiry: ${name.trim()} — ${villa}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#1a1a18;line-height:1.6">
          <h1 style="font-family:Georgia,serif;font-weight:400">New reservation enquiry</h1>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:bold">Name</td><td>${safe.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Email</td><td>${safe.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Telephone</td><td>${safe.telephone || 'Not supplied'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Preferred contact</td><td>${safe.contactMethod || 'Email'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Villa</td><td>${safe.villa}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Arrival</td><td>${safe.arrival || 'Not supplied'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Departure</td><td>${safe.departure || 'Not supplied'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Guests</td><td>${safe.guests || 'Not supplied'}</td></tr>
          </table>
          <h2 style="font-family:Georgia,serif;font-weight:400;margin-top:28px">Message</h2>
          <p>${safe.message || 'No additional message.'}</p>
        </div>
      `,
    });

    await sendEmail({
      from: FROM_EMAIL,
      to: [email.trim()],
      reply_to: RESERVATIONS_EMAIL,
      subject: 'We have received your Madroñal Villas enquiry',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#1a1a18;line-height:1.7">
          <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#8c744a">Madroñal Villas · Private Collection</p>
          <h1 style="font-family:Georgia,serif;font-weight:400">Thank you, ${safe.name}.</h1>
          <p>Your enquiry has been safely received. A member of our Private Concierge team will contact you personally regarding availability and the next steps.</p>
          <p><strong>Villa:</strong> ${safe.villa}<br /><strong>Arrival:</strong> ${safe.arrival || 'To be confirmed'}<br /><strong>Departure:</strong> ${safe.departure || 'To be confirmed'}</p>
          <p>Warm regards,<br />Madroñal Villas Private Collection</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Reservation email error:', error);
    return NextResponse.json(
      { error: error.message || 'Unable to send your enquiry.' },
      { status: 500 },
    );
  }
}
