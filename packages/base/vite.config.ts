import { defineConfig, esmExternalRequirePlugin } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    // https://github.com/vitejs/rolldown-vite/issues/596#issuecomment-3894302253
    rolldownOptions: {
      // external: [/^react(-dom)?(\/.+)?$/],
      plugins: [
        esmExternalRequirePlugin({
          external: [/^react(-dom)?(\/.+)?$/],
        }),
      ],
    },
  },
});
