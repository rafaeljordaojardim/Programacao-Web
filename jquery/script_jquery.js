
/*$(document).ready(function(){
	$('button').click(function(){
		$('h1').hide();
	});
});*/

//verifica da mesma maneira
// $(function(){
// 	$('button').click(function(){
// 		$('h1').hide();
// 	});
// });


// $(function(){
// 	$('button').click(function(){
// 		$('#unico').css("color", "red");
// 	});
// });
$(function(){//o documento é carregado
	$('#azul').click(function(){//ao clicar no botao azul fica azul o p
		$('p').css("color", "blue");
		$('p').fadeOut(2000);
		$('p').delay(1000);
		$('p').fadeIn('slow').removeClass('green');;
		$('#mensagem')
				.text('Cor alterada com sucesso')
				.css({color:'blue',border:'1px solid black'})
				.delay(1000)
				.fadeOut('fast');
	});
	$('#vermelho').click(function(){//ao clicar no vermelho o p fica vermelho
		$('p').css("color", "red");
		$('p').fadeOut('slow');
		$('p').delay(1000);
		$('p').fadeIn('slow').addClass('green');
		$('#mensagem')
				.text('Cor alterada com sucesso')
				.css("color", "red")
				.css("border", "1px solid black");
		$('#mensagem').delay(1000);
		$('#mensagem').fadeOut('fast');

	});
});