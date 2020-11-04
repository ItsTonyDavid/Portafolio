function openModal(id){
	$('#' + id).addClass('is-active')
}

$('.modal-close').click(function(){
	$('.is-active').removeClass('is-active')
})
