/*
  Warnings:

  - You are about to drop the `qrcodes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `qrcode` to the `wines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "qrcodes" DROP CONSTRAINT "qrcodes_userId_fkey";

-- DropForeignKey
ALTER TABLE "qrcodes" DROP CONSTRAINT "qrcodes_wineId_fkey";

-- AlterTable
ALTER TABLE "wines" ADD COLUMN     "qrcode" TEXT NOT NULL;

-- DropTable
DROP TABLE "qrcodes";
