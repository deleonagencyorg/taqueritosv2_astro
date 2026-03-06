export { renderers } from '../renderers.mjs';

const GET = ({ request }) => {
  const incomingUrl = new URL(request.url);
  const targetBase = "https://www.taqueritos.com/es/retos-torneos";
  const targetUrl = `${targetBase}${incomingUrl.search}`;
  return Response.redirect(targetUrl, 301);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
