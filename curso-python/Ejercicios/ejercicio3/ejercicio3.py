#Escribe un programa en la consola de python que pida al usuario su peso (en kg) y estatura (en metros),



peso = float(input("Introduce tu peso en kg: "))
estatura = float(input("Introduce tu estatura en m: "))
imc = peso / (estatura ** 2)
print("Tu índice de masa corporal es", round(imc, 2))   