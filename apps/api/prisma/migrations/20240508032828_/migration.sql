/*
  Warnings:

  - You are about to drop the `referralother` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[referrralOther]` on the table `User_Costumer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `referralother` DROP FOREIGN KEY `ReferralOther_user_CostumerId_fkey`;

-- AlterTable
ALTER TABLE `user_costumer` ADD COLUMN `referrralOther` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `referralother`;

-- CreateIndex
CREATE UNIQUE INDEX `User_Costumer_referrralOther_key` ON `User_Costumer`(`referrralOther`);
