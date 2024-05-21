-- AlterTable
ALTER TABLE `user_costumer` MODIFY `image` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `user_promotor` MODIFY `image` LONGTEXT NULL;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `imageUrl` LONGTEXT NOT NULL,
    `startDateTime` DATETIME(3) NOT NULL,
    `endDateTime` DATETIME(3) NOT NULL,
    `price` INTEGER NOT NULL,
    `isFree` BOOLEAN NOT NULL DEFAULT false,
    `ticket` INTEGER NULL,
    `userPromotorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userCostumerId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,
    `totalAmount` INTEGER NOT NULL,
    `quantity` INTEGER NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_userPromotorId_fkey` FOREIGN KEY (`userPromotorId`) REFERENCES `User_Promotor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userCostumerId_fkey` FOREIGN KEY (`userCostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
