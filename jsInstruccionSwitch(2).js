function Mostrar()
{
	//Ingresamos mes
	var mesDelAño = document.getElementById('mes').value;

	//Segun mes mostramos mensaje
	switch(mesDelAño)
	{
		//Casos Invierno
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;

		//Casos Antes Invierno
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":	
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;

		//Casos Luego Invierno
		default:
			alert("Ya pasamos el frio ahora calor");
	}
}