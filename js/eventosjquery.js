//jquery = $
var inicia = function(){
	var nuevo = function(){
		$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //alert(data.results[0].name.first+" "+data.results[0].name.last);
    //console.log(data);
    $("#nombre").html("<marquee> Nombre: "+data.results[0].name.first+" "+
    	              data.results[0].name.last+"</marquee>");
    $("#foto").attr("src",data.results[0].picture.large);

    $("#email").html("<marquee> email: "+data.results[0].email+"</marquee>");
  }
});
	}
	//	JSON = JavaScript Object Notation
	
	//alert("Lista la página")
	$("#btnNuevo").on("click",nuevo);
}

//Iniciamos JQuery
//Cuando la página está lista
//ejecuta la funcion inicia.
$(document).ready(inicia);
