# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-27 17:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('taskapp', '0005_auto_20170927_1901'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='tasktitle',
            new_name='taskTitle',
        ),
    ]
