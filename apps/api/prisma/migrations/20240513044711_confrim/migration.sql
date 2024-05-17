/*
  Warnings:

  - Added the required column `confirmPw` to the `User_Costumer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_costumer` ADD COLUMN `confirmPw` VARCHAR(191) NOT NULL;
