# HypScrum 💻

## Descrição

**Este projeto é um sistema web desenvolvido para guiar os usuários no aprendizado do Scrum. O sistema inclui seções de instrução com avaliações e um mecanismo para emissão de certificados de conclusão do curso. Ele é construído utilizando HTML, CSS, JavaScript e PostgreSQL, e as telas foram prototipadas no Figma.**

## Link para o Trello

Clique [aqui](https://trello.com/invite/b/66cc7d761cd6040a5574bd51/ATTI15a79678699b499a3056afb930ed8bceB5811606/abp) para acessar o quadro do Trello do projeto

## SPRINTS

| SPRINT | LINK          | INÍCIO     | ENTREGA    | STATUS        |
| ------ | ------------- | ---------- | ---------- | ------------- |
| 01     | [Sprint 01]() | 10/09/2024 | 02/10/2024 | Em andamento  |
| 02     | [Sprint 02]() | 07/10/2024 | 01/11/2024 | Aguardando... |
| 03     | [Sprint 03]() | 04/11/2024 | 22/11/2024 | Aguardando... |
|        |               |            |            |               |

<!-- ✔ -->

## USER STORIES

<br>

| ID REFERÊNCIA | Remetente | Instrução                                                                                           | Finalidade                                                                                                                          |
| ------------- | --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| RF-01         | Usuário   | Como usuário, quero ter um menu de navegação comum em todas as páginas.                             | Para que eu possa acessar facilmente diferentes seções do portal de qualquer página.                                                |
| RF-02 / RF-03 | Usuário   | Como novo usuário, quero me cadastrar informando meu nome completo, e-mail e senha.                 | Para que eu possa criar uma conta e acessar o portal e fazer login apenas com email e senha.                                        |
| RF-04 / RF-05 | Usuário   | Como usuário, quero responder 3 questões para cada tópico do Scrum.                                 | Para que eu possa testar meu conhecimento, com as questões disponíveis apenas para quem tiver um cadastro e estiver logado no site. |
| RF-06         | Visitante | Como visitante, quero acessar o conteúdo das páginas do curso,                                      | Para que eu possa explorar o material disponível antes de me cadastrar.                                                             |
| RF-07         | Usuário   | Como usuário, quero poder tentar responder as questões quantas vezes for necessário,                | Para que eu tenha a oportunidade de aprender e melhorar meu desempenho.                                                             |
| RF-08         | Usuário   | Como usuário, quero que o sistema me mostre apenas as questões dos tópicos em que não fui aprovado. | Para que eu possa focar no que ainda preciso aprender.                                                                              |
| RF-09         | Usuário   | Como usuário, quero receber um certificado de conclusão ao ser aprovado em todos os tópicos.        | Para que eu possa comprovar minha aprendizagem.                                                                                     |
| RF-10         | Usuário   | Como usuário, quero que as questões sejam iguais para todos os usuários.                            | Para que não seja possível alterar as perguntas ou respostas através de uma interface do sistema.                                   |
|               |           |                                                                                                     |

<br>
<br>

## Requisitos

### Requisitos Funcionais

- **RF.01** Navegação por menu comum para acesso às seções.
- **RF.02** Auto-cadastro com nome, e-mail e senha.
- **RF.03** Autenticação com e-mail e senha.
- **RF.04** Cadastro de questões no SGBD PostgreSQL.
- **RF.05** Exibição de 3 questões por tópico para usuários logados.
- **RF.06** Acesso ao conteúdo do curso para usuários não logados, sem visualização das questões.
- **RF.07** Respostas ilimitadas às questões até a aprovação.
- **RF.08** Exibição de questões apenas nos tópicos não aprovados.
- **RF.09** Emissão de certificados para usuários aprovados em todos os tópicos.
- **RF.10** Cadastro de questões pelo administrador diretamente no PostgreSQL.

### Requisitos Não Funcionais

- **RNF.01** Distribuição de conteúdo em páginas com princípios de arquitetura de informação.
- **RNF.02** Sequência lógica nas páginas com navegação entre páginas.
- **RNF.03** Curso cobrindo conhecimentos necessários para o aprendizado do Scrum.
- **RNF.04** Sequência lógica de aprendizado do Scrum.
- **RNF.05** Questões compatíveis com o conteúdo do tópico.
- **RNF.06** Visual responsivo.

<br>

## EQUIPE

<br>

| NOME                              | FUNÇÃO        | GITHUB                                                    |
| --------------------------------- | ------------- | --------------------------------------------------------- |
| Gustavo de Moraes Silva           | Scrum Master  | [guhms7](https://github.com/guhms7)                       |
| Carlos Eduardo Magalhaes         | Project Owner | [carlosedsmagalhaes](https://github.com/carlosedsmagalhaes) |
| Adson Ottoni Balbino Filho        | Developer     | [adsonfilho](https://github.com/adsonfilho)               |
| Andressa Stephane Toledo da Silva | Developer     | [andressatoledo](https://github.com/andressatoledo)       |
| Eduardo Henrique Alves Arantes    | Developer     | [eduardohalves](https://github.com/eduardohalves)         |
| Luiz Filipe da Silva              | Developer     | [luizitofs](https://github.com/luizitofs)               |
| Marcella Souto de Carvalho        | Developer     | [masoutoc](https://github.com/masoutoc)                   |
| Tauane Mariano dos Santos         | Developer     | [tauane21](https://github.com/tauane21)                   |
|                                   |               |

# Sprints

## Tecnologias Utilizadas

<br>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> </p>

<br>

### Estrutura do Projeto

- **Frontend:**

  - `index.html` - Página inicial e navegação.
  - `styles.css` - Estilos do projeto.
  - `script.js` - Lógica de interação do usuário.

- **Backend:**
<!--  - `server.js` - Servidor Node.js.
  - `routes/` - Rotas da API.
  - `controllers/` - Lógica de controle.
  - `models/` - Modelos de dados.
  - `config/` - Configurações de banco de dados e outras. -->

- **Banco de Dados:**
<!-- - `schema.sql` - Estrutura do banco de dados PostgreSQL.
 - `seed.sql` - Dados iniciais para desenvolvimento e testes. -->

- **Prototipação:**
  - `figma/` - Arquivos de prototipação no Figma.

### Configuração do Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Hypogram-Technologies/HypScrum]
   cd [HypScrum]
   ```
