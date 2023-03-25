/*
  Warnings:

  - Added the required column `ano` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Veiculo" ADD COLUMN     "ano" TEXT NOT NULL;
