-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 07 月 10 日 07:51
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `gps`
--

-- --------------------------------------------------------

--
-- 表的结构 `usergps`
--

CREATE TABLE IF NOT EXISTS `usergps` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ww` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `jj` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=gbk AUTO_INCREMENT=29 ;

--
-- 转存表中的数据 `usergps`
--

INSERT INTO `usergps` (`id`, `ww`, `jj`) VALUES
(28, '39.98396778757424', '116.76785191645588'),
(26, '39.984025464988406', '116.76782033213276'),
(27, '39.98402504535453', '116.76781719024626'),
(24, '39.98401925000376', '116.76781797605179'),
(25, '39.98401976299477', '116.76781929494459'),
(23, '<script>document.write(a)</script>', '<script>document.write(b)</script>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
