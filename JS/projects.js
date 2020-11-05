var imagesDict={
	fablat:[
					'IMG/fablat1.jpg',
					'IMG/fablat2.jpg'
				],
	cemexventures:[
					'./IMG/cemexventures1.png',
					'./IMG/cemexventures2.png',
					'./IMG/cemexventures3.png',
					'./IMG/cemexventures4.png',
					'./IMG/cemexventures5.png'
	],
	minirewards: [
					'IMG/minirewardslogo.jpeg'
	],
	trackr: [
					'./IMG/trackr1.png',
					'./IMG/trackr2.png',
					'./IMG/trackr3.png',
					'./IMG/trackr4.png',
					'./IMG/trackr5.png',
					'./IMG/trackr6.png',
					'./IMG/trackr7.png'
	]
}

var id = null;
window.onload = function() {
	switch(window.location.pathname.split("/").pop()) {
		case 'minirewards.html':
			id = 'minirewards'
			break;
		case 'cemexventures.html':
	    id = 'cemexventures'
			break;
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
	$("#img").animate({opacity: '1'},750);
	$("#img").delay(4000).animate({opacity: '0'},750,function(){
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
