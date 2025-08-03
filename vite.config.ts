import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Myportfolio/", 
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    sourcemap: true, // <-- Ajouté pour aider au debug
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
