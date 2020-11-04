var imagesDict={
	fablat:[
					'IMG/fablat1.jpg',
					'IMG/fablat2.jpg'
				],
	cemexventures:[],
	minirewards: ['IMG/minirewardslogo.jpeg'],
	trackr: []
}

var id = null;
window.onload = function() {
	switch(window.location.pathname.split("/").pop()) {
		case 'minirewards.html':
			id = 'minirewards'
		case 'cemexventures.html':
	    id = 'cemexventures'
		case 'trackr.html':
			id = 'trackr'
	    break;
		case 'fablat.html':
			id = 'fablat'
			break;
	  default:
			id = null;
	}
};

var url = 0;
setInterval(function () {
	$("#img").animate({opacity: '1'},1250);
	$("#img").delay(3000).animate({opacity: '0'},1000,function(){
		url += 1;
		if (url >= imagesDict[id].length) {
			url = 0;
		}
		$("#img").attr("src",imagesDict[id][url])
	});
}, 1000);

function openModal(){
	var iImage = 0;
	$('#modal-galery').addClass('is-active');
	$('#modal-image').css('opacity', '0')
	$('#modal-image').animate({opacity: '1'},1000)
	$('#right-arrow').click(function(){
		iImage += 1;
		if (iImage >= imagesDict[id].length) {
			iImage = 0;
		}
		$("#modal-image").animate({opacity: '0'},500,function(){
			$("#modal-image").attr("src",imagesDict[id][iImage])
		});
		$("#modal-image").animate({opacity: '1'},500);
	});
	$('#left-arrow').click(function(){
		iImage -= 1;
		if (iImage < 0) {
			iImage = imagesDict[id].length-1
		}
		$("#modal-image").animate({opacity: '0'},500,function(){
			$("#modal-image").attr("src",imagesDict[id][iImage])
		});
		$("#modal-image").animate({opacity: '1'},500);
	});
}

$('.modal-close').click(function(){ $('.is-active').removeClass('is-active')})
