# MyPlanner

Este é um projeto Angular, publicado no Netlify e pode ser acessado por aqui: [MyPlanner](https://my-planner-poc.netlify.app)

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Visão Geral

O Gerenciador de Tarefas é uma aplicação web que permite a criação, edição, exclusão e visualização de tarefas, sendo organizadas através de boards que também podem ser criados, editados, excluidos e editados pela home. A interface foi construída utilizando Angular 17, com componentes visuais fornecidos pelo PrimeNG e layout flexível pelo PrimeFlex.

## Tecnologias Utilizadas

- **Angular 17**: Framework de front-end para desenvolvimento de aplicações web.
- **PrimeNG**: Biblioteca de componentes UI para Angular.
- **PrimeFlex**: Biblioteca de utilitários CSS para layout flexível.
- **Netlify**: Plataforma de hospedagem para sites estáticos e aplicativos front-end.

## Funcionalidades

- **Adicionar Boards**: Permite ao usuário adicionar novos boards.
- **Editar Boards**: Permite ao usuário editar boards existentes.
- **Deletar Boards**: Permite ao usuário deletar boards.
- **Listar Boards**: Exibe todas os boards.
- **Visualizar Boards**: Acessar e gerenciar conteudo dos boards.
  - **Adicionar Tarefa**: Permite ao usuário adicionar novas tarefas.
  - **Editar Tarefa**: Permite ao usuário editar tarefas existentes.
  - **Deletar Tarefa**: Permite ao usuário deletar tarefas.
  - **Listar Tarefas**: Exibe todas as tarefas em uma lista.
  - **Visualizar Tarefas**: Exibir e gerenciar conteudo e status das tarefas.
  - **Gerenciar Tarefas**: Exibe todas as tarefas em uma lista.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em seu computador:

- **Node.js** (versão 16 ou superior): [Baixe e instale o Node.js](https://nodejs.org/)
- **Angular CLI** (versão 17 ou superior): Pode ser instalado globalmente via npm: `npm install -g @angular/cli`
- **Git**: [Baixe e instale o Git](https://www.git-scm.com/downloads) para clonar o repositório

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clone o repositório

Abra o terminal ou prompt de comando e execute:

```bash
git clone https://github.com/welerson32/my-planner.git
cd my-planner
```

### 2. Instale as dependências

Ainda no terminal, dentro do diretório do projeto, execute:

```bash
npm install
```

Isso instalará todas as dependências necessárias para executar a aplicação.

### 3. Inicie o servidor de desenvolvimento

Execute o comando a seguir para iniciar a aplicação:

```bash
ng serve
```

### 4. Acesse a aplicação

Abra seu navegador e acesse `http://localhost:4200`. Você verá a aplicação em execução.

## Uso

Para usar o Gerenciador de Tarefas, siga os passos:

1. Acesse a aplicação através da URL [https://my-planner-poc.netlify.app](https://my-planner-poc.netlify.app).
2. Utilize os botões e formulários para adicionar, editar, deletar e visualizar boards e tarefas.
3. Marque tarefas como Pendente/Em Progresso/Concluído quando necessário.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura de diretórios e arquivos do projeto:

```
my-planner/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── models/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── ...
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .gitignore
├── angular.json
├── package.json
└── README.md
```

- **src/app/components**: Contém os componentes gerais do projeto.
- **src/app/models**: Contém os modelos de dados.
- **src/app/pages**: Contém as paginas do sistema.
- **src/app/services**: Contém os serviços Angular.
- **src/app/app.routes.ts**: Contém as configurações de rota.
- **angular.json**: Configuração do Angular CLI.
- **package.json**: Lista de dependências e scripts do projeto.

---

Feito por [Welerson Oliveira](https://github.com/welerson32).
