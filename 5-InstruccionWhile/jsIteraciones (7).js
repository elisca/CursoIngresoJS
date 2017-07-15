function Mostrar()
{

//MAXIMOS Y MINIMOS
//==============================================
	//Definimos variables
	var contador=0;
	var nota;
	var notamayor;
	var notamenor;

	//Hacemos tres iteraciones
	/*while(contador<3)
	{
		contador++;
		console.log("Vuelta: ",contador);

		//Ingresamos una nota(Usamos parseInt para que compare correctamente)
		nota=parseInt(prompt("Ingrese nota"));

		//Si es la primera nota, asignamos la misma como maximo y minimo
		if(contador==1)
		{
			notamenor=nota;	
			notamayor=nota;
		}
		//Si no es la primera nota, comparamos si asignarla como maximo o minimo
		else
		{
			if(nota<notamenor)
			{
				notamenor=nota;
			}

			if(nota>notamayor)
			{
				notamayor=nota;
			}
		}
	}

	//Mostramos el maximo y el minimo obtenido
	console.log("NOTA MENOR: ",notamenor);
	console.log("NOTA MAYOR: ",notamayor);
	*/

//EJERCICIO 7
//===================================================	
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