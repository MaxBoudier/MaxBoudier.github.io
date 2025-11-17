import { allContent, colorMap } from './content.js';
import { getAiResponse } from './gemini.js';

// --- DOM SELECTORS ---
const dom = {
    mainTitle: document.getElementById('main-title'),
    contentTitle: document.getElementById('content-title'),
    contentBody: document.getElementById('content-body'),
    menuButtons: document.querySelectorAll('.menu-button'),
    langFrBtn: document.getElementById('lang-fr-btn'),
    langEnBtn: document.getElementById('lang-en-btn'),
    modalOverlay: document.getElementById('gemini-modal-overlay'),
    modalContent: document.getElementById('gemini-modal-content'),
    modalCloseBtn: document.getElementById('gemini-modal-close'),
    chatWindow: document.getElementById('gemini-chat-window'),
    chatForm: document.getElementById('gemini-chat-form'),
    chatInput: document.getElementById('gemini-chat-input'),
    geminiChatSendBtn: document.getElementById('gemini-chat-send-btn'),
};

// --- STATE ---
let currentLang = 'fr';
let currentViewKey = 'about';
let isTyping = false;

// --- UI FUNCTIONS ---

/**
 * Displays content for a given section key.
 * @param {string} key - The key of the content to display (e.g., 'about', 'skills').
 */
function displayContent(key) {
    currentViewKey = key;
    const data = allContent[currentLang].cvData[key];
    const color = colorMap[key];

    // 1. Update global accent color
    document.documentElement.style.setProperty('--current-accent', color.hex);

    // 2. Typewriter effect for the title
    typeWriter(data.title, dom.contentTitle, () => {
        // 3. Fade in content body
        dom.contentBody.style.opacity = 0;
        setTimeout(() => {
            dom.contentBody.innerHTML = data.content;
            dom.contentBody.scrollTop = 0;
            dom.contentBody.style.opacity = 1;
            attachGeminiButtonListener();
        }, 150);
    });

    // 4. Update menu button states
    dom.menuButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.contentKey === key);
    });
}

/**
 * Simulates a typewriter effect for a given text element.
 * @param {string} text - The text to type out.
 * @param {HTMLElement} element - The HTML element to type into.
 * @param {function} onComplete - Callback function to execute when typing is finished.
 */
async function typeWriter(text, element, onComplete) {
    if (isTyping) return;
    isTyping = true;
    element.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await sleep(30);
    }

    isTyping = false;
    if (onComplete) onComplete();
}

/**
 * Updates the entire UI based on the current language.
 */
function updateLanguageUI() {
    // Update language button styles
    dom.langFrBtn.classList.toggle('active', currentLang === 'fr');
    dom.langEnBtn.classList.toggle('active', currentLang === 'en');

    // Update menu button text
    dom.menuButtons.forEach(button => {
        const key = button.dataset.contentKey;
        button.innerHTML = allContent[currentLang].menu[key];
    });

    // Update chat UI text
    dom.chatInput.placeholder = allContent[currentLang].chatPlaceholder;
    dom.geminiChatSendBtn.innerHTML = allContent[currentLang].chatSend;
    
    // Refresh the currently displayed content in the new language
    displayContent(currentViewKey);
}

// --- MODAL FUNCTIONS ---

function showModal() {
    dom.chatWindow.innerHTML = ''; // Clear history
    addMessageToChat(allContent[currentLang].chatGreeting, 'ai');
    dom.modalOverlay.classList.add('visible');
    dom.chatInput.focus();
}

function closeModal() {
    dom.modalOverlay.classList.remove('visible');
}

/**
 * Adds a message bubble to the chat window.
 * @param {string} message - The message content.
 * @param {string} sender - 'user' or 'ai'.
 * @param {string} type - Optional type, e.g., 'thinking'.
 * @param {string} id - Optional ID for the bubble element.
 */
function addMessageToChat(message, sender, type = '', id = '') {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', sender);
    if (type) bubble.classList.add(type);
    if (id) bubble.id = id;
    bubble.textContent = message; // Use textContent for security
    dom.chatWindow.appendChild(bubble);
    dom.chatWindow.scrollTop = dom.chatWindow.scrollHeight;
}

// --- EVENT HANDLERS ---

function handleMenuClick(event) {
    const key = event.currentTarget.dataset.contentKey;
    displayContent(key);
}

function handleLangClick(event) {
    currentLang = event.currentTarget.dataset.lang;
    updateLanguageUI();
}

function handleAskAiClick() {
    const activeColor = colorMap[currentViewKey].hex;
    dom.modalContent.style.borderColor = activeColor;
    dom.modalContent.style.boxShadow = `0 0 24px 0px ${activeColor}`;
    showModal();
}

async function handleChatSubmit(event) {
    event.preventDefault();
    const userQuery = dom.chatInput.value.trim();
    if (userQuery === "") return;

    addMessageToChat(userQuery, 'user');
    dom.chatInput.value = '';

    const thinkingId = `thinking-${Date.now()}`;
    addMessageToChat(allContent[currentLang].chatThinking, 'ai', 'thinking', thinkingId);

    try {
        const aiResponse = await getAiResponse(userQuery, currentLang);
        const thinkingBubble = document.getElementById(thinkingId);
        if (thinkingBubble) {
            thinkingBubble.id = '';
            thinkingBubble.classList.remove('thinking');
            thinkingBubble.textContent = aiResponse;
        } else {
            addMessageToChat(aiResponse, 'ai');
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        const thinkingBubble = document.getElementById(thinkingId);
        const errorMsg = allContent[currentLang].chatError;
        if (thinkingBubble) {
            thinkingBubble.id = '';
            thinkingBubble.classList.remove('thinking');
            thinkingBubble.textContent = errorMsg;
        } else {
            addMessageToChat(errorMsg, 'ai');
        }
    }
}

function handleModalOverlayClick(event) {
    if (event.target === dom.modalOverlay) {
        closeModal();
    }
}

// --- EVENT LISTENERS ---

function attachEventListeners() {
    dom.menuButtons.forEach(button => button.addEventListener('click', handleMenuClick));
    dom.langFrBtn.addEventListener('click', handleLangClick);
    dom.langEnBtn.addEventListener('click', handleLangClick);
    dom.modalCloseBtn.addEventListener('click', closeModal);
    dom.modalOverlay.addEventListener('click', handleModalOverlayClick);
    dom.chatForm.addEventListener('submit', handleChatSubmit);
}

function attachGeminiButtonListener() {
    const geminiButton = document.getElementById('gemini-button');
    if (geminiButton) {
        geminiButton.addEventListener('click', handleAskAiClick);
    }
}

// --- UTILITY FUNCTIONS ---

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- INITIALIZATION ---

function init() {
    attachEventListeners();
    updateLanguageUI(); // Initial load
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
