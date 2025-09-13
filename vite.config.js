import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Để tối ưu SVG icon
      },
    }),
  ],
  // css: {
  //   modules: {
  //     localsConvention: "camelCaseOnly",
  //   },
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/styles/variables.scss";`,
  //     },
  //   },
  // },
});
