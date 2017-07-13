function Mostrar()
{

	//Definimos las variables necesarias
	var contador=0;
	var acumulador=0;
	var num;

	//Pedimos 5 veces ingresar un numero
	while(contador<5)	
	{
		//Aumentamos el contador de iteraciones
		contador++;

		//Ingresamos un numero, convirtiendolo en Entero para no concatenar caracteres
		numero=parseInt(prompt("Ingrese un numero: "));

		//Guardamos los numeros ingresados en el acumulador
		acumulador=acumulador + numero;
	}

	//Mostramos resultados
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}