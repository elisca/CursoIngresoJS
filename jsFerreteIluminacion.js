/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	//Definimos las variables para tomar datos y calcular facturacion
	var precio=35;
	var cantidad;
	var marca;
	var descuento;
	var preFinDes;
	var preFin;
	var IIBB;

	//Tomamos datos ingresados por el usuario
	cantidad=parseInt(document.getElementById('Cantidad').value);
	marca=document.getElementById('Marca').value;

	//Segun cantidad a comprar evaluamos posible descuento y su porcentaje
	switch(cantidad)
	{
		case 0:
			alert("No se ingreso una cantidad, imposible facturar");
			descuento=1;
			break;
		case 1:
		case 2:
			descuento=1;
			break;
		case 3:
			switch(marca)
			{
				case "ArgentinaLuz":
					descuento=0.85;
					break;
				case "FelipeLamparas":
					descuento=0.9;
					break;
				default:
					descuento=0.95;
			}
			break;
		case 4:
			if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
			{
				descuento=0.75;
			}
			else
			{
				descuento=0.8;
			}
			break;
		case 5:
			if(marca=="ArgentinaLuz")
			{
				descuento=0.6;
			}
			else
			{
				descuento=0.7;
			}
			break;
		default:		
			descuento=0.5;
	}

	//Totales con y sin descuento
	preFin=cantidad*precio;
	preFinDes=preFin*descuento;

	//Cuando la compra con descuento supera $120 debemos sumar 10% IIBB
	if(preFinDes>120)
	{
		IIBB=preFinDes*0.1;
		preFinDes=preFinDes+IIBB;

		alert("Se pago $ "+IIBB+" de IIBB");
	}

	//Mostramos total a pagar
	document.getElementById('precioDescuento').value=preFinDes;
}

