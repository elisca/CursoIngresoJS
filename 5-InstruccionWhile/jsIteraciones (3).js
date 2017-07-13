function Mostrar()
{
	//Definimos e inicializamos la clave con un valor
	var clave = prompt("ingrese el número clave.");

	//Mientras la clave sea incorrecta, la pediremos nuevamente
	while(clave!="utn750")
	{
		clave=prompt("CLAVE INCORRECTA. Por favor ingresar nuevamente: ");
	}

	//Cuando haya sido ingresada correctamente la clave, lo anuncio
	alert("CLAVE CORRECTA");
}
