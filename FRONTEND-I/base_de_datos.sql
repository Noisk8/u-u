-- Crear la base de datos
CREATE DATABASE taller_costura;

-- Conectar a la base de datos
\c taller_costura;

-- Crear la tabla Clientes
CREATE TABLE Clientes (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    telefono VARCHAR(15),
    direccion VARCHAR(100)
);

-- Crear la tabla Empleadas
CREATE TABLE Empleadas (
    id_empleada SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    telefono VARCHAR(15),
    direccion VARCHAR(100)
);

-- Crear la tabla Lotes
CREATE TABLE Lotes (
    id_lote SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES Clientes(id_cliente),
    cantidad_prendas INT,
    tipo_tela VARCHAR(50)
);

-- llenar tablas 

-- Insertar datos en la tabla Clientes
INSERT INTO Clientes (nombre, telefono, direccion) VALUES
('Cliente 1', '123456789', 'Calle Principal 123'),
('Cliente 2', '987654321', 'Avenida Secundaria 456');

-- Insertar datos en la tabla Empleadas
INSERT INTO Empleadas (nombre, telefono, direccion) VALUES
('Empleado 1', '111222333', 'Calle de los Oficios 1'),
('Empleado 2', '444555666', 'Avenida del Trabajo 2');

-- Insertar datos en la tabla Lotes
INSERT INTO Lotes (id_cliente, cantidad_prendas, tipo_tela) VALUES
(1, 10, 'Algodón'),
(2, 15, 'Seda');

