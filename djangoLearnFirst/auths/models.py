from django.db import models
# tables structure
class User(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100,primary_key=True)
    password = models.CharField(max_length=100)



