function Mostrar()
{
	//Ingresamos la edad desde textbox HTML
	var edad_p;

	edad_p=document.getElementById('edad').value;

	//Evaluamos y mostramos si la persona es mayor o menor
	if(edad_p>=18)
	{
		alert("La persona ingresada es MAYOR de edad");
	}
	else
	{
		alert("La persona ingresada es MENOR de edad");
	}
}