import { validarEmail, marcarCampo } from './validacao.js';
import { salvarVoluntario, listarVoluntarios } from './storage.js'; 

export function initCadastroForm() {
  const form = document.getElementById('formCadastro');
  const mensagem = document.getElementById('mensagem');

  if (!form) return;

  form.noValidate = true;
   function renderListaVoluntarios() {
  let lista = document.getElementById('lista-voluntarios');
  if (!lista) {
    lista = document.createElement('ul');
    lista.id = 'lista-voluntarios';
    form.insertAdjacentElement('afterend', lista);
  }
  lista.innerHTML = listarVoluntarios()
    .map(v => `<li>${v.nome} - ${v.email}</li>`)
    .join('');
} 

renderListaVoluntarios();

  const regras = {
    nome: { ok: v => v.trim().length >= 3, msg: 'Digite pelo menos 3 letras.' },
    nascimento: { ok: v => v !== '', msg: 'Informe a data de nascimento.' },
    cpf: { ok: v => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v), msg: 'Use o formato 000.000.000-00.' },
    email: { ok: v => validarEmail(v), msg: 'Digite um e-mail válido.' },
    telefone: { ok: v => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(v), msg: 'Use o formato (00) 00000-0000.' },
    cep: { ok: v => /^\d{5}-\d{3}$/.test(v), msg: 'Use o formato 00000-000.' },
    endereco: { ok: v => v.trim().length >= 3, msg: 'Informe o endereço.' },
    cidade: { ok: v => v.trim().length >= 2, msg: 'Informe a cidade.' },
    estado: { ok: v => v !== '', msg: 'Selecione o estado.' }
  };

  function erroSpan(input) {
    let span = input.nextElementSibling;
    if (!span || !span.classList.contains('erro-campo')) {
      span = document.createElement('span');
      span.className = 'erro-campo';
      input.insertAdjacentElement('afterend', span);
    }
    return span;
  }

  function validarCampo(id) {
    const input = document.getElementById(id);
    const valido = regras[id].ok(input.value);
    marcarCampo(input, erroSpan(input), valido, regras[id].msg);
    return valido;
  }

  Object.keys(regras).forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => validarCampo(id));
    input.addEventListener('change', () => validarCampo(id));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const todosValidos = Object.keys(regras).map(validarCampo).every(Boolean);
    if (!todosValidos) {
      mensagem.textContent = 'Corrija os campos destacados antes de enviar.';
      mensagem.style.color = '#C0392B';
      return;
    }

    const voluntario = {};
    Object.keys(regras).forEach(id => {
      voluntario[id] = document.getElementById(id).value.trim();
    });
    salvarVoluntario(voluntario);
    renderListaVoluntarios();

    if (window.Swal) {
      Swal.fire({
        icon: 'success',
        title: 'Cadastro recebido!',
        text: `Obrigado, ${voluntario.nome}! Em breve entraremos em contato.`,
        confirmButtonText: 'Fechar'
      });
      mensagem.textContent = '';
    } else {
      mensagem.textContent = `Obrigado, ${voluntario.nome}! Cadastro recebido.`;
      mensagem.style.color = '#2E7D32';
    }

    form.reset();
  });
}