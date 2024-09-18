-- Filtrar datos de Productos y Categorías usando subconsultas
SELECT 
    (SELECT nombre FROM Categorias WHERE id_categoria = p.id_categoria) AS nombre_categoria,
    p.nombre AS nombre_producto
FROM Productos p;