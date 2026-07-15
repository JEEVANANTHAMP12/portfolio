export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      animation: {
        gradient: 'gradientFlow 3s ease infinite',
        float: 'gentleFloat 8s ease-in-out infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
