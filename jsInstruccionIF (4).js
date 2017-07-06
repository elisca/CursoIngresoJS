function Mostrar()
{
	//Ingresamos edad desde textbox HTML
	var edad_p;

	edad_p=document.getElementById('edad').value;

	//Comparo y muestro si la persona es adolescente	
	if(edad_p>12 && edad_p<18)
	{
		alert("La persona ingresada es ADOLESCENTE");
	}
}