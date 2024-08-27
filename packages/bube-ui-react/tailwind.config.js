import figmaVariables from "./src/styles/variablesOutput.js";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        ...figmaVariables.spacing,
      },
      borderRadius: {
        ...figmaVariables.borderRadius,
      },
      colors: {
        ...figmaVariables.colors,
      },
    },
  },
  plugins: [],
};
