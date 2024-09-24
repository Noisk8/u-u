from django.db import models

# Create your models here.

class carreras(models.Model):
	codigo = models.CharField(max_length=3, primary_key=True)
	nombre = models.CharField(max_length=50)
	duracion = models.PositiveSmallIntegerField(default=5)

	def __str__(self):
		txt = "	{0} (Duración: {1} año(s))"
		return txt.format(self.nombre, self.duracion)


class estudiantes(models.Model):
	dni = models.CharField(max_length=10, primary_key=True)
	apellido_paterno = models.CharField(max_length=20)
	apellido_materno = models.CharField(max_length=20)
	nombres = models.CharField(max_length=30)
	fechanacimiento = models.DateField()
	sexo = models.CharField(max_length=1)
	carreras = models.ForeignKey(carreras, null=False, blank=False, on_delete = models.CASCADE)
	vigencia = models.BooleanField(default=True)

	def nombrecompleto(self):
		txt = "{0} {1}, {2}"
		return txt.format(self.apellido_paterno, self.apellido_materno, self.nombres)

	def __str__(self):
		txt = "{0} / Carrera: {1}"
		return txt.format(self.nombrecompleto(), self.carreras)

class cursos(models.Model):
	codigo = models.CharField(max_length=6, primary_key=True)
	nombre = models.CharField(max_length=30)
	creditos = models.PositiveSmallIntegerField()
	docente = models.CharField(max_length=50)

	def __str__(self):
		txt = "{0} ({1}) / Docente: {2}"
		return txt.format(self.nombre, self.codigo, self.docente)

class matriculas(models.Model):
	id = models.AutoField(primary_key=True)
	#estudiante = models.ForeignKey(estudiantes, null=False, blank=False, on_delete=models.CASCADE)
	#cursos=models.ForeignKey(cursos, null=False, blank=False, on_delete=models.CASCADE)
	estudiante = models.ForeignKey(cursos, null=False, blank=False, on_delete=models.CASCADE)
	fechamatricula = models.DateField(auto_now_add=True)

	#def __str__(self):
	#	txt = "{0} matriculado en el curso {1} el {3}"
	#	return txt.format(self.estudiante.nombrecompleto(), self.cursos, self.fechamatricula)

	