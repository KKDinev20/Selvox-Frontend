import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': '#F9A6BF',
        'logo': '#F6B2C6',
        'button': '#FCD2DF',
        'rose-quartz' : "#F8E3E9",
        'white': "#f2f2f2",
        'even': "#EAE2E2",
        'box': "#EEEAEA"
      }
    },
  },
  plugins: [],
};
export default config;
