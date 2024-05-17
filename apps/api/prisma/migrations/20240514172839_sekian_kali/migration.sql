/*
  Warnings:

  - You are about to drop the column `isPromotor` on the `user_costumer` table. All the data in the column will be lost.
  - You are about to drop the `referralother` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `referralother` DROP FOREIGN KEY `ReferralOther_user_CostumerId_fkey`;

-- AlterTable
ALTER TABLE `points` ADD COLUMN `isUsed` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user_costumer` DROP COLUMN `isPromotor`,
    ADD COLUMN `accountType` VARCHAR(191) NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE `referralother`;
