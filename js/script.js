function myFunction(event) {
    event.preventDefault();
    var dropdownContent = event.target.nextElementSibling;
    var arrow = event.target.querySelector('img');

    var isOpen = dropdownContent.classList.contains('show');

    // Close all dropdowns
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('show');
        var arrow = dropdown.previousElementSibling.querySelector('img');
        arrow.classList.remove('rotate');
    });

    // Toggle the clicked dropdown
    if (!isOpen) {
        dropdownContent.classList.add('show');
        arrow.classList.add('rotate');
    }
}

window.addEventListener('click', function (event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdownContent) {
        if (
            event.target.closest('.dropdown') === null &&
            dropdownContent.classList.contains('show')
        ) {
            dropdownContent.classList.remove('show');
            var arrow = dropdownContent.previousElementSibling.querySelector('img');
            arrow.classList.remove('rotate');
        }
    });
});

// Hamburger menu 

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});