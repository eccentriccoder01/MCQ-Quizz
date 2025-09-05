/**
 * QuizCraft - Main Application JavaScript
 * Created with ❤️ by Kavlin 
 */

class QuizCraft {
    constructor() {
        this.currentUser = 'Kavlin';
        this.sounds = {
            enabled: true,
            click: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsF'),
            success: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsF'),
            error: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsFJYfH8N2QQAoUXrTp66hVFApGn+X9ymAcBjuM1/LNeSsF')
        };
        this.stats = this.loadStats();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.loadUserProgress();
        this.hideLoadingScreen();
        this.setupIntersectionObserver();
        this.initializeParticles();
        
        // Add some easter eggs for Kavlin ✨
        this.setupEasterEggs();
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Sound toggle
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', () => this.toggleSound());
        }

        // Quiz card clicks
        document.querySelectorAll('.quiz-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const language = card.dataset.language;
                this.playSound('click');
                this.startQuiz(language);
            });
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Back to top button
        this.setupBackToTop();

        // Window events
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
    }

    setupBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.setAttribute('aria-label', 'Back to top');
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.playSound('click');
        });
        
        document.body.appendChild(backToTop);
        this.backToTopButton = backToTop;
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }

        // Show/hide back to top button
        if (this.backToTopButton) {
            if (scrolled > 500) {
                this.backToTopButton.classList.add('visible');
            } else {
                this.backToTopButton.classList.remove('visible');
            }
        }

        // Update navigation indicator
        this.updateNavIndicator();
    }

    updateNavIndicator() {
        const sections = document.querySelectorAll('section[id]');
        const indicators = document.querySelectorAll('.nav-indicator-dot');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        indicators.forEach(indicator => {
            indicator.classList.remove('active');
            if (indicator.dataset.section === current) {
                indicator.classList.add('active');
            }
        });
    }

    handleResize() {
        // Handle responsive changes
        this.updateLayout();
    }

    updateLayout() {
        // Update any layout-dependent calculations
        const cards = document.querySelectorAll('.quiz-card');
        cards.forEach((card, index) => {
            card.style.setProperty('--delay', `${index * 0.1}s`);
        });
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.classList.toggle('dark', newTheme === 'dark');
        }
        
        this.playSound('click');
        
        // Update theme-dependent elements
        this.updateThemeElements(newTheme);
    }

    updateThemeElements(theme) {
        const themeStyle = document.getElementById('theme-style');
        if (themeStyle) {
            themeStyle.href = `assets/css/themes/${theme}.css`;
        }
    }

    toggleSound() {
        this.sounds.enabled = !this.sounds.enabled;
        localStorage.setItem('soundEnabled', this.sounds.enabled);
        
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            const icon = soundToggle.querySelector('i');
            icon.className = this.sounds.enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        }
        
        if (this.sounds.enabled) {
            this.playSound('click');
        }
    }

    playSound(type) {
        if (this.sounds.enabled && this.sounds[type]) {
            this.sounds[type].currentTime = 0;
            this.sounds[type].play().catch(() => {
                // Silently handle autoplay restrictions
            });
        }
    }

    hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 2000);
    }

    initializeAnimations() {
        // Animate statistics numbers
        this.animateCounters();
        
        // Stagger animation for quiz cards
        const cards = document.querySelectorAll('.quiz-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.stat-card, .quiz-card').forEach(el => {
            observer.observe(el);
        });
    }

    initializeParticles() {
        // Add floating particles for extra magic
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 20; i++) {
            this.createParticle(particlesContainer);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: particle ${5 + Math.random() * 5}s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                this.createParticle(container);
            }
        }, (5 + Math.random() * 5) * 1000);
    }

    setupEasterEggs() {
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                this.activateEasterEgg();
                konamiCode = [];
            }
        });
        
        // Special message when clicking on Kavlin's name multiple times
        let kavlinClicks = 0;
        const kavlinElements = document.querySelectorAll('[data-kavlin], .username');
        kavlinElements.forEach(element => {
            element.addEventListener('click', () => {
                kavlinClicks++;
                if (kavlinClicks === 5) {
                    this.showSpecialMessage();
                    kavlinClicks = 0;
                }
            });
        });
    }

    activateEasterEgg() {
        // Rainbow effect on the entire page
        document.body.style.animation = 'rainbow 2s linear infinite';
        this.showToast('✨ Konami Code activated! Rainbow mode ON! ✨', 'success');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }

    showSpecialMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7);
            background-size: 300% 300%;
            animation: gradientShift 2s ease infinite;
            color: white;
            padding: 2rem;
            border-radius: 1rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        `;
        
        message.innerHTML = `
            <div style="animation: heartbeat 1s ease infinite;">
                💖 Made with infinite love for Kavlin 💖
            </div>
            <div style="margin-top: 1rem; font-size: 1rem; opacity: 0.9;">
                You're the inspiration behind every pixel! ✨
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 4000);
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--glass-bg);
            backdrop-filter: var(--glass-backdrop);
            border: 1px solid var(--glass-border);
            border-radius: var(--radius-lg);
            padding: var(--space-4);
            color: var(--white);
            font-weight: 500;
            z-index: var(--z-tooltip);
            transform: translateX(100%);
            transition: transform var(--transition-normal);
            max-width: 300px;
        `;
        
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    startQuiz(language) {
        // Navigate to quiz page
        window.location.href = `quizzes/${language}/index.html`;
    }
    loadStats() {
        const defaultStats = {
            totalScore: 0,
            streak: 0,
            timeSpent: 0,
            accuracy: 0,
            completedQuizzes: [],
        };

        const allQuizAttempts = JSON.parse(localStorage.getItem('quiz-results')) || [];
        if (allQuizAttempts.length === 0) {
            return defaultStats;
        }

        const latestScores = {};
        allQuizAttempts.forEach(attempt => {
            // Keep only the highest score for each language
            if (!latestScores[attempt.language] || attempt.percentage > latestScores[attempt.language].percentage) {
                latestScores[attempt.language] = attempt;
            }
        });

        const finalStats = { ...defaultStats };
        const completedQuizzesForAccuracy = [];

        for (const language in latestScores) {
            const result = latestScores[language];
            finalStats.totalScore += result.score;
            finalStats.timeSpent += Math.round(result.timeTaken / 60); // in minutes
            
            completedQuizzesForAccuracy.push({
                language: result.language,
                score: result.percentage
            });
        }
        
        // Simple streak: number of quizzes with a passing score (>=60%)
        finalStats.streak = Object.values(latestScores).filter(q => q.percentage >= 60).length;

        // Recalculate average accuracy based on highest scores
        if (completedQuizzesForAccuracy.length > 0) {
            const sumOfScores = completedQuizzesForAccuracy.reduce((acc, quiz) => acc + quiz.score, 0);
            finalStats.accuracy = Math.round(sumOfScores / completedQuizzesForAccuracy.length);
        }
        
        finalStats.completedQuizzes = completedQuizzesForAccuracy;
        localStorage.setItem('quizcraft-stats', JSON.stringify(finalStats));
        
        return finalStats;
    }

    saveStats() {
        localStorage.setItem('quizcraft-stats', JSON.stringify(this.stats));
    }

    loadUserProgress() {
        // Load and display user progress
        document.getElementById('total-score').textContent = this.stats.totalScore;
        document.getElementById('streak').textContent = this.stats.streak;
        document.getElementById('time-spent').textContent = this.formatTime(this.stats.timeSpent);
        document.getElementById('accuracy').textContent = this.stats.accuracy + '%';
        
        // Update quiz card progress
        this.updateQuizProgress();
    }

    updateQuizProgress() {
        const quizCards = document.querySelectorAll('.quiz-card');
        quizCards.forEach(card => {
            const language = card.dataset.language;
            const progress = this.getQuizProgress(language);
            
            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.progress-text');
            
            if (progressFill && progressText) {
                progressFill.style.setProperty('--progress', `${progress}%`);
                progressText.textContent = `${progress}% Complete`;
            }
        });
    }

    getQuizProgress(language) {
        const completed = this.stats.completedQuizzes.filter(quiz => quiz.language === language);
        return completed.length > 0 ? Math.round(completed[0].score || 0) : 0;
    }

    formatTime(minutes) {
        if (minutes < 60) {
            return `${minutes}m`;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    }
}

// Global functions for quiz navigation
window.startQuiz = function(language) {
    window.location.href = `quizzes/${language}/index.html`;
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quizCraft = new QuizCraft();
});

// Initialize theme on load
(function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound !== null) {
        // Will be set by QuizCraft constructor
    }
})();