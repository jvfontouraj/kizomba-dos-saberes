import { violet, blackA, mauve, green } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: {
      ...mauve,
      ...violet,
      ...green,
      ...blackA,
    },
    fontFamily: {
      paletteMosaic: ['Palette Mosaic', 'cursive'],
      londrinaSolid: ['Londrina Solid', 'cursive'],
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      'fade-out': {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      slideDown: {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(0, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(0, 0) scale(1)' },
      },
      overlayShow2: {
        from: { opacity: '0' },
        to: { opacity: '1' },
      },
      contentShow2: {
        from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 1s ease-in-out',
      'fade-out': 'fade-out 1.5s ease-in-out',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      overlayShow2: 'overlayShow2 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow2: 'contentShow2 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
}
export const plugins = [require('tailwindcss-animate')]
