// Bulma Toggle Script

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
        });
    }

});

// Portfolio hover

const imgIcons = Array.from(document.querySelectorAll(".pCatIcon"));

imgIcons.map(icon => {
    icon
        .addEventListener("mouseover", function(){
            const source = `images/icons/${this.getAttribute("data-category")}-Color.png`;
            this.src = source;
            this.parentElement.classList.add("portfolioHover");
        });
    icon.addEventListener("mouseout", function(){
        const source = `images/icons/${this.getAttribute("data-category")}.png`;
        this.src = source;
        this.parentElement.classList.remove("portfolioHover");
    });
});

// flex-panel Logic

const flexpanels = document.querySelectorAll('.flex-panel');

function toggleOpen() {
this.classList.toggle('open');
const children = Array.from(this.childNodes).filter(element => element.localName);
console.log(children);
children.forEach(child => child.classList.toggle('openChild'));
// this.classList.toggle('blur-bg');
}

function toggleActive(e) {
if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
}
}

flexpanels.forEach(panel => panel.addEventListener('click', toggleOpen));
flexpanels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// Navbar change color on scroll

const myNav = document.getElementById('main-nav');
window.onscroll = function () { 
    "use strict";
    if (window.pageYOffset > 200 || document.documentElement.scrollTop > 200) {
        
        myNav.classList.add("navbar-color");
        myNav.classList.remove("navbar-transparent");
    } 
    else {
        myNav.classList.add("navbar-transparent");
        myNav.classList.remove("navbar-color");
    }
};