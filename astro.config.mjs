import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [keystatic(), react(), markdoc(), vercel()],
	output: "hybrid",
});
