function Mostrar()
{
	//Ingresamos una hora convirtiendola de texto a entero
	var laHora = parseInt(document.getElementById('hora').value);

	//Segun la hora mostramos un mensaje
	switch(laHora)
	{
		//No debemos mostrar ningun mensaje
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
			console.log("Se ingreso la hora "+laHora);
			break;
		//Mostrar mensaje "Es de mañana"
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
	}
}