function Mostrar()
{
	//Generamos la nota RANDOM
	var nota;

	nota=Math.floor(1+Math.random()*10);

	//Decidimoa la calificacion segun la nota y mostramos
	if(nota==9 || nota==10)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota>4)
		{
			alert("APROBO");
		}
		else
		{
			alert("VAMOS, LA PROXIMA SE PUEDE");
		}
	}

}