/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	/*Definimos las variables, siendo importe una entrada del
	usuario, y resultado nuestra devolución*/
	var importe, resultado;

	/*Tomamos la entrada del usuario del HTMLy la convertimos
	a numero entero*/
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	/*Mostramos en el ultimo textbox del HTML el resultado con
	un descuento del 25%*/
	document.getElementById('resultado').value=importe*0.75;
}