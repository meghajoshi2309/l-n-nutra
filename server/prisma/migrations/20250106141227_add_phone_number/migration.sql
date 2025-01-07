/*
  Warnings:

  - You are about to drop the `phone_verifications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `phone_verifications` DROP FOREIGN KEY `phone_verifications_userId_fkey`;

-- DropTable
DROP TABLE `phone_verifications`;

-- CreateTable
CREATE TABLE `phone_number` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `mobilenumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `phone_number` ADD CONSTRAINT `phone_number_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
