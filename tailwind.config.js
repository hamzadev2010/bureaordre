/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'], // This keeps dark mode support
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        neutral: {
          50: '#1f2937',   // Very light gray
          100: '#f9fafb',  // Light gray
          200: '#e5e7eb',  // Lighter gray
          300: '#d1d5db',  // Even lighter gray
          400: '#f9fafb',  // Light gray for text
          500: '#6b7280',  // Medium gray
          600: '#4b5563',  // Darker gray
          700: '#374151',  // Even darker gray
          800: '#1f2937',  // Dark gray
          900: '#111827',  // Very dark gray
        },
        background: {
          light: '#ffffff', // White background for light theme
          dark: '#f9fafb',  // Slightly off-white background
        },
      },
      boxShadow: {
        input: `
          0px 1px 0px -1px var(--tw-shadow-color),
          0px 1px 1px -1px var(--tw-shadow-color),
          0px 1px 2px -1px var(--tw-shadow-color),
          0px 2px 4px -2px var(--tw-shadow-color),
          0px 3px 6px -3px var(--tw-shadow-color)
        `,
        highlight: `
          inset 0px 0px 0px 1px var(--tw-shadow-color),
          inset 0px 1px 0px var(--tw-shadow-color)
        `,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
