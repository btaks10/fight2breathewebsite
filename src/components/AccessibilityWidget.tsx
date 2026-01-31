'use client';

import { useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  textSize: 'small' | 'medium' | 'large' | 'xl';
  highContrast: boolean;
  colorBlindMode: 'none' | 'deuteranopia' | 'protanopia' | 'tritanopia';
  reducedMotion: boolean;
  dyslexiaFont: boolean;
}

const defaultSettings: AccessibilitySettings = {
  textSize: 'medium',
  highContrast: false,
  colorBlindMode: 'none',
  reducedMotion: false,
  dyslexiaFont: false,
};

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('accessibilitySettings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch {
        // Invalid JSON, use defaults
      }
    }
  }, []);

  // Apply settings function
  const applySettings = useCallback((s: AccessibilitySettings) => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;

    // Text size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xl: '20px',
    };
    html.style.fontSize = fontSizeMap[s.textSize];

    // High contrast
    html.classList.toggle('high-contrast', s.highContrast);

    // Color blind mode
    html.dataset.colorblind = s.colorBlindMode;

    // Reduced motion
    html.classList.toggle('reduce-motion', s.reducedMotion);

    // Dyslexia font
    html.classList.toggle('dyslexia-font', s.dyslexiaFont);
  }, []);

  // Save and apply settings when they change
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings, mounted, applySettings]);

  // Apply settings on initial load
  useEffect(() => {
    if (mounted) {
      applySettings(settings);
    }
  }, [mounted, settings, applySettings]);

  // Keyboard shortcut (Alt + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Text to speech functions
  const speakPage = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    let textToRead = '';

    // Check if on shop page - provide natural shopping experience
    if (window.location.pathname.includes('/shop')) {
      // Start with a friendly intro
      textToRead +=
        "Welcome to the Fight2Breathe shop. Every purchase starts a conversation, and sometimes that conversation saves a life. Let me walk you through what's available. ";

      // Find all product cards using data attributes
      const productCards = document.querySelectorAll('[data-product-title]');

      productCards.forEach((card) => {
        const title = card.getAttribute('data-product-title') || '';
        const description =
          card.getAttribute('data-product-description') || '';
        const priceElement = card.querySelector('[data-product-price]');
        const price = priceElement?.textContent || '';

        if (description) {
          // Natural reading: "The 65 Roses Classic Crew is a black crewneck..."
          textToRead += `The ${title} is ${description}. It's priced at ${price}. `;
        } else {
          // Fallback if no description exists
          textToRead += `${title}, priced at ${price}. `;
        }
      });

      // Add a helpful closing
      textToRead +=
        "That's everything in the shop. Click on any product to select your size and purchase.";
    } else {
      // For non-shop pages, read main content normally
      const main = document.querySelector('main');
      textToRead = main ? main.innerText : document.body.innerText;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    // Use slightly slower rate for shop page clarity, otherwise user's chosen rate
    utterance.rate = window.location.pathname.includes('/shop')
      ? Math.min(speechRate, 0.95)
      : speechRate;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const pauseResumeSpeech = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.pause();
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-24 z-50 bg-[#D8B4D8] text-gray-900 p-3 rounded-full shadow-lg hover:bg-[#C9A0C9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D8B4D8] focus:ring-offset-2"
        aria-label="Accessibility Options (Alt + A)"
        title="Accessibility Options (Alt + A)"
      >
        {/* Universal accessibility icon */}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
        </svg>
      </button>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panel content */}
          <div
            className="fixed right-4 top-40 z-50 bg-white rounded-xl shadow-2xl p-6 w-80 max-h-[70vh] overflow-y-auto border border-gray-200"
            role="dialog"
            aria-label="Accessibility Options"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Accessibility Options
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Text Size */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Size
              </label>
              <div className="flex gap-2">
                {(['small', 'medium', 'large', 'xl'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSettings({ ...settings, textSize: size })}
                    className={`flex-1 px-2 py-1.5 rounded text-sm font-medium transition-colors ${
                      settings.textSize === size
                        ? 'bg-[#F575D5] text-gray-900'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size === 'xl'
                      ? 'XL'
                      : size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Options */}
            <div className="space-y-3 mb-5">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">High Contrast</span>
                <button
                  role="switch"
                  aria-checked={settings.highContrast}
                  onClick={() =>
                    setSettings({
                      ...settings,
                      highContrast: !settings.highContrast,
                    })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-[#F575D5]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings.highContrast ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">Reduced Motion</span>
                <button
                  role="switch"
                  aria-checked={settings.reducedMotion}
                  onClick={() =>
                    setSettings({
                      ...settings,
                      reducedMotion: !settings.reducedMotion,
                    })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-[#F575D5]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">
                  Dyslexia-Friendly Font
                </span>
                <button
                  role="switch"
                  aria-checked={settings.dyslexiaFont}
                  onClick={() =>
                    setSettings({
                      ...settings,
                      dyslexiaFont: !settings.dyslexiaFont,
                    })
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    settings.dyslexiaFont ? 'bg-[#F575D5]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      settings.dyslexiaFont ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </label>
            </div>

            {/* Color Blind Mode */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color Vision
              </label>
              <select
                value={settings.colorBlindMode}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    colorBlindMode: e.target
                      .value as AccessibilitySettings['colorBlindMode'],
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F575D5] focus:border-transparent"
              >
                <option value="none">Default</option>
                <option value="deuteranopia">Deuteranopia (Red-Green)</option>
                <option value="protanopia">Protanopia (Red-Green)</option>
                <option value="tritanopia">Tritanopia (Blue-Yellow)</option>
              </select>
            </div>

            {/* Text to Speech */}
            <div className="pt-4 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Aloud
              </label>

              {/* Speed control */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500">Speed:</span>
                <div className="flex gap-1">
                  {[0.5, 1, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setSpeechRate(rate)}
                      className={`px-2 py-1 text-xs rounded ${
                        speechRate === rate
                          ? 'bg-[#F575D5] text-gray-900'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={speakPage}
                  className="flex-1 py-2 px-4 bg-[#F575D5] text-gray-900 rounded-lg hover:bg-[#E060C0] transition-colors text-sm font-medium"
                >
                  {isSpeaking ? 'Stop' : 'Read Page'}
                </button>
                {isSpeaking && (
                  <button
                    onClick={pauseResumeSpeech}
                    className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                  >
                    Pause
                  </button>
                )}
              </div>
            </div>

            {/* Reset */}
            <button
              onClick={resetSettings}
              className="w-full mt-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Reset to Defaults
            </button>

            {/* Keyboard hint */}
            <p className="text-xs text-gray-400 text-center mt-3">
              Press Alt + A to toggle this panel
            </p>
          </div>
        </>
      )}
    </>
  );
}
