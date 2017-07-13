function Mostrar()
{
	//Definimos e inicializamos las variables
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	//Mientras se pida ingresar mas numeros, solicitaremos los mismos
	while(respuesta=="si")
	{
		//Aumento el contador
		contador++;

		//Tomamos el numero ingresado por el usuario
		numero=parseInt(prompt("Ingresar un numero:"));
		//Acumulamos el numero
		acumulador=acumulador+numero;

		//Consultamos si se desea ingresar un nuevo numero
		respuesta=prompt("¿Desea ingresar nuevamente un numero? (SI / <otro>):");
	}

	//Una vez finalizado el ingreso de datos, mostramos los resultados
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}