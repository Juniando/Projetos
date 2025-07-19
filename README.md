# 🛠️ Projetos em Desenvolvimento - Juniando

Este repositório contém o código-fonte da seção **"Projetos em Desenvolvimento"** do site [Juniando](https://www.juniando.com.br/), uma iniciativa colaborativa voltada a desenvolvedores juniores.

## 📌 Sobre a Seção

A seção **Projetos em Desenvolvimento** tem como objetivo dar visibilidade aos projetos em construção por membros da comunidade Juniando. É um espaço para:

- Compartilhar ideias e projetos com outras pessoas desenvolvedoras;
- Praticar colaboração em equipe;
- Divulgar repositórios no GitHub;
- Acompanhar o progresso dos projetos;
- Promover engajamento e conexões dentro da comunidade tech júnior.

> 💡 **"Explore os projetos que estão sendo construídos por desenvolvedores juniores da nossa comunidade. Contribua, acompanhe o progresso e veja quem está por trás de cada ideia."**

## ✨ Funcionalidades

- ✅ Listagem de projetos em um grid responsivo (1 coluna no mobile, 2 colunas em telas maiores)
- ✅ Card para cada projeto com:
  - Nome do projeto
  - Descrição resumida (até 250 caracteres)
  - Link para o repositório no GitHub
  - Lista de integrantes e suas funções
  - Botão de “Ver mais detalhes”
- ✅ Modal ou página interna com informações completas do projeto
- 🔍 (Em breve) Filtros por stack/tecnologia (ex: React, Node.js, HTML/CSS)

## 🧱 Tecnologias Utilizadas

### Front-end
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)

### Back-end
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js v18+
- Yarn ou npm
- Prisma CLI (`npx prisma`)

### Passos

1. Clone este repositório:

```bash
git clone https://github.com/juniando/projetos-em-desenvolvimento.git
cd projetos-em-desenvolvimento
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` com as variáveis necessárias, por exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
```

4. Rode as migrations:

```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor de desenvolvimento:

```bash
# Para o front-end (Next.js)
cd frontend
npm run dev

# Para o back-end (Express)
cd backend
npm run dev
```
## 🤝 Contribuindo

Quer colaborar com este projeto?

1. Fork este repositório
2. Crie sua branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça suas alterações e commite (`git commit -m 'feat: nova funcionalidade'`)
4. Push para a sua branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 👥 Equipe do Projeto

Este projeto está sendo desenvolvido de forma colaborativa por membros da comunidade Juniando.

## 🌐 Links Úteis

- **Site oficial:** [https://www.juniando.com.br/](https://www.juniando.com.br/)
