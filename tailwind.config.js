module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
    },
    backdropBlur: {
      xs: '2px',
    },
    backdropFilter: {
      gradientColorStops: (theme) => ({
        cyan: cyan - 200,
        blue: blue - 500,
      }),
      none: "none",
      
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
};
