/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

//Definimos variables
var numeroSecreto; 
var contadorIntentos;
var numeroUsuario;

function comenzar()
{
	//Genera numero aleatorio entre 1 y 100, truncado con Math Floor
	numeroSecreto=Math.floor(1+Math.random()*100);
	console.log("NS: "+numeroSecreto);

	//Inicializa en cero las veces que cliqueamos verificar
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;
}

function verificar()
{
	//Tomo el numero ingresado por el usuario
	numeroUsuario=document.getElementById('numero').value;

	//Aumenta la cantidad de intentos realizados en 1
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;

	//Compara si adivinamos el numero, o en otro caso, si falta o nos pasamos
	if(numeroUsuario<numeroSecreto)
	{
		alert("Falta para llegar al numero secreto");
	}
	else if(numeroUsuario>numeroSecreto)
	{
		alert("Te pasaste para llegar al numero secreto");
	}
	else if(numeroUsuario==numeroSecreto)
	{
		//Si adivinamos el numero, muestra cartel segun intentos
		switch(contadorIntentos)
		{
			case 1:
				alert("Usted es un psiquico");
				break;
			case 2:
				alert("Excelente percepcion");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente tecnica");
				break;
			case 5:
				alert("Usted esta en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta tecnica");
				break;
			default:
				alert("Afortunado en el amor");
		}
	}
}