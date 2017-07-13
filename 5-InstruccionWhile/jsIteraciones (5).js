function Mostrar()
{
	//Definimos e ingresamos un valor
	var sexo=prompt("ingrese f ó m .");

	//El textbox toma el valor del prompt ingresado
	document.getElementById('Sexo').value=sexo;

	//Mientras el valor no sea correcto, lo pedimos nuevamente
	//while(sexo!="f" && sexo!="F" && sexo!="m" && sexo!="M")
	while(sexo!="f" && sexo!="F" && sexo!="m" && sexo!="M")
	{
		sexo=prompt("Dato no valido. Ingrese F o M para el sexo");
	}

	//Una vez ingresado correctamente el dato, lo avisamos
	alert("Dato ingresado correctamente");
}