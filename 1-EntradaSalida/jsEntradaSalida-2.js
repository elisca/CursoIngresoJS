/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre = prompt("Por favor, ingrese su nombre:", "Nombre");
	alert("Su nombre es: " + nombre);
}
/*El prompt tiene dos argumentos, el primero es el texto que muestra
para ingresar el texto.

El segundo argumento es opcional, y es el valor por defecto que se
ingresa.*/