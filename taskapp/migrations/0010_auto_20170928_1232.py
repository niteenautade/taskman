# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-28 07:02
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('taskapp', '0009_auto_20170927_2334'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='user',
        ),
        migrations.AddField(
            model_name='task',
            name='user',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
