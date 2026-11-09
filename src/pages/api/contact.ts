import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = String(form.get('name') ?? '').slice(0, 100);
  const email = String(form.get('email') ?? '').slice(0, 200);

  if (!name || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // A real site would store or forward the message. The demo just logs that one arrived.
  console.log('contact form received');
  return redirect('/contact?sent=1', 303);
};
