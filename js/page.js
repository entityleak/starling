
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
 		loadtext: $('#loadtext')
 };

 var accordion;

 accordion = {
 	nav: $('.nav'),
	section: $('.accordion')
 };

var ao=true;

 function accordionOpenClose(){
 	// console.log(accordion.nav.index(this));


 	accordion.section.addClass('hide')
 	// ao=true;

 	var n = accordion.nav.index(this);

 	if (ao==true) {
 	 	accordion.section.addClass('hide')
 		$( accordion.section ).eq( n ).removeClass('hide');
 		ao=false;
 	} else {
 		$( accordion.section ).eq( n ).addClass('hide');
 		ao=true;
 	}


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

function hideSidebar(){
	console.log('click');
			el.sidebar.removeClass('visible');
			el.container.removeClass('dark');
			el.navtoggleh1.removeClass('on');
			el.navtoggleh1.html('?');
			el.bodybg.removeClass('bodydark');
			o=false;
}


el.navtoggle.bind('click', toggleSidebar );
// el.container.bind('click', hideSidebar );
accordion.nav.bind('click', accordionOpenClose );

$( window ).on( "load", function() {

		el.loadtext.css('display','none');

		el.bodybg.removeClass('loadopacity');

		setTimeout(function(){
				el.splash.removeClass('loadopacity');
		}, 500);

});

// setTimeout(function(){
// 		el.loadtext.css('display','none');

// 		el.bodybg.removeClass('loadopacity');

// 		setTimeout(function(){
// 				el.splash.removeClass('loadopacity');
// 		}, 500);
// }, 2000);



});



