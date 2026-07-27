'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  telephone: '',
  arrival: '',
  departure: '',
  guests: '',
  villa: '',
  contactMethod: 'Email',
  message: '',
  website: '',
};

export default function ReservationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus('sending');
    setNotice('');

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your enquiry.');

      setForm(initialState);
      setStatus('success');
      setNotice('Thank you. Your enquiry has been received and our Private Concierge team will contact you shortly.');
    } catch (error) {
      setStatus('error');
      setNotice(error.message || 'Unable to send your enquiry. Please email reservations@madronalvillas.com.');
    }
  }

  return (
    <form className="reservationForm" onSubmit={submitForm}>
      <label>Name<input name="name" value={form.name} onChange={updateField} autoComplete="name" required /></label>
      <label>Email<input type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" required /></label>
      <label>Telephone<input type="tel" name="telephone" value={form.telephone} onChange={updateField} autoComplete="tel" /></label>
      <label>Preferred contact
        <select name="contactMethod" value={form.contactMethod} onChange={updateField}>
          <option>Email</option>
          <option>Telephone</option>
          <option>WhatsApp</option>
        </select>
      </label>
      <label>Arrival<input type="date" name="arrival" value={form.arrival} onChange={updateField} /></label>
      <label>Departure<input type="date" name="departure" value={form.departure} onChange={updateField} /></label>
      <label>Guests<input type="number" name="guests" min="1" max="30" value={form.guests} onChange={updateField} /></label>
      <label>Villa
        <select name="villa" value={form.villa} onChange={updateField} required>
          <option value="" disabled>Select a villa</option>
          <option>Villa Candela</option>
          <option>Villa Lámpara</option>
          <option>Either villa</option>
        </select>
      </label>
      <label className="full">Message<textarea name="message" value={form.message} onChange={updateField} /></label>
      <label className="formTrap" aria-hidden="true">Website<input name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" /></label>
      <button className="btn gold full" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}
      </button>
      {notice && <p className={`formNotice full ${status}`} role="status">{notice}</p>}
    </form>
  );
}
