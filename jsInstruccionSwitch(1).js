function Mostrar()
{
	//Ingresamos el mes
	var mesDelAño = document.getElementById('mes').value;

	//Segun mes ingresado decidimos mensaje a mostrar
	//IF---------------------------------	
	/*if(mesDelAño=="Enero")
	{
		alert("Que comiences bien el año!!!");
	}
	else if(mesDelAño=="Marzo")
	{
		alert("A clases!!!");
	}
	else if(mesDelAño=="Julio")
	{
		alert("Se vienen las vacaciones!!!");
	}
	else if(mesDelAño=="Diciembre")
	{
		alert("Felices Fiestas!!!");
	}
*/
	//SWITCH---------------------------------
	switch(mesDelAño)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!!");
			break;
	}
}