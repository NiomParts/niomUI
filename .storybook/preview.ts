import type { Preview } from "@storybook/react";
import { create } from "storybook/theming";
// @ts-ignore
import "../src/css/index.css";
// @ts-ignore
import "./preview.css";

const niomDocsTheme = create({
  base: "dark",
  brandTitle: "Niom UI",
  appBg: "#08111f",
  appContentBg: "#08111f",
  appPreviewBg: "#08111f",
  barBg: "#111c30",
  barTextColor: "#b8c2d4",
  barSelectedColor: "#38bdf8",
  colorPrimary: "#38bdf8",
  colorSecondary: "#a78bfa",
  textColor: "#f5f7fb",
  textMutedColor: "#b8c2d4",
  inputBg: "#111c30",
  inputBorder: "#2b3850",
  inputTextColor: "#f5f7fb",
});

const preview: Preview = {
  parameters: {
    docs: {
      theme: niomDocsTheme,
    },
    backgrounds: {
      default: "Niom",
      values: [
        {
          name: "Niom",
          value: "#08111f",
        },
        {
          name: "Surface",
          value: "#111c30",
        },
      ],
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
