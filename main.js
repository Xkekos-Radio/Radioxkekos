const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

//---------->Start Popups<----------

//First popup
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

//Second popup
var btnAbrirPopup_1 = document.getElementById('btn-abrir-popup_1'),
	overlay_1 = document.getElementById('overlay_1'),
	popup_1 = document.getElementById('popup_1'),
	btnCerrarPopup_1 = document.getElementById('btn-cerrar-popup_1');

btnAbrirPopup_1.addEventListener('click', function(){
	overlay_1.classList.add('active');
	popup_1.classList.add('active');
});

btnCerrarPopup_1.addEventListener('click', function(e){
	e.preventDefault();
	overlay_1.classList.remove('active');
	popup_1.classList.remove('active');
});

//third popup
var btnAbrirPopup_2 = document.getElementById('btn-abrir-popup_2'),
	overlay_2 = document.getElementById('overlay_2'),
	popup_2 = document.getElementById('popup_2'),
	btnCerrarPopup_2 = document.getElementById('btn-cerrar-popup_2');

btnAbrirPopup_2.addEventListener('click', function(){
	overlay_2.classList.add('active');
	popup_2.classList.add('active');
});

btnCerrarPopup_2.addEventListener('click', function(e){
	e.preventDefault();
	overlay_2.classList.remove('active');
	popup_2.classList.remove('active');
});

//four popup
var btnAbrirPopup_3 = document.getElementById('btn-abrir-popup_3'),
	overlay_3 = document.getElementById('overlay_3'),
	popup_3 = document.getElementById('popup_3'),
	btnCerrarPopup_3 = document.getElementById('btn-cerrar-popup_3');

btnAbrirPopup_3.addEventListener('click', function(){
	overlay_3.classList.add('active');
	popup_3.classList.add('active');
});

btnCerrarPopup_3.addEventListener('click', function(e){
	e.preventDefault();
	overlay_3.classList.remove('active');
	popup_3.classList.remove('active');
});
