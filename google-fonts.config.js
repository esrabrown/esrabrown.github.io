const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Inter", variants: ["400", "800"] },
        // Add more font families and variants as needed
      ],
    }),
  ],
};
