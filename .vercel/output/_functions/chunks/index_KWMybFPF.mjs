import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_CEv0P3ec.mjs';
/* empty css                         */

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const title = "Participaci\xF3n - Ziba's Creators";
  const metaDescription = "Participa en el concurso de creatividad de Ziba's. Formulario de participaci\xF3n para subir tu contenido creativo.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": metaDescription, "headerColors": headerColorConfig, "data-astro-cid-dr46ccdb": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="bg-white flex-1 min-h-0" data-astro-cid-dr46ccdb> <div class="w-full h-full" data-astro-cid-dr46ccdb> <div class="iframe-container h-full" style="position: relative; width: 100%; height: 100%; overflow: hidden;" data-astro-cid-dr46ccdb> <iframe src="https://zibascreators.yummiespromociones.com/" style="position: absolute; inset: 0; width: 100%; height: 100%; border: none;" title="Formulario de Participación" loading="lazy" allowfullscreen data-astro-cid-dr46ccdb></iframe> </div> </div> </section> ` })} `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Participacion/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Participacion/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
