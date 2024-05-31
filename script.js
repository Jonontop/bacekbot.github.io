
// Smooth scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
scrollToTop();

// Smooth scroll to a section
function scrollToSection(section) {
    var sectionElement = document.getElementById(section);
    window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
    });
}

// Scroll to a section when a nav link is clicked

var navLinks = document.getElementsByClassName('nav_a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        var section = this.getAttribute('href').replace('#', '');
        scrollToSection(section);
    });
}


