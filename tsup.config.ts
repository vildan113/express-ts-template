import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["./src/index.ts"],
	outDir: "./build",
	sourcemap: true,
	clean: true,
	format: "esm",
	treeshake: "recommended"
})
