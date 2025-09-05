/**
 * QuizCraft - Enhanced Cyberpunk Theme Manager
 * Handles theme switching with cyberpunk aesthetics
 * Honoring Kavlin's original vision with futuristic flair
 */

class ThemeManager {
    constructor() {
        this.themes = {
            dark: {
                name: 'Cyber Dark',
                primary: '#00ffff',
                secondary: '#ff0080',
                accent: '#8000ff',
                background: 'cyberpunk-dark',
                surface: 'rgba(0, 255, 255, 0.05)',
                text: '#ffffff',
                icon: 'fas fa-moon',
                description: 'Full cyberpunk matrix experience'
            },
            light: {
                name: 'Cyber Light',
                primary: '#0066cc',
                secondary: '#cc0066',
                accent: '#6600cc',
                background: 'cyberpunk-light',
                surface: 'rgba(255, 255, 255, 0.7)',
                text: '#212529',
                icon: 'fas fa-sun',
                description: 'Daylight-friendly cyber aesthetics'
            },
            neon: {
                name: 'Neon Overdrive',
                primary: '#ff006e',
                secondary: '#8338ec',
                accent: '#00f5ff',
                background: 'neon-black',
                surface: 'rgba(0, 245, 255, 0.1)',
                text: '#00f5ff',
                icon: 'fas fa-bolt',
                description: 'Maximum neon intensity'
            },
            matrix: {
                name: 'Matrix Code',
                primary: '#00ff00',
                secondary: '#003300',
                accent: '#00ff80',
                background: 'matrix-rain',
                surface: 'rgba(0, 255, 0, 0.05)',
                text: '#00ff00',
                icon: 'fas fa-code',
                description: 'Classic green matrix vibes'
            },
            synthwave: {
                name: 'Synthwave',
                primary: '#ff0080',
                secondary: '#8000ff',
                accent: '#00ffff',
                background: 'synthwave-gradient',
                surface: 'rgba(255, 0, 128, 0.1)',
                text: '#ffffff',
                icon: 'fas fa-wave-square',
                description: '80s retrowave aesthetics'
            },
            kavlin: {
                name: 'Kavlin Special',
                primary: '#ff69b4',
                secondary: '#9370db',
                accent: '#00ced1',
                background: 'kavlin-tribute',
                surface: 'rgba(255, 105, 180, 0.1)',
                text: '#ffffff',
                icon: 'fas fa-heart',
                description: 'Dedicated to our amazing creator'
            }
        };
        
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.createThemeSelector();
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    loadSavedTheme() {
        const saved = localStorage.getItem('quizcraft-theme');
        if (saved && this.themes[saved]) {
            this.currentTheme = saved;
        }
    }

    createThemeSelector() {
        const selector = document.createElement('div');
        selector.className = 'cyberpunk-theme-selector';
        selector.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(26, 26, 26, 0.8));
            backdrop-filter: blur(20px);
            border: 1px solid var(--neon-cyan);
            border-radius: 16px;
            padding: 20px;
            z-index: 1000;
            transform: translateX(120%);
            transition: transform 0.3s ease-out;
            opacity: 0;
            visibility: hidden;
            min-width: 280px;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
        `;

        let selectorHTML = `
            <div class="theme-selector-header" style="
                color: var(--neon-cyan);
                font-family: 'Orbitron', monospace;
                font-weight: 700;
                margin-bottom: 16px;
                text-align: center;
                font-size: 1.1rem;
                text-shadow: 0 0 10px var(--neon-cyan);
            ">THEME PROTOCOL</div>
        `;
        
        Object.entries(this.themes).forEach(([key, theme]) => {
            const isActive = key === this.currentTheme;
            selectorHTML += `
                <button class="cyberpunk-theme-option ${isActive ? 'active' : ''}" 
                        data-theme="${key}"
                        style="
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            width: 100%;
                            padding: 12px 16px;
                            margin-bottom: 8px;
                            background: ${isActive ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 128, 0.1))' : 'rgba(255, 255, 255, 0.05)'};
                            border: 1px solid ${isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.1)'};
                            border-radius: 8px;
                            color: ${isActive ? 'var(--neon-cyan)' : '#ffffff'};
                            cursor: pointer;
                            transition: all 0.3s ease;
                            font-family: 'Rajdhani', sans-serif;
                            font-weight: 600;
                            font-size: 0.9rem;
                            ${isActive ? 'box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);' : ''}
                        "
                        onmouseover="this.style.background='linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 128, 0.05))'; this.style.borderColor='var(--neon-pink)'; this.style.transform='translateX(4px)';"
                        onmouseout="this.style.background='${isActive ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 128, 0.1))' : 'rgba(255, 255, 255, 0.05)'}'; this.style.borderColor='${isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.1)'}'; this.style.transform='translateX(0)';">
                    <i class="${theme.icon}" style="color: ${theme.primary}; font-size: 1.1rem;"></i>
                    <div style="flex: 1; text-align: left;">
                        <div style="font-weight: 700;">${theme.name}</div>
                        <div style="font-size: 0.75rem; opacity: 0.8; margin-top: 2px;">${theme.description}</div>
                    </div>
                    ${isActive ? '<i class="fas fa-check" style="color: var(--neon-green); font-size: 0.9rem;"></i>' : ''}
                </button>
            `;
        });

        selector.innerHTML = selectorHTML;
        document.body.appendChild(selector);

        // Add event listeners
        selector.querySelectorAll('.cyberpunk-theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                this.switchTheme(theme);
                this.hideThemeSelector();
                
                // Add click effect
                option.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    option.style.transform = 'translateX(0)';
                }, 100);
            });
        });

        this.themeSelector = selector;
    }

    setupEventListeners() {
        // Enhanced theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            let clickCount = 0;
            let clickTimer = null;
            
            themeToggle.addEventListener('click', () => {
                clickCount++;
                
                if (clickCount === 1) {
                    clickTimer = setTimeout(() => {
                        // Single click - cycle through main themes
                        const mainThemes = ['dark', 'light'];
                        const currentIndex = mainThemes.indexOf(this.currentTheme);
                        const nextIndex = (currentIndex + 1) % mainThemes.length;
                        this.switchTheme(mainThemes[nextIndex]);
                        clickCount = 0;
                    }, 300);
                } else if (clickCount === 2) {
                    // Double click - show theme selector
                    clearTimeout(clickTimer);
                    this.showThemeSelector();
                    clickCount = 0;
                } else if (clickCount === 3) {
                    // Triple click - activate Kavlin special theme
                    clearTimeout(clickTimer);
                    this.switchTheme('kavlin');
                    this.showKavlinMessage();
                    clickCount = 0;
                }
            });
        }
        
        // Hide theme selector when clicking outside
        document.addEventListener('click', (e) => {
            if (this.themeSelector && !this.themeSelector.contains(e.target) && 
                e.target.id !== 'theme-toggle') {
                this.hideThemeSelector();
            }
        });

        // Keyboard shortcut for theme selector
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 't') {
                e.preventDefault();
                this.showThemeSelector();
            }
        });
    }

    showThemeSelector() {
        this.themeSelector.style.opacity = '1';
        this.themeSelector.style.visibility = 'visible';
        this.themeSelector.style.transform = 'translateX(0)';
        
        // Add entrance animation
        this.themeSelector.style.animation = 'cyberpunkFadeIn 0.3s ease-out';
    }

    hideThemeSelector() {
        this.themeSelector.style.opacity = '0';
        this.themeSelector.style.visibility = 'hidden';
        this.themeSelector.style.transform = 'translateX(120%)';
    }

    switchTheme(themeName) {
        if (!this.themes[themeName]) return;
        
        this.currentTheme = themeName;
        this.applyTheme(themeName);
        this.saveTheme(themeName);
        this.updateThemeOptions();
        this.updateThemeToggleIcon();
        
        // Trigger theme change event
        document.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: themeName, themeData: this.themes[themeName] }
        }));

        // Show theme change notification
        this.showThemeNotification(this.themes[themeName]);
    }

    applyTheme(themeName) {
        const theme = this.themes[themeName];
        const root = document.documentElement;
        
        // Apply data attribute
        root.setAttribute('data-theme', themeName === 'light' ? 'light' : 'dark');
        
        // Apply CSS custom properties
        root.style.setProperty('--theme-primary', theme.primary);
        root.style.setProperty('--theme-secondary', theme.secondary);
        root.style.setProperty('--theme-accent', theme.accent);
        root.style.setProperty('--theme-surface', theme.surface);
        root.style.setProperty('--theme-text', theme.text);
        
        // Add transition effect
        this.addThemeTransition();
    }
    updateThemeToggleIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.themes[this.currentTheme].icon;
            }
        }
    }

    updateThemeOptions() {
        if (!this.themeSelector) return;
        
        this.themeSelector.querySelectorAll('.cyberpunk-theme-option').forEach(option => {
            const theme = option.dataset.theme;
            const isActive = theme === this.currentTheme;
            
            option.classList.toggle('active', isActive);
            
            // Update styles
            const activeStyle = 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 128, 0.1))';
            const inactiveStyle = 'rgba(255, 255, 255, 0.05)';
            
            option.style.background = isActive ? activeStyle : inactiveStyle;
            option.style.borderColor = isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.1)';
            option.style.color = isActive ? 'var(--neon-cyan)' : '#ffffff';
            option.style.boxShadow = isActive ? '0 0 15px rgba(0, 255, 255, 0.3)' : 'none';
            
            // Update check icon
            const checkIcon = option.querySelector('.fa-check');
            if (checkIcon) {
                checkIcon.style.display = isActive ? 'inline' : 'none';
            } else if (isActive) {
                option.innerHTML += '<i class="fas fa-check" style="color: var(--neon-green); font-size: 0.9rem;"></i>';
            }
        });
    }

    showThemeNotification(theme) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(26, 26, 26, 0.8));
            backdrop-filter: blur(20px);
            border: 1px solid var(--neon-cyan);
            border-radius: 12px;
            padding: 16px 24px;
            color: var(--neon-cyan);
            font-family: 'Orbitron', monospace;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
            animation: cyberpunkSlideIn 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="${theme.icon}" style="color: ${theme.primary};"></i>
                <span>Theme: ${theme.name}</span>
                <i class="fas fa-check" style="color: var(--neon-green);"></i>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'cyberpunkSlideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    showKavlinMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.2));
            backdrop-filter: blur(20px);
            border: 2px solid #ff69b4;
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            font-family: 'Orbitron', monospace;
            color: #ff69b4;
            z-index: 10000;
            max-width: 400px;
            box-shadow: 0 0 40px rgba(255, 105, 180, 0.5);
            animation: kavlinSpecial 0.5s ease-out;
        `;
        
