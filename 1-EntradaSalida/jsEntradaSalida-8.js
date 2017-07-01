/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*Definimos las variables de numeros que ingresara el usuario
	num1 es DIVIDENDO, num2 es DIVISOR. num1 luego de la operación
	es el MÓDULO.*/
	var num1, num2;

	/*Cargamos los numeros ingresados en el formulario HTML e 
	inmediatamente lo convertimos de texto a numero entero.*/
	num1=parseInt(document.getElementById('numeroDividendo').value);
	num2=parseInt(document.getElementById('numeroDivisor').value);

	/*Hacemos el calculo y lo guardamos en la variable del primer
	numero.*/
	num1=num1%num2;

	//Mostramos el resultado en una ventana emergente
	alert("El módulo es " + num1);
}
