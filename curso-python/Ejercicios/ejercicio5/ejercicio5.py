def determinarSiEsBisiesto(anio):
    if anio % 4 == 0 & (anio % 100 != 0 | anio % 400 == 0):
        print("Es bisiesto")
    else:
        print("No bisiesto")
        
        
determinarSiEsBisiesto(2018)
