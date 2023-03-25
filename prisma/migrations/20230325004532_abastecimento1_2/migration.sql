/*
  Warnings:

  - You are about to drop the column `veiculoId` on the `Abastecimento` table. All the data in the column will be lost.
  - Added the required column `placa` to the `Abastecimento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Abastecimento" DROP CONSTRAINT "Abastecimento_veiculoId_fkey";

-- AlterTable
ALTER TABLE "Abastecimento" DROP COLUMN "veiculoId",
ADD COLUMN     "placa" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Abastecimento" ADD CONSTRAINT "Abastecimento_placa_fkey" FOREIGN KEY ("placa") REFERENCES "Veiculo"("placa") ON DELETE RESTRICT ON UPDATE CASCADE;
