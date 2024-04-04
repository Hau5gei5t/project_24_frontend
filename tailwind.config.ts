import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--cborder))",
        input: "hsl(var(--cinput))",
        ring: "hsl(var(--cring))",
        background: "hsl(var(--cbackground))",
        foreground: "hsl(var(--cforeground))",
        primary: {
          DEFAULT: "hsl(var(--cprimary))",
          foreground: "hsl(var(--cprimary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--csecondary))",
          foreground: "hsl(var(--csecondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--cdestructive))",
          foreground: "hsl(var(--cdestructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--cmuted))",
          foreground: "hsl(var(--cmuted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--caccent))",
          foreground: "hsl(var(--caccent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--cpopover))",
          foreground: "hsl(var(--cpopover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--ccard))",
          foreground: "hsl(var(--ccard-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--cradius)",
        md: "calc(var(--cradius) - 2px)",
        sm: "calc(var(--cradius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [ require("daisyui")],
} satisfies Config;

export default config;
