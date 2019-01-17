from django.db import models
from filer.fields.image import FilerImageField
from cms.models.fields import PlaceholderField

# Create your models here.
class Partner(models.Model):
  name = models.CharField(max_length=100, unique=True)
  position = models.PositiveIntegerField()
  image = FilerImageField(help_text='Please supply an image of this partner')


  def __str__(self):
    return self.name

  class Meta:
    verbose_name_plural = 'partners'


class TeamMember(models.Model):
  name = models.CharField(max_length=255)
  rol = models.CharField(max_length=255)
  description = models.TextField()
  url_profile = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True)
  image = FilerImageField(help_text='Please supply an image of this partner')


  def __str__(self):
    return self.name

  class Meta:
    verbose_name_plural = 'members'
