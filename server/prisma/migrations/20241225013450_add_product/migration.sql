-- CreateTable
CREATE TABLE `Product` (
    `ProductID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `Description` TEXT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,
    `Tag` VARCHAR(100) NULL,
    `ImageUrl` VARCHAR(255) NULL,
    `StockQuantity` INTEGER NOT NULL,

    PRIMARY KEY (`ProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
