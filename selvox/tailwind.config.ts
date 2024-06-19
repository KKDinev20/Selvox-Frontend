import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'navbar': '#F9A6BF',
      'logo': '#F6B2C6',
      'button': '#FCD2DF'
    }
  },
  plugins: [],
};
export default config;
