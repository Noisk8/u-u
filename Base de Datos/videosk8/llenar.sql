-- Insertar 10 videos de skate famosos
INSERT INTO Videos (id_video, nombre, marca, año, id_patinador, id_director, foto_portada, duracion, playlist_soundtrack)
VALUES
(1, 'Video 1', 'Marca 1', 2020, 1, 1, 'imagen1.jpg', '00:30:00', ARRAY['cancion1.mp3', 'cancion2.mp3']),
(2, 'Video 2', 'Marca 2', 2019, 2, 2, 'imagen2.jpg', '00:45:00', ARRAY['cancion3.mp3', 'cancion4.mp3']),
(3, 'Video 3', 'Marca 3', 2018, 3, 3, 'imagen3.jpg', '00:40:00', ARRAY['cancion5.mp3', 'cancion6.mp3']),
(4, 'Video 4', 'Marca 1', 2017, 1, 2, 'imagen4.jpg', '00:35:00', ARRAY['cancion7.mp3', 'cancion8.mp3']),
(5, 'Video 5', 'Marca 2', 2016, 2, 3, 'imagen5.jpg', '00:50:00', ARRAY['cancion9.mp3', 'cancion10.mp3']),
(6, 'Video 6', 'Marca 3', 2015, 3, 1, 'imagen6.jpg', '00:55:00', ARRAY['cancion11.mp3', 'cancion12.mp3']),
(7, 'Video 7', 'Marca 1', 2014, 1, 3, 'imagen7.jpg', '00:25:00', ARRAY['cancion13.mp3', 'cancion14.mp3']),
(8, 'Video 8', 'Marca 2', 2013, 2, 1, 'imagen8.jpg', '00:48:00', ARRAY['cancion15.mp3', 'cancion16.mp3']),
(9, 'Video 9', 'Marca 3', 2012, 3, 2, 'imagen9.jpg', '00:42:00', ARRAY['cancion17.mp3', 'cancion18.mp3']),
(10, 'Video 10', 'Marca 1', 2011, 1, 2, 'imagen10.jpg', '00:38:00', ARRAY['cancion19.mp3', 'cancion20.mp3']);