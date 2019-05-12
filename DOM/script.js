
/*function mudaCor(argument) {
	var element = document.getElementById('mensagem');
	//element.style.color = argument;
	element.style.backgroundColor = argument;
	element.style.fontSize = "50px";
}*/


function valida(){
	var nome = document.getElementById('nome');
	if (nome.value == "") {
		alert("Campo nome não pode estar em branco");
	}else{
		alert("Nenhum problema foi detectado");
	}

}