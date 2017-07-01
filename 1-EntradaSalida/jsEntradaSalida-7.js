/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Definimos las variables de numeros que ingresara el usuario
	var num1, num2;

	/*Cargamos los numeros ingresados en el formulario HTML e 
	inmediatamente lo convertimos de texto a numero entero.*/
	num1=parseInt(document.getElementById('numeroUno').value);
	num2=parseInt(document.getElementById('numeroDos').value);

	/*Hacemos el calculo y lo guardamos en la variable del primer
	numero.*/
	num1=num1+num2;

	//Mostramos el resultado en una ventana emergente
	alert("La suma es " + num1);
}


function restar()
{
	//Definimos las variables de numeros que ingresara el usuario
	var num1, num2;

	/*Cargamos los numeros ingresados en el formulario HTML e 
	inmediatamente lo convertimos de texto a numero entero.*/
	num1=parseInt(document.getElementById('numeroUno').value);
	num2=parseInt(document.getElementById('numeroDos').value);

	/*Hacemos el calculo y lo guardamos en la variable del primer
	numero.*/
	num1=num1-num2;

	//Mostramos el resultado en una ventana emergente
	alert("La resta es " + num1);
}

function multiplicar()
{ 
	//Definimos las variables de numeros que ingresara el usuario
	var num1, num2;

	/*Cargamos los numeros ingresados en el formulario HTML e 
	inmediatamente lo convertimos de texto a numero entero.*/
	num1=parseInt(document.getElementById('numeroUno').value);
	num2=parseInt(document.getElementById('numeroDos').value);

	/*Hacemos el calculo y lo guardamos en la variable del primer
	numero.*/
	num1=num1*num2;

	//Mostramos el resultado en una ventana emergente
	alert("El producto es " + num1);
}

function dividir()
{
	//Definimos las variables de numeros que ingresara el usuario
	var num1, num2;

	/*Cargamos los numeros ingresados en el formulario HTML e 
	inmediatamente lo convertimos de texto a numero entero.*/
	num1=parseInt(document.getElementById('numeroUno').value);
	num2=parseInt(document.getElementById('numeroDos').value);

	/*Hacemos el calculo y lo guardamos en la variable del primer
	numero.*/
	num1=num1/num2;

	//Mostramos el resultado en una ventana emergente
	alert("El cociente es " + num1);
}

