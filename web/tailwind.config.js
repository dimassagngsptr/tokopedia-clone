import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         openSauceOne: ["Open Sans", "sans-serif"],
      },
      colors: {
         main: {
            gray: "#F0F3F7",
            green: "#03AC0E",
         },
      },
      extend: {},
   },
   plugins: [],
});
