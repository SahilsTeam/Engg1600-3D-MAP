import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Engg1600-3D-MAP/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
