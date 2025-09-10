import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetTables() {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "Post", "User" RESTART IDENTITY CASCADE;`;
    console.log("Tabelas limpas e IDs resetados!");
  } catch (error) {
    console.error("Erro ao resetar tabelas:", error);
  } finally {
    await prisma.$disconnect();
  }
}

resetTables();
