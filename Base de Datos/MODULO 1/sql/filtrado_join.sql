-- Filtrar datos de Clientes, Empleadas y Lotes usando JOIN
SELECT c.nombre AS nombre_cliente, e.nombre AS nombre_empleada, l.cantidad_prendas, l.tipo_tela
FROM Clientes c
JOIN Lotes l ON c.id_cliente = l.id_cliente
JOIN Empleadas e ON e.id_empleada = l.id_empleada;