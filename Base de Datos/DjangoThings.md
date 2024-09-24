## Crear el proyecto 

~~~
django-admin startproject Universidad
cd Universidad
mkdir modulos
cd modulos
django-admin startapp Academica
~~~

~~~
python3 manage.py createsuperuser
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
~~~

