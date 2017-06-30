/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//Variables de datos que vamos a tomar del usuario
	var elNombre, laEdad;

	//Tomamos los datos que ingresa el usuario en las cajas de texto del HTML
	elNombre = document.getElementById('elNombre').value;
	laEdad = document.getElementById('laEdad').value;
	/*Mostramos por ALERT, un texto concatenado en donde devolvemos los datos
	ingresados anteriormente*/
	alert("Usted se llama " + elNombre + " y tiene " + laEdad + " años");
}
