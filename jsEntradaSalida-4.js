/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var texto = prompt("Ingrese un texto:","Texto...");
	document.getElementById('elNombre').value=texto;
}