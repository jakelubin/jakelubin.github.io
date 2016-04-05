// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

$(document).ready()
	var count=0
	$('#a10').click(add10)
	$('#a20').click(add20)
	$('#a30').click(add30)
	$('#n10').click(sub10)
	$('#n20').click(sub20)
	$('#n30').click(sub30)
	$('#red').click(red)
	$('#blue').click(blue)
	$('#out').click(white)
	function add10(){
		count=count+10
		$('#out').text(count)
	}
	function add20(){
		count=count+20
		$('#out').text(count)
	}
	function add30(){
		count=count+30
		$('#out').text(count)
	}function sub10(){
		count=count-10
		$('#out').text(count)
	}function sub20(){
		count=count-20
		$('#out').text(count)
	}function sub30(){
		count=count-30
		$('#out').text(count)
	}
	function red(){
		$('#out').css('background-color', 'red')
	}
	function blue(){
		$('#out').css('background-color', 'blue')
	}
	function white(){
		$('#out').css('background-color', 'white')
	}
