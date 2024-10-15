# Instalar mongo db y Mongo Compass Fedora 40 

## MongoDB 

~~~
sudo dnf update
~~~

~~~
sudo rpm --import https://www.mongodb.org/static/pgp/server-7.0.asc
~~~



~~~
sudo nano /etc/yum.repos.d/mongodb-org-7.0.repo
~~~

Agrega este código en el archivo

~~~
[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/7.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-7.0.asc
~~~


~~~
sudo dnf install mongodb-org mongodb-org-server
~~~


~~~
sudo setenforce 0
~~~

~~~
sudo systemctl enable mongod.service 
sudo systemctl start mongod.service
~~~

~~~
sudo systemctl status mongod.service
~~~

## MongoCompass

Ir a esta [sitio oficial de descarga](https://www.mongodb.com/try/download/compass)

Elige la plataforma RedHat 64bit 

paquetes RPM 

~~~
wget https://downloads.mongodb.com/compass/mongodb-compass-1.44.3.x86_64.rpm
~~~

~~~
sudo dnf install mongodb-compass-1.44.3.x86_64.rpm
~~~
