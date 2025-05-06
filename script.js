document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const collectionsGrid = document.querySelector('.collections-grid');
        let scrollAmount = 0;
    
        function autoScrollCollections() {
            if (collectionsGrid) {
                const maxScroll = collectionsGrid.scrollWidth - collectionsGrid.clientWidth;
    
                // Scroll by 300px or reset to the start if at the end
                if (scrollAmount >= maxScroll) {
                    scrollAmount = 0;
                } else {
                    scrollAmount += 300; // Adjust scroll amount as needed
                }
    
                collectionsGrid.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        }
    
        // Auto-scroll every 5 seconds
        setInterval(autoScrollCollections, 5000);
    });

    document.addEventListener('DOMContentLoaded', function () {
        const instagramReel = document.querySelector('.instagram-reel');
        const instagramPrevBtn = document.querySelector('.instagram-prev-btn');
        const instagramNextBtn = document.querySelector('.instagram-next-btn');
        const scrollStep = 300; // Adjust as needed
    
        if (!instagramReel) return;
    
        // Auto scroll logic
        function autoScrollInstagramReel() {
            const maxScroll = instagramReel.scrollWidth - instagramReel.clientWidth;
            let currentScroll = instagramReel.scrollLeft;
    
            if (currentScroll + scrollStep >= maxScroll) {
                instagramReel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                instagramReel.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        }
    
        // Manual scroll buttons
        instagramNextBtn?.addEventListener('click', () => {
            instagramReel.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });
    
        instagramPrevBtn?.addEventListener('click', () => {
            instagramReel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
    
        // Auto-scroll every 5 seconds
        setInterval(autoScrollInstagramReel, 5000);
    });
    
    
//workshop slider
    document.addEventListener('DOMContentLoaded', function () {
      const slides = document.querySelectorAll('.slide');
      const nextBtn = document.querySelector('.slider-btn.next');
      const prevBtn = document.querySelector('.slider-btn.prev');
      let currentIndex = 0;
  
      function showSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.toggle('active', i === index);
          });
      }
  
      nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      });
  
      prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
      });
  
      // Auto-slide every 5 seconds
      setInterval(() => {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }, 5000);
  });



  window.onload = function () {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewsWrapper = document.querySelector('.reviews-wrapper');
    const scrollStep = 320; // Adjust as per your review card width
    const scrollDelay = 5000; // 5 seconds

    if (!reviewsContainer || !reviewsWrapper) {
        console.warn('Reviews container or wrapper not found:', { reviewsContainer, reviewsWrapper });
        return;
    }

    // Button click scroll
    reviewsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('prev-btn')) {
            reviewsWrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        } else if (event.target.classList.contains('next-btn')) {
            reviewsWrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');
    const muteToggle = document.getElementById('muteToggle');
    
    // Start with video muted (to satisfy autoplay requirements)
    video.muted = true;
    
    // Play video when it's ready
    video.addEventListener('loadedmetadata', function() {
        // Use play() as a promise to handle autoplay restrictions
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Video is playing successfully
                console.log('Video playing successfully');
            })
            .catch(error => {
                // Auto-play was prevented - add a play button or other UI
                console.log('Autoplay was prevented:', error);
            });
        }
    });
    
    // Check if video is taking too long to load
    setTimeout(function() {
        if (video.readyState < 3) {  // HAVE_FUTURE_DATA
            console.log('Video is loading slowly - consider optimizing your video');
            // You could implement a lower quality fallback here
        }
    }, 5000);  // Check after 5 seconds
    
    // Toggle mute on button click
    muteToggle.addEventListener('click', function() {
        video.muted = !video.muted;
        muteToggle.textContent = video.muted ? '🔇' : '🔊';
    });
    video.addEventListener('waiting', function() {
        console.log('Video is buffering');
        // Show a loading spinner here
      });
      
      video.addEventListener('playing', function() {
        console.log('Video is playing');
        // Hide the loading spinner
      });
    
    // Set video to loop
    video.loop = true;

});
document.addEventListener('DOMContentLoaded', function () {
    const typewriterElement = document.querySelector('.typewriter');
    const text = "Join Our Instagram Family Over 5K";
    let index = 0;

    function typeWriterEffect() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriterEffect, 100); // Adjust typing speed (100ms per character)
        } else {
            setTimeout(() => {
                typewriterElement.textContent = ""; // Clear text
                index = 0; // Reset index
                typeWriterEffect(); // Restart typing
            }, 2000); // Pause before restarting (2 seconds)
        }
    }

    typeWriterEffect();
});