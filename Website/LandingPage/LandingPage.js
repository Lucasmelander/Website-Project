$(document).ready(function() {
    var lastScrollTop = 0; // Tracks the last scroll position

    // Hide or show the header and hamburger icon based on scroll direction
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            // User is scrolling down, hide the header and hamburger
            $('.site-header').slideUp('slow');
            $('#hamburgerMenu').slideUp('slow'); // Hides hamburger icon
        } else {
            // User is scrolling up, show the header and hamburger
            $('.site-header').slideDown('slow');
            $('#hamburgerMenu').slideDown('slow'); // Shows hamburger icon
        }

        lastScrollTop = currentScroll;
    });

    // Toggle the full-screen menu on hamburger click
    $('#hamburgerMenu').click(function() {
        $(this).toggleClass('active'); // Toggle hamburger icon animation
        $('#menu').toggleClass('active'); // Toggle full-screen menu visibility
        $('#closeMenu').toggleClass('active'); // Toggle close button visibility
    });

    // Close the menu using the close button
    $('#closeMenu').click(function() {
        $('#hamburgerMenu').removeClass('active'); // Remove active class from hamburger
        $('#menu').removeClass('active'); // Close the full-screen menu
        $(this).removeClass('active'); // Hide the close button
    });
});

function updateClock() {
    const now = new Date();
    
    // Format the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    // Format the time
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Update the HTML elements
    document.getElementById('currentDate').textContent = formattedDate;
    document.getElementById('currentTime').textContent = formattedTime;
}

// Initial call to display the clock immediately
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);



