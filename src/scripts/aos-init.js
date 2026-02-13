// Inicialización de AOS (Animate On Scroll) - Deshabilitado para evitar conflictos
// AOS puede causar problemas de sobreposición y FOUC al recargar la página.
// Las animaciones se manejan a través de animations.js y page-animations.js

// Si necesitas usar AOS en el futuro, descomenta el siguiente código:
/*
import AOS from 'aos';
import 'aos/dist/aos.css';

(function() {
  'use strict';
  
  function initAOS() {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 120,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768 ? true : false,
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAOS);
  } else {
    initAOS();
  }
  
  document.addEventListener('astro:page-load', initAOS);
})();
*/
