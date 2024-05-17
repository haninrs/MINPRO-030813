/*
  Warnings:

  - You are about to alter the column `referrralOther` on the `user_costumer` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - A unique constraint covering the columns `[referrralOther]` on the table `User_Costumer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user_costumer` MODIFY `referrralOther` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Costumer_referrralOther_key` ON `User_Costumer`(`referrralOther`);
