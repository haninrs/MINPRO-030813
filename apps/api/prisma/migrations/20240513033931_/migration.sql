/*
  Warnings:

  - You are about to drop the column `token` on the `user_promotor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralNumber]` on the table `ReferralOther` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_Promotor_token_key` ON `user_promotor`;

-- AlterTable
ALTER TABLE `user_costumer` ADD COLUMN `isPromotor` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user_promotor` DROP COLUMN `token`;

-- CreateIndex
CREATE UNIQUE INDEX `ReferralOther_referralNumber_key` ON `ReferralOther`(`referralNumber`);
