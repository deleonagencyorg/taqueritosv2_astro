import type { APIRoute } from 'astro';
import { detectLocale } from '../../services/geoService';

export const GET: APIRoute = async ({ request }) => {
  try {
    const { locale, ip, country } = detectLocale(request);
    
    return new Response(JSON.stringify({
      country,
      locale,
      ip,
      source: 'server-headers',
      success: !!country
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    console.error('Error en geo-headers API:', error);
    
    // Return safe fallback even on error
    return new Response(JSON.stringify({
      country: null,
      locale: 'es',
      ip: null,
      source: 'error',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 200, // Return 200 even on error to not break client logic
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
