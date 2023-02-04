import customThemeVars from "./custom-theme-vars.";
import dark from "./dark.";
import light from "./light.";

const a = 2;

export const useSemiThemeVars = () => {
  return {
    a,
    light,
    dark,
    customThemeVars
  };
};
