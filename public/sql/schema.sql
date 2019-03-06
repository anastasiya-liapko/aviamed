CREATE DATABASE `aviamed`
    DEFAULT CHARACTER SET utf8
    DEFAULT COLLATE utf8_general_ci;

    USE `aviamed`;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;