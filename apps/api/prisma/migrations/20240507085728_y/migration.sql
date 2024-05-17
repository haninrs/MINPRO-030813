/*
  Warnings:

  - You are about to drop the column `token` on the `user_costumer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_Costumer_token_key` ON `user_costumer`;

-- AlterTable
ALTER TABLE `user_costumer` DROP COLUMN `token`;
