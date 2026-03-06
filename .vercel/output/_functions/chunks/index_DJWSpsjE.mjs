import { g as createAstro, c as createComponent, m as maybeRenderHead, k as renderScript, a as renderTemplate, j as defineScriptVars, r as renderComponent, b as addAttribute, h as renderTransition } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { g as getLocale } from './i18n_BuYowHj0.mjs';
import { $ as $$MainLayout, a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import 'clsx';
/* empty css                         */
/* empty css                            */

const $$Astro$2 = createAstro("https://taqueritos.com");
const $$SuccessModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SuccessModal;
  const locale = getLocale(Astro2.url);
  const defaultValues = {
    es: {
      title: "Tu mensaje se envi\xF3 correctamente",
      message: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
      buttonText: "Cerrar"
    },
    en: {
      title: "Your message was sent successfully",
      message: "Thank you for your message. We will contact you soon.",
      buttonText: "Close"
    }
  };
  const {
    title = defaultValues[locale]?.title || defaultValues.es.title,
    message = defaultValues[locale]?.message || defaultValues.es.message,
    buttonText = defaultValues[locale]?.buttonText || defaultValues.es.buttonText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="successModal" class="fixed inset-0 flex items-center justify-center z-50 hidden"> <div class="modal-backdrop fixed inset-0 bg-primary bg-opacity-50"></div> <div class="bg-white rounded-lg p-8 max-w-md mx-4 relative z-10 transform transition-all"> <!-- Botón cerrar en esquina superior derecha con position absolute --> <button type="button" class="modal-close absolute top-2 right-2 text-gray-500 hover:text-gray-700"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Título centrado sin el botón --> <div class="flex justify-center items-center mb-4"> <h3 class="md:text-4xl text-2xl font-bold text-primary font-title" id="modal-title">${title}</h3> </div> <div class="mb-6"> <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4"> <svg class="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="text-gray-700 text-center" id="modal-message">${message}</p> </div> <div class="flex justify-center"> <button type="button" class="modal-close px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"> ${buttonText} </button> </div> </div> </div> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/SuccessModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/SuccessModal.astro", void 0);

const title$1 = "Contáctanos";
const description$1 = "ENVÍANOS TUS DUDAS O COMENTARIOS LLENANDO EL FORMULARIO DE LA DERECHA, O CONTÁCTANOS VIA E-MAIL O TELÉFONO.";
const form$1 = {"title":"¿Tienes preguntas? ¡Estamos aquí para ti!","contactReason":{"label":"Motivo de contacto"},"fullName":{"label":"Nombre completo","placeholder":"Nombre y apellidos"},"email":{"label":"Correo electrónico","placeholder":"correo@ejemplo.com"},"phone":{"label":"Número de celular","placeholder":"XXXXXXXX"},"submit":"Enviar mensaje"};
const offices$1 = {"title":"Descubre Nuestras Oficinas","locations":{"+504":{"tab":"Honduras","name":"Yummies Honduras","address":"Corporación Dinant, Frente a Plantas Tropicales, Blvd. Suyapa, 11101 Tegucigalpa, Francisco Morazán, Honduras","phones":["2275-3370","2239-5869","2235-7521"],"email":"contacto.honduras@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-honduras.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.703817626697!2d-87.20101878594838!3d14.094653490126237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2c8e9523aff%3A0x7ab9968369fb1370!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329011085!5m2!1ses!2sgt"},"+502":{"tab":"Guatemala","name":"Yummies Guatemala","address":"Corporación Dinant, 4 Complejo Industrial, Bulevar El Naranjo 16-61, Cdad. de Guatemala","phones":["2502-7050"],"email":"contacto.guatemala@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-guatemala.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30881.33176788943!2d-90.5543817869406!3d14.646489876089056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1d0337bd0cb%3A0xb2ab8a4de6a7dcc4!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611328904055!5m2!1ses!2sgt"},"+503":{"tab":"El Salvador","name":"Yummies El Salvador","address":"Dinant de El Salvador, S.A. de C.V., Bulevar del Ejercito Nacional, km 9 1/2, entrada Zona Franca San Bartolo, El Salvador","phones":["2510-8300"],"fax":"2295-8243","email":"contacto.elsalvador@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-elsalvador.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.322825230165!2d-89.11336908595418!3d13.698887490381667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6337c0d6561e95%3A0xa775fdc4c5061c7d!2sDinant%20de%20El%20Salvador%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2sgt!4v1611329118318!5m2!1ses!2sgt"},"+505":{"tab":"Nicaragua","name":"Yummies Nicaragua","address":"Corporación Dinant, 4RR2+R3W, Managua, Nicaragua","phones":["2251-4069","2251-4070"],"email":"contacto.nicaragua@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-nicaragua.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5572478066233!2d-86.20197198597542!3d12.142416891403649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fc23fb350063%3A0xe657362f6f7abec5!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329300767!5m2!1ses!2sgt"},"+506":{"tab":"Costa Rica","name":"Yummies Costa Rica","address":"Dinant Bodegas, VWFH+CJQ, San José, San Rafael Arriba de Desamparados, Costa Rica","phones":["2234-7363","2234-7259","2234-7482","2234-7044","2234-6490"],"email":"contacto.costarica@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-costarica.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.723068183398!2d-84.07309458600189!3d9.873585092937915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e2ec16f703c9%3A0x9608ff49efdf1534!2sDinant%20Bodegas!5e0!3m2!1ses!2sgt!4v1611329274006!5m2!1ses!2sgt"},"+1809":{"tab":"República Dominicana","name":"Yummies República Dominicana","address":"Corporación Dinant (Yummies), F2R8+G25, Santo Domingo 10408, República Dominicana","phones":["473-1212"],"email":"contacto.dominicana@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-dominicana.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.5395630179273!2d-69.98736948469208!3d18.49105258743799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzI3LjgiTiA2OcKwNTknMDUuMyJX!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"}}};
const contactEs = {
  title: title$1,
  description: description$1,
  form: form$1,
  offices: offices$1};

const title = "Contact Us";
const description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.";
const form = {"title":"Send us a message","contactReason":{"label":"Reason for contact"},"fullName":{"label":"Full Name","placeholder":"Enter your full name"},"email":{"label":"Email","placeholder":"your@email.com"},"phone":{"label":"Mobile Number","placeholder":"XXXXXXXX"},"submit":"Send"};
const offices = {"title":"Our Offices","locations":{"+504":{"tab":"Honduras","name":"Yummies Honduras","address":"Corporación Dinant, In front of Tropical Plants, Suyapa Blvd., 11101 Tegucigalpa, Francisco Morazán, Honduras","phones":["2275-3370","2239-5869","2235-7521"],"email":"contacto.honduras@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-honduras.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.703817626697!2d-87.20101878594838!3d14.094653490126237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2c8e9523aff%3A0x7ab9968369fb1370!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329011085!5m2!1ses!2sgt"},"+502":{"tab":"Guatemala","name":"Yummies Guatemala","address":"Corporación Dinant, 4 Industrial Complex, El Naranjo Blvd. 16-61, Guatemala City","phones":["2502-7050"],"email":"contacto.guatemala@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-guatemala.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30881.33176788943!2d-90.5543817869406!3d14.646489876089056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1d0337bd0cb%3A0xb2ab8a4de6a7dcc4!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611328904055!5m2!1ses!2sgt"},"+503":{"tab":"El Salvador","name":"Yummies El Salvador","address":"Dinant de El Salvador, S.A. de C.V., National Army Blvd., km 9 1/2, San Bartolo Free Zone entrance, El Salvador","phones":["2510-8300"],"fax":"2295-8243","email":"contacto.elsalvador@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-elsalvador.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.322825230165!2d-89.11336908595418!3d13.698887490381667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6337c0d6561e95%3A0xa775fdc4c5061c7d!2sDinant%20de%20El%20Salvador%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2sgt!4v1611329118318!5m2!1ses!2sgt"},"+505":{"tab":"Nicaragua","name":"Yummies Nicaragua","address":"Corporación Dinant, 4RR2+R3W, Managua, Nicaragua","phones":["2251-4069","2251-4070"],"email":"contacto.nicaragua@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-nicaragua.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5572478066233!2d-86.20197198597542!3d12.142416891403649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fc23fb350063%3A0xe657362f6f7abec5!2sCorporaci%C3%B3n%20Dinant!5e0!3m2!1ses!2sgt!4v1611329300767!5m2!1ses!2sgt"},"+506":{"tab":"Costa Rica","name":"Yummies Costa Rica","address":"Dinant Warehouses, VWFH+CJQ, San José, San Rafael Arriba de Desamparados, Costa Rica","phones":["2234-7363","2234-7259","2234-7482","2234-7044","2234-6490"],"email":"contacto.costarica@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-costarica.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.723068183398!2d-84.07309458600189!3d9.873585092937915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e2ec16f703c9%3A0x9608ff49efdf1534!2sDinant%20Bodegas!5e0!3m2!1ses!2sgt!4v1611329274006!5m2!1ses!2sgt"},"+1809":{"tab":"Dominican Republic","name":"Yummies Dominican Republic","address":"Corporacion Dinant (Yummies), F2R8+G25, Santo Domingo 10408, Dominican Republic","phones":["473-1212"],"email":"contacto.dominicana@yummies.com","image":"https://snack.yummiespromociones.com/SnacksyummiesAssets/oficina-dominicana.webp","mapEmbed":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.5395630179273!2d-69.98736948469208!3d18.49105258743799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzI3LjgiTiA2OcKwNTknMDUuMyJX!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"}}};
const contactEn = {
  title,
  description,
  form,
  offices};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://taqueritos.com");
const $$FormContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormContact;
  const { currentLang } = Astro2.props;
  const locale = currentLang || getLocale(Astro2.url);
  const contact = locale === "es" ? contactEs : contactEn;
  const countryLabel = locale === "es" ? "País" : "Country";
  const cityLabel = locale === "es" ? "Ciudad" : "City";
  const countryPlaceholder = locale === "es" ? "Selecciona tu país" : "Select your country";
  const departmentPlaceholder = locale === "es" ? "Primero selecciona un país" : "First select a country";
  const contactReasonPlaceholder = locale === "es" ? "Selecciona el tipo de consulta" : "Select the type of inquiry";
  const apiHost = "https://api-crm.yummiespromociones.com/api";
  const apiToken = "";
  const contactFormPath = "/api/v1/auth/email/custom";
  const dynamicLabels = {
    es: {
      clientCode: "CÓDIGO DE CLIENTE",
      areaOfInterest: "ÁREA DE INTERÉS",
      message: "MENSAJE",
      requestType: "TIPO DE SOLICITUD",
      interest: "INTERÉS",
      question: "PREGUNTA O SOLICITUD",
      comments: "COMENTARIOS",
      file: "ADJUNTAR ARCHIVO",
      fileHelp: "PDF, JPG, PNG (máx. 10MB)",
      areaOfInterestSupplier: "ÁREA DE INTERÉS",
      commentsEthics: "ESCRIBE TUS COMENTARIOS. SI ERES EMPLEADO DINANT ESPECIFICA TU CARGO"
    },
    en: {
      clientCode: "CLIENT CODE",
      areaOfInterest: "AREA OF INTEREST",
      message: "MESSAGE",
      requestType: "REQUEST TYPE",
      interest: "INTEREST",
      question: "QUESTION OR REQUEST",
      comments: "COMMENTS",
      file: "ATTACH FILE",
      fileHelp: "PDF, JPG, PNG (max. 10MB)",
      areaOfInterestSupplier: "AREA OF INTEREST",
      commentsEthics: "WRITE YOUR COMMENTS. IF YOU ARE A DINANT EMPLOYEE SPECIFY YOUR POSITION"
    }
  };
  const labels = dynamicLabels[locale];
  const dynamicOptions = {
    es: {
      clientAreaOfInterest: ["Sugerencias", "Consultas", "Reclamo"],
      requestTypes: ["Para consumo propio", "Pulpería", "Mini Mercado", "Abastecedor", "Otros"],
      exportInterests: ["Quiero ser distribuidor", "Deseo producto para consumo personal"],
      journalistAreas: ["Presidencia Ejecutiva", "Mercadeo", "Relaciones Corporativas"],
      contactReason: ["Soy cliente", "Quiero ser cliente", "Exportaciones", "Quiero ser proveedor", "Enviar Hoja de vida", "Soy Estudiante Universitario", "Soy Periodista/ Medio de comunicación", "Línea Ética YUMMIES", "Soy un ganador", "Otros"]
    },
    en: {
      clientAreaOfInterest: ["Suggestions", "Inquiries", "Complaint"],
      requestTypes: ["For personal consumption", "Small store", "Mini Market", "Supplier", "Others"],
      exportInterests: ["I want to be a distributor", "I want product for personal consumption"],
      journalistAreas: ["Executive Presidency", "Marketing", "Corporate Relations"],
      contactReason: ["I am a client", "I want to be a client", "Exports", "I want to be a supplier", "Send Resume", "I am a University Student", "I am a Journalist/Media", "YUMMIES Ethics Line", "", "Others"]
    }
  };
  const options = dynamicOptions[locale];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="bg-brown rounded-2xl p-8 border border-white/40" data-astro-cid-2vmb5dcw', '> <h2 class="text-white text-center md:text-2xl uppercase font-sans text-2xl font-bold mb-6" data-astro-cid-2vmb5dcw> ', ' </h2> <form class="space-y-6 shadow-md" id="contactForm" data-astro-cid-2vmb5dcw> <!-- Fila para Contact Reason y Country --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-2vmb5dcw> <!-- Contact Reason Dropdown --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <select name="contactReason" id="contactReasonSelect" required class="w-full font-semibold uppercase flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> <option value="" data-astro-cid-2vmb5dcw>', "</option> ", ' </select> </div> <!-- Country Selector --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <select name="country" id="countrySelect" required class="w-full font-semibold uppercase flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> <option value="" data-astro-cid-2vmb5dcw>', '</option> </select> </div> </div> <!-- Fila para City y Name --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-2vmb5dcw> <!-- City Selector --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <select name="city" id="departmentSelect" required disabled class="w-full font-semibold uppercase flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> <option value="" data-astro-cid-2vmb5dcw>', '</option> </select> </div> <!-- Name --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <input type="text" name="name" required', ' class="w-full font-semibold uppercase placeholder:text-white flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> </div> </div> <!-- Fila para Email y Phone --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-2vmb5dcw> <!-- Email --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <input type="email" name="email" required', ' class="w-full px-4 py-3 placeholder:text-white bg-brown text-white uppercase border-[1.5px] border-white rounded-full focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> </div> <!-- Phone --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' </label> <input type="number" name="phone"', ' class="w-full px-4 py-3 border-[1.5px] border-white rounded-full placeholder:text-white bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> </div> </div> <!-- Dynamic Fields Container --> <div id="dynamicFields" class="space-y-6" data-astro-cid-2vmb5dcw> <!-- Dynamic fields will be inserted here --> </div> <!-- Submit Button --> <div class="flex justify-center items-center" data-astro-cid-2vmb5dcw> <button type="submit" id="submitButton" class="w-full py-3 px-6 cta-button transition-all" data-astro-cid-2vmb5dcw> ', " </button> </div> </form> </div> <!-- Success Modal --> ", " <script>(function(){", `
  // Countries data
  const countriesData = {
    'Guatemala': [
      'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chimaltenango', 'Chiquimula',
      'El Progreso', 'Escuintla', 'Huehuetenango', 'Izabal', 'Jalapa',
      'Jutiapa', 'Petén', 'Quetzaltenango', 'Quiché', 'Retalhuleu',
      'Sacatepéquez', 'San Marcos', 'Santa Rosa', 'Sololá', 'Suchitepéquez',
      'Totonicapán', 'Zacapa'
    ],
    'El Salvador': [
      'Ahuachapán', 'Cabañas', 'Chalatenango', 'Cuscatlán', 'La Libertad',
      'La Paz', 'La Unión', 'Morazán', 'San Miguel', 'San Salvador',
      'San Vicente', 'Santa Ana', 'Sonsonate', 'Usulután'
    ],
    'Honduras': [
      'Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés',
      'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá',
      'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho',
      'Santa Bárbara', 'Valle', 'Yoro'
    ],
    'Nicaragua': [
      'Boaco', 'Carazo', 'Chinandega', 'Chontales', 'Estelí', 'Granada',
      'Jinotega', 'León', 'Madriz', 'Managua', 'Masaya', 'Matagalpa',
      'Nueva Segovia', 'Río San Juan', 'Rivas', 'Región Autónoma del Atlántico Norte',
      'Región Autónoma del Atlántico Sur'
    ],
    'Costa Rica': [
      'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'
    ],
    'República Dominicana': [
      'Distrito Nacional', 'Azua', 'Baoruco', 'Barahona', 'Dajabón', 'Duarte',
      'Elías Piña', 'El Seibo', 'Espaillat', 'Hato Mayor', 'Hermanas Mirabal',
      'Independencia', 'La Altagracia', 'La Romana', 'La Vega', 'María Trinidad Sánchez',
      'Monseñor Nouel', 'Monte Cristi', 'Monte Plata', 'Pedernales', 'Peravia',
      'Puerto Plata', 'Samaná', 'San Cristóbal', 'San José de Ocoa', 'San Juan',
      'San Pedro de Macorís', 'Sánchez Ramírez', 'Santiago', 'Santiago Rodríguez',
      'Santo Domingo', 'Valverde'
    ]
  };
  
  // Store default placeholders to restore when needed
  let defaultMessagePlaceholder = '';
  
  // Simple file validation function
  function validateFile(file) {
    if (file.size > 10 * 1024 * 1024) {
      return { valid: false, error: locale === 'es' ? 'El archivo debe ser menor a 10MB' : 'File must be smaller than 10MB' };
    }
    
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: locale === 'es' ? 'Solo se permiten archivos PDF, JPG y PNG' : 'Only PDF, JPG and PNG files are allowed' };
    }
    
    return { valid: true };
  }

  // Form submission function using the new API
  async function submitContactForm(formData) {
    try {
      // Handle "Enviar Hoja de vida" redirect case
      if (formData.contactReason === 'Enviar Hoja de vida') {
        window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
        return { success: true, message: 'Redirecting to careers page...' };
      }

      // Map contact reason to template
      function getTemplateByContactReason(contactReason) {
        const templateMap = {
          'Soy cliente': 'client',
          'Quiero ser cliente': 'ser_cliente',
          'Exportaciones': 'exportaciones',
          'Quiero ser proveedor': 'ser_proveedor',
          'Soy Estudiante Universitario': 'estudiante_universitario',
          'Soy Periodista/ Medio de comunicación': 'periodista_medio',
          'Línea Ética YUMMIES': 'linea_etica',
          'Otros': 'otros',
          'Soy un ganador': 'ganador'
        };
        
        return templateMap[contactReason] || 'otros';
      }

      // Validate file if present
      if (formData.file && formData.file instanceof File && formData.file.size > 0) {
        const fileValidation = validateFile(formData.file);
        if (!fileValidation.valid) {
          return {
            success: false,
            message: fileValidation.error || 'Invalid file'
          };
        }
      }

      // Create FormData for multipart submission
      const multipartData = new FormData();

      // Add template field based on contact reason
      const template = getTemplateByContactReason(formData.contactReason);
      multipartData.append('template', template);
      multipartData.append('site', "Taqueritos");
      
      // Winner-specific field formatting
      if (formData.contactReason === 'Soy un ganador') {
        if (formData.dynamicOrPromotion) {
          formData.dynamicOrPromotion = \`Dinámica o promoción: \${String(formData.dynamicOrPromotion)}\`;
        }
        if (formData.award) {
          formData.award = \`Premio adjudicado: \${String(formData.award)}\`;
        }
      }
      // Add all form fields according to the API structure
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'file' && value instanceof File) {
            // Add file with proper field name for attachments
            multipartData.append('attachments', value);
          } else {
            // Convert all other fields to string
            multipartData.append(key, String(value));
          }
        }
      });

      // Build full API URL
      const apiUrl = \`\${apiHost}\${contactFormPath}\`;

      console.log('Submitting contact form to:', apiUrl);
      console.log('Template for contact reason "' + formData.contactReason + '":', template);

      // Submit to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': apiToken
        },
        body: multipartData,
      });

      if (!response.ok) {
        let errorMessage = \`HTTP error! status: \${response.status}\`;
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || (locale === 'es' ? 'Formulario enviado exitosamente' : 'Form submitted successfully'),
        data: result.data
      };

    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : (locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form')
      };
    }
    
    // Winner-specific UI behaviors
    const phoneInput = document.querySelector('input[name="phone"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    if (contactReason === 'Soy un ganador') {
      if (phoneInput) {
        phoneInput.required = true;
      }
      if (messageTextarea) {
        messageTextarea.placeholder = 'Escribe la promoción en la que ganaste o detalla el premio que ganaste. Ej, PS5, giftcards, etc';
      }
    } else {
      if (phoneInput) {
        phoneInput.required = false;
      }
      if (messageTextarea) {
        messageTextarea.placeholder = defaultMessagePlaceholder;
      }
    }
  }

  // Initialize the form functionality
  function initFormFunctionality() {
    const contactReasonSelect = document.getElementById('contactReasonSelect');
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('departmentSelect');
    const dynamicFields = document.getElementById('dynamicFields');
    const form = document.getElementById('contactForm');

    // Debug: Check if elements exist
    console.log('Form elements found:', {
      contactReasonSelect: !!contactReasonSelect,
      countrySelect: !!countrySelect,
      citySelect: !!citySelect,
      dynamicFields: !!dynamicFields,
      form: !!form
    });

    // Debug: Check if variables are passed correctly
    console.log('Script variables:', { labels, options, locale, apiHost, apiToken, contactFormPath });

    // If any of the required elements are missing, exit early
    if (!contactReasonSelect || !countrySelect || !citySelect || !dynamicFields || !form) {
      console.error('Required form elements not found');
      return;
    }
    
    // Cache default message placeholder
    const baseMessageTextarea = document.querySelector('textarea[name="message"]');
    if (baseMessageTextarea) {
      defaultMessagePlaceholder = baseMessageTextarea.getAttribute('placeholder') || '';
    }
    
    // Populate countries
    if (countrySelect) {
      // Make sure we don't add duplicates
      if (countrySelect.options.length <= 1) {
        Object.keys(countriesData).forEach(country => {
          const option = document.createElement('option');
          option.value = country;
          option.textContent = country;
          countrySelect.appendChild(option);
        });
      }
    }

    // Handle contact reason change
    contactReasonSelect.onchange = function() {
      const selectedReason = this.value;
      console.log('Contact reason changed to:', selectedReason);
      updateDynamicFields(selectedReason);
    };

    // Handle country change
    countrySelect.onchange = function() {
      const selectedCountry = this.value;
      
      // Clear city options
      citySelect.innerHTML = \`<option value="">\${departmentPlaceholder}</option>\`;
      
      if (selectedCountry && countriesData[selectedCountry]) {
        // Enable city select
        citySelect.disabled = false;
        citySelect.classList.remove('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
        
        // Add cities for selected country
        countriesData[selectedCountry].forEach(function(city) {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      } else {
        // Disable city select if no country selected
        citySelect.disabled = true;
        citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
      }
    };

    // Handle form submission
    form.onsubmit = async function(e) {
      e.preventDefault();
      
      const submitButton = document.getElementById('submitButton');
      const originalText = submitButton ? submitButton.textContent : '';
      
      try {
        // Show loading state
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = locale === 'es' ? 'Enviando...' : 'Sending...';
        }
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Convert phone to number if present
        if (data.phone && data.phone !== '') {
          data.phone = Number(data.phone);
        }
        
        // Handle file upload
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files[0]) {
          data.file = fileInput.files[0];
        }
        
        console.log('Form data to submit:', data);
        
        // Submit form
        const result = await submitContactForm(data);
        
        if (result.success) {
          // Show success modal instead of alert
          if (window.showSuccessModal) {
            const successTitle = locale === 'es' ? '¡Gracias por tu mensaje!' : 'Thank you for your message!';
            const successMessage = locale === 'es' ? 'Hemos recibido tu información. Te contactaremos pronto.' : 'We have received your information. We will contact you soon.';
            window.showSuccessModal(successMessage, successTitle);
          } else {
            // Fallback to alert if modal function not available
            alert(locale === 'es' ? '¡Gracias por tu mensaje! Te contactaremos pronto.' : 'Thank you for your message! We will contact you soon.');
          }
          
          // Reset form
          this.reset();
          if (citySelect) {
            citySelect.disabled = true;
            citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
            citySelect.innerHTML = \`<option value="">\${departmentPlaceholder}</option>\`;
          }
          if (dynamicFields) {
            dynamicFields.innerHTML = '';
          }
        } else {
          // Show error message
          alert(result.message);
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert(locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form');
      } finally {
        // Restore button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    };
    
    // Initialize dynamic fields with default contact reason if selected
    if (contactReasonSelect.value) {
      updateDynamicFields(contactReasonSelect.value);
    }
  }

  // Initialize on DOMContentLoaded (initial page load)
  document.addEventListener('DOMContentLoaded', initFormFunctionality);
  
  // Also initialize on astro:page-load (for client-side navigation)
  document.addEventListener('astro:page-load', initFormFunctionality);

  // Function to update dynamic fields based on contact reason
  function updateDynamicFields(contactReason) {
    if (!dynamicFields) {
      console.error('Dynamic fields container not found');
      return;
    }
    
    console.log('Updating dynamic fields for reason:', contactReason);
    
    // Clear existing dynamic fields
    dynamicFields.innerHTML = '';
    
    // Handle redirect case
    if (contactReason === 'Enviar Hoja de vida') {
      window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
      return;
    }
    
    // Create dynamic fields based on contact reason
    switch (contactReason) {
      case 'Soy cliente':
        createClientFields();
        break;
      case 'Quiero ser cliente':
        createProspectiveClientFields();
        break;
      case 'Exportaciones':
        createExportsFields();
        break;
      case 'Quiero ser proveedor':
        createSupplierFields();
        break;
      case 'Soy Estudiante Universitario':
        createStudentFields();
        break;
      case 'Soy Periodista/ Medio de comunicación':
        createJournalistFields();
        break;
      case 'Línea Ética YUMMIES':
        createEthicsLineFields();
        break;
      case 'Soy un ganador':
        createWinnerFields();
        break;
      case 'Otros':
        createOthersFields();
        break;
      default:
        console.log('No specific fields for reason:', contactReason);
    }
  }

  // Field creation functions
  function createClientFields() {
    if (!labels || !options) {
      console.error('Labels or options not available');
      return;
    }
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.clientCode}</label>
        <input type="text" name="clientCode" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.areaOfInterest} *</label>
        <select name="interestArea" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.clientAreaOfInterest.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createProspectiveClientFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.requestType} *</label>
        <select name="requestType" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.requestTypes.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createExportsFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.interest} *</label>
        <select name="interest" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.exportInterests.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
    \`;
  }

  function createSupplierFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.areaOfInterestSupplier} *</label>
        <input type="text" name="areaOfInterest" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createStudentFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createJournalistFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.areaOfInterest} *</label>
        <select name="areaOfInterest" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \${options.journalistAreas.map(option => \`<option value="\${option}">\${option}</option>\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
    \`;
  }

  function createEthicsLineFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.comments || 'Comentarios'} *</label>
        <textarea name="message" required rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
        <p class="text-sm text-white mt-1">\${labels.ethicsLineHelp || 'Si eres empleado Dinant, especifica tu cargo.'}</p>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file || 'Adjuntar archivo'}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp || 'Formatos permitidos: PDF, JPG, PNG (max 10MB)'}</p>
      </div>
    \`;
  }
  
  function createWinnerFields() {
    if (!labels) return;
    
    // Solo disponible en español
    if (locale !== 'es') {
      dynamicFields.innerHTML = \`
        <div class="alert alert-info">
          <p>Esta opción solo está disponible en español.</p>
        </div>
      \`;
      return;
    }
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">Dinámica o promoción en la que ganó *</label>
        <input type="text" name="dynamicOrPromotion" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">Premio adjudicado *</label>
        <input type="text" name="award" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }

  function createOthersFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \`
      <div>
        <label class="block text-white font-medium mb-2">\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\${labels.fileHelp}</p>
      </div>
    \`;
  }
})();</script>`], ["", '<div class="bg-brown rounded-2xl p-8 border border-white/40" data-astro-cid-2vmb5dcw', '> <h2 class="text-white text-center md:text-2xl uppercase font-sans text-2xl font-bold mb-6" data-astro-cid-2vmb5dcw> ', ' </h2> <form class="space-y-6 shadow-md" id="contactForm" data-astro-cid-2vmb5dcw> <!-- Fila para Contact Reason y Country --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-2vmb5dcw> <!-- Contact Reason Dropdown --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <select name="contactReason" id="contactReasonSelect" required class="w-full font-semibold uppercase flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> <option value="" data-astro-cid-2vmb5dcw>', "</option> ", ' </select> </div> <!-- Country Selector --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <select name="country" id="countrySelect" required class="w-full font-semibold uppercase flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> <option value="" data-astro-cid-2vmb5dcw>', '</option> </select> </div> </div> <!-- Fila para City y Name --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-2vmb5dcw> <!-- City Selector --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <select name="city" id="departmentSelect" required disabled class="w-full font-semibold uppercase flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> <option value="" data-astro-cid-2vmb5dcw>', '</option> </select> </div> <!-- Name --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <input type="text" name="name" required', ' class="w-full font-semibold uppercase placeholder:text-white flex justify-center text-white items-center gap-5 p-[15px_20px] border-[1.5px] border-white rounded-full bg-brown focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> </div> </div> <!-- Fila para Email y Phone --> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-2vmb5dcw> <!-- Email --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' *\n</label> <input type="email" name="email" required', ' class="w-full px-4 py-3 placeholder:text-white bg-brown text-white uppercase border-[1.5px] border-white rounded-full focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> </div> <!-- Phone --> <div class="flex-1" data-astro-cid-2vmb5dcw> <label class="block text-white uppercase font-semibold  mb-2" data-astro-cid-2vmb5dcw> ', ' </label> <input type="number" name="phone"', ' class="w-full px-4 py-3 border-[1.5px] border-white rounded-full placeholder:text-white bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" data-astro-cid-2vmb5dcw> </div> </div> <!-- Dynamic Fields Container --> <div id="dynamicFields" class="space-y-6" data-astro-cid-2vmb5dcw> <!-- Dynamic fields will be inserted here --> </div> <!-- Submit Button --> <div class="flex justify-center items-center" data-astro-cid-2vmb5dcw> <button type="submit" id="submitButton" class="w-full py-3 px-6 cta-button transition-all" data-astro-cid-2vmb5dcw> ', " </button> </div> </form> </div> <!-- Success Modal --> ", " <script>(function(){", `
  // Countries data
  const countriesData = {
    'Guatemala': [
      'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chimaltenango', 'Chiquimula',
      'El Progreso', 'Escuintla', 'Huehuetenango', 'Izabal', 'Jalapa',
      'Jutiapa', 'Petén', 'Quetzaltenango', 'Quiché', 'Retalhuleu',
      'Sacatepéquez', 'San Marcos', 'Santa Rosa', 'Sololá', 'Suchitepéquez',
      'Totonicapán', 'Zacapa'
    ],
    'El Salvador': [
      'Ahuachapán', 'Cabañas', 'Chalatenango', 'Cuscatlán', 'La Libertad',
      'La Paz', 'La Unión', 'Morazán', 'San Miguel', 'San Salvador',
      'San Vicente', 'Santa Ana', 'Sonsonate', 'Usulután'
    ],
    'Honduras': [
      'Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés',
      'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá',
      'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho',
      'Santa Bárbara', 'Valle', 'Yoro'
    ],
    'Nicaragua': [
      'Boaco', 'Carazo', 'Chinandega', 'Chontales', 'Estelí', 'Granada',
      'Jinotega', 'León', 'Madriz', 'Managua', 'Masaya', 'Matagalpa',
      'Nueva Segovia', 'Río San Juan', 'Rivas', 'Región Autónoma del Atlántico Norte',
      'Región Autónoma del Atlántico Sur'
    ],
    'Costa Rica': [
      'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'
    ],
    'República Dominicana': [
      'Distrito Nacional', 'Azua', 'Baoruco', 'Barahona', 'Dajabón', 'Duarte',
      'Elías Piña', 'El Seibo', 'Espaillat', 'Hato Mayor', 'Hermanas Mirabal',
      'Independencia', 'La Altagracia', 'La Romana', 'La Vega', 'María Trinidad Sánchez',
      'Monseñor Nouel', 'Monte Cristi', 'Monte Plata', 'Pedernales', 'Peravia',
      'Puerto Plata', 'Samaná', 'San Cristóbal', 'San José de Ocoa', 'San Juan',
      'San Pedro de Macorís', 'Sánchez Ramírez', 'Santiago', 'Santiago Rodríguez',
      'Santo Domingo', 'Valverde'
    ]
  };
  
  // Store default placeholders to restore when needed
  let defaultMessagePlaceholder = '';
  
  // Simple file validation function
  function validateFile(file) {
    if (file.size > 10 * 1024 * 1024) {
      return { valid: false, error: locale === 'es' ? 'El archivo debe ser menor a 10MB' : 'File must be smaller than 10MB' };
    }
    
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: locale === 'es' ? 'Solo se permiten archivos PDF, JPG y PNG' : 'Only PDF, JPG and PNG files are allowed' };
    }
    
    return { valid: true };
  }

  // Form submission function using the new API
  async function submitContactForm(formData) {
    try {
      // Handle "Enviar Hoja de vida" redirect case
      if (formData.contactReason === 'Enviar Hoja de vida') {
        window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
        return { success: true, message: 'Redirecting to careers page...' };
      }

      // Map contact reason to template
      function getTemplateByContactReason(contactReason) {
        const templateMap = {
          'Soy cliente': 'client',
          'Quiero ser cliente': 'ser_cliente',
          'Exportaciones': 'exportaciones',
          'Quiero ser proveedor': 'ser_proveedor',
          'Soy Estudiante Universitario': 'estudiante_universitario',
          'Soy Periodista/ Medio de comunicación': 'periodista_medio',
          'Línea Ética YUMMIES': 'linea_etica',
          'Otros': 'otros',
          'Soy un ganador': 'ganador'
        };
        
        return templateMap[contactReason] || 'otros';
      }

      // Validate file if present
      if (formData.file && formData.file instanceof File && formData.file.size > 0) {
        const fileValidation = validateFile(formData.file);
        if (!fileValidation.valid) {
          return {
            success: false,
            message: fileValidation.error || 'Invalid file'
          };
        }
      }

      // Create FormData for multipart submission
      const multipartData = new FormData();

      // Add template field based on contact reason
      const template = getTemplateByContactReason(formData.contactReason);
      multipartData.append('template', template);
      multipartData.append('site', "Taqueritos");
      
      // Winner-specific field formatting
      if (formData.contactReason === 'Soy un ganador') {
        if (formData.dynamicOrPromotion) {
          formData.dynamicOrPromotion = \\\`Dinámica o promoción: \\\${String(formData.dynamicOrPromotion)}\\\`;
        }
        if (formData.award) {
          formData.award = \\\`Premio adjudicado: \\\${String(formData.award)}\\\`;
        }
      }
      // Add all form fields according to the API structure
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (key === 'file' && value instanceof File) {
            // Add file with proper field name for attachments
            multipartData.append('attachments', value);
          } else {
            // Convert all other fields to string
            multipartData.append(key, String(value));
          }
        }
      });

      // Build full API URL
      const apiUrl = \\\`\\\${apiHost}\\\${contactFormPath}\\\`;

      console.log('Submitting contact form to:', apiUrl);
      console.log('Template for contact reason "' + formData.contactReason + '":', template);

      // Submit to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': apiToken
        },
        body: multipartData,
      });

      if (!response.ok) {
        let errorMessage = \\\`HTTP error! status: \\\${response.status}\\\`;
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      return {
        success: true,
        message: result.message || (locale === 'es' ? 'Formulario enviado exitosamente' : 'Form submitted successfully'),
        data: result.data
      };

    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : (locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form')
      };
    }
    
    // Winner-specific UI behaviors
    const phoneInput = document.querySelector('input[name="phone"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    if (contactReason === 'Soy un ganador') {
      if (phoneInput) {
        phoneInput.required = true;
      }
      if (messageTextarea) {
        messageTextarea.placeholder = 'Escribe la promoción en la que ganaste o detalla el premio que ganaste. Ej, PS5, giftcards, etc';
      }
    } else {
      if (phoneInput) {
        phoneInput.required = false;
      }
      if (messageTextarea) {
        messageTextarea.placeholder = defaultMessagePlaceholder;
      }
    }
  }

  // Initialize the form functionality
  function initFormFunctionality() {
    const contactReasonSelect = document.getElementById('contactReasonSelect');
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('departmentSelect');
    const dynamicFields = document.getElementById('dynamicFields');
    const form = document.getElementById('contactForm');

    // Debug: Check if elements exist
    console.log('Form elements found:', {
      contactReasonSelect: !!contactReasonSelect,
      countrySelect: !!countrySelect,
      citySelect: !!citySelect,
      dynamicFields: !!dynamicFields,
      form: !!form
    });

    // Debug: Check if variables are passed correctly
    console.log('Script variables:', { labels, options, locale, apiHost, apiToken, contactFormPath });

    // If any of the required elements are missing, exit early
    if (!contactReasonSelect || !countrySelect || !citySelect || !dynamicFields || !form) {
      console.error('Required form elements not found');
      return;
    }
    
    // Cache default message placeholder
    const baseMessageTextarea = document.querySelector('textarea[name="message"]');
    if (baseMessageTextarea) {
      defaultMessagePlaceholder = baseMessageTextarea.getAttribute('placeholder') || '';
    }
    
    // Populate countries
    if (countrySelect) {
      // Make sure we don't add duplicates
      if (countrySelect.options.length <= 1) {
        Object.keys(countriesData).forEach(country => {
          const option = document.createElement('option');
          option.value = country;
          option.textContent = country;
          countrySelect.appendChild(option);
        });
      }
    }

    // Handle contact reason change
    contactReasonSelect.onchange = function() {
      const selectedReason = this.value;
      console.log('Contact reason changed to:', selectedReason);
      updateDynamicFields(selectedReason);
    };

    // Handle country change
    countrySelect.onchange = function() {
      const selectedCountry = this.value;
      
      // Clear city options
      citySelect.innerHTML = \\\`<option value="">\\\${departmentPlaceholder}</option>\\\`;
      
      if (selectedCountry && countriesData[selectedCountry]) {
        // Enable city select
        citySelect.disabled = false;
        citySelect.classList.remove('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
        
        // Add cities for selected country
        countriesData[selectedCountry].forEach(function(city) {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      } else {
        // Disable city select if no country selected
        citySelect.disabled = true;
        citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
      }
    };

    // Handle form submission
    form.onsubmit = async function(e) {
      e.preventDefault();
      
      const submitButton = document.getElementById('submitButton');
      const originalText = submitButton ? submitButton.textContent : '';
      
      try {
        // Show loading state
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = locale === 'es' ? 'Enviando...' : 'Sending...';
        }
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Convert phone to number if present
        if (data.phone && data.phone !== '') {
          data.phone = Number(data.phone);
        }
        
        // Handle file upload
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files[0]) {
          data.file = fileInput.files[0];
        }
        
        console.log('Form data to submit:', data);
        
        // Submit form
        const result = await submitContactForm(data);
        
        if (result.success) {
          // Show success modal instead of alert
          if (window.showSuccessModal) {
            const successTitle = locale === 'es' ? '¡Gracias por tu mensaje!' : 'Thank you for your message!';
            const successMessage = locale === 'es' ? 'Hemos recibido tu información. Te contactaremos pronto.' : 'We have received your information. We will contact you soon.';
            window.showSuccessModal(successMessage, successTitle);
          } else {
            // Fallback to alert if modal function not available
            alert(locale === 'es' ? '¡Gracias por tu mensaje! Te contactaremos pronto.' : 'Thank you for your message! We will contact you soon.');
          }
          
          // Reset form
          this.reset();
          if (citySelect) {
            citySelect.disabled = true;
            citySelect.classList.add('disabled:bg-gray-100', 'disabled:cursor-not-allowed');
            citySelect.innerHTML = \\\`<option value="">\\\${departmentPlaceholder}</option>\\\`;
          }
          if (dynamicFields) {
            dynamicFields.innerHTML = '';
          }
        } else {
          // Show error message
          alert(result.message);
        }
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert(locale === 'es' ? 'Error al enviar el formulario' : 'Error sending form');
      } finally {
        // Restore button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    };
    
    // Initialize dynamic fields with default contact reason if selected
    if (contactReasonSelect.value) {
      updateDynamicFields(contactReasonSelect.value);
    }
  }

  // Initialize on DOMContentLoaded (initial page load)
  document.addEventListener('DOMContentLoaded', initFormFunctionality);
  
  // Also initialize on astro:page-load (for client-side navigation)
  document.addEventListener('astro:page-load', initFormFunctionality);

  // Function to update dynamic fields based on contact reason
  function updateDynamicFields(contactReason) {
    if (!dynamicFields) {
      console.error('Dynamic fields container not found');
      return;
    }
    
    console.log('Updating dynamic fields for reason:', contactReason);
    
    // Clear existing dynamic fields
    dynamicFields.innerHTML = '';
    
    // Handle redirect case
    if (contactReason === 'Enviar Hoja de vida') {
      window.location.href = 'https://www.dinant.com/buscamos-talento-como-tu/';
      return;
    }
    
    // Create dynamic fields based on contact reason
    switch (contactReason) {
      case 'Soy cliente':
        createClientFields();
        break;
      case 'Quiero ser cliente':
        createProspectiveClientFields();
        break;
      case 'Exportaciones':
        createExportsFields();
        break;
      case 'Quiero ser proveedor':
        createSupplierFields();
        break;
      case 'Soy Estudiante Universitario':
        createStudentFields();
        break;
      case 'Soy Periodista/ Medio de comunicación':
        createJournalistFields();
        break;
      case 'Línea Ética YUMMIES':
        createEthicsLineFields();
        break;
      case 'Soy un ganador':
        createWinnerFields();
        break;
      case 'Otros':
        createOthersFields();
        break;
      default:
        console.log('No specific fields for reason:', contactReason);
    }
  }

  // Field creation functions
  function createClientFields() {
    if (!labels || !options) {
      console.error('Labels or options not available');
      return;
    }
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.clientCode}</label>
        <input type="text" name="clientCode" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.areaOfInterest} *</label>
        <select name="interestArea" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.clientAreaOfInterest.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createProspectiveClientFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.requestType} *</label>
        <select name="requestType" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.requestTypes.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createExportsFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.interest} *</label>
        <select name="interest" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.exportInterests.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
    \\\`;
  }

  function createSupplierFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.areaOfInterestSupplier} *</label>
        <input type="text" name="areaOfInterest" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createStudentFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createJournalistFields() {
    if (!labels || !options) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.areaOfInterest} *</label>
        <select name="areaOfInterest" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
          <option value="">\\\${locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
          \\\${options.journalistAreas.map(option => \\\`<option value="\\\${option}">\\\${option}</option>\\\`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.question} *</label>
        <textarea name="question" required rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
    \\\`;
  }

  function createEthicsLineFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.comments || 'Comentarios'} *</label>
        <textarea name="message" required rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
        <p class="text-sm text-white mt-1">\\\${labels.ethicsLineHelp || 'Si eres empleado Dinant, especifica tu cargo.'}</p>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file || 'Adjuntar archivo'}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp || 'Formatos permitidos: PDF, JPG, PNG (max 10MB)'}</p>
      </div>
    \\\`;
  }
  
  function createWinnerFields() {
    if (!labels) return;
    
    // Solo disponible en español
    if (locale !== 'es') {
      dynamicFields.innerHTML = \\\`
        <div class="alert alert-info">
          <p>Esta opción solo está disponible en español.</p>
        </div>
      \\\`;
      return;
    }
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">Dinámica o promoción en la que ganó *</label>
        <input type="text" name="dynamicOrPromotion" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">Premio adjudicado *</label>
        <input type="text" name="award" required class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }

  function createOthersFields() {
    if (!labels) return;
    
    dynamicFields.innerHTML = \\\`
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.message}</label>
        <textarea name="message" rows="4" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
      </div>
      <div>
        <label class="block text-white font-medium mb-2">\\\${labels.file}</label>
        <input type="file" name="file" accept=".pdf,.jpg,.jpeg,.png" class="w-full px-4 py-3 border-[1.5px] border-white rounded-lg bg-brown text-white focus:text-black focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
        <p class="text-sm text-white mt-1">\\\${labels.fileHelp}</p>
      </div>
    \\\`;
  }
})();</script>`])), maybeRenderHead(), addAttribute(renderTransition($$result, "otylsw3w", "", "contact-form"), "data-astro-transition-scope"), contact.form.title, contact.form.contactReason.label, contactReasonPlaceholder, locale === "es" ? (
    // En español, mostrar todas las opciones incluido "Soy un ganador"
    dynamicOptions.es.contactReason.map((reason) => renderTemplate`<option${addAttribute(reason, "value")} data-astro-cid-2vmb5dcw>${reason}</option>`)
  ) : (
    // En inglés, mostrar solo las opciones que tienen texto (filtrar vacías)
    dynamicOptions.en.contactReason.map((reason, index) => {
      if (reason) {
        return renderTemplate`<option${addAttribute(dynamicOptions.es.contactReason[index], "value")} data-astro-cid-2vmb5dcw>${reason}</option>`;
      }
      return null;
    })
  ), countryLabel, countryPlaceholder, cityLabel, departmentPlaceholder, contact.form.fullName.label, addAttribute(contact.form.fullName.placeholder, "placeholder"), contact.form.email.label, addAttribute(contact.form.email.placeholder, "placeholder"), contact.form.phone.label, addAttribute(contact.form.phone.placeholder, "placeholder"), contact.form.submit, renderComponent($$result, "SuccessModal", $$SuccessModal, { "title": locale === "es" ? "¡Gracias por contactarnos!" : "Thank you for contacting us!", "message": locale === "es" ? "Hemos recibido tu mensaje. Te contactaremos pronto." : "We have received your message. We will contact you soon.", "buttonText": locale === "es" ? "Cerrar" : "Close", "data-astro-cid-2vmb5dcw": true }), defineScriptVars({ departmentPlaceholder, countryPlaceholder, labels, options, locale, apiHost, apiToken, contactFormPath }));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/contact/FormContact.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const locale = currentLang || getLocale();
  const contact = locale === "es" ? contactEs : contactEn;
  const title = contact.title;
  const metaDescription = contact.description;
  console.log("headerColorConfig in Contact:", headerColorConfig);
  const headerColors = {
    backgroundColor: "red",
    textColor: "#FFFFFF"
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "class": "bg-brown", "description": metaDescription, "headerColorConfig": headerColors }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class=" w-[100%] mx-auto  lg:py-24"> <!-- Main Contact Section --> <div class="flex flex-col justify-center px-4 items-start lg:flex-row gap-12 py-32 bg-dark-spotlight"> <!-- Left Column - Contact Info --> <div class="w-[100%] lg:w-[40%] pl-8 lg:pl-16 flex flex-col justify-center h-[100%] lg:h-[600px]"> <h1 class="text-white font-title text-4xl md:text-6xl lg:text-7xl uppercase font-bold mb-6"> ', ' </h1> <p class="text-white font-bold text-base md:text-xl lg:text-2xl mb-8 leading-relaxed "> ', ' </p> </div> <!-- Right Column - Contact Form --> <div class="w-[100%] lg:w-[40%]"> ', ' </div> </div> <!-- Offices Section --> <div class="mx-auto p-8"> <h3 class="text-white text-2xl md:text-4xl italic font-title uppercase font-bold mb-4 flex items-center justify-center gap-1"> <span class="font-title">', " ", '</span> </h3> <h1 class="text-white text-5xl md:text-7xl lg:text-9xl italic font-title uppercase font-bold mb-4 flex items-center justify-center gap-1"> <span class="font-title">', '</span> </h1> <!-- Tabs and Office Info --> <div class="flex flex-col items-center mb-4"> <!-- Map and Tabs --> <div class="w-full lg:w-[80%] mt-4 flex flex-col items-center"> <div class="w-full lg:w-[80%]"> <!-- Country Tabs --> <div class="mb-6 flex flex-wrap gap-2 justify-center lg:justify-between"> ', ' </div> <!-- Map --> <div class="rounded-2xl p-6 shadow-lg mb-4 bg-white border-[3px] border-[#FF0000]"> <div class="w-full overflow-hidden rounded-xl" style="height: 500px;"> <!-- Container for all map iframes --> <div id="maps-container" style="width: 100%; height: 100%;"> ', ' </div> </div> </div> </div> <!-- Office Details --> <div class="w-full lg:w-[80%] mx-auto mt-8"> <div id="officeInfo" class="rounded-2xl p-8 "> <div class="flex flex-col lg:flex-row justify-between items-center"> <div class="space-y-4"> <h3 id="officeName" class="text-white font-sans text-4xl md:text-6xl lg:text-7xl uppercase font-extrabold mb-4"> ', ' </h3> <div class="flex items-start space-x-3"> <p id="officeAddress" class="text-white leading-relaxed font-semibold "> ', '</p> </div> <div class="flex items-center space-x-3"> <div id="officePhones" class="flex flex-col text-white"> ', ' </div> </div> <!-- <div class="flex items-center space-x-3">\n                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\n                  </svg>\n                  <a id="officeEmail" href={`mailto:${contact.offices.locations["+504"].email}`} class="text-primary hover:text-secondary transition-colors">\n                    {contact.offices.locations["+504"].email}\n                  </a>\n                </div> --> </div> <div class="mt-6 lg:mt-0"> ', " </div> </div> </div> </div> </div> </div> <script>(function(){", "\n      // Funci\xF3n que se ejecutar\xE1 cuando el DOM est\xE9 listo o cuando se llame manualmente\n      function initializeCountryTabs() {\n        // Get references to all elements that need to be updated\n        const tabs = document.querySelectorAll('.country-tab');\n        const officeName = document.getElementById('officeName');\n        const officeAddress = document.getElementById('officeAddress');\n        const officePhones = document.getElementById('officePhones');\n        const officeEmail = document.getElementById('officeEmail');\n        const officeImage = document.getElementById('officeImage');\n        \n        // Get all map containers\n        const mapContainers = document.querySelectorAll('[data-map-country]');\n        \n        // Contact data is directly available from Astro's define:vars\n        const contactData = contactLocations;\n        \n        // For debugging\n        console.log('Contact locations:', contactData);\n        console.log('Tabs found:', tabs.length);\n        console.log('Map containers found:', mapContainers.length);\n        \n        // Function to update office information\n        function updateOfficeInfo(countryCode) {\n          console.log('Updating office for:', countryCode);\n          const office = contactData[countryCode];\n          \n          if (!office) {\n            console.error('No office data found for', countryCode);\n            return;\n          }\n          \n          console.log('Office data:', office);\n          \n          // Update text content and attributes\n          if (officeName) officeName.textContent = office.name;\n          if (officeAddress) officeAddress.textContent = `+ ${office.address}`;\n          \n          // Update phone numbers\n          if (officePhones) {\n            officePhones.innerHTML = '';\n            \n            // Luego a\xF1adir los tel\xE9fonos\n            office.phones.forEach(phone => {\n              const phoneContainer = document.createElement('div');\n              const phoneLink = document.createElement('a');\n              phoneLink.href = `tel:${phone}`;\n              phoneLink.textContent = `+${phone}`;\n              phoneLink.className = 'text-white hover:text-primary font-medium font-semibold transition-colors';\n              phoneContainer.appendChild(phoneLink);\n              officePhones.appendChild(phoneContainer);\n            });\n          }\n          \n          // Update email\n          if (officeEmail) {\n            officeEmail.href = `mailto:${office.email}`;\n            officeEmail.textContent = office.email;\n          }\n          \n          // Update image\n          if (officeImage instanceof HTMLImageElement) {\n            officeImage.src = office.image;\n            officeImage.alt = office.name;\n          }\n          \n          // Update map iframe visibility\n          console.log('Updating map visibility for country:', countryCode);\n          \n          // First hide all maps\n          mapContainers.forEach(container => {\n            container.style.display = 'none';\n          });\n          \n          // Then show the selected one\n          const selectedMap = document.querySelector(`[data-map-country=\"${countryCode}\"]`);\n          if (selectedMap) {\n            selectedMap.style.display = 'block';\n            console.log('Showing map container:', countryCode);\n          } else {\n            console.error('No map container found for country code:', countryCode);\n          }\n        }\n        \n        // Function to handle tab selection\n        function handleTabSelection(tab) {\n          tabs.forEach(t => {\n            t.classList.remove('is-active');\n          });\n\n          tab.classList.add('is-active');\n\n          // Update office info based on country code\n          const countryCode = tab.getAttribute('data-country-code');\n          if (countryCode) {\n            updateOfficeInfo(countryCode);\n          }\n        }\n        \n        // Add click and touch event listeners to tabs for better mobile compatibility\n        tabs.forEach(tab => {\n          // Funci\xF3n para manejar ambos tipos de eventos\n          const handleEvent = (e) => {\n            e.preventDefault();\n            console.log('Tab interaction:', tab.getAttribute('data-country-code'));\n            handleTabSelection(tab);\n          };\n          \n          // Agregar m\xFAltiples listeners para mayor compatibilidad\n          tab.addEventListener('click', handleEvent);\n          tab.addEventListener('touchend', handleEvent);\n        });\n        \n        // Initialize with first country\n        if (tabs.length > 0) {\n          handleTabSelection(tabs[0]);\n        }\n      }\n      \n      // Intentar inicializar inmediatamente\n      if (document.readyState === 'loading') {\n        // Si el documento a\xFAn se est\xE1 cargando, esperar al evento DOMContentLoaded\n        document.addEventListener('DOMContentLoaded', initializeCountryTabs);\n      } else {\n        // Si el documento ya est\xE1 cargado, ejecutar inmediatamente\n        initializeCountryTabs();\n      }\n      \n      // Como respaldo, intentar inicializar despu\xE9s de un breve retraso\n      // para asegurarnos de que todo est\xE9 correctamente cargado\n      setTimeout(initializeCountryTabs, 500);\n    })();<\/script> </div> </div>"], [" ", '<div class=" w-[100%] mx-auto  lg:py-24"> <!-- Main Contact Section --> <div class="flex flex-col justify-center px-4 items-start lg:flex-row gap-12 py-32 bg-dark-spotlight"> <!-- Left Column - Contact Info --> <div class="w-[100%] lg:w-[40%] pl-8 lg:pl-16 flex flex-col justify-center h-[100%] lg:h-[600px]"> <h1 class="text-white font-title text-4xl md:text-6xl lg:text-7xl uppercase font-bold mb-6"> ', ' </h1> <p class="text-white font-bold text-base md:text-xl lg:text-2xl mb-8 leading-relaxed "> ', ' </p> </div> <!-- Right Column - Contact Form --> <div class="w-[100%] lg:w-[40%]"> ', ' </div> </div> <!-- Offices Section --> <div class="mx-auto p-8"> <h3 class="text-white text-2xl md:text-4xl italic font-title uppercase font-bold mb-4 flex items-center justify-center gap-1"> <span class="font-title">', " ", '</span> </h3> <h1 class="text-white text-5xl md:text-7xl lg:text-9xl italic font-title uppercase font-bold mb-4 flex items-center justify-center gap-1"> <span class="font-title">', '</span> </h1> <!-- Tabs and Office Info --> <div class="flex flex-col items-center mb-4"> <!-- Map and Tabs --> <div class="w-full lg:w-[80%] mt-4 flex flex-col items-center"> <div class="w-full lg:w-[80%]"> <!-- Country Tabs --> <div class="mb-6 flex flex-wrap gap-2 justify-center lg:justify-between"> ', ' </div> <!-- Map --> <div class="rounded-2xl p-6 shadow-lg mb-4 bg-white border-[3px] border-[#FF0000]"> <div class="w-full overflow-hidden rounded-xl" style="height: 500px;"> <!-- Container for all map iframes --> <div id="maps-container" style="width: 100%; height: 100%;"> ', ' </div> </div> </div> </div> <!-- Office Details --> <div class="w-full lg:w-[80%] mx-auto mt-8"> <div id="officeInfo" class="rounded-2xl p-8 "> <div class="flex flex-col lg:flex-row justify-between items-center"> <div class="space-y-4"> <h3 id="officeName" class="text-white font-sans text-4xl md:text-6xl lg:text-7xl uppercase font-extrabold mb-4"> ', ' </h3> <div class="flex items-start space-x-3"> <p id="officeAddress" class="text-white leading-relaxed font-semibold "> ', '</p> </div> <div class="flex items-center space-x-3"> <div id="officePhones" class="flex flex-col text-white"> ', ' </div> </div> <!-- <div class="flex items-center space-x-3">\n                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\n                  </svg>\n                  <a id="officeEmail" href={\\`mailto:\\${contact.offices.locations["+504"].email}\\`} class="text-primary hover:text-secondary transition-colors">\n                    {contact.offices.locations["+504"].email}\n                  </a>\n                </div> --> </div> <div class="mt-6 lg:mt-0"> ', " </div> </div> </div> </div> </div> </div> <script>(function(){", "\n      // Funci\xF3n que se ejecutar\xE1 cuando el DOM est\xE9 listo o cuando se llame manualmente\n      function initializeCountryTabs() {\n        // Get references to all elements that need to be updated\n        const tabs = document.querySelectorAll('.country-tab');\n        const officeName = document.getElementById('officeName');\n        const officeAddress = document.getElementById('officeAddress');\n        const officePhones = document.getElementById('officePhones');\n        const officeEmail = document.getElementById('officeEmail');\n        const officeImage = document.getElementById('officeImage');\n        \n        // Get all map containers\n        const mapContainers = document.querySelectorAll('[data-map-country]');\n        \n        // Contact data is directly available from Astro's define:vars\n        const contactData = contactLocations;\n        \n        // For debugging\n        console.log('Contact locations:', contactData);\n        console.log('Tabs found:', tabs.length);\n        console.log('Map containers found:', mapContainers.length);\n        \n        // Function to update office information\n        function updateOfficeInfo(countryCode) {\n          console.log('Updating office for:', countryCode);\n          const office = contactData[countryCode];\n          \n          if (!office) {\n            console.error('No office data found for', countryCode);\n            return;\n          }\n          \n          console.log('Office data:', office);\n          \n          // Update text content and attributes\n          if (officeName) officeName.textContent = office.name;\n          if (officeAddress) officeAddress.textContent = \\`+ \\${office.address}\\`;\n          \n          // Update phone numbers\n          if (officePhones) {\n            officePhones.innerHTML = '';\n            \n            // Luego a\xF1adir los tel\xE9fonos\n            office.phones.forEach(phone => {\n              const phoneContainer = document.createElement('div');\n              const phoneLink = document.createElement('a');\n              phoneLink.href = \\`tel:\\${phone}\\`;\n              phoneLink.textContent = \\`+\\${phone}\\`;\n              phoneLink.className = 'text-white hover:text-primary font-medium font-semibold transition-colors';\n              phoneContainer.appendChild(phoneLink);\n              officePhones.appendChild(phoneContainer);\n            });\n          }\n          \n          // Update email\n          if (officeEmail) {\n            officeEmail.href = \\`mailto:\\${office.email}\\`;\n            officeEmail.textContent = office.email;\n          }\n          \n          // Update image\n          if (officeImage instanceof HTMLImageElement) {\n            officeImage.src = office.image;\n            officeImage.alt = office.name;\n          }\n          \n          // Update map iframe visibility\n          console.log('Updating map visibility for country:', countryCode);\n          \n          // First hide all maps\n          mapContainers.forEach(container => {\n            container.style.display = 'none';\n          });\n          \n          // Then show the selected one\n          const selectedMap = document.querySelector(\\`[data-map-country=\"\\${countryCode}\"]\\`);\n          if (selectedMap) {\n            selectedMap.style.display = 'block';\n            console.log('Showing map container:', countryCode);\n          } else {\n            console.error('No map container found for country code:', countryCode);\n          }\n        }\n        \n        // Function to handle tab selection\n        function handleTabSelection(tab) {\n          tabs.forEach(t => {\n            t.classList.remove('is-active');\n          });\n\n          tab.classList.add('is-active');\n\n          // Update office info based on country code\n          const countryCode = tab.getAttribute('data-country-code');\n          if (countryCode) {\n            updateOfficeInfo(countryCode);\n          }\n        }\n        \n        // Add click and touch event listeners to tabs for better mobile compatibility\n        tabs.forEach(tab => {\n          // Funci\xF3n para manejar ambos tipos de eventos\n          const handleEvent = (e) => {\n            e.preventDefault();\n            console.log('Tab interaction:', tab.getAttribute('data-country-code'));\n            handleTabSelection(tab);\n          };\n          \n          // Agregar m\xFAltiples listeners para mayor compatibilidad\n          tab.addEventListener('click', handleEvent);\n          tab.addEventListener('touchend', handleEvent);\n        });\n        \n        // Initialize with first country\n        if (tabs.length > 0) {\n          handleTabSelection(tabs[0]);\n        }\n      }\n      \n      // Intentar inicializar inmediatamente\n      if (document.readyState === 'loading') {\n        // Si el documento a\xFAn se est\xE1 cargando, esperar al evento DOMContentLoaded\n        document.addEventListener('DOMContentLoaded', initializeCountryTabs);\n      } else {\n        // Si el documento ya est\xE1 cargado, ejecutar inmediatamente\n        initializeCountryTabs();\n      }\n      \n      // Como respaldo, intentar inicializar despu\xE9s de un breve retraso\n      // para asegurarnos de que todo est\xE9 correctamente cargado\n      setTimeout(initializeCountryTabs, 500);\n    })();<\/script> </div> </div>"])), maybeRenderHead(), contact.title, contact.description, renderComponent($$result2, "FormContact", $$FormContact, { "currentLang": locale }), contact.offices.title.split(" ")[0], contact.offices.title.split(" ")[1], contact.offices.title.split(" ").slice(2).join(" "), Object.entries(contact.offices.locations).map(([countryCode, location], index) => renderTemplate`<button${addAttribute(countryCode, "data-country-code")}${addAttribute(`country-tab px-10 py-4 text-white uppercase text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 italic h-[54px] rounded-[10px] border border-white/40 opacity-75 hover:opacity-100 bg-transparent ${index === 0 ? "is-active" : ""}`, "class")}> ${location.tab} </button>`), Object.entries(contact.offices.locations).map(([countryCode, location], index) => renderTemplate`<div${addAttribute(countryCode, "data-map-country")}${addAttribute(`width: 100%; height: 100%; ${index === 0 ? "display: block;" : "display: none;"}`, "style")}> <iframe${addAttribute(location.mapEmbed, "src")} width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" style="width: 100%; height: 100%; border: 0;"${addAttribute(`${location.name} Map`, "title")}></iframe> </div>`), contact.offices.locations["+504"].name, `+ ${contact.offices.locations["+504"].address}`, contact.offices.locations["+504"].phones.map((phone) => renderTemplate`<div> <a${addAttribute(`tel:${phone}`, "href")} class="text-white hover:text-primary transition-colors"> ${phone} </a></div>`), renderComponent($$result2, "LazyImage", $$LazyImage, { "alt": "Yummies Honduras", "class": "w-full h-48 object-cover rounded-xl" }), defineScriptVars({ contactLocations: contact.offices.locations })) })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Contact/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Contact/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
