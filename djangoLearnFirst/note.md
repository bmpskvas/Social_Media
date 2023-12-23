django initialise

python -m django startproject <projectName>

run app
first go inside the root folder of the project
python manage.py runserver

create app

python -m django startapp auths

create app then its urls.py, views.py, etc. will be separated

make entry for the auths app in settings.py -> INSTALLED_APPS

make models
-> python manage.py makemigrations
-> python manage.py migrate
