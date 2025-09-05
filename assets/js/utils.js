/**
 * QuizCraft - Utility Functions
 * Common helper functions and utilities
 * Created with ❤️ by Kavlin
 */

// Utility object with common functions
const Utils = {
    // DOM Utilities
    createElement(tag, className = '', attributes = {}) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
        
        return element;
    },

    // Query selector with error handling
    $(selector, context = document) {
        try {
            return context.querySelector(selector);
        } catch (error) {
            console.error(`Invalid selector: ${selector}`, error);
            return null;
        }
    },

    // Query selector all with error handling
    $$(selector, context = document) {
        try {
            return Array.from(context.querySelectorAll(selector));
        } catch (error) {
            console.error(`Invalid selector: ${selector}`, error);
            return [];
        }
    },

    // Event listener with options
    on(element, event, handler, options = {}) {
        if (element && typeof handler === 'function') {
            element.addEventListener(event, handler, options);
        }
    },

    // Remove event listener
    off(element, event, handler) {
        if (element && typeof handler === 'function') {
            element.removeEventListener(event, handler);
        }
    },

    // Debounce function
    debounce(func, delay = 250) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },

    // Throttle function
    throttle(func, limit = 100) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Local Storage Utilities
    storage: {
        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (error) {
                console.error('Error reading from localStorage:', error);
                return defaultValue;
            }
        },

        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (error) {
                console.error('Error writing to localStorage:', error);
                return false;
            }
        },

        remove(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.error('Error removing from localStorage:', error);
                return false;
            }
        },

        clear() {
            try {
                localStorage.clear();
                return true;
            } catch (error) {
                console.error('Error clearing localStorage:', error);
                return false;
            }
        }
    },

    // Array Utilities
    array: {
        shuffle(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },

        chunk(array, size) {
            const chunks = [];
            for (let i = 0; i < array.length; i += size) {
                chunks.push(array.slice(i, i + size));
            }
            return chunks;
        },

        unique(array) {
            return [...new Set(array)];
        },

        groupBy(array, key) {
            return array.reduce((groups, item) => {
                const group = item[key];
                groups[group] = groups[group] || [];
                groups[group].push(item);
                return groups;
            }, {});
        }
    },

    // String Utilities
    string: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        camelCase(str) {
            return str.replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
        },

        kebabCase(str) {
            return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
        },

        truncate(str, length = 100, suffix = '...') {
            return str.length > length ? str.substring(0, length) + suffix : str;
        },

        stripHtml(str) {
            const div = document.createElement('div');
            div.innerHTML = str;
            return div.textContent || div.innerText || '';
        }
    },

    // Number Utilities
    number: {
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        },

        lerp(start, end, factor) {
            return start + (end - start) * factor;
        },

        formatPercent(value, decimals = 1) {
            return `${(value * 100).toFixed(decimals)}%`;
        },

        formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;

            if (hours > 0) {
                return `${hours}h ${minutes}m ${secs}s`;
            } else if (minutes > 0) {
                return `${minutes}m ${secs}s`;
            } else {
                return `${secs}s`;
            }
        }
    },

    // Date Utilities
    date: {
        format(date, format = 'YYYY-MM-DD') {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            const seconds = String(d.getSeconds()).padStart(2, '0');

            return format
                .replace('YYYY', year)
                .replace('MM', month)
                .replace('DD', day)
                .replace('HH', hours)
                .replace('mm', minutes)
                .replace('ss', seconds);
        },

        timeAgo(date) {
            const now = new Date();
            const diff = now - new Date(date);
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
            if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            return 'Just now';
        }
    },

    // Color Utilities
    color: {
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },

        rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },

        lighten(hex, amount) {
            const rgb = this.hexToRgb(hex);
            if (!rgb) return hex;
            
            const r = Math.min(255, rgb.r + Math.round(255 * amount));
            const g = Math.min(255, rgb.g + Math.round(255 * amount));
            const b = Math.min(255, rgb.b + Math.round(255 * amount));
            
            return this.rgbToHex(r, g, b);
        },

        darken(hex, amount) {
            const rgb = this.hexToRgb(hex);
            if (!rgb) return hex;
            
            const r = Math.max(0, rgb.r - Math.round(255 * amount));
            const g = Math.max(0, rgb.g - Math.round(255 * amount));
            const b = Math.max(0, rgb.b - Math.round(255 * amount));
            
            return this.rgbToHex(r, g, b);
        }
    },

    // Animation Utilities
    animation: {
        easeInOut(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },

        easeIn(t) {
            return t * t;
        },

        easeOut(t) {
            return 1 - Math.pow(1 - t, 2);
        },

        animate({ duration = 1000, timing = this.easeInOut, draw }) {
            const start = performance.now();

            return new Promise(resolve => {
                function animate(time) {
                    let timeFraction = (time - start) / duration;
                    if (timeFraction > 1) timeFraction = 1;

                    const progress = timing(timeFraction);
                    draw(progress);

                    if (timeFraction < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        resolve();
                    }
                }

                requestAnimationFrame(animate);
            });
        }
    },

    // Device Detection
    device: {
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        isTablet() {
            return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
        },

        isDesktop() {
            return !this.isMobile() && !this.isTablet();
        },

        hasTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
    },

    // Performance Utilities
    performance: {
        measure(name, fn) {
            const start = performance.now();
            const result = fn();
            const end = performance.now();
            console.log(`${name}: ${end - start}ms`);
            return result;
        },

        debounceRAF(fn) {
            let rafId = null;
            return function (...args) {
                if (rafId !== null) {
                    cancelAnimationFrame(rafId);
                }
                rafId = requestAnimationFrame(() => {
                    fn.apply(this, args);
                    rafId = null;
                });
            };
        }
    },

    // URL Utilities
    url: {
        getParams() {
            return new URLSearchParams(window.location.search);
        },

        setParam(key, value) {
            const url = new URL(window.location);
            url.searchParams.set(key, value);
            window.history.replaceState({}, '', url);
        },

        removeParam(key) {
            const url = new URL(window.location);
            url.searchParams.delete(key);
            window.history.replaceState({}, '', url);
        }
    },

    // Validation Utilities
    validate: {
        email(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        phone(phone) {
            const re = /^[\+]?[1-9][\d]{0,15}$/;
            return re.test(phone.replace(/\s/g, ''));
        },

        url(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        },

        required(value) {
            return value !== null && value !== undefined && value !== '';
        }
    },

    // Toast Notification System
    toast: {
        show(message, type = 'info', duration = 3000) {
            const toast = Utils.createElement('div', `toast toast-${type}`, {
                'data-toast': 'true'
            });

            toast.innerHTML = `
                <div class="toast-content">
                    <i class="toast-icon ${this.getIcon(type)}"></i>
                    <span class="toast-message">${message}</span>
                    <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;

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
                z-index: var(--z-tooltip);
                transform: translateX(100%);
                transition: transform var(--transition-normal);
                max-width: 400px;
                box-shadow: var(--shadow-lg);
            `;

            document.body.appendChild(toast);

            // Animate in
            setTimeout(() => {
                toast.style.transform = 'translateX(0)';
            }, 100);

            // Auto remove
            if (duration > 0) {
                setTimeout(() => {
                    toast.style.transform = 'translateX(100%)';
                    setTimeout(() => toast.remove(), 300);
                }, duration);
            }

            return toast;
        },

        getIcon(type) {
            const icons = {
                success: 'fas fa-check-circle',
                error: 'fas fa-exclamation-circle',
                warning: 'fas fa-exclamation-triangle',
                info: 'fas fa-info-circle'
            };
            return icons[type] || icons.info;
        }
    },

    // Confetti Effect for celebrations
    confetti: {
        create() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
            const confettiCount = 50;
            
            for (let i = 0; i < confettiCount; i++) {
                this.createPiece(colors[Math.floor(Math.random() * colors.length)]);
            }
        },

        createPiece(color) {
            const confetti = Utils.createElement('div', 'confetti-piece');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${color};
                left: ${Math.random() * 100}vw;
                top: -10px;
                z-index: 10000;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
                transform: rotate(${Math.random() * 360}deg);
            `;

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
};

// Global utility functions
window.Utils = Utils;

// Add confetti animation CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        from {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }
    
    .toast-icon {
        font-size: var(--font-size-lg);
        flex-shrink: 0;
    }
    
    .toast-message {
        flex: 1;
        font-weight: 500;
    }
    
    .toast-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: var(--space-1);
        border-radius: var(--radius-sm);
        transition: background var(--transition-fast);
    }
    
    .toast-close:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(confettiStyle);

// Special dedication message
console.log(`
%c✨ QuizCraft Platform ✨
%cCrafted with dedication by Kavlin 💖
%cBuilt for Hacktoberfest 2025

Every line of code, every animation, every interaction
has been crafted with care and attention to detail.
This platform represents not just technical excellence,
but a testament to the inspiring work Kavlin has done.

May this enhanced version bring joy to learners everywhere!
`, 
'color: #ff6b6b; font-size: 20px; font-weight: bold;',
'color: #4ecdc4; font-size: 16px; font-style: italic;',
'color: #45b7d1; font-size: 14px;',
);