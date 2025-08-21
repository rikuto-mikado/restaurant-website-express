class MenuSlider {
    constructor() {
        this.slider = document.querySelector(".menu-preview-slider");
        if (!this.slider) return;

        this.slides = this.slider.querySelectorAll('.menu-slide');
        this.indicators = document.querySelectorAll('.menu-indicator');
        this.prevBtn = document.querySelector('.menu-prev');
        this.nextBtn = document.querySelector('.menu-next');
        this.currentSlide = 0;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        if (this.slides.length <= 1) return;

        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        this.startAutoPlay();

        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());

        this.initTouchSupport();
    }

    goToSlide(slideIndex) {
        this.slides[this.currentSlide].classList.remove('active');
        if (this.indicators[this.currentSlide]) {
            this.indicators[this.currentSlide].classList.remove('active');
        }

        this.currentSlide = slideIndex;

        this.slides[this.currentSlide].classList.add('active');
        if (this.indicators[this.currentSlide]) {
            this.indicators[this.currentSlide].classList.add('active');
        }
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    initTouchSupport() {
        let startX = 0;
        let startY = 0;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.slider.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loading = document.querySelector(".loading");
    const MIN_DISPLAY_TIME = 1500;

    if (loading) {
        const startTime = performance.now();
        
        const hideLoader = () => {
            loading.classList.add("hidden");
            setTimeout(() => {
                loading.remove();
            }, 500);
        };
        
        const elapsed = performance.now() - startTime;
        const waitTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);
        
        setTimeout(hideLoader, waitTime);
    }

    new MenuSlider();


    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNavigation = document.querySelector('.main-navigation');

    if (mobileMenuBtn && mainNavigation) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNavigation.classList.toggle('is-open');
        });
    }
});
