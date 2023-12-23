from django.db import models
from auths.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100)
    author = models.ForeignKey(User,on_delete=models.CASCADE)

   