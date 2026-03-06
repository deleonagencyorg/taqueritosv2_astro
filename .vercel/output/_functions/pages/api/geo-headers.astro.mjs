import { d as detectLocale } from '../../chunks/geoService_DH9kaRlt.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const { locale, ip, country } = detectLocale(request);
    return new Response(JSON.stringify({
      country,
      locale,
      ip,
      source: "server-headers",
      success: !!country
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("Error en geo-headers API:", error);
    return new Response(JSON.stringify({
      country: null,
      locale: "es",
      ip: null,
      source: "error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
