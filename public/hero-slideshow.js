// Hero Background Slideshow
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    console.log('Slideshow initialized with', slides.length, 'slides');
    
    if (slides.length === 0) {
        console.error('No slides found!');
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
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    console.log('Slideshow started');
});
