// 1. Definimos las variables de entorno UNA SOLA VEZ al inicio
const API_HOST = import.meta.env.PUBLIC_API_HOST; //api-cms-yummies.onrender.com
const API_TOKEN = import.meta.env.PUBLIC_API_TOKEN; //api-cms-yummies.onrender.com/v1/ping

// --- INTERFACES (El "Contrato" de los datos) ---

export interface MediaAsset {
  data: {
    attributes: {
      url: string;
    }
  } | null;
}

export interface Participation {
  id: number;
  attributes: {
    creatorName: string;
    socialMediaLink: string;
    cover: MediaAsset;
  };
}

export interface ApiResponse {
  data: Participation[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface SiteConfig {
  id: number;
  attributes: {
    siteName: string;
    googleTagManagerId: string;
    googleAnalyticsId: string;
    favicon: MediaAsset;
    defaultMetaDescription: string;
  };
}

export interface SiteResponse {
  data: SiteConfig;
}

// --- FUNCIONES FETCH (El "Puente") ---

/**
 * Misión 6: Obtiene configuración global (GTM, Favicon, SEO base)
 */
export async function getSiteConfig(): Promise<SiteResponse> {
  const url = `${API_HOST}/api/site-setting?populate=*`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`, 
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`Error en Config: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error al obtener Site Config:', error);
    throw error;
  }
}

/**
 * Misión 7: Obtiene las participaciones de forma dinámica
 */
export async function getParticipations(promotionId: number, page: number = 1, pageSize: number = 10): Promise<ApiResponse> {
  const url = `${API_HOST}/api/participations?filters[promotion][id]=${promotionId}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;
  
  if (!API_HOST || !API_TOKEN) {
    throw new Error('[ParticipationService] Variables de entorno no configuradas.');
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`, 
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error ${response.status}: ${errorBody}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[ParticipationService] Error en el fetch:', error);
    throw error;
  }
}