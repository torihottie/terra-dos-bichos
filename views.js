function viewHome() {
  return `
    <section id="hero">
      <img src="../imagens/caes-gatos.jpg" alt="Imagem ilustrativa de cães e gatos" class="banner-img">
      <h2>Sobre a ONG</h2>
      <p>A Terra dos Bichos é uma organização sem fins lucrativos dedicada a resgatar, cuidar e encontrar novos lares para cães e gatos em situação de abandono.</p>
    </section>

    <section id="missao">
      <h2>Nossa Missão</h2>
      <p>Trabalhamos todos os dias para reduzir o número de animais abandonados nas ruas, promovendo resgate responsável, cuidados veterinários e conscientização sobre a posse responsável de animais de estimação.</p>
      <article>
        <h3>Como atuamos</h3>
        <p>Contamos com uma rede de voluntários, parcerias com clínicas veterinárias e apoio da comunidade para viabilizar nossos projetos de resgate, castração e adoção.</p>
      </article>
    </section>

    <section id="numeros">
      <h2>Nosso Impacto</h2>
      <article>
        <h3>Mais de 500 animais resgatados</h3>
        <p>Desde a fundação da ONG, já ajudamos centenas de cães e gatos a encontrarem um novo lar.</p>
      </article>
      <article>
        <h3>Castrações gratuitas</h3>
        <p>Realizamos campanhas mensais de castração em bairros de baixa renda.</p>
      </article>
    </section>

    <section id="chamada">
      <h2>Faça Parte</h2>
      <p>Conheça nossos <a href="#/projetos" data-link>projetos</a> ou <a href="#/cadastro" data-link>cadastre-se como voluntário</a> e ajude a transformar a vida de muitos animais.</p>
    </section>
  `;
}

const projetosData = [
  {
    titulo: 'Resgate de Rua',
    descricao: 'Equipe volante que atende chamados de animais em situação de risco.'
  },
  {
    titulo: 'Castra Já',
    descricao: 'Mutirões mensais de castração gratuita em bairros parceiros.'
  }
];

function viewProjetos() {
  const cards = projetosData.map(projeto => `
    <article>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </article>
  `).join('');

  return `
    <section id="lista-projetos">
      <h2>Nossos Projetos</h2>
      ${cards}
    </section>
  `;
}

function viewCadastro() {
  return `
    <section id="form-cadastro">
      <h2>Cadastre-se como Voluntário</h2>
      <form id="cadastro-form" novalidate>
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome">
        <span class="erro-campo" id="erro-nome"></span>

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email">
        <span class="erro-campo" id="erro-email"></span>

        <button type="submit" class="btn">Enviar</button>
      </form>
      <div id="feedback-cadastro"></div>

      <h3>Voluntários já cadastrados</h3>
      <ul id="lista-voluntarios"></ul>
    </section>
  `;
}

function view404() {
  return <section><h2>Página não encontrada</h2></section>;
}