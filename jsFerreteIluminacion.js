/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FparaelipeLams” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	//Definimos las variables necesarias para procesar la facturacion
	var costo;
	var cantidad;
	var marca;
	var descuento;
	var precioFinal; //Precio final sin descuento
	var preFinDes; //Precio final con descuento
	var IIBB=0;

	//Tomamos la marca ingresada
	costo=35;
	marca=document.getElementById('Marca').value;

	//Tomamos la cantidad
 	cantidad=document.getElementById('Cantidad').value;

 	//Precio sin descuento
 	precioFinal=cantidad*costo;

 	//Evaluamos si aplicamos un descuento, y que porcentaje seria
 	switch(cantidad)
 	{
 		case "0":
 		case "1":
 		case "2":
 			descuento=1;
 			break;
 		case "3":
 			switch(marca)
 			{
 				case "ArgentinaLuz":
		 			descuento=0.85;
		 			break;
 				case “FelipeLamparas”:
		 			descuento=0.9; 				
		 			break;
 				default:
		 			descuento=0.95;
 			}
 			break;
 		case "4":
 			if(marca=="ArgentinaLuz" || marca==“FelipeLamparas”)
 			{
 				descuento=0.75;
 			}
 			else
 			{
 				descuento=0.8; 				
 			}
 			break;
 		case "5":
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

 	preFinDes=precioFinal*descuento;

 	if(preFinDes>120)
 	{
 		IIBB=preFinDes*0.1;
 		preFinDes=preFinDes+IIBB;
 		alert("Usted pago $" + IIBB + " de IIBB");
 	}

 	document.getElementById('precioDescuento').value=preFinDes;
}
