function Mostrar()
{
	//Tomo opcion seleccionada (MES)
	var mesDelAño = document.getElementById('mes').value;

	//Segun mes seleccionado muestro un mensaje
	switch(mesDelAño)	
	{
		//Mes de 28 dias
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		//Meses de 30 dias
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		//Meses de 31 dias
		default:
			alert("Tiene 31 dias");
	}
}