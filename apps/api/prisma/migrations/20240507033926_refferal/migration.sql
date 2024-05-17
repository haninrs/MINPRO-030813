/*
  Warnings:

  - You are about to drop the column `referralUsed` on the `user_costumer` table. All the data in the column will be lost.
  - You are about to drop the `referralusage` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[codeReferral]` on the table `User_Costumer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `referralusage` DROP FOREIGN KEY `ReferralUsage_user_CostumerId_fkey`;

-- DropIndex
DROP INDEX `User_Costumer_referralUsed_key` ON `user_costumer`;

-- AlterTable
ALTER TABLE `user_costumer` DROP COLUMN `referralUsed`,
    ADD COLUMN `codeReferral` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `referralusage`;

-- CreateTable
CREATE TABLE `ReferralOwn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referralNumber` VARCHAR(191) NOT NULL,
    `user_CostumerId` INTEGER NOT NULL,
    `usedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_Costumer_codeReferral_key` ON `User_Costumer`(`codeReferral`);

-- AddForeignKey
ALTER TABLE `ReferralOwn` ADD CONSTRAINT `ReferralOwn_user_CostumerId_fkey` FOREIGN KEY (`user_CostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
