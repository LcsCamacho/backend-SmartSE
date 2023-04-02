-- DropForeignKey
ALTER TABLE "Abastecimento" DROP CONSTRAINT "Abastecimento_id_fkey";

-- AddForeignKey
ALTER TABLE "Abastecimento" ADD CONSTRAINT "Abastecimento_placa_fkey" FOREIGN KEY ("placa") REFERENCES "Veiculo"("placa") ON DELETE CASCADE ON UPDATE CASCADE;
