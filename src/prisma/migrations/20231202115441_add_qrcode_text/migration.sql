/*
  Warnings:

  - Added the required column `text` to the `qrcodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "qrcodes" ADD COLUMN     "text" TEXT NOT NULL;
