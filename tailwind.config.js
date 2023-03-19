/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "--font-outfit",
      },
      animation: {
        rotate: "rotate 10s ease-in-out infinite",
      },
      colors: {
        qrWhite: "hsl(0, 0%, 100%)",
        qrLightGray: "hsl(212, 45%, 89%)",
        qrGrayishBlue: "hsl(220, 15%, 55%)",
        qrDarkBlue: "hsl(218, 44%, 22%)",
      },
      
    },
    borderWidth:{
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
    }
    // primary:
  },

  plugins: [],
};
