<div align="center">

# Skybook

[https://skybook-contacts.netlify.app/](https://skybook-contacts.netlify.app/)

![Netlify](https://img.shields.io/netlify/88927678-709a-4980-a9ba-f59f4e6d010f) ![License](https://img.shields.io/github/license/ralacerda/skybook?color=#4DC71F)

![Screenshot][screenshot]

</div>

O Skybook é o resultado de um desafio tecnico com o objetivo de criar um aplicativo de dashboard para gerenciamento de contatos.

## Como instalar e usar

Clone o repositório e instale as dependências ulitizando `npm` ou `pnpm`.

```sh
git clone https://github.com/ralacerda/skybook.git
npm install
```

Para iniciar o servidor de desenvolvimento:

```sh
npm run dev
```

O servidor estará disponível em [http://localhost:5173/](http://localhost:5173/)

Para criar a build e iniciar uma preview, pare o servidor de desenvolvimento e em seguida:

```sh
npm run build && npm run preview
```

O preview estará disponível em [http://localhost:4173/](http://localhost:4173/)

## Ferramentas utilizadas

As principais ferramentas para a criação desse projeto foram a framework de Javascript [Vuejs][vue], utilizando [Typescript][typescript] e o pré-processador [SASS][sass]. Foi utilizado [Vite][vite] como servidor de desenvolvimento e na produção do bundle final, incluindo minificação do CSS e Javascript final.

Com [Vue Router][vue-router] foi possível criar uma experiência de SPA com multiplas páginas, evitando que o navegador fosse atualizado, e permitindo uma navegação rápida dentro do aplicativo.

Foi utilizado [Pinia][pinia] como gerenciador de estado, uma solução robusta e eficiente para o compartilhamento de dados entre os as páginas da aplicação.

O [Formkit][formkit] foi utilizado para a criação dos formuláris de criação e edição de contatos.

Para auxiliar no uso da biblioteca de ícones do [Material Design][mdi] foi utilizado o [unplugin-icons][icons].

O projeto foi publicado utilizando [Netlify][netlify], com builds criadas automaticamente a partir do repositório do GitHub.

## Recursos

### Ações de Contato

O Skybook possui recursos básicos de um gerenciador de contatos, permitindo editar, adicionar, remover e visualizar detalhes de cada contato.

O aplicativo também inclui botões intuitivos que permitem realizar ligações ou enviar e-mails a partir das informações de contato de cada pessoa.

### Responsividade e UX

O design se adapta a diferentes [tipos de tela][responsive], também considerando posicionamento da tela tanto verticalmente como horizontalmente.

Os recursos de interação e navegação estão sempre visíveis no topo da tela.

Quando um contato não possui informações para fazer uma chamada ou enviar um e-mail, o ícone correspondente é desativado

### Ordernar e Buscar

O aplicativo possui opções de ordenação e busca, que facilitam a navegação e localização de contatos.

É possível visualizar os contatos em quatro ordens diferentes: por ordem de criação (crescente ou decrescente), exibindo os mais recentes primeiro por padrão, ou em ordem alfabética (crescente ou decrescente) pelo nome dos contatos.

### Lidando com Erros

A utilização do Typescript durante o desenvolvimento auxiliou na detecção e prevenção de erros.

Durante a inicialização do aplicativo, é realizado um fetch request para acessar um Mock API e obter o estado inicial da lista de contatos. Caso ocorra algum erro durante essa verificação, como falha na conexão ou resposta com status diferente de 200, uma mensagem de erro é exibida para notificar o usuário com informações sobre problema.

### Transições e Animações

Usando as capacidades de transições e animações do Vue, foi possível criar uma animação de transição entre as diferentes páginas. Cada página possui uma informação de profundidade, que é verificada durante a navegação para determinar qual transição deve ser utilizada. Além disso, há uma animação na lista durante buscar ou quando um contato é removido.

## Outras considerações

Existem alguns recursos ou melhorias que não foram implementadas devido à limitação de tempo do projeto, mas que poderiam ser consideradas:

Utilizar um algoritmo de busca que possa rankear resultados, por exemplo, mostrando primeiro nomes que começam com o texto buscada.

Permiter ordenar lista de contatos por acesso ou edição mais recente.

Capacidade de incluir informações arbritárias para um contato, podendo ser diferente para cada contato.

Implementar um diálogo de confirmação ao clicar no botão de exclusão, permitindo que o usuário tenha a oportunidade de confirmar a ação.

A única restrição para a criação ou edição de um contato é que um nome seja fornecido. Isso significa que é possível criar contatos com nomes repetidos. Seria interessante adicionar uma validação para evitar a criação de contatos com nomes duplicados. Atualmente, um alerta é exibido apenas para e-mails não validados, mas a criação do contato ainda é permitida.

[screenshot]: screenshot.webp
[sass]: https://sass-lang.com/
[icons]: https://github.com/antfu/unplugin-icons
[vue-router]: https://router.vuejs.org/
[vue]: https://vuejs.org/
[typescript]: https://www.typescriptlang.org/
[vite]: https://vitejs.dev/
[netlify]: https://www.netlify.com/
[formkit]: https://formkit.com/
[mdi]: https://fonts.google.com/icons
[pinia]: https://pinia.vuejs.org/
[responsive]: https://ui.dev/amiresponsive?url=https://skybook-contacts.netlify.app/
