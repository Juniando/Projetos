import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      {name: "Thiago Silva", email: "thiago1@example.com", password: "senha123"},
      {name: "Ana Costa", email: "ana2@example.com", password: "senha123"},
      {name: "Carlos Oliveira", email: "carlos3@example.com", password: "senha123" },
      {name: "Beatriz Souza", email: "beatriz4@example.com", password: "senha123"},
      {name: "Eduardo Lima", email: "eduardo5@example.com", password: "senha123"},
      {name: "Fernanda Rocha", email: "fernanda6@example.com", password: "senha123"},
      {name: "Gustavo Martins", email: "gustavo7@example.com", password: "senha123"},
      {name: "Juliana Alves", email: "juliana8@example.com", password: "senha123"},
      {name: "Lucas Pereira", email: "lucas9@example.com", password: "senha123"},
      {name: "Mariana Fernandes", email: "mariana10@example.com", password: "senha123"},
    ],
  })

  await prisma.post.createMany({
    data: [
      {
        idCreator: 10,
        title: "API Node com JWT",
        image: "https://picsum.photos/seed/api1/600/400",
        stacks: ["Node.js", "Express", "JWT"],
        about: "Projeto de API RESTful com autenticação JWT.",
        linkRepo: "https://github.com/thiago/api-node",
      },
      {
        idCreator: 5,
        title: "Landing Page React",
        image: "https://picsum.photos/seed/frontend1/600/400",
        stacks: ["React", "TailwindCSS"],
        about: "Landing page responsiva usando React e TailwindCSS.",
        linkRepo: "https://github.com/thiago/landing-react",
      },
      {
        idCreator: 4,
        title: "Todo App Flutter",
        image: "https://picsum.photos/seed/mobile1/600/400",
        stacks: ["Flutter", "Dart"],
        about: "Aplicativo de tarefas multiplataforma com Flutter.",
        linkRepo: "https://github.com/ana/flutter-todo",
      },
      {
        idCreator: 3,
        title: "Dashboard Admin",
        image: "https://picsum.photos/seed/dashboard1/600/400",
        stacks: ["React", "Chart.js", "Node.js"],
        about: "Dashboard admin com gráficos dinâmicos e integração API.",
        linkRepo: "https://github.com/ana/admin-dashboard",
      },
      {
        idCreator: 3,
        title: "Chat em Tempo Real",
        image: "https://picsum.photos/seed/chat1/600/400",
        stacks: ["Node.js", "Socket.IO"],
        about: "Chat em tempo real usando WebSockets.",
        linkRepo: "https://github.com/carlos/chat-realtime",
      },
      {
        idCreator: 2,
        title: "E-commerce Next.js",
        image: "https://picsum.photos/seed/ecommerce1/600/400",
        stacks: ["Next.js", "Stripe", "PostgreSQL"],
        about: "Loja virtual com SSR e integração Stripe.",
        linkRepo: "https://github.com/beatriz/ecommerce-next",
      },
      {
        idCreator: 10,
        title: "Blog Markdown",
        image: "https://picsum.photos/seed/blog1/600/400",
        stacks: ["Node.js", "Markdown"],
        about: "Blog que renderiza artigos em Markdown.",
        linkRepo: "https://github.com/beatriz/markdown-blog",
      },
      {
        idCreator: 4,
        title: "API GraphQL Apollo",
        image: "https://picsum.photos/seed/api2/600/400",
        stacks: ["GraphQL", "Apollo Server"],
        about: "API de exemplo usando GraphQL e Apollo Server.",
        linkRepo: "https://github.com/eduardo/api-graphql",
      },
      {
        idCreator: 3,
        title: "Login Seguro Node",
        image: "https://picsum.photos/seed/auth1/600/400",
        stacks: ["Node.js", "JWT", "bcrypt"],
        about: "Autenticação segura com bcrypt e JWT.",
        linkRepo: "https://github.com/eduardo/login-secure",
      },
      {
        idCreator: 4,
        title: "Jogo da Cobrinha JS",
        image: "https://picsum.photos/seed/game1/600/400",
        stacks: ["JavaScript", "HTML", "CSS"],
        about: "Jogo da cobrinha implementado em JS puro.",
        linkRepo: "https://github.com/fernanda/js-snake",
      },
      {
        idCreator: 5,
        title: "Weather App",
        image: "https://picsum.photos/seed/weather1/600/400",
        stacks: ["JavaScript", "API REST"],
        about: "App de previsão do tempo consumindo API externa.",
        linkRepo: "https://github.com/fernanda/weather-app",
      },
      {
        idCreator: 6,
        title: "Portfolio Dev",
        image: "https://picsum.photos/seed/portfolio1/600/400",
        stacks: ["HTML", "CSS", "JavaScript"],
        about: "Site pessoal responsivo para desenvolvedores.",
        linkRepo: "https://github.com/gustavo/dev-portfolio",
      },
      {
        idCreator: 7,
        title: "API com NestJS",
        image: "https://picsum.photos/seed/api3/600/400",
        stacks: ["NestJS", "TypeScript"],
        about: "API modular usando NestJS.",
        linkRepo: "https://github.com/juliana/api-nest",
      },
      {
        idCreator: 3,
        title: "Microserviço Pagamentos",
        image: "https://picsum.photos/seed/microservice1/600/400",
        stacks: ["Node.js", "RabbitMQ"],
        about: "Microserviço de pagamentos usando RabbitMQ.",
        linkRepo: "https://github.com/juliana/microservice-payments",
      },
      {
        idCreator: 9,
        title: "CRUD com Prisma",
        image: "https://picsum.photos/seed/crud1/600/400",
        stacks: ["Prisma", "Express", "PostgreSQL"],
        about: "API CRUD conectada a PostgreSQL usando Prisma ORM.",
        linkRepo: "https://github.com/lucas/prisma-crud",
      },
      {
        idCreator: 10,
        title: "Sistema de Estoque",
        image: "https://picsum.photos/seed/inventory1/600/400",
        stacks: ["React", "Node.js"],
        about: "Sistema de controle de estoque com dashboard.",
        linkRepo: "https://github.com/lucas/inventory-system",
      },
      {
        idCreator: 4,
        title: "Finance App",
        image: "https://picsum.photos/seed/finance1/600/400",
        stacks: ["React Native", "Expo"],
        about: "App de controle financeiro com gráficos interativos.",
        linkRepo: "https://github.com/mariana/finance-app",
      },
      {
        idCreator: 10,
        title: "API Upload AWS",
        image: "https://picsum.photos/seed/api4/600/400",
        stacks: ["Node.js", "AWS S3"],
        about: "API para upload e armazenamento de arquivos no AWS S3.",
        linkRepo: "https://github.com/mariana/file-upload-api",
      },
    ],
  })

  console.log("✅ banco populado com sucesso!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
