module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  //? kendi theme ayarlarımızı eklemek için bu kısmı ekliyoruz
  theme: {
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
};
