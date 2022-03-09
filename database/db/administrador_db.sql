-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-03-2022 a las 20:53:40
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: administrador_db
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla admins
--

CREATE TABLE admins (
  ID int(100) NOT NULL,
  NOMBRES varchar(255) NOT NULL,
  APELLIDOS varchar(255) NOT NULL,
  CORREO varchar(255) NOT NULL,
  CONTRASENA varchar(255) NOT NULL,
  TP_USUARIO int(2) DEFAULT NULL,
  FECHA datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla admins
--

INSERT INTO admins (ID, NOMBRES, APELLIDOS, CORREO, CONTRASENA, TP_USUARIO, FECHA) VALUES
(34, 'Santiago', 'Manosalva Fernández', 'santiago@gmail.com', 'c797201b5aedc3e62a54535be9028629132df6073fcafcfdd1ea7510728a8e075846b9aa7704032bd080ff56c212c4ede61006cc7660793868d9da1fcd5fad7f', 1, '2022-03-09 13:40:54'),
(35, 'Pedro', 'Villa Narvaez', 'pedro@gmail.com', 'fb21e44f8e8eb2ed14485bb88f391a172fc6be611ee375b862e7cf89e2fd998a055ba2616c7a94744ae39d70de098dfeb59097bd6108f17cc34350153347036f', 2, '2022-03-09 07:03:01'),
(36, 'David', 'Gonzales Pérez', 'david@gmail.com', 'b54d3e74a48cc7b3a25e59bc9403643fa3536f7fb7d5e80d56e90e88bc39a35bcd15a7ed0da95e9e58909d2a59ed90918452d719e5c3e9e7858c74a8ec0cb1ac', 2, '2022-03-09 07:03:50'),
(37, 'Mariana', 'Hernández Ortiz', 'mariana@gmail.com', '31e68d1ec10b3d6c8d1d4db219e21f828806ae4b8466a938dd4124f1214198360c459b39ab9fabb3e75bca7b268e43b80aec19f895963b0e091dc658327433db', 2, '2022-03-09 07:03:37'),
(38, 'Juan', 'Sánchez Álvarez', 'juan@gmail.com', '8c01f337447b634716c55239b865f4c3e80431d63fea2d14bee501648142e42e3bb199afcd9bec8944445f43c5b39599dcd61412a0db8f252eb665d8a64e0de9', 2, '2022-03-09 07:03:30'),
(39, 'Maria', 'López Fernández', 'maria@gmail.com', '31e68d1ec10b3d6c8d1d4db219e21f828806ae4b8466a938dd4124f1214198360c459b39ab9fabb3e75bca7b268e43b80aec19f895963b0e091dc658327433db', 2, '2022-03-09 07:03:17'),
(40, 'Sara', 'Villalba Narváez', 'sara@gmail.com', '0111fc603f41f0cfa75a7e7e3d1f9aaf7223313031e46830e8ee5996b2195b156c3fd78bf77662a1fb3bb5e1197d1eeb16f93725eaf813145d67dd72d2138ab0', 2, '2022-03-09 07:03:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla archivos
--

CREATE TABLE archivos (
  ID int(100) NOT NULL,
  ID_USUARIO int(100) NOT NULL,
  EXTENCION varchar(255) NOT NULL,
  CONTENIDO blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla estados
--

CREATE TABLE estados (
  ID int(2) NOT NULL,
  NOMBRE varchar(12) NOT NULL,
  FECHA datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla estados
--

INSERT INTO estados (ID, NOMBRE, FECHA) VALUES
(1, 'Activo', '2022-02-24 15:55:19'),
(2, 'Inactivo', '2022-02-24 15:55:19'),
(3, 'Suspendido', '2022-02-24 15:55:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla generos
--

CREATE TABLE generos (
  ID int(2) NOT NULL,
  NOMBRE varchar(12) NOT NULL,
  ISO varchar(3) NOT NULL,
  FECHA datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla generos
--

INSERT INTO generos (ID, NOMBRE, ISO, FECHA) VALUES
(1, 'Femenino', 'Fem', '2022-02-24 15:51:01'),
(2, 'Masculino', 'Mas', '2022-02-24 15:51:01'),
(3, 'Otro', 'Otr', '2022-02-24 15:51:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla paises
--

CREATE TABLE paises (
  ID int(11) NOT NULL,
  NOMBRE varchar(80) DEFAULT NULL,
  ISO char(2) NOT NULL,
  FECHA timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla paises
--

INSERT INTO paises (ID, NOMBRE, ISO, FECHA) VALUES
(12, 'Argentina', 'AR', '2022-02-23 05:23:03'),
(28, 'Bolivia', 'BO', '2022-02-23 05:23:03'),
(31, 'Brasil', 'BR', '2022-02-23 05:23:03'),
(43, 'Chile', 'CL', '2022-02-23 05:23:03'),
(47, 'Colombia', 'CO', '2022-02-23 05:23:03'),
(60, 'Ecuador', 'EC', '2022-02-23 05:23:03'),
(177, 'Paraguay', 'PY', '2022-02-23 05:23:03'),
(178, 'Perú', 'PE', '2022-02-23 05:23:03'),
(231, 'Uruguay', 'UY', '2022-02-23 05:23:03'),
(234, 'Venezuela', 'VE', '2022-02-23 05:23:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla tp_documentos
--

CREATE TABLE tp_documentos (
  ID int(100) NOT NULL,
  NOMBRE varchar(255) NOT NULL,
  ISO varchar(255) NOT NULL,
  FECHA timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla tp_documentos
--

INSERT INTO tp_documentos (ID, NOMBRE, ISO, FECHA) VALUES
(1, 'Cédula de Ciudadanía', 'CC', '2022-02-23 05:45:24'),
(2, 'Carné de Identidad', 'CI', '2022-02-23 05:45:24'),
(3, 'Cédula de Extranjería', 'CE', '2022-02-23 05:45:24'),
(4, 'Documento Nacional de Identidad', 'DNI', '2022-02-23 05:45:24'),
(5, 'Documento Único de Identidad', 'DUI', '2022-02-23 05:45:24'),
(6, 'Identificación Oficial', 'ID', '2022-02-23 05:45:24'),
(7, 'Tarjeta Pasaporte', 'PT', '2022-02-23 05:45:24'),
(8, 'Registro Civil', 'RC', '2022-02-23 05:45:24'),
(9, 'Tarjeta de Identidad', 'TI', '2022-02-23 05:45:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla tp_usuarios
--

CREATE TABLE tp_usuarios (
  ID int(100) NOT NULL,
  NOMBRE varchar(255) NOT NULL,
  ISO varchar(15) NOT NULL,
  FECHA datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla tp_usuarios
--

INSERT INTO tp_usuarios (ID, NOMBRE, ISO, FECHA) VALUES
(1, 'Super Administrador', 'Super Admin', '2022-03-06 20:00:49'),
(2, 'Administrador', 'Admin', '2022-03-06 20:02:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla usuarios
--

CREATE TABLE usuarios (
  ID int(11) NOT NULL,
  NOMBRES varchar(255) NOT NULL,
  APELLIDOS varchar(255) NOT NULL,
  PAIS int(100) NOT NULL,
  TP_DOCUMENTO int(100) NOT NULL,
  DOCUMENTO int(100) NOT NULL,
  GENERO int(2) NOT NULL,
  ESTADO int(2) NOT NULL,
  FECHA datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla usuarios
--

INSERT INTO usuarios (ID, NOMBRES, APELLIDOS, PAIS, TP_DOCUMENTO, DOCUMENTO, GENERO, ESTADO, FECHA) VALUES
(56, 'Felipe', 'López Gamarra', 47, 1, 100234576, 2, 1, '2022-03-09 13:48:52'),
(57, 'Diego', 'Villa Narvaez', 28, 2, 345276143, 2, 2, '2022-03-09 13:49:57'),
(58, 'Valentina', 'Hernandez Gonzalez', 43, 3, 846531275, 1, 2, '2022-03-09 13:50:25'),
(59, 'Julia', 'Rodríguez Mora', 177, 2, 2147483647, 3, 3, '2022-03-09 13:51:31'),
(60, 'Cristian David', 'Diaz Fuentes', 47, 9, 120354673, 2, 1, '2022-03-09 13:52:19'),
(61, 'Camila', 'Gutiérrez Gonzales', 31, 4, 2147483647, 1, 1, '2022-03-09 13:53:17'),
(62, 'Andrés', 'Celis Jiménez', 60, 6, 2147483647, 3, 3, '2022-03-09 13:55:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla admins
--
ALTER TABLE admins
  ADD PRIMARY KEY (ID),
  ADD KEY FK_TP_USUARIO (TP_USUARIO);

--
-- Indices de la tabla archivos
--
ALTER TABLE archivos
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla estados
--
ALTER TABLE estados
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla generos
--
ALTER TABLE generos
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla paises
--
ALTER TABLE paises
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla tp_documentos
--
ALTER TABLE tp_documentos
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla tp_usuarios
--
ALTER TABLE tp_usuarios
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla usuarios
--
ALTER TABLE usuarios
  ADD PRIMARY KEY (ID),
  ADD KEY FK_ESTADO (ESTADO),
  ADD KEY FK_GENERO (GENERO),
  ADD KEY FK_PAIS (PAIS),
  ADD KEY FK_TP_DOCUMENTO (TP_DOCUMENTO);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla admins
--
ALTER TABLE admins
  MODIFY ID int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla archivos
--
ALTER TABLE archivos
  MODIFY ID int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla estados
--
ALTER TABLE estados
  MODIFY ID int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla generos
--
ALTER TABLE generos
  MODIFY ID int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla tp_documentos
--
ALTER TABLE tp_documentos
  MODIFY ID int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla tp_usuarios
--
ALTER TABLE tp_usuarios
  MODIFY ID int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla usuarios
--
ALTER TABLE usuarios
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla admins
--
ALTER TABLE admins
  ADD CONSTRAINT FK_TP_USUARIO FOREIGN KEY (TP_USUARIO) REFERENCES tp_usuarios (ID);

--
-- Filtros para la tabla usuarios
--
ALTER TABLE usuarios
  ADD CONSTRAINT FK_ESTADO FOREIGN KEY (ESTADO) REFERENCES estados (ID),
  ADD CONSTRAINT FK_GENERO FOREIGN KEY (GENERO) REFERENCES generos (ID),
  ADD CONSTRAINT FK_PAIS FOREIGN KEY (PAIS) REFERENCES paises (ID),
  ADD CONSTRAINT FK_TP_DOCUMENTO FOREIGN KEY (TP_DOCUMENTO) REFERENCES tp_documentos (ID);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
