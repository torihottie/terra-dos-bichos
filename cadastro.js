function renderListaVoluntarios() {
  const listaVoluntarios = document.getElementById('lista-voluntarios');
  const voluntarios = listarVoluntarios();

  if (voluntarios.length === 0) {
    listaVoluntarios.innerHTML = '<li>Nenhum voluntário cadastrado ainda.</li>';
    return;
  }

  listaVoluntarios.innerHTML = voluntarios
    .map(v => <li>${v.nome} - ${v.email}</li>)
    .join('');
}

function initCadastroForm() {
  const form = document.getElementById('cadastro-form');
  const feedback = document.getElementById('feedback-cadastro');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');

  renderListaVoluntarios();

  nomeInput.addEventListener('input', () => {
    marcarCampo(nomeInput, erroNome, validarNome(nomeInput.value), 'Digite um nome com pelo menos 3 letras.');
  });

  emailInput.addEventListener('input', () => {
    marcarCampo(emailInput, erroEmail, validarEmail(emailInput.value), 'Digite um e-mail válido.');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeValido = validarNome(nomeInput.value);
    const emailValido = validarEmail(emailInput.value);

    marcarCampo(nomeInput, erroNome, nomeValido, 'Digite um nome com pelo menos 3 letras.');
    marcarCampo(emailInput, erroEmail, emailValido, 'Digite um e-mail válido.');

    if (!nomeValido || !emailValido) {
      feedback.innerHTML = <div class="alert alert-error">Corrija os campos destacados antes de enviar.</div>;
      return;
    }

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();

    salvarVoluntario(nome, email);

    if (window.Swal) {
      Swal.fire({
        icon: 'success',
        title: 'Cadastro recebido!',
        text: 'Obrigado, ${nome}! Em breve entraremos em contato.',
        confirmButtonText: 'Fechar',
        background: '#E8F5E9',
        color: '#2E7D32',
        iconColor: '#2E7D32',
        confirmButtonColor: '#2E7D32'
      });
    } else {
      feedback.innerHTML = <div class="alert alert-success">Obrigado, ${nome}! Cadastro recebido.</div>;
    }

    form.reset();
    nomeInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    renderListaVoluntarios();
  });
}