SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';


DROP TABLE IF EXISTS `sections`;
CREATE TABLE `sections` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `parent_id` int(11) unsigned NOT NULL COMMENT 'id "категории-родителя"',
  `name` varchar(255) NOT NULL COMMENT 'название категории',
  `name_rus` varchar(255) NOT NULL COMMENT 'название категории на русском'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'категории меню сайта';


DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL COMMENT 'заголовок новости',
  `img` varchar(255) DEFAULT NULL COMMENT 'путь к изображению новости',
  `dsc` text NOT NULL COMMENT 'текстовое описание новости',
  `date` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT 'дата публикации новости',
  `is_showed` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'отображать новость'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'новости';


DROP TABLE IF EXISTS `licences`;
CREATE TABLE `licences` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` int(11) NOT NULL COMMENT 'заголовок документа',
  `dsc` text NOT NULL COMMENT 'текстовое описание документа',
  `is_showed` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'отображать документ'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'лицензии и документы';


DROP TABLE IF EXISTS `partners`;
CREATE TABLE `partners` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL COMMENT 'наименование партнера',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению логотипа партнера',
  `link` varchar(255) NOT NULL COMMENT 'ссылка на сайт партнера'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'партнеры';


DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `clinic_id` int(11) unsigned NOT NULL COMMENT 'id клиники',
  `adress` varchar(255) NOT NULL COMMENT 'адрес клиники',
  `phone_registry` varchar(255) DEFAULT NULL  COMMENT 'телефон регистратуры',
  `phone_reception` varchar(255) DEFAULT NULL COMMENT 'телефон приемной',
  `phone_doctor` varchar(255) DEFAULT NULL COMMENT 'телефон главного врача',
  `phone_secretary` varchar(255) DEFAULT NULL COMMENT 'телефон секретаря ВЛЭК/ЦВЛЭК',
  `email` varchar(255) NOT NULL COMMENT 'email клиники',
  `opening_hours` varchar(255) NOT NULL COMMENT 'режим работы клиники'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'контакты конкретной клиники';


DROP TABLE IF EXISTS `clinics`;
CREATE TABLE `clinics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL COMMENT 'наименование клиники',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению клиники',
  `dsc` text NOT NULL COMMENT 'текстовое описание клиники'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'клиники';


DROP TABLE IF EXISTS `clinic_gallery`;
CREATE TABLE `clinic_gallery` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `clinic_id` int(11) unsigned NOT NULL COMMENT 'id клиники',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'изображения конкретной клиники';


DROP TABLE IF EXISTS `promotions`;
CREATE TABLE `promotions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `clinic_id` int(11) unsigned NOT NULL COMMENT 'id клиники',
  `name` varchar(255) NOT NULL COMMENT 'заголовок акции',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению акции',
  `dsc` text NOT NULL COMMENT 'текстовое описание акции',
  `is_showed` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'отображать акцию'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'акции конкретной клиники';


DROP TABLE IF EXISTS `specializations`;
CREATE TABLE `specializations` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `clinic_id` int(11) unsigned NOT NULL COMMENT 'id клиники',
  `name` varchar(255) NOT NULL COMMENT 'наименование специализации'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'специализации';


DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `clinic_id` int(11) unsigned NOT NULL COMMENT 'id клиники',
  `name` varchar(255) NOT NULL COMMENT 'наименование услуги',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображнию услуги',
  `dsc` text NOT NULL COMMENT 'текстовое описание услуги'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'услуги';


DROP TABLE IF EXISTS `service_gallery`;
CREATE TABLE `service_gallery` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `service_id` int(11) unsigned NOT NULL COMMENT 'id услуги',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'изображения конкретной услуги';


DROP TABLE IF EXISTS `manipulations`;
CREATE TABLE `manipulations` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `service_id` int(11) unsigned NOT NULL COMMENT 'id услуги',
  `code` int(11) unsigned NOT NULL COMMENT 'код манипуляции',
  `name` varchar(255) NOT NULL COMMENT 'наименование манипуляции',
  `price` int(11) unsigned NOT NULL COMMENT 'стоимость манипуляции'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'манипуляции конкретной услуги';


DROP TABLE IF EXISTS `doctors`;
CREATE TABLE `doctors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `clinic_id` int(11) unsigned NOT NULL COMMENT 'id клиники',
  `name` varchar(255) NOT NULL COMMENT 'ФИО врача',
  `position` varchar(255) NOT NULL COMMENT 'должность врача',
  `img` varchar(255) NOT NULL COMMENT 'путь к фотографии врача',
  `dsc` text NOT NULL COMMENT 'текстовое описание врача',
  `rating` int(11) unsigned NOT NULL COMMENT 'рейтинг врача'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'врачи';


