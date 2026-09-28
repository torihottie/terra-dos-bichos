/* empty css              */var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(){if(window.Swal)return;let e=document.createElement(`script`);e.src=`https://cdn.jsdelivr.net/npm/sweetalert2@11`,document.head.appendChild(e)}function r(){return JSON.parse(localStorage.getItem(`voluntarios`)||`[]`)}function i(e){let t=r();t.push(e),localStorage.setItem(`voluntarios`,JSON.stringify(t))}var a=e((()=>{}));function o(){return`
    <section id="hero">
      <img src="assets/animais.webp" alt="Imagem ilustrativa de cães e gatos" class="banner-img">
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
  `}function s(){return`
    <section id="projetos">
      <h2>Nossos Projetos</h2>
      <p>Conheça as iniciativas que mantemos em funcionamento graças ao apoio de voluntários e doadores.</p>
      ${u.map(e=>`
      <article>
        <h3>${e.titulo}</h3>
        <p>${e.descricao}</p>
      </article>`).join(``)}
    </section>
  `}function c(){return`
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
  `}function l(){return`<section><h2>Página não encontrada</h2></section>`}var u,d=e((()=>{u=[{titulo:`Resgate de Rua`,descricao:`Equipe voluntária que atua diariamente resgatando animais abandonados em situação de risco, oferecendo atendimento veterinário imediato quando necessário.`},{titulo:`Castramóvel`,descricao:`Unidade móvel que percorre bairros carentes realizando castrações gratuitas, contribuindo para o controle populacional de forma ética e responsável.`},{titulo:`Feira de Adoção`,descricao:`Evento mensal que reúne animais resgatados e prontos para adoção, conectando-os a famílias interessadas em oferecer um novo lar.`},{titulo:`Apadrinhamento`,descricao:`Programa que permite contribuir financeiramente com o cuidado de um animal específico até que ele seja adotado definitivamente.`}]}));function f(e){return m.test(e.trim())}function p(e,t,n,r){if(n){e.style.borderColor=``,t.textContent=``;return}e.style.borderColor=`#C0392B`,t.style.color=`#C0392B`,t.textContent=r}var m,h=e((()=>{m=/^[^\s@]+@[^\s@]+\.[^\s@]+$/}));function g(){let e=document.getElementById(`formCadastro`),t=document.getElementById(`mensagem`);if(!e)return;e.noValidate=!0;function n(){let t=document.getElementById(`lista-voluntarios`);t||(t=document.createElement(`ul`),t.id=`lista-voluntarios`,e.insertAdjacentElement(`afterend`,t)),t.innerHTML=r().map(e=>`<li>${e.nome} - ${e.email}</li>`).join(``)}n();let a={nome:{ok:e=>e.trim().length>=3,msg:`Digite pelo menos 3 letras.`},nascimento:{ok:e=>e!==``,msg:`Informe a data de nascimento.`},cpf:{ok:e=>/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e),msg:`Use o formato 000.000.000-00.`},email:{ok:e=>f(e),msg:`Digite um e-mail válido.`},telefone:{ok:e=>/^\(\d{2}\) \d{4,5}-\d{4}$/.test(e),msg:`Use o formato (00) 00000-0000.`},cep:{ok:e=>/^\d{5}-\d{3}$/.test(e),msg:`Use o formato 00000-000.`},endereco:{ok:e=>e.trim().length>=3,msg:`Informe o endereço.`},cidade:{ok:e=>e.trim().length>=2,msg:`Informe a cidade.`},estado:{ok:e=>e!==``,msg:`Selecione o estado.`}};function o(e){let t=e.nextElementSibling;return(!t||!t.classList.contains(`erro-campo`))&&(t=document.createElement(`span`),t.className=`erro-campo`,e.insertAdjacentElement(`afterend`,t)),t}function s(e){let t=document.getElementById(e),n=a[e].ok(t.value);return p(t,o(t),n,a[e].msg),n}Object.keys(a).forEach(e=>{let t=document.getElementById(e);t.addEventListener(`input`,()=>s(e)),t.addEventListener(`change`,()=>s(e))}),e.addEventListener(`submit`,r=>{if(r.preventDefault(),!Object.keys(a).map(s).every(Boolean)){t.textContent=`Corrija os campos destacados antes de enviar.`,t.style.color=`#C0392B`;return}let o={};Object.keys(a).forEach(e=>{o[e]=document.getElementById(e).value.trim()}),i(o),n(),window.Swal?(Swal.fire({icon:`success`,title:`Cadastro recebido!`,text:`Obrigado, ${o.nome}! Em breve entraremos em contato.`,confirmButtonText:`Fechar`}),t.textContent=``):(t.textContent=`Obrigado, ${o.nome}! Cadastro recebido.`,t.style.color=`#2E7D32`),e.reset()})}var _=e((()=>{h(),a()}));t((()=>{a(),d(),_();var e=document.getElementById(`app`),t={"/":o,"/projetos":s,"/cadastro":c};function r(){let n=location.hash.replace(`#`,``)||`/`;e.innerHTML=(t[n]||l)(),window.scrollTo(0,0),n===`/cadastro`&&g()}n(),window.addEventListener(`hashchange`,r),window.addEventListener(`DOMContentLoaded`,r)}))();