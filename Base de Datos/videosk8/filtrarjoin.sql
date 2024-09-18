-- Filtrar patinadores que patinan en diferentes videos usando JOIN
SELECT DISTINCT p.nombre AS nombre_patinador, v.nombre AS nombre_video
FROM Patinadores p
JOIN Videos v ON p.id_patinador = v.id_patinador
ORDER BY p.nombre, v.nombre;
-- Filtrar patinadores que patinan en diferentes videos usando subconsultas
SELECT 
    p.nombre AS nombre_patinador,
    (SELECT nombre FROM Videos WHERE id_patinador = p.id_patinador) AS nombre_video
FROM Patinadores p
ORDER BY p.nombre, nombre_video;
