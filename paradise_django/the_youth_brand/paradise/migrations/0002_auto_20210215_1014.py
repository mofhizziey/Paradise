# Generated by Django 3.0.6 on 2021-02-15 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paradise', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='color',
            field=models.CharField(blank=True, choices=[('Black', 'Black'), ('White', 'White'), ('Red', 'Red'), ('Yellow', 'Yellow'), ('Green', 'Green'), ('Blue', 'Blue')], max_length=100, null=True),
        ),
    ]