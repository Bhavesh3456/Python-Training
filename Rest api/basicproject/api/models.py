from django.db import models

# Create your models here.
class book(models.Model):
    title=models.CharField(max_length=10)
    author=models.CharField(max_length=10)
    isbn=models.CharField(max_length=10)
    publish=models.CharField(max_length=10)

    def __str__(self):
        return self.title
