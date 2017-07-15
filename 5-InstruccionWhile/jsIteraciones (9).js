function Mostrar()
{
	//Definimos las variables	
	var contador=0;
	var respuesta='si';
	var num;
	var nmax;
	var nmin;

	//Cuando no queremos salir, ingresamos un numero nuevamente
	while(respuesta!='no')
	{
		//Aumento el contador de iteraciones
		contador++;

		//Ingresamos un numero
		num=parseInt(prompt("Ingrese un numero: "));

		//Si es la primera vez que ingresamos un numero, lo tomamos como maximo y minimo
		if(contador==1)				
		{
			nmin=num;
			nmax=num;
		}
		//Si no es la primera vez que ingresamos un numero, comparamos para ver si asignamos al ingreso como maximo o minimo llegado el caso
		else
		{
			if(num>nmax)
			{
				nmax=num;
			}

			if(num<nmin)
			{
				nmin=num;
			}
		}

		//Preguntamos al usuario si desea ingresar un numero mas
		respuesta=prompt("Desea ingresar un numero nuevamente?: ");
	}

	//Mostramos el numero maximo y el minimo
	alert("NUMERO MAX: "+nmax+" NUMERO MINIMO: "+nmin);
}