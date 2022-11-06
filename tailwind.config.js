/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBlue: "#D0D6F9",
        White: "#FFFFFF",
        black: "#0B0D17",
        divider: "#383B4B",
      },
      fontFamily: {
        Barlow: "Barlow Condensed, sans-serif",
        BarlowRegular: "Barlow , sans-serif",
        Bellefair: "Bellefair, serif",
      },
      backgroundImage: {
        "home-desktop": "url('/images/home/background-home-desktop.jpg')",
        "home-tablet": "url('/images/home/background-home-tablet.jpg')",
        "home-mobile": "url('/images/home/background-home-mobile.jpg')",
        "crew-desktop": "url('/images/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/images/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/images/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/images/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/images/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/images/technology/background-technology-mobile.jpg')",
        "destination-desktop":
          "url('/images/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/images/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/images/destination/background-destination-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
