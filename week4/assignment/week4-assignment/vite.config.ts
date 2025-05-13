import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// Start of Selection
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});
