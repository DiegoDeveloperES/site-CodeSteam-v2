import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    plugins: [react()],

    // 🔥 essencial para deploy em subpath (Railway / VPS / etc)
    base: "/",

    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },

    // 🔥 evita problemas de dependências externas em build
    build: {
      assetsDir: "assets",
      sourcemap: false,
    },

    // 🔥 ajuda a evitar problemas de import em produção
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  };
});