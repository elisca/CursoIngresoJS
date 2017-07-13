function Mostrar()
{
	//Definimos e ingresamos un valor
	var numero = prompt("ingrese un número entre 0 y 10.");

	//Mientras el numero no este comprendido entre 0 y 9, pedimos reingresar
	while(numero<0 || numero>9)
	{
		numero=prompt("Numero en rango invalido. Reingrese. Numero comprendido entre 0 y 9:");
	}

	//Cuando el numero haya sido ingresado correctamente avisamos
	alert("Numero ingresado dentro del rango valido");
}