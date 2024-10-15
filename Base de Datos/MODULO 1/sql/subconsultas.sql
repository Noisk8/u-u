-- Filtrar datos de Clientes, Empleadas y Lotes usando subconsultas
SELECT 
    (SELECT nombre FROM Clientes WHERE id_cliente = l.id_cliente) AS nombre_cliente,
    (SELECT nombre FROM Empleadas WHERE id_empleada = l.id_empleada) AS nombre_empleada,
    l.cantidad_prendas,
    l.tipo_tela
FROM Lotes l;