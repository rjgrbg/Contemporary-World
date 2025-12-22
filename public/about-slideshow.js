// About Page Overview Slideshow
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.overview-slide');
    let currentSlide = 0;
    
    console.log('About slideshow initialized with', slides.length, 'slides');
    
    if (slides.length === 0) {
        console.error('No overview slides found!');
        return;
    }
    
    // Make sure first slide is visible
    slides[0].classList.add('active');
    
    function nextSlide() {
        console.log('Changing from slide', currentSlide);
        
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
        
        console.log('Changed to slide', currentSlide);
    }
    
    // Change slide every 4 seconds
    setInterval(nextSlide, 4000);
    
    console.log('About slideshow started');
});
