

document.addEventListener('DOMContentLoaded', () => {
    // Hero Carousel
    let currentHeroSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const totalHeroSlides = heroSlides.length;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextHeroSlide() {
        currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
        showHeroSlide(currentHeroSlide);
    }

    // Initialize hero carousel
    showHeroSlide(currentHeroSlide);
    setInterval(nextHeroSlide, 3000);

    // Industry Cards Slideshow
    let currentIndustrySlide = 1;
    const industryCards = document.querySelectorAll('.industry-card');
    const dots = document.querySelectorAll('.slideshow-dots .dot');
    let autoSlideInterval;

    function showIndustrySlide(setNumber) {
        industryCards.forEach(card => {
            const isVisible = card.dataset.set === setNumber.toString();
            card.classList.toggle('visible', isVisible);
            card.classList.toggle('hidden', !isVisible);
        });

        dots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.slide === setNumber.toString());
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndustrySlide = currentIndustrySlide === 1 ? 2 : 1;
            showIndustrySlide(currentIndustrySlide);
        }, 10000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Initialize industry slideshow
    showIndustrySlide(currentIndustrySlide);
    startAutoSlide();

    // Dot click event listeners
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndustrySlide = parseInt(dot.dataset.slide);
            showIndustrySlide(currentIndustrySlide);
            setTimeout(startAutoSlide, 10000);
        });
    });
});
