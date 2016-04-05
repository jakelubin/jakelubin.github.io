$('.box').css('background', 'red')
$('.box').text('this is a box')
function expand1(){
	$('#box1').css('width', '500px')
	$('#box1').css('height', '500px')
}
function expand2(){
	$('#box2').css('width', '500px')
	$('#box2').css('height', '500px')
}
//$('#box1').click(expand1)
//$('#box2').click(expand2)
$('.box').click(expand)

function expand(){
	$(this).css('width', '500px')
	$(this).css('height', '500px')
}