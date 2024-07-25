import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { StoryFn, StoryContext } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

const withTheme = (Story: StoryFn, context: StoryContext) => {
  const isDark = useDarkMode();

  // Aplicar classes ou estilos baseados no tema
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );

  return <Story {...context} />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: themes.dark,
      light: themes.light,
      current: "light",
    },
    // Configurar temas usando a addon de dark mode
    themes: {
      default: "light",
      list: [
        { name: "Light", class: themes.light, color: "#ffffff" },
        { name: "Dark", class: themes.dark, color: "#000000" },
      ],
    },
  },
  decorators: [withTheme],
};

export default preview;
