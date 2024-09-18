-- Crear tabla Patinadores
CREATE TABLE Patinadores (
    id_patinador INT PRIMARY KEY,
    nombre VARCHAR(50)
);

-- Crear tabla Directores
CREATE TABLE Directores (
    id_director INT PRIMARY KEY,
    nombre VARCHAR(50)
);

-- Crear tabla Videos
CREATE TABLE Videos (
    id_video INT PRIMARY KEY,
    nombre VARCHAR(100),
    marca VARCHAR(50),
    año INT,
    id_patinador INT,
    id_director INT,
    foto_portada VARCHAR(255),
    duracion TIME,
    playlist_soundtrack TEXT[],
    FOREIGN KEY (id_patinador) REFERENCES Patinadores(id_patinador),
    FOREIGN KEY (id_director) REFERENCES Directores(id_director)
);