-- DropForeignKey
ALTER TABLE "Abastecimento" DROP CONSTRAINT "Abastecimento_placa_fkey";

-- AddForeignKey
ALTER TABLE "Abastecimento" ADD CONSTRAINT "Abastecimento_id_fkey" FOREIGN KEY ("id") REFERENCES "Veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
