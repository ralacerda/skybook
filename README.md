<div align="center">

# Skybook

[https://skybook-contacts.netlify.app/](https://skybook-contacts.netlify.app/)

![Netlify](https://img.shields.io/netlify/88927678-709a-4980-a9ba-f59f4e6d010f)

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

O preview estará disponível em [http://localhost:5173/](http://localhost:4173/)

## Ferramentas utilizadas

As principais ferramentas para a criação desse projeto foram a framework de Javascript [Vuejs][vue], utilizando [Typescript][typescript] e o pré-processador [SASS][sass]. Foi utilizado [Vite][vite] como servidor de desenvolvimento e na produção do bundle final, incluindo minificação do CSS e Javascript final.

Com [Vue Router][vue-router] foi possível criar uma experiência de SPA com multiplas páginas, evitando que o navegador fosse atualizado, e permitindo uma navegação rápida dentro do aplicativo.

Foi utilizado [Pinia][pinia] como gerenciador de estado, uma solução robusta e eficiente para o compartilhamento de dados entre os as páginas da aplicação.

O [Formkit][formkit] foi utilizado para a criação dos formuláris de criação e edição de contatos.

Para auxiliar no uso da biblioteca de ícones do [Material Design][mdi] foi utilizado o [unplugin-icons][icons].

O projeto foi publicado utilizando [Netlify][netlify], com builds criadas automaticamente a partir do repositório do GitHub.

## Recursos

### Responsividade e UX

O design se adapta a diferente [tipos de tela][responsive] e situações, permitindo uso tanto vertical como horizontal.

- Botões de ação estão sempre presente no topo, incluindo botões para voltar a telas anteriores, e o nome da página atual.

Quando uma ação não está disponível (ligar ou mandar e-mail quando o contato não possui a informação), o ícone é desativado.

### Ordernar e Buscar

Aplicativo posui a opção de apresentar os dados por ordem de criação do contato ou ordem alfabética.

### Lidando com Erros

Durante o desenvolvimento, Typescript ajudou.
No runtime verificamos erros de conexão e erro no API.

### Transições e Animações

Usando as capacidades de transições e animações do Vue, foi possível criar uma animação de transição entre as diferentes páginas. Cada página possui uma informação de profundidade, que é verificada durante a navegação para determinar qual transição deve ser utilizada. Além disso, há uma animação na lista durante buscar ou quando um contato é removido.

## Outras considerações

que não foram implementadas devido a limitação de tempo do projeto, mas que poderiam ser consideradas.

- Melhorar algorítimo de buscas
- Poder adicionar outras informações
- Botão de deletar deveria dar ao usuário um diálogo de confirmação, também permitindo prevemente que a ação seja desfeita
- Para nosso caso, a unica limitação para criação ou edição de um contato é que haja um nome, sendo possível criar um contato com nome repetitido. Há um alerta para e-mail não validados, mas não impede a criação do contato.

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
