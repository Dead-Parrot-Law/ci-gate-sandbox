import { defineMiddleware } from 'astro:middleware';

// Baseline security headers for every page.
export const onRequest = defineMiddleware(async (context, next) => {
  // API routes return JSON or redirects, not HTML, so they don't need page headers.
  if (context.url.pathname.startsWith('/api/')) {
    return next();
  }

  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return response;
});
