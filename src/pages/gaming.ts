import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  const incomingUrl = new URL(request.url);
  const targetBase = 'https://www.taqueritos.com/es/retos-torneos';
  const targetUrl = `${targetBase}${incomingUrl.search}`;

  return Response.redirect(targetUrl, 301);
};
