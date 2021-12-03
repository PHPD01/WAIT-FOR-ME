-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-11-30 01:48:52
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
-- 資料表結構 `order_info`
--

CREATE TABLE `order_info` (
  `id` int(255) NOT NULL,
  `sid` int(255) NOT NULL,
  `datetime` varchar(30) NOT NULL,
  `person` tinyint(4) NOT NULL,
  `ordertime_select` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `order_info`
--

INSERT INTO `order_info` (`id`, `sid`, `datetime`, `person`, `ordertime_select`) VALUES
(32, 2, '2021年 12月 1日', 3, '11:00'),
(33, 2, '2021年 11月 30日', 1, '13:00');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `order_info`
--
ALTER TABLE `order_info`
  ADD PRIMARY KEY (`id`,`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_info`
--
ALTER TABLE `order_info`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
