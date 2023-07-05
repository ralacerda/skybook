import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), icons()],
  // build para browsers que possuem top level await
  // https://caniuse.com/mdn-javascript_operators_await_top_level
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
});
