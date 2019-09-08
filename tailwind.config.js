/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {},
      minWidth: {
        sm: "640px",
        md: "",
        lg: ""
      },
      screens: {
        xs: "411px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        smOnly: { min: "640px", max: "767px" },
        smMdOnly: { min: "640px", max: "1023px" },
        smLgOnly: { min: "640px", max: "1279px" },
        mdOnly: { min: "768px", max: "1023px" },
        mdLgOnly: { min: "768px", max: "1279px" },
        lgOnly: { min: "1024px", max: "1279px" },
        zeroXsOnly: { min: "0px", max: "410px" },
        zeroSmOnly: { min: "0px", max: "767px" },
        zeroMdOnly: { min: "0px", max: "1023px" },
        zeroLgOnly: { min: "0px", max: "1279px" }
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        "130": "30rem",
        "142": "33rem",
        "154": "36rem",
        "166": "39rem",
        "178": "42rem"
      }
    }
  },
  variants: {},
  plugins: []
};
