
const {BrowserWindow}=require('electron').remote
const app=require('electron').app;
const $=require('jquery');

require('electron').remote.getGlobal('infoUsuarios').nombre;
	require('electron').remote.getGlobal('infoUsuarios').genero;
	require('electron').remote.getGlobal('infoUsuarios').foto;
	require('electron').remote.getGlobal('infoUsuarios').direccion;
	require('electron').remote.getGlobal('infoUsuarios').telefono;
	$("#idNombre").html(nombre);
	$("#idGenero").html(genero);
	$("#idDireccion").html(direccion);
	$("#idTelefono").html(Telefono);
	$("#idFoto").attr("src",foto);