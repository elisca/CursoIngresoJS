function Mostrar()
{
	//Ingresamos la edad desde el textbox del HTML
	var edad_act;

	edad_act=document.getElementById('edad').value;

	/*Si la persona tiene al menos 18 años, informamos que
	es mayor*/
	if(edad_act>=18)
	{
		alert("La persona ingresada es mayor de edad");
	}
}