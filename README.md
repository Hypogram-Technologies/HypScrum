# HypScrum

## Descrição

Este projeto é um sistema web desenvolvido para guiar os usuários no aprendizado do Scrum. O sistema inclui seções de instrução com avaliações e um mecanismo para emissão de certificados de conclusão do curso. Ele é construído utilizando HTML, CSS, JavaScript e PostgreSQL, e as telas foram prototipadas no Figma.

## Link para o Trello
Clique [aqui](https://trello.com/invite/b/66cc7d761cd6040a5574bd51/ATTI15a79678699b499a3056afb930ed8bceB5811606/abp) para acessar o quadro do Trello do projeto


## SPRINTS

|  SPRINT  |      LINK     |   INÍCIO   |   ENTREGA  |     STATUS    |
|----------|---------------|------------|------------|---------------|
|    01    | [Sprint 01]() | 10/09/2024 | 02/10/2024 | Em andamento  |  
|    02    | [Sprint 02]() | 07/10/2024 | 01/11/2024 | Aguardando... |
|    03    | [Sprint 03]() | 04/11/2024 | 22/11/2024 | Aguardando... |

<!-- ✔ -->

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

##  EQUIPE
<br>

| NOME               | FUNÇÃO        | GITHUB                               |
|--------------------|---------------|--------------------------------------|
|  Gustavo de Moraes Silva | Scrum Master  | [guhms7](https://github.com/guhms7) |
|  Carlos Henrique Magalhaes | Project Owner | [carlosedsmagalhes](https://github.com/carlosedsmagalhes)      |
| Adson Ottoni Balbino Filho | Developer     | [adsonfilho](https://github.com/adsonfilho) |
| Andressa Stephane Toledo da Silva     | Developer     | [andressatoledo](https://github.com/andressatoledo) |
| Eduardo Henrique Alves Arantes  | Developer     | [eduardohalves](https://github.com/eduardohalves) |
| Luiz Filipe da Silva | Developer     | [luizitoofs](https://github.com/luizitoofs) |
| Marcella Souto de Carvalho | Developer     | [masoutoc](https://github.com/masoutoc)|
| Tauane Mariano dos Santos | Developer     | [Thaune21](https://github.com/Thaune21)|

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** JavaScript (Node.js)
- **Banco de Dados:** PostgreSQL
- **Prototipação:** Figma
<!-- - **Hospedagem:** [Nome do serviço de nuvem utilizado] -->
- **Controle de Versão e Documentação:** GitHub

## Estrutura do Projeto

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

## Configuração do Projeto

### Pré-requisitos

- Node.js
- PostgreSQL

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Hypogram-Technologies/HypScrum]
   cd [HypScrum]
