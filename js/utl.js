$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// ---------------------------------------------------------- //


// Esse treco evita o botão em cima da section "Fale comigo" de fazer o submit padrão

document.getElementById("teste").addEventListener("click", function(event){
	event.preventDefault();

});

// ---------------------------------------------------------- //