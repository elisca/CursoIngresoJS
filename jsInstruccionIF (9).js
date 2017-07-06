function Mostrar()
{
	//Genera NUMEROS ALEATORIOS ENTEROS ENTRE 1 y 10
	var numran=Math.floor(1+(Math.random() *10));

	//Muestro en la consola del navegador el numero generado
	console.log("NUMERO RANDOM GENERADO: "+numran);
	
	alert(numran);

}