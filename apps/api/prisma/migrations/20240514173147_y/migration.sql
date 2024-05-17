/*
  Warnings:

  - You are about to drop the column `referralOwn` on the `user_costumer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referral]` on the table `User_Costumer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_Costumer_referralOwn_key` ON `user_costumer`;

-- AlterTable
ALTER TABLE `user_costumer` DROP COLUMN `referralOwn`,
    ADD COLUMN `referral` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Costumer_referral_key` ON `User_Costumer`(`referral`);
