import { d as detectLocale } from '../../chunks/geoService_DH9kaRlt.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const { locale, ip, country } = detectLocale(request);
    return new Response(JSON.stringify({
      ip,
      country,
      defaultLocale: locale
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error detecting locale:", error);
    return new Response(JSON.stringify({
      error: "Error detecting locale",
      defaultLocale: "es"
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
