// JavaScript Document

// HEADER CAROUSEL
 $(document).on('ready', function() {	
	$('#owl-header').owlCarousel( {
		loop: true,
		center: false,
		items: 4,
		margin: 0,
		autoplay: true,
		dots:true,
    nav:false,
		autoplayTimeout: 4000,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
});	

// VOLUNTEER CAROUSEL
 $(document).on('ready', function() {	
	$('#owl-volunteer').owlCarousel( {
		loop: true,
		center: false,
		items: 4,
		margin: 30,
		autoplay: true,
		dots:true,
    nav:false,
		autoplayTimeout: 4000,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 2
			},
			1170: {
				items: 2
			}
		}
	});
});	

// OUR PARTNERS CAROUSEL
 $(document).on('ready', function() {	
	$('#owl-partners').owlCarousel( {
		loop: false,
		center: false,
		items: 6,
		margin: 20,
		autoplay: true,
		dots:true,
    nav:false,
		autoplayTimeout: 4000,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 3
			},
			768: {
				items: 3
			},
			1170: {
				items: 4
			}
		}
	});
});	


// OUR TESTIMONIAL CAROUSEL
 $(document).on('ready', function() {	
	$('#owl-testimonial').owlCarousel( {
		loop: true,
		center: true,
		items: 4,
		margin: 5,
		autoplay: false,
		dots:false,
		mouseDrag:false,
		nav:true,
		autoplayTimeout: 4000,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 3
			},
			768: {
				items: 3
			},
			1170: {
				items: 3
			}
		}
	});
});	

	
