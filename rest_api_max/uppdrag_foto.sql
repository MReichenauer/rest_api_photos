-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 20, 2024 at 12:01 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uppdrag_foto`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `title`, `userId`) VALUES
(1, 'Helt fräsh album unooo', 5),
(2, 'Album', 5),
(3, 'Max album', 7),
(4, 'karlpedal album', 34),
(5, 'ElitensElit Yoooo', 34);

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`id`, `title`, `url`, `comment`, `userId`) VALUES
(1, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 5),
(2, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 7),
(3, 'Con', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 7),
(4, 'Confetti Photo #2', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetty', 7),
(5, 'Ny freeesh', 'https://images.unsplashcom/photo-1337elite', 'Helt fräsh kommentar', 5),
(6, 'Confetti Photo #4', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetty', 34),
(7, 'Fiin tiitle', 'https://images.unsplashcom/photo-1337elite', 'Helt fräsh kommentar och finaste kommentaren eevvvaaah', 34);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(2, 'albert@gmail.com', '$2b$10$M9Beha0GEkYMt9FLgVBqcutVkTqTxCAqFCFH/RxKVKdionoSkg5RC', 'Albert', 'Reichenauer'),
(5, 'valentine@gmail.com', '$2b$10$tf2Xl2Oq3tyoX9Z/kkQ3Y.YJ2xAX5JVzodzCg9oFx5M1IYBXMsxnu', 'Valentine', 'Lindqvist'),
(7, 'max@gmail.com', '$2b$10$ucJl3ccuI3dJwv1vUw7D/eYl4gya7WRD0e0NEDKWyi/6XVXbbFkbq', 'Max', 'Reichenauer'),
(8, 'sonja@gmail.com', '$2b$10$19N/PTJvgai2E2WJbuc5g.ht3T2KEr7CXQmAWTCzlHIKnIjVxD55G', 'Sonja', 'Reichenauer'),
(9, 'fredrik@gmail.com', '$2b$10$JNpfGEhFdmdZxA9eQqSpf.r1TDpMgEIZKprc387ws46Nwo6mF7Xr6', 'Fredrik', 'Fredriksson'),
(10, 'kalle@gmail.com', '$2b$10$wJ2YJHlECyvjkbVP8CrIOO7ddHgx2.ZckGlPh.uac7nwOEW3PMxMO', 'Kalle', 'Fredriksson'),
(11, 'Karl@gmail.com', '$2b$10$YCZIdLzsu3bA49k4wPhUW.g0uhJ1YeewXO3wb.em57R2.pqbJ5mg6', 'Karl', 'Karlsson'),
(12, 'lina@gmail.com', '$2b$10$HqUVdqW8f/I992K1uSFC.OzBMrqz3v9qmVMoFPmFuagY092bkECD6', 'Lina', 'Nilsson'),
(13, 'karin@gmail.com', '$2b$10$UHXGk15nf6VldBZQDnUEhOqPmKITTCAK0332ZLnfXid83INEtk0Ym', 'Kargin', 'Lindqvist'),
(14, 'kjell@gmail.com', '$2b$10$RWEleDOACtJjX1A1SRo.POfwyvCsX2hHtb/rxqqAUXpyQsA9.RlvW', 'Kjell', 'Krimminell'),
(15, 'hest@gmail.com', '$2b$10$OXdRGzsEIw0uV.xybcg42.N/XJpsrgrRNSojcT2GZ6Ki6SM7vZq6O', 'Hest', 'Snell'),
(17, 'h', '$2b$10$AVUy6x7cOBqqLEBx4Mc2o.HTaibPN80ud0No6Bw2FSBNi4DyrNKnS', 'Bengt', 'Snell'),
(19, 'helena@gmail.com', '$2b$10$E/bvyX3Ebk/OyUj56UpeV.ygVTilrb3qlL87UwzV7RPpSTqk/aALK', 'Helna', 'Södersson'),
(20, 'jonas@gmail.com', '$2b$10$POXG07djILrenuP9wK6DvudICiHJFpGC8gHDfiDxk4RcVt3Jjhp1q', 'Jonas', 'Södersson'),
(21, 'erik@gmail.com', '$2b$10$NOjkR4uyNFxgyT5UUyqP8.M6kbe8wcXviiFEElswCNCydtY9LusvG', 'Erik', 'Södersson'),
(22, 'filip@gmail.com', '$2b$10$.RrbWIvUVSEVfci/WlINxuabaWPKFzMThrMSnAdjYaeB2UGJzyA0G', 'Filip', 'Södersson'),
(23, 'matz@gmail.com', '$2b$10$cR7bDiFpow5LSJcjO2semOmBR8R.972Tgbz91KS4UDroyq9OtAI6i', 'Filip', 'Södersson'),
(24, 'mats@gmail.com', '$2b$10$J.voVogUrNgG6R.7i/LZY.cXuU/vf7CMAEgyqiW6Ot.HQNuZvpCx.', 'Filip', 'Södersson'),
(25, 'zander@gmail.com', '$2b$10$izKsUR8yH4WINlo3WC5CWenAKesJku/FaEE6orL6hiHfGKsAgvkMe', 'Filip', 'Södersson'),
(26, 'zande@gmail.com', '$2b$10$e.XiTO6aJfV4SyA9arIF/uVUvHEDdorNVleazqUulP.WaXJ4sxgeC', 'Filip', 'Södersson'),
(27, 'zand@gmail.com', '$2b$10$TFEH7XYIithkp6zA8swlw.lThrI4zMiUtK9QyJew7AVcKia60lNey', 'Filip', 'Södersson'),
(28, 'zany@gmail.com', '$2b$10$/7XsIJj7RXbv/T4EYYI60OyNElRYsk0H5jj.jKzRpr5HR5Wh0ABIe', 'Filip', 'Södersson'),
(29, 'zanys@gmail.com', '$2b$10$hMCpn..JzyhfwiUCHJQKyOpIdxdznResb5eFlFyfQstpOcKu.GY9e', 'Filip', 'Södersson'),
(30, 'zanysd@gmail.com', '$2b$10$B8WRSxiw77fx9D4M2JFw9Oat2Kx1i7HOqU7xdwx91MmVB60BPVruS', 'Filip', 'Södersson'),
(31, 'zanyswd@gmail.com', '$2b$10$ge7PS6cI9Rz2N6YPRvxQau1Sbe8XZqb/85yaRC.4p3Q1Qsid4Gydi', 'Filip', 'Södersson'),
(32, 'zanyq@gmail.com', '$2b$10$yEedJUEirKo5WxI994OWce9MT6FcFsBQrck1ROxU/NE/VF73RJk42', 'Filip', 'Södersson'),
(33, 'klara@gmail.com', '$2b$10$6VJmj/KMUEaGKHFE0ZDPEeIvUOyXXGTijmwSFl4/9I48HgJ9A4CG2', 'klara', 'Södersson'),
(34, 'karledal@gmail.com', '$2b$10$NlZ0B2LD2OF7y/8IQ1TLWu.DP5NYEQUoIsmIkyPYZ2fRB36R77.xe', 'karlpedal', 'Södersson'),
(35, 'karledalen@gmail.com', '$2b$10$XyHOQy5a1X15wOrP5nyvC.qKq9YqOL8GA/Gk/L6KMlSnFmIuemJva', 'moe', 'Söt');

-- --------------------------------------------------------

--
-- Table structure for table `_albumtophoto`
--

CREATE TABLE `_albumtophoto` (
  `A` int(10) UNSIGNED NOT NULL,
  `B` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_albumtophoto`
--

INSERT INTO `_albumtophoto` (`A`, `B`) VALUES
(1, 1),
(1, 2),
(3, 2),
(1, 4),
(1, 5),
(4, 6),
(4, 7);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('5091dc36-26fd-46c0-8454-bce022491bfc', '9ba67d3fbbe6f8d90f3bc9dab4ed6dda7e2cd12ccc48d1f3dbe038c6e1787a64', '2024-02-09 09:08:47.278', '20240209090846_initial', NULL, NULL, '2024-02-09 09:08:46.952', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Album_userId_fkey` (`userId`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Photo_userId_fkey` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_albumtophoto`
--
ALTER TABLE `_albumtophoto`
  ADD UNIQUE KEY `_AlbumToPhoto_AB_unique` (`A`,`B`),
  ADD KEY `_AlbumToPhoto_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `_albumtophoto`
--
ALTER TABLE `_albumtophoto`
  ADD CONSTRAINT `_AlbumToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AlbumToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `photo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
