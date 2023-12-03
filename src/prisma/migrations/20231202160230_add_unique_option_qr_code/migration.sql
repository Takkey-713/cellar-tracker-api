/*
  Warnings:

  - A unique constraint covering the columns `[qrcode]` on the table `wines` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wines_qrcode_key" ON "wines"("qrcode");
