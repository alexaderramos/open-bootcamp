from tokenize import PseudoExtras


class Vehiculo:
    
    color = None
    ruedas = None
    puertas = None
    
    
class Coche(Vehiculo):
    velocidad = None
    cilindrada = None
    
    def __init__(self) -> None:
        super().__init__()
    

coche = Coche()