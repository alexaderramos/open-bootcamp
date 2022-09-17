class Juguete:
    _encendido = False

    def enciende(self):
        self._encendido = True

    def apaga(self):
        self._encendido = False



class Dino(Juguete):
    
    color =  None
    nombre = None
    
    def __init__(self):
        super().__init__()
    

d = Dino()
print(d._encendido)
d.apaga()
print(d._encendido)
