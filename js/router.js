import { carregarSweetAlert } from './storage.js';
import { viewHome, viewProjetos, viewCadastro, view404 } from './views.js';
import { initCadastroForm } from './cadastro.js';

const app = document.getElementById('app');

const routes = {
  '/': viewHome,
  '/projetos': viewProjetos,
  '/cadastro': viewCadastro
};

function router() {
  const path = location.hash.replace('#', '') || '/';
  const view = routes[path] || view404;

  app.innerHTML = view();
  window.scrollTo(0, 0);

  if (path === '/cadastro') {
    initCadastroForm();
  }
}

carregarSweetAlert();

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);