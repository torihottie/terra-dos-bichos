# 🐾 Terra dos Bichos

Site institucional fictício de uma ONG de proteção animal, desenvolvido como projeto acadêmico. A aplicação é uma Single Page Application (SPA) construída em JavaScript puro (Vanilla JS), com foco em responsividade, acessibilidade e boas práticas de organização de código.

## Sobre o projeto

A Terra dos Bichos é uma organização fictícia dedicada a resgatar, cuidar e encontrar novos lares para cães e gatos em situação de abandono. O site apresenta a missão da ONG, seus projetos ativos e um formulário de cadastro para voluntários.

## Motivação

O nome do projeto foi inspirado em uma clínica veterinária real que presta um trabalho muito importante na comunidade, ajudando animais de rua e apoiando pessoas que não têm condições de arcar com o tratamento completo dos seus pets.

## Tecnologias utilizadas

HTML5 para estrutura semântica; CSS3 com Design System baseado em variáveis nativas, CSS Grid, Flexbox e responsividade em 5 breakpoints; JavaScript com ES6 Modules (import/export) para a lógica modularizada; Vite como bundler e servidor de desenvolvimento; SweetAlert2 como biblioteca externa para modais de feedback.

## Estrutura do projeto

Na raiz ficam os arquivos-fonte HTML (index.html, cadastro.html, projetos.html), a pasta assets com as imagens, a pasta css com o style.css e a pasta js, que separa a lógica em router.js (roteamento via hash), views.js (templates das telas), cadastro.js (lógica do formulário), validacao.js (regras de validação) e storage.js (persistência no localStorage e carregamento do SweetAlert2).

## Funcionalidades

Navegação em SPA via roteamento por hash, sem recarregar a página. Menu responsivo com dropdown no desktop e hambúrguer no mobile. Formulário de cadastro de voluntários com validação em tempo real. Persistência dos dados no localStorage. Feedback visual de sucesso via modal com SweetAlert2. Design responsivo com 5 breakpoints, usando CSS Grid e Flexbox.

## Como executar o projeto

Pré-requisito: Node.js.

1. Clonar o repositório
2. Executar npm install
3. Executar npm run dev e abrir o endereço mostrado no terminal

Para gerar a versão final, use npm run build.

## Deploy

Projeto publicado via Vercel.

## Acessibilidade

O projeto segue diretrizes da WCAG 2.1 para garantir uma experiência inclusiva:

- Uso de atributos ARIA (role, aria-label, aria-hidden) no modal informativo e nos controles interativos.
- Navegação testada via teclado e leitores de tela.
- Contraste de cores ajustado para atender à relação mínima de 4.5:1 entre texto e fundo.
- Estrutura semântica com uso de <header>, <nav>, <main>, <section>, <article> e <footer>.

## Contribuição

Fluxo de trabalho baseado em branches (feature, hotfix, develop e docs). As alterações são integradas à branch principal, e as mudanças na documentação passaram por pull request.

## Autor

Projeto acadêmico desenvolvido como parte da experiência prática da disciplina de Análise e Desenvolvimento de Sistemas, com foco em front-end (HTML, CSS e JavaScript).
