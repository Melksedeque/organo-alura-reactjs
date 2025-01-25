# Projeto Organo - Pessoas e Times - React.JS

![Tela Principal](./screenshot/tela-principal.png)

## Menu

- [Layout](#layout)
- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como Instalar e Rodar o Projeto](#como-instalar-e-rodar-o-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Projeto ao Vivo](#projeto-ao-vivo)
- [Licença](#licença)
- [Autor](#autor)

## Layout

[Layout no Figma](<https://www.figma.com/design/THdd84v1UUyQpYj99c5XPf/React%253A-desenvolvendo-com-JavaScript-%7C-Organo-(Community)>)

## Descrição

O projeto "Organo - Pessoas e Times" é uma aplicação React.JS que permite o cadastro de colaboradores em seus respectivos times dentro de uma organização. Cada time é representado por uma cor diferente, tornando a visualização mais intuitiva e agradável.

## Tecnologias Utilizadas

- **React.JS:** Biblioteca JavaScript para a construção de interfaces de usuário.
- **CSS:** Utilizado para a estilização dos componentes e layout da aplicação.
- **JavaScript:** Linguagem de programação utilizada no desenvolvimento da lógica da aplicação.
- **useState:** Hook do React.JS utilizado para gerenciar o estado dos componentes.

## Funcionalidades

- Cadastro de colaboradores com nome, cargo e link do GitHub.
- Captura da imagem do colaborador a partir do Link do Github.
- Associação dos colaboradores aos times da organização.
- Exibição dos colaboradores em seus respectivos times.
- Estilização dos times de acordo com as cores primária e secundária definidas.

## Como Instalar e Rodar o Projeto

1. Faça o clone deste repositório em sua máquina local:
   ```
   git clone https://github.com/Melksedeque/organo-alura-reactjs.git
   ```
2. Acesse o diretório do projeto:
   ```
   cd organo-alura-reactjs
   ```
3. Instale as dependências do projeto:
   ```
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
5. Acesse a aplicação em seu navegador no endereço **http://localhost:3000**.

## Estrutura de Pastas

```
organo-alura-reactjs/
├── public/
│ ├── imagens/
│ │ ├── banner.png
│ │ ├── fb.png
│ │ ├── fundo.png
│ │ ├── ig.png
│ │ ├── logo.png
│ │ └── tw.png
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── screenshot/
│ └── tela-principal.png
├── src/
│ ├── componentes/
│ │ ├── Banner/
│ │ │ ├── Banner.css
│ │ │ └── index.js
│ │ ├── Botao/
│ │ │ ├── Botao.css
│ │ │ └── index.js
│ │ ├── CampoTexto/
│ │ │ ├── CampoTexto.css
│ │ │ └── index.js
│ │ ├── Colaborador/
│ │ │ ├── Colaborador.css
│ │ │ └── index.js
│ │ ├── Formulario/
│ │ │ ├── Formulario.css
│ │ │ └── index.js
│ │ ├── ListaSuspensa/
│ │ │ ├── ListaSuspensa.css
│ │ │ └── index.js
│ │ ├── Rodape/
│ │ │ ├── Rodape.css
│ │ │ └── index.js
│ │ ├── Time/
│ │ │ ├── Time.css
│ │ │ └── index.js
│ │ ├── TituloSecao
│ │ │ ├── TituloSecao.css
│ │ └─└── index.js
│ ├── App.js
│ ├── index.css
│ └── index.js
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Projeto ao Vivo

Você pode ver o projeto ao vivo neste link: [https://organo-alura-reactjs.vercel.app/](https://organo-alura-reactjs.vercel.app/)

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/Melksedeque/organo-alura-reactjs?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque Silva](https://github.com/Melksedeque/)
- FrontEndMentor - [@Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [@SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)
