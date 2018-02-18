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
//animating logo in header
function drawElement(){
  let mask = document.getElementById('logoMask'),
      group = document.getElementById('letters'),
      paths = document.getElementsByTagName('path'),
      tl = new TimelineMax();
      TweenMax.staggerFromTo('#letters path', 1, {drawSVG: "0%"}, {drawSVG: "100%", drawSVG: true, ease: Linear.easeNone, delay: 0.3}, 1);
}
//in cosmtic section header animation
function lettersAnimation(){
  let natural = document.getElementById('n'),
      beauty = document.getElementById('b'),
      pure = document.getElementById('p'),
      minerals = document.getElementById('m'),
      naturalSplit = new SplitText(natural, {type: "chars"}),
      tl = new TimelineMax();
      tl.set([natural, beauty, pure, minerals], {opacity:0});
      TweenMax.fromTo(natural, 3, {opacity: 0, fontSize: 0, left: 0}, {opacity: 1, fontSize: '7em', left: '17vw', ease:Back.easeInOut}, '+=1');




}

smoothScrollWithoutHash( 'a[href*="#"]' );
updateMenuOnScroll();
// addMenuActiveclass();
// drawElement();
lettersAnimation();
