// adding active class to clicked menu element
function addMenuActiveclass(){
  let navBox = document.getElementById('nav'),
      navHrefs = navBox.querySelectorAll('li a');
      for (let i = 0; i < navHrefs.length; i++) {
        navHrefs[i].addEventListener('click', function(){
          let current = document.getElementsByClassName('active');
          current[0].className = current[0].className.replace('active', "");
          this.className += " active";
        });
      }
}
// checking height of document elements
let yOffset = window.pageYOffset;
console.log(yOffset);
// adding a smoth scroll
const scroll = new SmoothScroll();
let smoothScrollWithoutHash = function (selector, settings) {
	let clickHandler = function (event) {
		let toggle = event.target.closest( selector );
		console.log(toggle);
		if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
		console.log(toggle.hash);
		let anchor = document.querySelector( toggle.hash );
		if ( !anchor ) return;

		event.preventDefault(); // Prevent default click event
		scroll.animateScroll( anchor, toggle, settings || {} ); // Animate scroll
	};
	window.addEventListener('click', clickHandler, false );
};
//update menu link (add active class) on scroll
function updateMenuOnScroll(){
    let section = document.querySelectorAll(".page"),
        sections = {},
        i = 0;

    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });

     function update() {
      let scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + (window.innerHeight / 2);

      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active').setAttribute('class', ' ');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };
    window.addEventListener('scroll', update, false);
}
//submenu animation
function submenu(){
  let nav = document.getElementById('nav'),
      cosmeticNav = document.querySelector('a[href="#cosmetics"]'),
      subNav = document.getElementById('subnav'),
      subnavEls = document.getElementsByClassName('subnav-el'),
      tl = new TimelineMax();
      tl.set(subNav, {autoAlpha: 0, height: 0});

      cosmeticNav.addEventListener('mouseenter', function(){
        TweenMax.staggerFromTo(subnavEls, 0.3, {autoAlpha:0, left: "-30vw"}, {autoAlpha: 1, left: "15vw", height: "100%", ease: Linear.easeNone, delay: 0.3}, 1);

      });
      cosmeticNav.addEventListener('mouseleave', function(){
        TweenMax.to(subNav, 0.3, {autoAlpha:0});
      });

}
//animating logo in header
function drawElement(){
  let mask = document.getElementById('logoMask'),
      group = document.getElementById('letters'),
      paths = document.getElementsByTagName('path'),
      tl = new TimelineMax();
      TweenMax.staggerFromTo('#letters path', 1, {drawSVG: "0%"}, {drawSVG: "100%", drawSVG: true, ease: Linear.easeNone, delay: 0.3}, 1);
}
//in cosmetic section header animation
function lettersAnimation(){
  let natural = document.getElementById('naturalsvg'),
      beauty = document.getElementById('beautysvg'),
      pure = document.getElementById('puresvg'),
      minerals = document.getElementById('mineralssvg'),
      tl = new TimelineMax();
      tl.set([natural, beauty, pure, minerals], {autoAlpha: 0})
        .fromTo(natural, 2.7, {left: "-30vw", width: "65%", top: "13vh"}, {autoAlpha: 1, left: "11vw", ease:Linear.easeInOut})
        .to(natural, 1, {width: "41%", left: "21vw",top: "5vh", ease:Linear.easeInOut})
        .fromTo(beauty, 1.7, {right: "-30vw", top: "33vh", width: "51%"}, {autoAlpha: 1, right: "14vw", ease:Linear.easeInOut}, "-=0.5")
        .to(natural, 1, {transforOrigin: "0% 100%", rotation:"-90deg", left: "1vw", top: "23vh", width: "33%", ease:Linear.easeInOut})
        .fromTo(pure, 1, {top: "-33vh", width: "49%", left: "23vw"}, {top: "11vh", autoAlpha: 1, ease:Linear.easeInOut}, "-=0.7")
        .staggerTo([natural, beauty, pure], 1, {width: "27%"})
        .to(natural, 1, {left: "5vw"})
        .to(pure, 0.7, {left: "21vw"}, "-=0.9")
        .to(beauty, 0.7, {left: "41vw", top: "17vh", width: "39%"}, "-=0.7")
        .fromTo(minerals, 1, {bottom: "-30vh", left: "21vw", width: "57%"}, {autoAlpha: 1,bottom: "35vh"});




}

smoothScrollWithoutHash( 'a[href*="#"]' );
updateMenuOnScroll();
// addMenuActiveclass();
drawElement();
lettersAnimation();
submenu();
