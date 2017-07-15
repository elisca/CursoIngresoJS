function Mostrar()
{
	/*Ejercicio de obtencion, validacion y extraccion de informacion de encuestas,
	se debe informar:
		1. Cuantas mujeres y cuantos hombres fueron entrevistados
		2. La persona de mayor edad
		3. Promedio de edad
		4. Quien ganara las elecciones
		5. Informar cuantas mujeres mayores de edad hay
		6. Informar cuantos hombres menores a 30 años hay
		7. Informar la altura del hombre que menos edad tiene
		8. Informar cuantos hombres votaron a otro
		9. De las mujeres, informar cuantas votaron a la oposicion
		10. Cuantas personas de 50 años votaron
		11. Cuantas personas de 50 años mujeres votaron
		12. Cuantas mujeres de 50 años de mas de un metro votaron al gobierno*/

	var respuesta="si";
	var contador=0;
	var csexM=0;
	var csexF=0;
	var maxedad:
	var acumedad;
	var sexo;
	var edad;
	var voto;
	var VOT1=0;
	var VOT2=0;
	var VOT3=0;
	var GVOT;

	while(respuesta!="no")
	{
		//Contador de fichas ingresadas
		contador++;

		//INGRESAMOS LOS DATOS====================================

		//Ingresamos sexo
		sexo=prompt("Sexo: ");

		//Validamos sexo
		while(sexo!="F" && sexo!="M")
		{
			sexo=prompt("ERROR: Ingrese nuevamente sexo: ");
		}

		//Ingresamos edad
		edad=parseInt(prompt("Edad: "));

		//Validamos edad
		while(edad<0 || edad>100)
		{
			edad=prompt("ERROR: Ingrese nuevamente edad: ");
		}

		//Ingresamos votacion
		voto=prompt("VOTO (1-Gobierno, 2-Oposicion, 3-Otro): ");

		//Validamos voto
		while(voto<1 || voto>3)
		{
			voto=prompt("ERROR: Reingrese VOTO (1-Gobierno, 2-Oposicion, 3-Otro): ");
		}

		//PROCESAMOS LOS DATOS DE ESTA FICHA===============================

		//Contamos los sexos ingresados
		if(sexo=="F")
		{
			csexF++;
		}
		else if(sexo=="M")
		{
			csexM++;
		}

		//Si es la primer ficha, tendra la maxima edad ingresada
		if(contador==1)
		{
			maxedad=edad;
		}
		//Si la ficha no es la primera, comprueba si la edad ingresada es la mas alta
		else
		{
			if(edad>maxedad)
			{
				maxedad=edad;
			}
		}

		//Acumulamos la edad para calcular al terminar las fichas, el promedio de edad
		acumedad=acumedad+edad;

		//Sumamos el voto
		switch(voto)
		{
			case 1:
				VOT1++;
				break;
			case 2:
				VOT2++;
				break;
			case 3:
				VOT3++;
				break;
		}

		//Consultamos si ingresaremos una nueva ficha
		respuesta=prompt("Ingresar una nueva ficha?: ");
	}
	//PROCESAMOS RESULTADOS========================================

	//Calculamos el promedio de edad de la encuesta
	acumedad=acumedad/contador;

	//INFORMAMOS RESULTADOS========================================
	alert("C MASC: "+csexM+" C FEM: "+csexF);
}//FIN DE LA FUNCIÓN