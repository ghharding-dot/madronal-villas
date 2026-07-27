import { NextResponse } from 'next/server';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const RESERVATIONS_EMAIL = 'reservations@madronalvillas.com';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function sendEmail(payload) {
  const response