/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//Definimos las variables de ambos numeros
	var nsum1, nsum2;

	/*Tomamos los numeros del formulario HTML,
	ingresados por el usuario. Inmediatamente los
	convertimos de texto a numeros enteros.*/
	nsum1=parseInt(document.getElementById('numeroUno').value);
	nsum2=parseInt(document.getElementById('numeroDos').value);


	/*El resultado de la suma de ambos numeros, lo
	guarda en la variable del primero.*/
	nsum1=nsum1+nsum2;

	//Muestra el resultado en una ventana emergente.
	alert("La suma es " + nsum1);
}

