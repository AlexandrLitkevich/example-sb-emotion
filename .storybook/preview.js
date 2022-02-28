import {ThemeProvider} from "@emotion/react";
import {oneTheme} from "../src/Components/Theme/themeOne";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}



export const decorators = [
  (Story) => (
      <ThemeProvider theme={oneTheme}>
        <Story/>
      </ThemeProvider>
  )
]