import { execSync } from "child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  };

  const CDN_URL = process.env.CDN_URL;

  if (CDN_URL && command === "build") {
    const branch = execSync("git branch --show-current").toString().trim();

    if (!CDN_URL) {
      throw new Error("CDN_URL env variable is not passed");
    }

    const base = `${CDN_URL}/${branch}/`.replace(/(?<!:)\/\/+/g, "/");

    console.log("Building with base", base);

    return {
      base,
      ...config,
    };
  }

  return config;
});
