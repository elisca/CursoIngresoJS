function Mostrar()
{
	//Ingresamos opcion
	var mesDelAño = document.getElementById('mes').value;

	//Segun opcion decidimos mensaje a mostrar
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 o mas dias");
	}
}