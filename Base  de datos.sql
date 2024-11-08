-- Crear la base de datos
CREATE DATABASE userdb;

-- Usar la base de datos
USE userdb;

-- Crear la tabla usuarios con las columnas especificadas
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre1 VARCHAR(50),
    nombre2 VARCHAR(50),
    apellido1 VARCHAR(50),
    apellido2 VARCHAR(50),
    fechanacimiento DATE,
    rh VARCHAR(3),
    direccion VARCHAR(100),
    correo VARCHAR(100),
    ciudad VARCHAR(50),
    nidentificacion BIGINT UNIQUE,
    ocupacion VARCHAR(50),
    clave VARCHAR(255),
    telefono VARCHAR(15)
);

-- Insertar los datos de ejemplo
INSERT INTO usuarios (nombre1, nombre2, apellido1, apellido2, fechanacimiento, rh, direccion, correo, ciudad, nidentificacion, ocupacion, clave, telefono) 
VALUES ('Uziel', 'Jose', 'Ramirez', 'Castro', '2002-10-21', 'O+', 'cra 14 #11a-36', 'uzieljose10@gmail.com', 'Tame', 1006457191, 'estudiante', '123', '3115341929');
select*from usuarios;
UPDATE usuarios
SET ocupacion = 'Estudiante'
WHERE nidentificacion = 1006457191;