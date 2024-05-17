/*
  Warnings:

  - You are about to drop the column `referrralOther` on the `user_costumer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_Costumer_referrralOther_key` ON `user_costumer`;

-- AlterTable
ALTER TABLE `user_costumer` DROP COLUMN `referrralOther`,
    MODIFY `referralOwn` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ReferralOther` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referralNumber` VARCHAR(191) NOT NULL,
    `user_CostumerId` INTEGER NOT NULL,
    `usedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReferralOther` ADD CONSTRAINT `ReferralOther_user_CostumerId_fkey` FOREIGN KEY (`user_CostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
