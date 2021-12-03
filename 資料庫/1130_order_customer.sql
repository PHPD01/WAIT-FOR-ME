-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-11-30 01:49:37
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `foodie`
--

-- --------------------------------------------------------

--
-- 資料表結構 `order_customer`
--

CREATE TABLE `order_customer` (
  `id` int(255) NOT NULL,
  `name` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `note` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `order_customer`
--

INSERT INTO `order_customer` (`id`, `name`, `phone`, `note`) VALUES
(31, '金先生', '02222', 'yyy'),
(33, 'f先生', 'ff', 'fyyy');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `order_customer`
--
ALTER TABLE `order_customer`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
