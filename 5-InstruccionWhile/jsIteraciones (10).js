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

	var respuesta="SI";


	//=========DEFINICION DE VARIABLES
	//Informacion de ficha
	var usexo;
	var uedad;
	var ualtura;
	var uvoto;
	//Procesamiento de datos
	var IDFicha=0;
	var CSexM=0;
	var CSexF=0;
	var MaxEdad;
	var PromEdad=0;
	var cVOT1=0;
	var cVOT2=0;
	var cVOT3=0;
	var cMujMayorEdad=0;
	var cHomMenor30=0;
	var HomAlturaMinEdad;
	var MinHomEdad;
	var CHomVOT3=0;
	var CMujVOT2=0;
	var CEdad50=0;
	var CEdad50Muj=0;
	var CEdad50MujAlt1mVOT1=0;

	//=========ESTRUCTURA PRINCIPAL DEL ARCHIVO
	//Ficha
	while(respuesta=="SI")
	{
		//Cuenta el N° de ficha que se esta ingresando
		IDFicha++;
	//=========INGRESO DE DATOS
		//Ingresa sexo
		usexo=prompt("Sexo: ");

		//Valida sexo
		while(usexo!="F" && usexo!="M")
		{
			usexo=prompt("ERROR: Ingrese sexo nuevamente: ");
		}

		//Ingresa edad
		uedad=prompt("Edad: ");

		//Valida edad
		while(uedad<0 || uedad>100)
		{
			uedad=prompt("ERROR: Ingrese edad nuevamente: ");
		}

		//Ingresa altura
		ualtura=prompt("Altura (cm): ");

		//Valida Edad
		while(ualtura<0 || ualtura>220)
		{
			ualtura=prompt("ERROR: Ingrese altura (cm) nuevamente: ");
		}

		//Ingresa voto
		uvoto=prompt("VOTO (1-Gobierno, 2-Oposicion, 3-Otro): ");

		//Valida voto
		while(uvoto<1 || uvoto>3)
		{
			uvoto=prompt("ERROR: Ingrese voto nuevamente (1-Gobierno, 2-Oposicion, 3-Otro): ");
		}

		//=========PROCESAMIENTO DE DATOS DE ESTA FICHA
		//1. Cuantas mujeres y cuantos hombres fueron entrevistados
		if(usexo=="F")
		{
			CSexF++;
		}
		else
		{
			CSexM++;
		}

		//2. La persona de mayor edad		
		if(IDFicha==1 || uedad>MaxEdad)
		{
			MaxEdad=uedad;
		}

		//3. Promedio de edad
		PromEdad=PromEdad+parseInt(uedad);

		//4. Quien ganara las elecciones
		switch(uvoto)
		{
			case "1":
				cVOT1++;
				break;
			case "2":
				cVOT2++;
				break;
			case "3":
				cVOT3++;
				break;
		}

		//5. Informar cuantas mujeres mayores de edad hay
		if(uedad>17 && usexo=="F")
		{
			cMujMayorEdad++;
		}

		//6. Informar cuantos hombres menores a 30 años hay
		if(uedad<30 && usexo=="M")
		{
			cHomMenor30++;
		}

		//7. Informar la altura del hombre que menos edad tiene
		//Busca la edad minima en los hombres
		if(usexo=="M")
		{
			if(IDFicha==1 || uedad<MinHomEdad)
			{
				MinHomEdad=uedad;
				HomAlturaMinEdad=ualtura;
			}
		}

		//8. Informar cuantos hombres votaron a otro
		if(usexo=="M" && uvoto=="3")
		{
			CHomVOT3++;
		}

		//9. De las mujeres, informar cuantas votaron a la oposicion
		if(usexo=="F" && uvoto=="2")
		{
			CMujVOT2++;
		}

		//10. Cuantas personas de 50 años votaron
		if(uedad=="50")
		{
			CEdad50++;
		}

		//11. Cuantas personas de 50 años mujeres votaron
		if(usexo=="F" && uedad=="50")
		{
			CEdad50Muj++;
		}

		//12. Cuantas mujeres de 50 años de mas de un metro votaron al gobierno*/
		if(usexo=="F" && uedad=="50" && ualtura>100 && uvoto=="1")
		{
			CEdad50MujAlt1mVOT1++;
		}

		//Consultamos si ingresaremos una ficha nueva
		respuesta=prompt("Ingresar una nueva ficha de votacion?: ");
	}
	//=========MUESTRA RESULTADOS
	//1. Cuantas mujeres y cuantos hombres fueron entrevistados
	alert("1. Mujeres entrevistadas: "+CSexF+" Hombres entrevistados: "+CSexM);

	//2. La persona de mayor edad
	alert("2. Persona de mayor edad: "+MaxEdad);

	//3. Promedio de edad
	PromEdad=Math.floor(PromEdad/IDFicha);
	alert("3. Promedio de edad: "+PromEdad);

//TIENE ERRORES 4. Quien ganara las elecciones
	if(cVOT1>cVOT2 && cVOT1>cVOT3)
	{
		alert("Ganara las elecciones la opcion 1.");
	}
	else if(cVOT2>cVOT1 && cVOT2>cVOT3)
	{
		alert("Ganara las elecciones la opcion 2.");
	}
	else
	{
		alert("Ganara las elecciones la opcion 3.");
	}

	//5. Informar cuantas mujeres mayores de edad hay
	alert("5. Mujeres mayores de edad: "+cMujMayorEdad);

	//6. Informar cuantos hombres menores a 30 años hay
	alert("6. Hombres menores a 30 años: "+cHomMenor30);

	//7. Informar la altura del hombre que menos edad tiene
	alert("7. La altura del hombre mas joven es "+HomAlturaMinEdad+" cm.");

	//8. Informar cuantos hombres votaron a otro
	alert("8. La cantidad de hombres que votaron a otro es de "+CHomVOT3);

	//9. De las mujeres, informar cuantas votaron a la oposicion
	alert("9. La cantidad de mujeres que votaron a la oposicion es de "+CMujVOT2);

	//10. Cuantas personas de 50 años votaron
	alert("10. La cantidad de personas de 50 años que votaron es de "+CEdad50);

	//11. Cuantas personas de 50 años mujeres votaron
	alert("11. La cantidad de mujeres de 50 años que votaron es de "+CEdad50Muj);

	//12. Cuantas mujeres de 50 años de mas de un metro votaron al gobierno*/
	alert("12. La cantidad de mujeres de 50 años de mas de un metro, que votaron al gobierno es de "+CEdad50MujAlt1mVOT1);

	/*var respuesta="si";
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
	alert("C MASC: "+csexM+" C FEM: "+csexF);*/
}//FIN DE LA FUNCIÓN