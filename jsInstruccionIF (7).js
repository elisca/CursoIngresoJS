function Mostrar()
{
	//Definimos variables
	var edad;
	var estadoCivil;

	//Tomamos datos del HTML
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	//Si es menor a 18 años y distinto de soltero mostramos un mensaje
	if(estadoCivil!="Soltero" && edad<18)
	{
		alert("Es muy pequeño para NO SER SOLTERO")
	}
}