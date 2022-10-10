/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screen: {
        sm: '480px',
        md: '767px',
        lg: '1020px',
        xl: '1440px'
      },
      colors: {
        myGreenLink: 'hsl(157, 87.1%, 42.5%)',
        myWhite: 'hsl(255, 100%, 100%)',
        myGold: 'hsl(44, 100%, 39.4%)',
        myRedLight: 'hsl(47, 95%, 92.2%)',
        myGreyLight: 'hsl(0, 0.0%, 96.1%)',
        myGreyMid: 'hsl(217, 10.4%, 49.0%)',
        myYellowishGold: 'rgb(240, 185, 11)',
        myGreyShade: 'rgb(234, 236, 239)',
        myGoldButton: 'rgb(252, 213, 53)',
        myGoldLinkText: 'rgb(201, 148, 0)',
        myDarkFooterText: 'rgb(71, 77, 87)',
        myDarkText: 'rgb(30, 35, 41)',
        myGreyImgbackground: 'rgb(245, 245, 245)',
        myGreySvg: 'rgb(112, 112, 138)',
        myRedValidation: 'rgb(207, 48, 74)',
        myGreyOverlay: 'rgba(0,0,0,0.5)'
      },
    },
    plugins: [],
  },

}
