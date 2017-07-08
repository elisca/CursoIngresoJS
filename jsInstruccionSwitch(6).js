function Mostrar()
{
	//Ingresamos una hora convirtiendola de texto a entero
	var laHora = parseInt(document.getElementById('hora').value);

	//Segun la hora mostramos un mensaje
	switch(laHora)
	{
		//Mostrar mensaje "Es de mañana"
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		//Mostrar mensaje "Es de tarde"
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		//Mostrar mensaje "Es de noche"
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche");
			break;			
		//Horario ingresado es erroneo, mostrar mensaje
		default:
			alert("El dato ingresado no es un horario válido. Ingrese una hora comprendida entre 0 y 24");
	}
}