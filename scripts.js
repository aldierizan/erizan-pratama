document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            } else {
                console.error(`Element with id '${targetId}' not found.`);
            }
        });
    });
});

// Get the modal
var aboutModal = document.getElementById("aboutModal");

// Get the button that opens the modal
var btn = document.getElementById("aboutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    aboutModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    aboutModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    }
}

// When the user clicks the button, open the modal with fade-in effect
btn.onclick = function() {
    aboutModal.style.display = "block";
    setTimeout(() => {
        aboutModal.style.opacity = 1;
        aboutModal.querySelector('.modal-content').style.opacity = 1;
    }, 10); // delay to allow CSS to render display change before starting opacity transition
}

// When closing the modal
span.onclick = function() {
    aboutModal.style.opacity = 0;
    aboutModal.querySelector('.modal-content').style.opacity = 0;
    setTimeout(() => {
        aboutModal.style.display = "none";
    }, 500); // delay must match the CSS opacity transition time
}

// Close when clicking outside the modal
window.onclick = function(event) {
    if (event.target == aboutModal) {
        aboutModal.style.opacity = 0;
        aboutModal.querySelector('.modal-content').style.opacity = 0;
        setTimeout(() => {
            aboutModal.style.display = "none";
        }, 500);
    }
}

// VeRsIon 2

// Get the modal
var aboutModal2 = document.getElementById("aboutModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("aboutBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    aboutModal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    aboutModal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == aboutModal2) {
        aboutModal2.style.display = "none";
    }
}

// When the user clicks the button, open the modal with fade-in effect
btn2.onclick = function() {
    aboutModal2.style.display = "block";
    setTimeout(() => {
        aboutModal2.style.opacity = 1;
        aboutModal2.querySelector('.modal-content2').style.opacity = 1;
    }, 10); // delay to allow CSS to render display change before starting opacity transition
}

// When closing the modal
span2.onclick = function() {
    aboutModal2.style.opacity = 0;
    aboutModal2.querySelector('.modal-content2').style.opacity = 0;
    setTimeout(() => {
        aboutModal.style.display = "none";
    }, 500); // delay must match the CSS opacity transition time
}

// Close when clicking outside the modal
window.onclick = function(event) {
    if (event.target == aboutModal2) {
        aboutModal2.style.opacity = 0;
        aboutModal2.querySelector('.modal-content2').style.opacity = 0;
        setTimeout(() => {
            aboutModal2.style.display = "none";
        }, 500);
    }
}