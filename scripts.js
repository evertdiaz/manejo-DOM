bind_close()
var n = 0
$('#btn').addEventListener('click', function(){
	
	var input = document.createElement('input')
	input.setAttribute('type','email')
	input.setAttribute('id','m'+n)
	input.setAttribute('placeholder','Ingresa tu Correo')
	//con este n podriamos jugar con los ID para controlar 
	//cada nuevo elemento creado
	n++
	input.setAttribute('name','mails['+n+']')
	
	$('#form').appendChild(input)
	alerta("Se agregó "+n+" nuevo(s) campo(s)")
	console.log(input)
})

function bind_close(){
	var elements = document.querySelectorAll(".close")
	for (var i = elements.length - 1; i >= 0; i--) {
		var el = elements[i]
		el.addEventListener('click', function(){
			this.parentNode.style.display = 'none'
			
		})
	}
}

function $(selector){
	return document.querySelector(selector)
}
function alerta(msj){
	//console.log( $('body').children[0] )
	var div = document.createElement('div')
	div.setAttribute('class', 'alert')
	div.innerHTML = msj
	var close = document.createElement('span');
	close.style.float = 'right'
	close.innerHTML = "X"
	close.setAttribute('class','close')
	div.appendChild(close)
	//appendchild agrega al final
	//$('body').appendChild(div)
	$('body').insertBefore(div, $('body').firstChild)
	bind_close()
}