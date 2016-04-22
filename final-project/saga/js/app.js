$(document).ready(function () {
	var pname = $('#setupdone').click(function (){
		function determinetitle(playergender){
			if (playergender === 'male'){
				return 'Lord'
			}
			else if (playergender === 'female') {
				return 'Lady'
			}
		}
		var pnam = $('#playername').val()
		var ptitle = determinetitle($('input:radio:checked').val())
		var pname=ptitle+' '+pnam
		$('body').empty()
		$('header').empty()
		$('body').append('<div id="splashmessage"></div>')
		$('#splashmessage').css('text-align', 'center')
		$('#splashmessage').append('<h1>Greetings '+pname+'!</h1>')
		$('#splashmessage').append('<input id="begin" type="button" value="Begin your adventures!"></input>')
		$('body').append()
		$('#begin').click(function (){
			$('#splashmessage').empty()
			$('body').append('<div id="illus"></div>')
			$('#illus').css('width', '75%')
			$('#illus').css('height', '75%')
			$('#illus').css('background-image', 'url("img/castle1.png")')
			$('#illus').css('background-size', 'auto')
		})
	})
})