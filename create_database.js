var mysql = require('mysql');
var dbconfig = require('./config/database');

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`users` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
)'
);
console.log('Success: Database Created!')
connection.end();


