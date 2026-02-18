import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  adapter: vercel(),
  output: 'server',
  site: 'https://taqueritos.com',
  integrations: [
    react(),
    tailwind({
      // Configuración explícita de Tailwind
      config: { path: './tailwind.config.js' },
      // Asegurarse de que Tailwind se aplique a todos los archivos
      applyBaseStyles: true,
    }),
  ],
});