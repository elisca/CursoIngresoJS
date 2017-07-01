/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	/*Definimos las variables, siendo Sueldo la entrada
	del usuario, e importe el resultado a mostrar*/
	var sueldo, importe;

	/*Tomamos la entrada del usuario, y la convertimos a
	numero entero*/
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	//Calculamos el 110% del ingreso del usuario
	importe=sueldo*1.1;

	//Mostramos el total en el textbox del HTML
	document.getElementById('resultado').value=importe;
}
