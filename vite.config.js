import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
  manifest: {
    name: "Weather Ups",
    short_name: "Weathe Ups",
    description: "An app that can show weather forecast for your city.",
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
		{
            src: '192-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '512-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
    ],
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifest)],
});
