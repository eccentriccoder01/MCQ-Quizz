/**
 * QuizCraft - Quiz Engine
 * Handles quiz logic, scoring, and interactions
 */

class QuizEngine {
    constructor(questions, language) {
        this.questions = this.shuffleArray([...questions]);
        this.language = language;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.wrongAnswers = 0;
        this.timePerQuestion = 30; // seconds
        this.timeRemaining = this.timePerQuestion;
        this.timerInterval = null;
        this.userAnswers = [];
        this.startTime = Date.now();
        
        this.init();
    }

    init() {
        this.createQuizHTML();
        this.setupEventListeners();
        this.displayQuestion();
        this.startTimer();
    }

    createQuizHTML() {
        const quizHTML = `
            <div class="quiz-container active" id="quiz-container">
                <div class="quiz-wrapper">
                    <div class="quiz-header">
                        <div class="quiz-title">
                            <i class="${this.getLanguageIcon()}" class="quiz-language-icon"></i>
                            <span>${this.getLanguageName()} Quiz</span>
                        </div>
                        <div class="quiz-timer">
                            <div class="timer-circle">
                                <svg class="timer-svg" viewBox="0 0 36 36">
                                    <circle class="timer-bg" cx="18" cy="18" r="16"></circle>
                                    <circle class="timer-progress" cx="18" cy="18" r="16" 
                                            stroke-dasharray="100, 100" stroke-dashoffset="0"></circle>
                                </svg>
                                <div class="timer-text">
                                    <span id="timer-display">${this.timePerQuestion}</span>
                                </div>
                            </div>
                        </div>
                        <button class="quiz-close" id="quiz-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <div class="quiz-progress">
                        <div class="progress-info">
                            <div class="question-counter">
                                Question <span id="current-question">1</span> of <span id="total-questions">${this.questions.length}</span>
                            </div>
                            <div class="score-display">
                                <i class="fas fa-star score-icon"></i>
                                <span id="current-score">${this.score}</span>
                            </div>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill" id="progress-bar"></div>
                        </div>
                    </div>

                    <div class="question-container">
                        <h2 class="question-text" id="question-text"></h2>
                    </div>

                    <div class="options-container" id="options-container">
                        <!-- Options will be populated dynamically -->
                    </div>

                    <div class="quiz-actions">
                        <div class="quiz-navigation">
                            <div class="nav-dots" id="nav-dots">
                                <!-- Navigation dots will be populated dynamically -->
                            </div>
                        </div>
                        <div>
                            <button class="quiz-button secondary" id="prev-btn" disabled>
                                <i class="fas fa-arrow-left"></i>
                                Previous
                            </button>
                            <button class="quiz-button primary" id="next-btn" disabled>
                                Next
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="quiz-results" id="quiz-results">
                <div class="results-container">
                    <h2 class="results-title">Quiz Complete! 🎉</h2>
                    <div class="results-score" id="final-score">0</div>
                    <div class="results-message" id="results-message"></div>
                    
                    <div class="results-stats">
                        <div class="result-stat">
                            <span class="stat-value" id="correct-answers">0</span>
                            <span class="stat-label">Correct</span>
                        </div>
                        <div class="result-stat">
                            <span class="stat-value" id="wrong-answers-final">0</span>
                            <span class="stat-label">Wrong</span>
                        </div>
                        <div class="result-stat">
                            <span class="stat-value" id="time-taken">0s</span>
                            <span class="stat-label">Time</span>
                        </div>
                        <div class="result-stat">
                            <span class="stat-value" id="accuracy-final">0%</span>
                            <span class="stat-label">Accuracy</span>
                        </div>
                    </div>

                    <div class="results-actions">
                        <button class="quiz-button secondary" id="retake-quiz">
                            <i class="fas fa-redo"></i>
                            Retake Quiz
                        </button>
                        <button class="quiz-button primary" id="back-to-home">
                            <i class="fas fa-home"></i>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', quizHTML);
        this.createNavigationDots();
    }

    createNavigationDots() {
        const navDots = document.getElementById('nav-dots');
        for (let i = 0; i < this.questions.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            if (i === 0) dot.classList.add('current');
            dot.addEventListener('click', () => this.goToQuestion(i));
            navDots.appendChild(dot);
        }
    }

    setupEventListeners() {
        // Close quiz
        document.getElementById('quiz-close').addEventListener('click', () => {
            this.endQuiz(true);
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results actions
        document.getElementById('retake-quiz').addEventListener('click', () => {
            this.retakeQuiz();
        });

        document.getElementById('back-to-home').addEventListener('click', () => {
            window.location.href = '../../index.html';
        });

        // Option selection
        document.addEventListener('change', (e) => {
            if (e.target.name === 'quiz-option') {
                this.selectOption(e.target.value);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousQuestion();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextQuestion();
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    e.preventDefault();
                    this.selectOptionByNumber(parseInt(e.key) - 1);
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.endQuiz(true);
                    break;
            }
        });
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question text
        document.getElementById('question-text').textContent = question.question;
        
        // Update progress
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-bar').style.setProperty('--progress', `${progress}%`);
        
        // Create options
        this.createOptions(question);
        
        // Update navigation
        this.updateNavigation();
        
        // Reset timer
        this.resetTimer();
        
        // Update navigation dots
        this.updateNavigationDots();
    }

    createOptions(question) {
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        const options = [
            { key: 'optionA', text: question.optionA },
            { key: 'optionB', text: question.optionB },
            { key: 'optionC', text: question.optionC },
            { key: 'optionD', text: question.optionD }
        ];

        options.forEach((option, index) => {
            const optionHTML = `
                <div class="option-item" data-option="${option.key}">
                    <input type="radio" name="quiz-option" value="${option.key}" 
                           id="option-${index}" class="option-input">
                    <label for="option-${index}" class="option-label">
                        <div class="option-marker"></div>
                        <div class="option-text">${option.text}</div>
                    </label>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', optionHTML);
        });

        // Restore previous selection if exists
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        if (userAnswer) {
            const input = document.querySelector(`input[value="${userAnswer.selected}"]`);
            if (input) {
                input.checked = true;
                this.updateNextButton();
            }
        }
    }

    selectOption(value) {
        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = {
            questionIndex: this.currentQuestionIndex,
            selected: value,
            correct: this.questions[this.currentQuestionIndex].correctOption,
            isCorrect: value === this.questions[this.currentQuestionIndex].correctOption
        };

        // Update UI
        document.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        const selectedOption = document.querySelector(`[data-option="${value}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }

        this.updateNextButton();
        
        // Play sound
        if (window.quizCraft) {
            window.quizCraft.playSound('click');
        }
    }

    selectOptionByNumber(index) {
        const options = document.querySelectorAll('input[name="quiz-option"]');
        if (options[index]) {
            options[index].checked = true;
            this.selectOption(options[index].value);
        }
    }

    updateNextButton() {
        const nextBtn = document.getElementById('next-btn');
        const hasSelection = document.querySelector('input[name="quiz-option"]:checked');
        
        nextBtn.disabled = !hasSelection;
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            nextBtn.innerHTML = '<i class="fas fa-check"></i> Finish Quiz';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        this.updateNextButton();
    }

    updateNavigationDots() {
        const dots = document.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('current', 'completed', 'incorrect');
            
            if (index === this.currentQuestionIndex) {
                dot.classList.add('current');
            } else if (this.userAnswers[index]) {
                dot.classList.add(this.userAnswers[index].isCorrect ? 'completed' : 'incorrect');
            }
        });
    }

    nextQuestion() {
        const hasSelection = document.querySelector('input[name="quiz-option"]:checked');
        if (!hasSelection) return;

        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    goToQuestion(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentQuestionIndex = index;
            this.displayQuestion();
        }
    }

    startTimer() {
        this.resetTimer();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    resetTimer() {
        this.timeRemaining = this.timePerQuestion;
        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        document.getElementById('timer-display').textContent = this.timeRemaining;
        
        const progress = (this.timeRemaining / this.timePerQuestion) * 100;
        const circumference = 2 * Math.PI * 16;
        const strokeDashoffset = circumference - (progress / 100) * circumference;
        
        document.querySelector('.timer-progress').style.strokeDashoffset = strokeDashoffset;
        
        // Change color when time is running low
        const timerProgress = document.querySelector('.timer-progress');
        if (this.timeRemaining <= 5) {
            timerProgress.style.stroke = '#ef4444';
        } else if (this.timeRemaining <= 10) {
            timerProgress.style.stroke = '#f59e0b';
        } else {
            timerProgress.style.stroke = 'var(--accent-400)';
        }
    }

    timeUp() {
        clearInterval(this.timerInterval);
        
        // Auto-submit current question if no answer selected
        if (!this.userAnswers[this.currentQuestionIndex]) {
            this.userAnswers[this.currentQuestionIndex] = {
                questionIndex: this.currentQuestionIndex,
                selected: null,
                correct: this.questions[this.currentQuestionIndex].correctOption,
                isCorrect: false
            };
        }

        // Move to next question or finish quiz
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.nextQuestion();
        } else {
            this.finishQuiz();
        }
        
        // Play timeout sound
        if (window.quizCraft) {
            window.quizCraft.playSound('error');
        }
    }

    finishQuiz() {
        clearInterval(this.timerInterval);
        this.calculateResults();
        this.showResults();
    }

    calculateResults() {
        this.score = 0;
        this.wrongAnswers = 0;
        
        this.userAnswers.forEach(answer => {
            if (answer && answer.isCorrect) {
                this.score++;
            } else {
                this.wrongAnswers++;
            }
        });
        
        // Calculate additional metrics
        this.accuracy = Math.round((this.score / this.questions.length) * 100);
        this.timeTaken = Math.round((Date.now() - this.startTime) / 1000);
        this.percentage = Math.round((this.score / this.questions.length) * 100);
    }

    showResults() {
        // Hide quiz container
        document.getElementById('quiz-container').classList.remove('active');
        
        // Show results
        const resultsContainer = document.getElementById('quiz-results');
        resultsContainer.classList.add('active');
        
        // Animate score counting
        this.animateScore();
        
        // Update results
        document.getElementById('correct-answers').textContent = this.score;
        document.getElementById('wrong-answers-final').textContent = this.wrongAnswers;
        document.getElementById('time-taken').textContent = this.formatTime(this.timeTaken);
        document.getElementById('accuracy-final').textContent = `${this.accuracy}%`;
        
        // Set message based on performance
        const message = this.getResultMessage();
        document.getElementById('results-message').textContent = message;
        
        // Save results
        this.saveResults();
        
        // Play completion sound
        const soundType = this.percentage >= 70 ? 'success' : 'error';
        if (window.quizCraft) {
            window.quizCraft.playSound(soundType);
        }
    }

    animateScore() {
        const scoreElement = document.getElementById('final-score');
        let currentScore = 0;
        const targetScore = this.percentage;
        const duration = 2000;
        const step = targetScore / (duration / 16);
        
        const timer = setInterval(() => {
            currentScore += step;
            if (currentScore >= targetScore) {
                scoreElement.textContent = `${targetScore}%`;
                clearInterval(timer);
            } else {
                scoreElement.textContent = `${Math.floor(currentScore)}%`;
            }
        }, 16);
    }

    getResultMessage() {
        if (this.percentage >= 90) {
            return "Outstanding! You're a programming wizard! 🧙‍✨";
        } else if (this.percentage >= 80) {
            return "Excellent work! You really know your stuff! 🌟";
        } else if (this.percentage >= 70) {
            return "Great job! You're on the right track! 🚀";
        } else if (this.percentage >= 60) {
            return "Good effort! Keep practicing to improve! 💪";
        } else {
            return "Don't give up! Every expert was once a beginner! 🌱";
        }
    }

    saveResults() {
        // Save to localStorage for persistence
        const results = {
            language: this.language,
            score: this.score,
            totalQuestions: this.questions.length,
            percentage: this.percentage,
            accuracy: this.accuracy,
            timeTaken: this.timeTaken,
            date: new Date().toISOString(),
            answers: this.userAnswers
        };
        
        const quizResults = JSON.parse(localStorage.getItem('quiz-results') || '[]');
        quizResults.push(results);
        localStorage.setItem('quiz-results', JSON.stringify(quizResults));
    }

    retakeQuiz() {
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.wrongAnswers = 0;
        this.userAnswers = [];
        this.startTime = Date.now();
        
        // Shuffle questions again
        this.questions = this.shuffleArray([...this.questions]);
        
        // Hide results and show quiz
        document.getElementById('quiz-results').classList.remove('active');
        document.getElementById('quiz-container').classList.add('active');
        
        // Restart quiz
        this.displayQuestion();
        this.startTimer();
    }

    endQuiz(userCancelled = false) {
        clearInterval(this.timerInterval);
        
        if (userCancelled) {
            const confirmed = confirm('Are you sure you want to exit the quiz? Your progress will be lost.');
            if (confirmed) {
                window.location.href = '../../index.html';
            } else {
                this.startTimer();
            }
        }
    }

    getLanguageIcon() {
        const icons = {
            'html': 'fab fa-html5',
            'css': 'fab fa-css3-alt',
            'javascript': 'fab fa-js-square',
            'java': 'fab fa-java',
            'cpp': 'fas fa-code',
            'php': 'fab fa-php'
        };
        return icons[this.language] || 'fas fa-code';
    }

    getLanguageName() {
        const names = {
            'html': 'HTML',
            'css': 'CSS',
            'javascript': 'JavaScript',
            'java': 'Java',
            'cpp': 'C++',
            'php': 'PHP'
        };
        return names[this.language] || this.language.toUpperCase();
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Export for use in quiz pages
window.QuizEngine = QuizEngine;