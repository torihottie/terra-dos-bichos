const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarNome(valor) {
  return valor.trim().length >= 3;
}

export function validarEmail(valor) {
  return regexEmail.test(valor.trim());
}

export function marcarCampo(input, erroSpan, valido, mensagemErro) {
  if (valido) {
    input.style.borderColor = '';
    erroSpan.textContent = '';
    return;
  }

  input.style.borderColor = '#C0392B';
  erroSpan.style.color = '#C0392B';
  erroSpan.textContent = mensagemErro;
}