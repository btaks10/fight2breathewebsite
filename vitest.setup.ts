import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop: string) => {
        return React.forwardRef(
          (props: Record<string, unknown>, ref: React.Ref<HTMLElement>) => {
            const {
              initial: _initial,
              animate: _animate,
              exit: _exit,
              whileHover: _whileHover,
              whileInView: _whileInView,
              whileTap: _whileTap,
              viewport: _viewport,
              transition: _transition,
              variants: _variants,
              style,
              ...rest
            } = props;
            return React.createElement(prop, { ...rest, style, ref });
          }
        );
      },
    }
  ),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useScroll: () => ({
    scrollY: { get: () => 0, onChange: () => () => {} },
    scrollYProgress: { get: () => 0, onChange: () => () => {} },
  }),
  useTransform: () => ({ get: () => 0 }),
  useMotionValue: () => ({ get: () => 0, set: () => {} }),
  useSpring: () => ({ get: () => 0 }),
}));

// Mock next/image
vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { fill: _fill, priority: _priority, ...rest } = props;
    return React.createElement('img', rest);
  },
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => {
    return React.createElement('a', { href, ...rest }, children);
  },
}));

// Mock next/font/google
vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter', variable: '--font-inter' }),
  Playfair_Display: () => ({
    className: 'playfair',
    variable: '--font-playfair',
  }),
  DM_Sans: () => ({ className: 'dm-sans', variable: '--font-dm-sans' }),
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock IntersectionObserver
vi.stubGlobal(
  'IntersectionObserver',
  class MockIntersectionObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    constructor() {}
  }
);

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => Object.keys(store)[index] ?? null),
  };
})();
vi.stubGlobal('localStorage', localStorageMock);

// Mock speechSynthesis
const mockSpeechSynthesis = {
  speak: vi.fn(),
  cancel: vi.fn(),
  pause: vi.fn(),
  resume: vi.fn(),
  paused: false,
  speaking: false,
  pending: false,
  getVoices: vi.fn(() => []),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(() => true),
  onvoiceschanged: null,
};
vi.stubGlobal('speechSynthesis', mockSpeechSynthesis);
vi.stubGlobal(
  'SpeechSynthesisUtterance',
  vi.fn().mockImplementation(() => ({
    rate: 1,
    pitch: 1,
    volume: 1,
    text: '',
    lang: '',
    voice: null,
    onend: null,
    onerror: null,
  }))
);

// Mock CSS import
vi.mock('*.css', () => ({}));
