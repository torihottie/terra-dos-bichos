export function carregarSweetAlert() {
  if (window.Swal) return;

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
  document.head.appendChild(script);
}

export function listarVoluntarios() {
  return JSON.parse(localStorage.getItem('voluntarios') || '[]');
}

export function salvarVoluntario(voluntario) {
  const voluntarios = listarVoluntarios();
  voluntarios.push(voluntario);
  localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
}