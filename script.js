// Show menu after scrolling down
window.onscroll = function() {
    stickyMenu();
};

var menu = document.getElementById("menu");
var stickyPoint = 100; // Show menu after scrolling 100px

function stickyMenu() {
    if (window.pageYOffset > stickyPoint) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}

// Toggle dropdown menu
function toggleMenu() {
    menu.classList.toggle("show");
}

//slider
const slides = document.querySelectorAll('.slide');
        const navDots = document.querySelectorAll('.nav-dot');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${100 * (i - index)}%)`;
            });
            navDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                showSlide(index);
            });
        });

        //display time now
        function updateDateTime() {
            const now = new Date();
        
            // get the current time (hours and minutes only)
            const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
            // update the `textContent` property of the `span` element with the `id` of `datetime`
            document.querySelector('#datetime').textContent = currentTime;
        }
        
        // call the `updateDateTime` function every second
        setInterval(updateDateTime, 1000);
        
        //play video greyscales
        document.addEventListener('DOMContentLoaded', () => {
            const videos = document.querySelectorAll('.video-container video');
        
            videos.forEach(video => {
                video.play();
            });
        });
        

        //email.js
        document.addEventListener('DOMContentLoaded', () => {
            const emailForm = document.getElementById('emailForm');
        
            // Handle form submission
            emailForm.onsubmit = function(event) {
                event.preventDefault();
                sendmail();  // Call sendmail function to send the email
            };
        });
        
        // Function to send email using EmailJS
        function sendmail() {
            const parms = {
                name: document.getElementById("name")?.value || '',
                email: document.getElementById("email").value,
                subject: document.getElementById("subject")?.value || '',
                message: document.getElementById("message").value,
            };
        
            // Send email using EmailJS service and template
            emailjs.send("service_mhwyc8p", "template_mroxfbs", parms)
                .then(() => alert("Email Sent!"))
                .catch((error) => console.error("Failed to send email:", error));
        }
        