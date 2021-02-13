from django.apps import AppConfig


class AddressConfig(AppConfig):
    name = 'address'


    def ready(self):
        import address.signals
    
    

