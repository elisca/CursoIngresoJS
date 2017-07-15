function Mostrar()
{
	var ac_pos=0;
	var ac_neg=1;
	var val;
	var respuesta='si';
	var contador=0;

	//Mientras se pida ingresar mas numeros, solicitaremos los mismos
	while(respuesta=="si")
	{
		//Tomamos el numero ingresado por el usuario
		val=parseInt(prompt("Ingresar un numero:"));
		//Discriminamos si el numero es positivo, negativo o cero
		if(val>0)
		{
			ac_pos=ac_pos+val;
		}
		else if(val<0)
		{
			contador=1;
			ac_neg=ac_neg*val;
		}

		//Consultamos si se desea ingresar un nuevo numero
		respuesta=prompt("¿Desea ingresar nuevamente un numero? (SI / <otro>):");
	}

	//Si no ingresamos numeros negativos, el acumulador debe ser asignado a cero
	if(contador==0)
	{
		ac_neg=0;
	}


	//Mostramos los resultados
	document.getElementById('suma').value=ac_pos;
	document.getElementById('producto').value=ac_neg;
}