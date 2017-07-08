/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numUsuario=0;
var contadorIntentos=0;

function comenzar()
{
	numeroSecreto=Math.floor(1+(Math.random()*100));
	console.log("NS: "+numeroSecreto);

	document.getElementById('numero').value=0;
	document.getElementById('intentos').value=contadorIntentos;
}

function verificar()
{
		numUsuario=document.getElementById('numero').value;
	
		if(numUsuario==numeroSecreto)
		{
			alert("Usted es un ganador!!! Y solo en "+contadorIntentos+" intentos");
			alert("Cliquee COMENZAR para adivinar un nuevo numero");
			contadorIntentos=0;
		}
		else if(numUsuario<numeroSecreto)
		{
			alert("Falta para llegar al numero secreto");
			contadorIntentos++;
		}
		else if(numUsuario>numeroSecreto)
		{
			alert("Te pasaste para llegar al numero secreto");			
			contadorIntentos++;
		}

		document.getElementById('intentos').value=contadorIntentos;
}