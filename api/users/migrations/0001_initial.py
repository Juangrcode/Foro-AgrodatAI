# Generated by Django 3.1.3 on 2020-12-02 01:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('new_communities', '0001_initial'),
        ('interests', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(default='borde.png', upload_to='')),
                ('communities', models.ManyToManyField(related_name='profiles', to='new_communities.NewCommunity')),
                ('interests', models.ManyToManyField(related_name='profiles', to='interests.Interest')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['owner'],
            },
        ),
    ]
