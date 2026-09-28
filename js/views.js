export function viewHome() {
  return `
    <section id="hero">
      <img src="${animais}" alt="Imagem ilustrativa de cães e gatos" class="banner-img">
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
      <p>Conheça nossos <a href="#/projetos">projetos</a> ou <a href="#/cadastro">cadastre-se como voluntário</a> e ajude a transformar a vida de muitos animais.</p>
    </section>
  `;
}

const projetosData = [
  { titulo: 'Resgate de Rua', descricao: 'Equipe voluntária que atua diariamente resgatando animais abandonados em situação de risco, oferecendo atendimento veterinário imediato quando necessário.' },
  { titulo: 'Castramóvel', descricao: 'Unidade móvel que percorre bairros carentes realizando castrações gratuitas, contribuindo para o controle populacional de forma ética e responsável.' },
  { titulo: 'Feira de Adoção', descricao: 'Evento mensal que reúne animais resgatados e prontos para adoção, conectando-os a famílias interessadas em oferecer um novo lar.' },
  { titulo: 'Apadrinhamento', descricao: 'Programa que permite contribuir financeiramente com o cuidado de um animal específico até que ele seja adotado definitivamente.' }
];

export function viewProjetos() {
  const cards = projetosData.map(p => `
      <article>
        <h3>${p.titulo}</h3>
        <p>${p.descricao}</p>
      </article>`).join('');

  return `
    <section id="projetos">
      <h2>Nossos Projetos</h2>
      <p>Conheça as iniciativas que mantemos em funcionamento graças ao apoio de voluntários e doadores.</p>
      ${cards}
    </section>
  `;
}

export function viewCadastro() {
  return `
    <section id="cadastro">
      <h2>Cadastro de Voluntário</h2>
      <p>Preencha o formulário abaixo para fazer parte da nossa rede de voluntários.</p>

      <form id="formCadastro">
        <fieldset class="dados-pessoais">
          <legend>Dados Pessoais</legend>
          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" required>
          <label for="nascimento">Data de nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" maxlength="14" required>
        </fieldset>

        <fieldset class="contato">
          <legend>Contato</legend>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" maxlength="15" required>
        </fieldset>

        <fieldset class="endereco">
          <legend>Endereço</legend>
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" maxlength="9" required>
          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required>
          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>
          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="PR">Paraná</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="outros">Outro</option>
          </select>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>

      <p id="mensagem"></p>
    </section>
  `;
}

export function view404() {
  return '<section><h2>Página não encontrada</h2></section>';
}