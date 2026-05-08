import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(), // ده لوحده هيخلي الـ @ تشتغل من غير أخطاء
    tailwindcss(),
    tanstackStart({
      target: "vercel",
    }),
    react(),
  ],
});
