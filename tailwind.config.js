/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
const defaultTheme = require("tailwindcss/defaultTheme");

export default withMT({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ['"Nunito Sans"', "sans-serif"],
    },
    backgroundImage: {
      "custom-gradient":"linear-gradient(70deg, rgba(2,1,40,1) 36%, rgba(6,29,46,1) 71%);",
        'card-gradient':'linear-gradient(149deg, rgba(46,121,176,1) 40%, rgba(103,157,198,1) 60%)', 
        'black-gradient': 'linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)',
        'text-gradient': 'linear-gradient(177deg, rgba(89,160,201,1) 28%, rgba(113,104,170,1) 57%)'
    },

    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      shimmer: "shimmer 3s linear infinite",
      caretBlink : 'caretBlink 1.2s ease-out infinite',
      borderSpin: 'borderSpin 7s linear infinite'
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
       caretBlink : {
        '0%,70%,100%': { opacity: '1' },
        '20%,50%': { opacity: '0' },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
        borderSpin: {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },

    },
    extend: {
      fontFamily: {
        play: ['"Playfair Display SC"', "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        hugeHeading: "1.875rem", // 30px
        mainTitle: "1.375rem", // 22px
        subTitle: "1.25rem", // 20px
        description: "1.0625rem", // 17px
        smallText: "0.875rem", // 14px
        playfairLg: "1.875rem", // 30px
        playfairTitle: "1.375rem", // 22px
        tinyText: "0.75rem", // 12px
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        secondaryopacity: "var(--secondary-opacity-color)",
        text: "var(--text-color)",
        secondarytext: "var(--secondary-text-color)",
        background: "var(--background-color)",
        secondarybackground: "var(--secondary-background-color)",
        alert: "var(--alert-color)",
        commonbg: "var(--common-background-color)",
        themecolor: "var(--theme-color)",
        lightModText: "#000000",
        darkModeText: "#FFFFFF",
        lightModeGray: "#7B7B7B",
        darkModeGray: "#FDFFFF",
        primaryBackground: "FFFFFF",
        secondaryBackground: "#FBF9F7",
      },
      backgroundImage: {
        "study-bg": "url('@/assets/images/footerBgLogo.png')",
      },
      screens: {
        minism: { min: "450px", max: "639px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
});