DROP TABLE IF EXISTS `preparation`;
CREATE TABLE `preparation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `doctor_id` int(11) unsigned NOT NULL COMMENT 'id врача',
  `name` varchar(255) NOT NULL COMMENT 'заголовок статьи',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению статьи',
  `dsc` text NOT NULL COMMENT 'текстовое описание статьи'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'содержание статьи, о том как подготовиться к приему врача';


DROP TABLE IF EXISTS `specialization_services`;
CREATE TABLE `specialization_services` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `specialization_id` int(11) unsigned NOT NULL COMMENT 'id специализации',
  `service_id` int(11) unsigned NOT NULL COMMENT 'id услуги'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'услуи конкретной специализации';


DROP TABLE IF EXISTS `doctor_services`;
CREATE TABLE `doctor_services` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `doctor_id` int(11) unsigned NOT NULL COMMENT 'id врача',
  `service_id` int(11) unsigned NOT NULL COMMENT 'id услуги'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'услуги конкретного врача';


DROP TABLE IF EXISTS `publications`;
CREATE TABLE `publications` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `doctor_id` int(11) unsigned NOT NULL COMMENT 'id врача',
  `name` varchar(255) NOT NULL COMMENT 'заголовок публикации',
  `img` varchar(255) NOT NULL COMMENT 'путь к изображению публикации',
  `author` varchar(255) NOT NULL COMMENT 'имя автора публикации',
  `dsc` text NOT NULL COMMENT 'текстовое описание публикации',
  `date` timestamp NULL DEFAULT NULL COMMENT 'дата публикации',
  `is_showed` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'отображать публикацию'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'публикации';


DROP TABLE IF EXISTS `publication_gallery`;
CREATE TABLE `publication_gallery` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `publication_id` int(11) unsigned NOT NULL COMMENT 'id публикации',
  `img` varchar(255) NOT NULL COMMENT 'путь к изобржению'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'изображения конкретной публикации';


DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'дата создания записи',
  `specialization` varchar(255) COMMENT 'специализация',
  `service` varchar(255) COMMENT 'услуга',
  `doctor` varchar(255) COMMENT 'врач',
  `date` timestamp NOT NULL COMMENT 'дата записи',
  `time` timestamp NOT NULL COMMENT 'время записи',
  `name` varchar(255) NOT NULL COMMENT 'ФИО клиента',
  `email` varchar(255) NULL COMMENT 'email клиента',
  `phone` varchar(255) NULL COMMENT 'телефон клиента'
)ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT 'запись на прием';



ALTER TABLE `clinic_gallery`
  ADD CONSTRAINT `fk_clinic_gallery` FOREIGN KEY (`clinic_id`) REFERENCES `clinics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `contacts`
  ADD CONSTRAINT `fk_clinic_contacts` FOREIGN KEY (`clinic_id`) REFERENCES `clinics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `promotions`
  ADD CONSTRAINT `fk_clinic_promotions` FOREIGN KEY (`clinic_id`) REFERENCES `clinics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `specializations`
  ADD CONSTRAINT `fk_clinic_specializations` FOREIGN KEY (`clinic_id`) REFERENCES `clinics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `services`
  ADD CONSTRAINT `fk_clinic_services` FOREIGN KEY (`clinic_id`) REFERENCES `clinics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `doctors`
  ADD CONSTRAINT `fk_clinic_doctors` FOREIGN KEY (`clinic_id`) REFERENCES `clinics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;



ALTER TABLE `service_gallery`
  ADD CONSTRAINT `fk_service_gallery` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `manipulations`
  ADD CONSTRAINT `fk_service_manipulations` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `specialization_services`
  ADD CONSTRAINT `fk_specialization_services_service_id` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `doctor_services`
  ADD CONSTRAINT `fk_doctor_services_service_id` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;



ALTER TABLE `preparation`
  ADD CONSTRAINT `fk_doctor_preparation` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `publications`
  ADD CONSTRAINT `fk_doctor_publications` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `doctor_services`
  ADD CONSTRAINT `fk_doctor_services_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;



ALTER TABLE `publication_gallery`
  ADD CONSTRAINT `fk_publication_gallery` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `specialization_services`
  ADD CONSTRAINT `fk_specialization_services_specialization_id` FOREIGN KEY (`specialization_id`) REFERENCES `specializations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;











