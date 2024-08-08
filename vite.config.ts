import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AnimatedScrollCardNGIT",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"], // supports es and common js format
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "REACTDOM",
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.json",
    }), // typeScript declaration files
  ],
});
