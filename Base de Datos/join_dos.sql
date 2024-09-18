-- Filtrar datos de Productos y Categorías usando JOIN
SELECT p.nombre AS nombre_producto, c.nombre AS nombre_categoria
FROM Productos p
JOIN Categorias c ON p.id_categoria = c.id_categoria;