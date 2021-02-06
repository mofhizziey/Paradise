from django.apps import AppConfig

class ParadiseConfig(AppConfig):
    name = 'paradise'

    def ready(self):
        import paradise.signals