        message.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 15px;">✨💖✨</div>
            <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: 10px; text-shadow: 0 0 10px #ff69b4;">
                Kavlin Special Theme
            </div>
            <div style="font-size: 0.9rem; opacity: 0.9; line-height: 1.4;">
                Dedicated to the brilliant mind behind QuizCraft<br>
                Developer • Poet • Inspiration
            </div>
            <div style="margin-top: 15px; font-size: 0.8rem; font-style: italic;">
                "Every line of code is poetry in motion"
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'kavlinFadeOut 0.5s ease-in';
            setTimeout(() => message.remove(), 500);
        }, 4000);
    }

    addThemeTransition() {
        document.body.style.transition = 'background 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }

    saveTheme(themeName) {
        localStorage.setItem('quizcraft-theme', themeName);
    }

    getCurrentTheme() {
        return {
            name: this.currentTheme,
            data: this.themes[this.currentTheme]
        };
    }
}

// Add cyberpunk animations
const cyberpunkAnimations = document.createElement('style');
cyberpunkAnimations.textContent = `
    @keyframes cyberpunkFadeIn {
        from { opacity: 0; transform: translateX(120%) scale(0.9); }
        to { opacity: 1; transform: translateX(0) scale(1); }
    }
    
    @keyframes cyberpunkSlideIn {
        from { opacity: 0; transform: translate(-50%, -20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
    
    @keyframes cyberpunkSlideOut {
        from { opacity: 1; transform: translate(-50%, 0); }
        to { opacity: 0; transform: translate(-50%, -20px); }
    }
    
    @keyframes kavlinSpecial {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8) rotate(-5deg); }
        50% { transform: translate(-50%, -50%) scale(1.05) rotate(2deg); }
        100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    }
    
    @keyframes kavlinFadeOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    }
`;
document.head.appendChild(cyberpunkAnimations);

// Initialize enhanced theme manager
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});