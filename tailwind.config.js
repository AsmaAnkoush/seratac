/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2E3192',
        white: '#FFFFFF',
        accent: '#FF8000',
        lightGrey: '#F2F2F2',
        grey: '#404040',
        subject1: '#F06496',
        subject2: '#FBC421',
        subject3: '#7AC943',
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-slower': 'ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ping-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
