/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
