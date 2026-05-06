import type { APIRoute } from 'astro';
import { detectLocale } from '../../services/geoService';

export const GET: APIRoute = async ({ request }) => {
  try {
    const { locale, ip, country } = detectLocale(request);
    
    return new Response(JSON.stringify({
      ip,
      country,
      defaultLocale: locale
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error detecting locale:', error);
    
    // Return safe fallback even on error
    return new Response(JSON.stringify({
      ip: null,
      country: null,
      defaultLocale: 'es',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), { 
      status: 200 // Return 200 even on error to not break client logic
    });
  }
};
