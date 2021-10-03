$(document).ready(function(){
    /*Salir del sistema*/
    $('.btn-exit').on('click', function(){
    	swal({
		  	title: 'Desea salir del sistema?',
		 	text: "La sesión actual será cerrada...",
		  	type: 'warning',
		  	showCancelButton: true,
		  	confirmButtonText: 'Si, salir',
		  	closeOnConfirm: false
		},
		function(isConfirm) {
		  	if (isConfirm) {
		    	window.location='home.html'; 
		  	}
		});
    });
});
function regSale(){
   
    var _nom = document.getElementById("Nombre").value;
    var _documento = document.getElementById("Documento").value;
    var _precio = document.getElementById("Precio").value;
    var _und = document.getElementById("Unidades").value;
	var _desc = document.getElementById("Descuento").value;
	var _valor = (precio*und)*(1-(desc/100));

    var fila="<tr><td>"+_nom+"</td><td>"+_documento+"</td><td>"+valor+"</td><td>"+_stock+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("table-sales").appendChild(btn);
}

$("#btn-regSale").click(function () {
	for (var i = 1; i < datos.length; i++) {
	d+= '<tr>'+
	'<td>'+datos[i].id+'</td>'+
	'<td>'+datos[i].nombres+'</td>'+
	'<td>'+datos[i].apellidos+'</td>'+
	'</tr>';
	}
	$("#table-sales").append(d);
   });