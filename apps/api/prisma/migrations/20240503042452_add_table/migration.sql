-- CreateTable
CREATE TABLE `User_Costumer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `referralUsed` VARCHAR(191) NULL,
    `points` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `User_Costumer_username_key`(`username`),
    UNIQUE INDEX `User_Costumer_email_key`(`email`),
    UNIQUE INDEX `User_Costumer_referralUsed_key`(`referralUsed`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Promotor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_Promotor_username_key`(`username`),
    UNIQUE INDEX `User_Promotor_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReferralUsage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referralNumber` VARCHAR(191) NOT NULL,
    `user_CostumerId` INTEGER NOT NULL,
    `usedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Points` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_CostumerId` INTEGER NOT NULL,
    `points` INTEGER NOT NULL,
    `generatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `experationDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiscountCoupon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_CostumerId` INTEGER NOT NULL,
    `discountPercent` DOUBLE NOT NULL DEFAULT 0.10,
    `experationDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReferralUsage` ADD CONSTRAINT `ReferralUsage_user_CostumerId_fkey` FOREIGN KEY (`user_CostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Points` ADD CONSTRAINT `Points_user_CostumerId_fkey` FOREIGN KEY (`user_CostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiscountCoupon` ADD CONSTRAINT `DiscountCoupon_user_CostumerId_fkey` FOREIGN KEY (`user_CostumerId`) REFERENCES `User_Costumer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
