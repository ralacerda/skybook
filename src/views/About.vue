<template>
  <main>
    <h2>Sobre</h2>

    <p>
      O Skybook é o resultado de um desafio tecnico com o objetivo de criar um
      aplicativo de dashboard para gerenciamento de contatos. As principais
      ferramentas para a criação desse projeto foi VueJS, TypeScript, e SASS.
      Foi utilizado Vite como servidor de desenvolvimento e na produção do
      bundle final, incluindo minificação do CSS e Javascript final. Com Vue
      Router foi possível criar uma experiência de SPA com multiplas páginas, e
      Pinia foi utilizado como gerenciador de estado. O componente FormKit foi
      utilizado para a criação dos formuláris de criação e edição de contatos.
      Para auxiliar no uso da biblioteca de ícones do Material foi utilizado o
      unplugin-icons. O projeto foi publicado utilizando Netlify, com builds
      criadas automaticamente a partir do repositório do GitHub.
    </p>
    <p>
      O aplicativo possui recursos básicos de um gerenciador de contatos,
      permitindo editar, adicionar, remover e visualizar detalhes de cada
      contato. O design se adapta a diferentes tipos de tela, também
      considerando posicionamento da tela tanto verticalmente como
      horizontalmente. O aplicativo possui opções de ordenação e busca, que
      facilitam a navegação e localização de contatos. É possível visualizar os
      contatos em quatro ordens diferentes: por ordem de criação (crescente ou
      decrescente), exibindo os mais recentes primeiro por padrão, ou em ordem
      alfabética (crescente ou decrescente) pelo nome dos contatos.
    </p>
    <p>
      Skybook foi criado por
      <a href="https://github.com/ralacerda" target="_blank">Renato Lacerda</a>.
      O código está disponível no
      <a href="https://github.com/ralacerda/skybook" target="_blank"
        >repositório do GitHub</a
      >
      sobre licensa MIT.
    </p>
    <RouterLink to="/">Voltar à página inicial</RouterLink>
  </main>
</template>

<style scoped lang="scss">
@import "../styles/mixins";

h2 {
  padding-block: 1rem;
  font-size: var(--font-lg);
}

main {
  @include scrollbar;
}

p {
  font-size: var(--font-md);
  line-height: 1.7;
  margin-bottom: 1rem;
}

a {
  color: var(--brand-accent);

  @include hover-style {
    text-decoration: underline;
  }
}
</style>
