// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
$('#first').click(changeimg)
$('#second').click(changeimg)
$('#third').click(changeimg)
$('#fourth').click(changeimg)
function changeimg(){
	$('#bigimage').attr('src', $(this).attr('src'))
}
