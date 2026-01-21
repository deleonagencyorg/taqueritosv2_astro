
import CryptoMan from './rs/cm3d/CryptoMan';
import './sass/cm3d.scss';

function init() {

  document.body.onload = function() {

    const el = document.querySelector('.rs-cm3d') as HTMLDivElement;
    const cm3d = new CryptoMan(el);
  }
}

init();
