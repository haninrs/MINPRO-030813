/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `User_Costumer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `User_Promotor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `User_Costumer` table without a default value. This is not possible if the table is not empty.
  - Made the column `referralOwn` on table `user_costumer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `token` to the `User_Promotor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_costumer` ADD COLUMN `token` VARCHAR(191) NOT NULL,
    MODIFY `referralOwn` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_promotor` ADD COLUMN `token` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Costumer_token_key` ON `User_Costumer`(`token`);

-- CreateIndex
CREATE UNIQUE INDEX `User_Promotor_token_key` ON `User_Promotor`(`token`);
