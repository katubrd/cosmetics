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
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

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
// function drawLogo(){
//
// }

addMenuActiveclass();
smoothScrollWithoutHash( 'a[href*="#"]' );
updateMenuOnScroll();
