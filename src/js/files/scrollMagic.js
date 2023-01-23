
// import ScrollMagic, { TriggerHook } from "scrollmagic";

if (document.querySelector('#mainscreen-img') && window.innerWidth > 767) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger-main", duration: 400})
						// animate color and top border in relation to scroll position
						.setTween("#mainscreen-img", {scale: 0.5}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

if (document.querySelector('#mainscreen-title') && window.innerWidth > 767) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger-main", duration: 200})
						// animate color and top border in relation to scroll position
						.setTween("#mainscreen-title", {opacity: 0, marginBottom: -150}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

if (document.querySelector('#mainscreen-btn') && window.innerWidth > 767) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger-main", duration: 600})
						// animate color and top border in relation to scroll position
						.setTween("#mainscreen-btn", {marginLeft: 300}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

//========================================================================================================================================================


if (document.querySelector('#title-give')) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1600})
						// animate color and top border in relation to scroll position
						.setTween("#title-give", {opacity: 0}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

if (document.querySelector('.prlx')) {
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave',
			duration: "120%" // this works just fine with duration 0 as well
			// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
			// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
		}
	});

	// get all slides
	var slides = document.querySelectorAll(".prlx");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i], {pushFollowers: false})
			.addTo(controller);
	}
}

if (document.querySelector('.we-give__img')) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 400})
						// animate color and top border in relation to scroll position
						.setTween("#img-give", {opacity: 1}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

if (document.querySelector('.items-give')) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 200})
						// animate color and top border in relation to scroll position
						.setTween(".items-give", {opacity: 1}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

if (document.querySelector('.we-give__img') && window.innerWidth > 992) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 400})
						// animate color and top border in relation to scroll position
						.setTween(".ready__image-ibg", {scaleX: 0.7, scaleY: 0.7}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

if (document.querySelector('.ready__title') && window.innerWidth < 1500 && window.innerWidth > 992) {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300})
						// animate color and top border in relation to scroll position
						.setTween(".ready__title", {marginLeft: 150, scale: 0.8, opacity: 1}) // the tween durtion can be omitted and defaults to 1
						.addTo(controller);	
}

