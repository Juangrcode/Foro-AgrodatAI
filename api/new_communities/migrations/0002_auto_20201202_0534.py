# Generated by Django 3.1.3 on 2020-12-02 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('new_communities', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newcommunity',
            name='picture',
            field=models.ImageField(default='borde.png', upload_to='new_communities/pictures'),
        ),
    ]