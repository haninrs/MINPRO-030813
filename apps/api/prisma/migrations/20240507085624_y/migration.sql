/*
  Warnings:

  - You are about to drop the `referralother` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `referralother` DROP FOREIGN KEY `ReferralOther_user_CostumerId_fkey`;

-- AlterTable
ALTER TABLE `user_costumer` ADD COLUMN `referrralOther` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `referralother`;
