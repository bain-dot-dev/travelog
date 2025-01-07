import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ["var(--font-circular)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        "79": "19.75rem",
        "78": "19.5rem",
        "76": "19rem",
        "75": "18.75rem",
        "74": "18.5rem",
        "73": "18.25rem",
        "50": "12.5rem",
        "51": "12.75rem",
        "52": "13rem",
        "53": "13.25rem",
        "54": "13.5rem",
        "55": "13.75rem",
        "46": "11.5rem",
        "45": "11.25rem",
        "35": "8.75rem",
        "34": "8.5rem",
        "-42": "-10.5rem",
        "-27": "-6.75rem",
        "-26": "-6.5rem",
        "-25": "-6.25rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "20": "5rem",
      },
      rotate: {
        "120": "120deg",
        "-8": "-8deg",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        customColors: {
          white: "#FEFEFE",
          pink: "#F85E9F",
          purple: "#5D50C6",
          orange: "#FF5722",
          grey: "#8B8B91",
          black: "#191825",
          dandelion: "#F9CC49",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
