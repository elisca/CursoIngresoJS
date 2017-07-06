function Mostrar()
{
	//Ingresamos edad desde textbox HTML
	var edad_p;

	edad_p=document.getElementById('edad').value;

	/*Comparo y muestro a que edades pertene la persona
	ingresada*/
	
	//Si la persona tiene al menos 18 años es MAYOR
	if(edad_p>=18)
	{
		alert("La persona ingresada ES MAYOR DE EDAD");
	}
	/*Si las personas NO SON MAYORES se evalua a que grupo
	pertecen*/
	else
	{
		/*Si las personas tienen al menos 13 años de edad
		(y en esta instancia sabemos que no es mayor de 18 años
		) mostramos que se ingresa a un adolescente*/
		if(edad_p>=13)
		{
			alert("La persona ingresada ADOLESCENTE");
		}
		/*Si la persona ingresada NO ES MAYOR NI ADOLESCENTE
		entonces es MENOR.*/
		else
		{
			alert("La persona ingresada MENOR DE EDAD");
		}
	}
}