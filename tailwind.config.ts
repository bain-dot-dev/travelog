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
        "91": "22.75rem",
        "92": "23rem",
        "93": "23.25rem",
        "94": "23.5rem",
        "95": "23.75rem",
        "96": "24rem",
        "97": "24.25rem",
        "98": "24.5rem",
        "99": "24.75rem",
        "100": "25rem",
        "101": "25.25rem",
        "102": "25.5rem",
        "103": "25.75rem",
        "104": "26rem",
        "105": "26.25rem",
        "106": "26.5rem",
        "107": "26.75rem",
        "108": "27rem",
        "109": "27.25rem",
        "110": "27.5rem",
        "111": "27.75rem",
        "112": "28rem",
        "113": "28.25rem",
        "114": "28.5rem",
        "115": "28.75rem",
        "116": "29rem",
        "117": "29.25rem",
        "118": "29.5rem",
        "119": "29.75rem",
        "120": "30rem",
        "121": "30.25rem",
        "122": "30.5rem",
        "123": "30.75rem",
        "124": "31rem",
        "125": "31.25rem",
        "126": "31.5rem",
        "127": "31.75rem",
        "128": "32rem",
        "129": "32.25rem",
        "130": "32.5rem",
        "131": "32.75rem",
        "132": "33rem",
        "133": "33.25rem",
        "134": "33.5rem",
        "135": "33.75rem",
        "136": "34rem",
        "137": "34.25rem",
        "138": "34.5rem",
        "139": "34.75rem",
        "140": "35rem",
        "141": "35.25rem",
        "142": "35.5rem",
        "143": "35.75rem",
        "144": "36rem",
        "145": "36.25rem",
        "146": "36.5rem",
        "147": "36.75rem",
        "148": "37rem",
        "149": "37.25rem",
        "150": "37.5rem",
        '151': '37.75rem', 
        '152': '38rem',    
        '153': '38.25rem', 
        '154': '38.5rem',  
        '155': '38.75rem', 
        '156': '39rem',    
        '157': '39.25rem', 
        '158': '39.5rem',  
        '159': '39.75rem', 
        '160': '40rem',    
        '161': '40.25rem', 
        '162': '40.5rem',  
        '163': '40.75rem', 
        '164': '41rem',    
        '165': '41.25rem', 
        '166': '41.5rem',  
        '167': '41.75rem', 
        '168': '42rem',    
        '169': '42.25rem', 
        '170': '42.5rem',  
        '171': '42.75rem', 
        '172': '43rem',    
        '173': '43.25rem', 
        '174': '43.5rem',  
        '175': '43.75rem', 
        '176': '44rem',    
        '177': '44.25rem', 
        '178': '44.5rem',  
        '179': '44.75rem', 
        '180': '45rem',    
        '181': '45.25rem', 
        '182': '45.5rem',  
        '183': '45.75rem', 
        '184': '46rem',    
        '185': '46.25rem', 
        '186': '46.5rem',  
        '187': '46.75rem', 
        '188': '47rem',    
        '189': '47.25rem', 
        '190': '47.5rem',  
        '191': '47.75rem', 
        '192': '48rem',    
        '193': '48.25rem', 
        '194': '48.5rem',  
        '195': '48.75rem', 
        '196': '49rem',    
        '197': '49.25rem', 
        '198': '49.5rem',  
        '199': '49.75rem', 
        '200': '50rem',    
        "82": "20.5rem",
        "84": "21rem",
        "86": "21.5rem",
        "88": "22rem",
        "90": "22.5rem",
        "79": "19.75rem",
        "78": "19.5rem",
        "76": "19rem",
        "75": "18.75rem",
        "74": "18.5rem",
        "73": "18.25rem",
        "63": "15.75rem",
        "64": "16rem",
        "65": "16.25rem",
        "66": "16.5rem",
        "67": "16.75rem",
        "68": "17rem",
        "69": "17.25rem",
        "70": "17.5rem",
        "71": "17.75rem",
        "50": "12.5rem",
        "51": "12.75rem",
        "52": "13rem",
        "53": "13.25rem",
        "54": "13.5rem",
        "55": "13.75rem",
        "58": "14.5rem",
        "46": "11.5rem",
        "45": "11.25rem",
        "41": "10.25rem",
        "37": "9.25rem",
        "38": "9.5rem",
        "39": "9.75rem",
        "35": "8.75rem",
        "34": "8.5rem",
        "30": "7.5rem",
        "29": "7.25rem",
        "-42": "-10.5rem",
        "-27": "-6.75rem",
        "-26": "-6.5rem",
        "-25": "-6.25rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "20": "5rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "24": "6rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
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
          yellowOrb: "#FACD49",
          lavenderWhite: "#F8F7FF",
          coalGrey: "#2D2A3E",
          lavender: "#8D7FFF",
          anotherLavender: "#9F94FF",
          eggShell: "#E0E0E0",
          darkPurple: "#6B6885",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
