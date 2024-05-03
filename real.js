document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const hamburger2 = document.querySelector('.hamburger2');
    const sidebar = document.querySelector('.sidebar');
    const sidebar2 = document.querySelector('.sidebar2');
    const closeBtn = document.querySelector('.close-btn');
    const closeBtn2 = document.querySelector('.close-btn2');

    // Toggle sidebar when hamburger icon is clicked
    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when close button is clicked
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    hamburger2.addEventListener('click', function() {
        sidebar2.classList.toggle('active');
    });

    // Close sidebar when close button is clicked
    closeBtn2.addEventListener('click', function() {
        sidebar2.classList.remove('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        const dropdownItems = toggle.nextElementSibling;

        // Show dropdown items on hover
        toggle.addEventListener('mouseenter', function() {
            dropdownItems.classList.add('active');
        });

        // Hide dropdown items when mouse leaves
        toggle.addEventListener('mouseleave', function() {
            dropdownItems.classList.remove('active');
        });

        // Hide dropdown items when mouse leaves the dropdown items
        dropdownItems.addEventListener('mouseleave', function() {
            dropdownItems.classList.remove('active');
        });

        // Toggle dropdown items visibility on click
        toggle.addEventListener('click', function() {
            dropdownItems.classList.toggle('active');
        });

        // Prevent default behavior for the toggle link
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        const dropdownItems = toggle.nextElementSibling;

        // Show dropdown items on toggle hover
        toggle.addEventListener('mouseenter', function() {
            dropdownItems.classList.add('active');
        });

        // Show dropdown items on dropdown items hover
        dropdownItems.addEventListener('mouseenter', function() {
            dropdownItems.classList.add('active');
        });

        // Hide dropdown items when mouse leaves
        toggle.addEventListener('mouseleave', function() {
            dropdownItems.classList.remove('active');
        });

        // Hide dropdown items when mouse leaves the dropdown items
        dropdownItems.addEventListener('mouseleave', function() {
            dropdownItems.classList.remove('active');
        });
    });
});

// button style

// Get all button elements
const buttons = document.querySelectorAll('.button, .button-span');

// Loop through each button and add click event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Change background color to #C9F31D
        this.style.backgroundColor = '#C9F31D';
        this.style.color = 'black';

        // Reset background color of other buttons
        buttons.forEach(otherButton => {
            if (otherButton !== this) {
                otherButton.style.backgroundColor = '#1D1D1D';
                otherButton.style.color = 'white';
            }

        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const experienceButton = document.querySelector('.button[href="#experience"]');
    const aboutButton = document.querySelector('.button-span[href="#about"]');
    const educationButton = document.querySelector('.button[href="#education"]');
    const skillButton = document.querySelector('.button[href="#skill"]');
    const imageContainer3 = document.querySelector('.image-container3');
    const imageContainer4 = document.querySelector('.image-container4');
    const imageContainer5 = document.querySelector('.image-container5');
    const imageContainer6 = document.querySelector('.image-container6');

    experienceButton.addEventListener('click', function(event) {
        event.preventDefault();
        showExperienceSection();
    });

    educationButton.addEventListener('click', function(event) {
        event.preventDefault();
        showEducationSection();
    });

    skillButton.addEventListener('click', function(event) {
        event.preventDefault();
        showSkillSection();
    });

    aboutButton.addEventListener('click', function(event) {
        event.preventDefault();
        showAboutSection();
    });

    function showExperienceSection() {
        if (imageContainer3) {
            imageContainer3.style.display = 'none';
        }
        if (imageContainer4) {
            imageContainer4.style.display = 'block';
        }
        if (imageContainer5) {
            imageContainer5.style.display = 'none';
        }
        if (imageContainer6) {
            imageContainer6.style.display = 'none';
        }
    }

    function showEducationSection() {
        if (imageContainer3) {
            imageContainer3.style.display = 'none';
        }
        if (imageContainer4) {
            imageContainer4.style.display = 'none';
        }
        if (imageContainer5) {
            imageContainer5.style.display = 'block';
        }
        if (imageContainer6) {
            imageContainer6.style.display = 'none';
        }
    }

    function showSkillSection() {
        if (imageContainer3) {
            imageContainer3.style.display = 'none';
        }
        if (imageContainer4) {
            imageContainer4.style.display = 'none';
        }
        if (imageContainer5) {
            imageContainer5.style.display = 'none';
        }
        if (imageContainer6) {
            imageContainer6.style.display = 'block';
        }
    }

    function showAboutSection() {
        if (imageContainer3) {
            imageContainer3.style.display = 'block';
        }
        if (imageContainer4) {
            imageContainer4.style.display = 'none';
        }
        if (imageContainer5) {
            imageContainer5.style.display = 'none';
        }
        if (imageContainer6) {
            imageContainer6.style.display = 'none';
        }
    }
});





// design the card
const mainContains = document.querySelectorAll('.main-contain');


mainContains.forEach(container => {
    container.addEventListener('mouseenter', () => {    
        container.style.borderColor = '#C9F31D';        
        container.querySelector('.circular-bottom').style.backgroundColor = '#C9F31D';
    });

    
    container.addEventListener('mouseleave', () => {        
        container.style.borderColor = '#fff';
        container.querySelector('.circular-bottom').style.backgroundColor = '#000000';
    });
});

















