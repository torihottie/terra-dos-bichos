function carregarSweetAlert() {
  if (window.Swal) return;

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
  document.head.appendChild(script);
}

function listarVoluntarios() {
  return JSON.parse(localStorage.getItem('voluntarios') || '[]');
}

function salvarVoluntario(nome, email) {
  const voluntarios = listarVoluntarios();
  voluntarios.push({ nome, email });
  localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
}