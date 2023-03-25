//cria uma instancia do prisma para ser reaproveitada em toda a aplicação
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
