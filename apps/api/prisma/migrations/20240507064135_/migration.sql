/*
  Warnings:

  - You are about to drop the column `codeReferral` on the `user_costumer` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `user_costumer` table. All the data in the column will be lost.
  - You are about to drop the `referralown` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[referralOwn]` on the table `User_Costumer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `referralown` DROP FOREIGN KEY `ReferralOwn_user_CostumerId_fkey`;

-- DropIndex
DROP INDEX `User_Costumer_codeReferral_key` ON `user_costumer`;

-- AlterTable
ALTER TABLE `points` MODIFY `points` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_costumer` DROP COLUMN `codeReferral`,
    DROP COLUMN `points`,
    ADD COLUMN `referralOwn` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `referralown`;

-- CreateTable
CREATE TABLE `ReferralOther` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referralNumber` VARCHAR(191) NOT NULL,
    `user_CostumerId` INTEGER NOT NULL,
    `usedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_Costumer_referralOwn_key` ON `User_Costumer`(`referralOwn`);

-- AddForeignKey
ALTER TABLE `ReferralOther` ADD CONSTRAINT `ReferralOther_user_CostumerId_fkey` FOREIGN KEY (`user_CostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
