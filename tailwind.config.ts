import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        headline: ["Manrope", "system-ui", "sans-serif"],
        display: ["Manrope", "system-ui", "sans-serif"],
        body: ["Public Sans", "system-ui", "sans-serif"],
        sans: ["Public Sans", "system-ui", "sans-serif"],
        label: ["Public Sans", "system-ui", "sans-serif"],
      },
      colors: {
        // Material Design 3 flat tokens (matching reference spec)
        "background": "#f9f9fc",
        "surface": "#f9f9fc",
        "surface-bright": "#f9f9fc",
        "surface-dim": "#dadadc",
        "surface-variant": "#e2e2e5",
        "surface-container": "#eeeef0",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f6",
        "surface-container-high": "#e8e8ea",
        "surface-container-highest": "#e2e2e5",
        "surface-tint": "#255dad",

        "on-background": "#1a1c1e",
        "on-surface": "#1a1c1e",
        "on-surface-variant": "#424752",
        "inverse-surface": "#2f3133",
        "inverse-on-surface": "#f0f0f3",

        "primary": "#004085",
        "primary-container": "#1d57a7",
        "primary-fixed": "#d7e2ff",
        "primary-fixed-dim": "#abc7ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#bad0ff",
        "on-primary-fixed": "#001b3f",
        "on-primary-fixed-variant": "#00458f",
        "inverse-primary": "#abc7ff",

        "secondary": "#3e5f91",
        "secondary-container": "#a5c5fd",
        "secondary-fixed": "#d5e3ff",
        "secondary-fixed-dim": "#a8c8ff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#305182",
        "on-secondary-fixed": "#001b3c",
        "on-secondary-fixed-variant": "#254777",

        "tertiary": "#663500",
        "tertiary-container": "#884800",
        "tertiary-fixed": "#ffdcc3",
        "tertiary-fixed-dim": "#ffb77d",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ffc395",
        "on-tertiary-fixed": "#2f1500",
        "on-tertiary-fixed-variant": "#6e3900",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        "outline": "#727784",
        "outline-variant": "#c2c6d4",

        // Legacy shadcn tokens for component library compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#663500",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      boxShadow: {
        tonal: "0px 24px 48px rgba(0, 27, 63, 0.06)",
        "tonal-lg": "0px 32px 64px rgba(0, 27, 63, 0.08)",
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
        "fluid-reveal": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fluid-reveal-bg": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fluid-reveal": "fluid-reveal 0.6s ease-out forwards",
        "fluid-reveal-bg": "fluid-reveal-bg 0.4s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
