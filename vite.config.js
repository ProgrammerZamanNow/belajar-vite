import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: 'production'
    },
    server: {
        port: 3000
    }
});
