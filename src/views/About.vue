<template>
  <main>
    <h2>Sobre</h2>
    <p>
      Bem-vindo ao meu aplicativo de gerenciamento de contatos! Este projeto foi
      desenvolvido como parte do meu processo seletivo para uma vaga de
      desenvolvimento. Sou um desenvolvedor solo apaixonado por criar soluções
      práticas e eficientes. Através deste aplicativo, você poderá organizar e
      gerenciar facilmente seus contatos, armazenando informações importantes,
      como nomes, e-mails e números de telefone.
    </p>
    <p>
      Utilizei a mock API do JSONPlaceholder para obter dados fictícios de
      usuários, permitindo que você visualize uma lista inicial de contatos e
      explore as funcionalidades do aplicativo. Gostaria de destacar que este
      projeto foi desenvolvido inteiramente por mim, desde a concepção até a
      implementação. Utilizei tecnologias como HTML, CSS e JavaScript para criar
      uma interface amigável e responsiva.
    </p>
  </main>
</template>

<style scoped lang="scss">
h2 {
  margin-bottom: 1rem;
  padding-block: 1rem;
  font-size: var(--font-lg);
}

p {
  max-width: 70ch;
  font-size: var(--font-md);
}

p + p {
  margin-top: 1rem;
}
</style>
