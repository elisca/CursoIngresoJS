function Mostrar()
{
	//Tomamos edad ingresada en el textbox
	var edad_p;

	edad_p=document.getElementById('edad').value;

	//Si la edad es 15 mostramos un mensaje
	if(edad_p==15)
	{
		alert("Niña bonita");
	}
}