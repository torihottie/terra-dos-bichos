const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarNome(valor) {
  return valor.trim().length >= 3;
}

function validarEmail(valor) {
  return regexEmail.test(valor.trim());
}

function marcarCampo(input, erroSpan, valido, mensagemErro) {
  if (valido) {
    input.style.borderColor = '';
    erroSpan.textContent = '';
    return;
  }

  input.style.borderColor = '#C0392B';
  erroSpan.style.color = '#C0392B';
  erroSpan.textContent = mensagemErro;
}