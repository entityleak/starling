
$(function(){

	 console.log('hello');



 var el;

 el = {
 		body: $('body'),
 		bodybg: $('#bodybg'),
 		canvas: $('canvas'),
 		splash: $('#splash'),
 		sidebar: $('#sidebar'),
 		navtoggle: $('#navtoggle'),
 		navtoggleh1: $('#navtoggle h1'),
 		container: $('#container'),
 		loadtext: $('#loadtext'),
 		title: $('.home'),
 		mobtoggle: $('#mobtoggle'),
 		backbtn: $('#backbtn')
 };

 var accordion;

 accordion = {
 	nav: $('.nav'),
	section: $('.accordion')
 };

 var colors = [
 	"#FFC348",
 	"#6AA784",
 	"#635D52",
 	"#BDB0D4",
 	"#464646",
 	"#a7a399"
 	
 ];

// var ao=true;


 function accordionOpenClose(){
 	 	accordion.section.addClass('hide');
 	 	accordion.nav.removeClass('active');
 	 	accordion.nav.addClass('mob-hide');
 	 	// ao==true;

 	var n = accordion.nav.index(this);

	if (this.classList.contains('active')) {
	 		$(this).removeClass('active');
	 		$(this).addClass('mob-hide');
	 		$( accordion.section ).eq( n ).addClass('hide');
	 		// console.log('activeclick');
	} else {
			// accordion.nav.removeClass('active');
		 	$(this).addClass('active');
		 	$(this).removeClass('mob-hide');
	 		$( accordion.section ).eq( n ).removeClass('hide');
	 		el.bodybg.css('background-color', colors[n] );

	 		el.backbtn.removeClass('mob-hide');
	 		el.mobtoggle.addClass('mob-hide');
	}
}

 function accordionClose(){
 	 	accordion.section.addClass('hide');
 	 	accordion.nav.removeClass('mob-hide');
 	 	accordion.nav.removeClass('active');

 	 	el.backbtn.addClass('mob-hide');
	 	el.mobtoggle.removeClass('mob-hide');
}

var o;

function toggleSidebar(){
	console.log('click');
			if (o==true) {
			el.sidebar.removeClass('visible');
			el.container.removeClass('dark');
			el.navtoggleh1.removeClass('on');
			el.navtoggleh1.html('?');
			el.bodybg.removeClass('bodydark');
			o=false;
			console.log(o);
		} else {
			el.sidebar.addClass('visible');
			el.container.addClass('dark');
			el.navtoggleh1.addClass('on');
			el.navtoggleh1.html('×');
			el.bodybg.addClass('bodydark');
			o=true;
			console.log(o);
		}

}

accordion.nav.bind('click', accordionOpenClose );

el.title.bind('click', accordionClose);

$( window ).on( "load", function() {

		el.loadtext.css('display','none');

		el.bodybg.removeClass('loadopacity');


		setTimeout(function(){
				el.title.removeClass('loadopacity');
				el.container.removeClass('loadopacity');
		}, 300);

});

// setTimeout(function(){
// 		el.loadtext.css('display','none');

// 		el.bodybg.removeClass('loadopacity');

// 		setTimeout(function(){
// 				el.splash.removeClass('loadopacity');
// 		}, 500);
// }, 2000);



});

