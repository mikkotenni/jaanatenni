import { defineConfig } from "vitest/config";

export default defineConfig({
  // Define the environment for your tests. Common values are 'jsdom', 'happy-dom', 'node'
  test: {
    environment: "happy-dom", // Recommended for frontend testing, simulates the DOM
    // Globals: true, // Uncomment if you want to automatically inject global variables like `describe`, `it`, etc.
    // Specify paths to match test files
    include: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    // Use this to transform files for testing, e.g., if using JSX or TypeScript
    transformMode: {
      web: [/.[tj]sx?$/], // Transpile files ending in .js, .jsx, .ts, .tsx for the web environment
    },
    // Coverage configuration
    coverage: {
      provider: "v8", // Use 'v8' as the coverage provider
      // Specify what to include when calculating coverage
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      // Set thresholds for coverage percentages
      // Uncomment and configure as necessary
      // threshold: {
      //   statements: 90,
      //   branches: 90,
      //   functions: 90,
      //   lines: 90,
      // },
    },
    // Enable if you're using TypeScript
    // tsconfig: 'path/to/your/tsconfig.json',
  },
  // Define plugins if you're using any
  // plugins: [],
});
