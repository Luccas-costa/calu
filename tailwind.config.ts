import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        reveal: 'reveal 0.8s cubic-bezier(0.25, 0.25, 0, 1) forwards',
        'reveal-left':
          'reveal-left 0.8s cubic-bezier(0.25, 0.25, 0, 1) forwards',
        'reveal-right':
          'reveal-right 0.8s cubic-bezier(0.25, 0.25, 0, 1) forwards',
        'reveal-scale':
          'reveal-scale 0.8s cubic-bezier(0.25, 0.25, 0, 1) forwards',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        spinslow: 'spin 20s linear infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'reveal-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'reveal-scale': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      screens: {
        // min width
        screen350: '350px',
        screen400: '400px',
        screen440: '440px',
        screen450: '450px',
        screen500: '500px',
        screen520: '520px',
        screen550: '550px',
        screen600: '600px',
        screen630: '630px',
        screen650: '650px',
        screen670: '670px',
        screen700: '700px',
        screen768: '768px',
        screen800: '800px',
        screen900: '900px',
        screen1000: '1000px',
        screen1070: '1070px',
        screen1100: '1100px',
        screen1200: '1200px',
        screen1300: '1300px',
        screen1400: '1400px',
        screen1460: '1460px',
        screen1500: '1500px',
        screen1550: '1550px',
        screen1600: '1600px',
        screen1700: '1700px',
        screen1800: '1800px',
        screen1900: '1900px',
        screen2000: '2000px',

        // max width
        screen2000max: { max: '2000px' },
        screen1900max: { max: '1900px' },
        screen1800max: { max: '1800px' },
        screen1700max: { max: '1700px' },
        screen1600max: { max: '1600px' },
        screen1500max: { max: '1500px' },
        screen1400max: { max: '1400px' },
        screen1300max: { max: '1300px' },
        screen1200max: { max: '1200px' },
        screen1100max: { max: '1100px' },
        screen1000max: { max: '1000px' },
        screen900max: { max: '900px' },
        screen800max: { max: '800px' },
        screen700max: { max: '700px' },
        screen600max: { max: '600px' },
        screen550max: { max: '550px' },
        screen500max: { max: '500px' },
        screen450max: { max: '450px' },
        screen400max: { max: '400px' },
        screen350max: { max: '350px' },

        // min height
        tall500: { raw: '(min-height: 500px)' },
        tall600: { raw: '(min-height: 600px)' },
        tall700: { raw: '(min-height: 700px)' },
        tall800: { raw: '(min-height: 800px)' },
        tall900: { raw: '(min-height: 900px)' },
        tall1000: { raw: '(min-height: 1000px)' },
        tall1024: { raw: '(min-height: 1024px)' },

        // max height
        short1024: { raw: '(max-height: 1024px)' },

        // max width and height
        short1024and1070: {
          raw: '(max-height: 1024px) and (max-width: 1070px)',
        },
        short900and1070: {
          raw: '(max-height: 900px) and (max-width: 1070px)',
        },
        short800and1070: {
          raw: '(max-height: 800px) and (max-width: 1070px)',
        },
        short800and865: {
          raw: '(max-height: 800px) and (max-width: 865px)',
        },
        short800and768: {
          raw: '(max-height: 800px) and (max-width: 768px)',
        },
        short1024and700: {
          raw: '(max-height: 1024px) and (max-width: 700px)',
        },
        short900and700: {
          raw: '(max-height: 900px) and (max-width: 700px)',
        },
        short800and700: {
          raw: '(max-height: 800px) and (max-width: 700px)',
        },
        short1024and650: {
          raw: '(max-height: 1024px) and (max-width: 650px)',
        },
        short900and650: {
          raw: '(max-height: 900px) and (max-width: 650px)',
        },
        short800and650: {
          raw: '(max-height: 800px) and (max-width: 650px)',
        },
        short1024and600: {
          raw: '(max-height: 1024px) and (max-width: 600px)',
        },
        short900and600: {
          raw: '(max-height: 900px) and (max-width: 600px)',
        },
        short800and600: {
          raw: '(max-height: 800px) and (max-width: 600px)',
        },
        short1024and550: {
          raw: '(max-height: 1024px) and (max-width: 550px)',
        },
        short900and550: {
          raw: '(max-height: 900px) and (max-width: 550px)',
        },
        short800and550: {
          raw: '(max-height: 800px) and (max-width: 550px)',
        },
        short1024and500: {
          raw: '(max-height: 1024px) and (max-width: 500px)',
        },
        short900and500: {
          raw: '(max-height: 900px) and (max-width: 500px)',
        },
        short800and500: {
          raw: '(max-height: 800px) and (max-width: 500px)',
        },
        short1024and450: {
          raw: '(max-height: 1024px) and (max-width: 450px)',
        },
        short900and450: {
          raw: '(max-height: 900px) and (max-width: 450px)',
        },
        short800and450: {
          raw: '(max-height: 800px) and (max-width: 450px)',
        },

        // min width and max height
        short1024and700min: {
          raw: '(max-height: 1024px) and (min-width: 700px)',
        },
        short900and700min: {
          raw: '(max-height: 900px) and (min-width: 700px)',
        },
        short800and700min: {
          raw: '(max-height: 800px) and (min-width: 700px)',
        },
        short800and865min: {
          raw: '(max-height: 800px) and (min-width: 865px)',
        },
        short1024and1070min: {
          raw: '(max-height: 1024px) and (min-width: 1070px)',
        },
        short1000and1070min: {
          raw: '(max-height: 1024px) and (min-width: 1070px)',
        },
        short900and1070min: {
          raw: '(max-height: 900px) and (min-width: 1070px)',
        },
        short800and1070min: {
          raw: '(max-height: 800px) and (min-width: 1070px)',
        },
        short1024and1300min: {
          raw: '(max-height: 1024px) and (min-width: 1300px)',
        },
        short900and1300min: {
          raw: '(max-height: 900px) and (min-width: 1300px)',
        },
        short800and1300min: {
          raw: '(max-height: 800px) and (min-width: 1300px)',
        },
        short1024and1400min: {
          raw: '(max-height: 1024px) and (min-width: 1400px)',
        },
        short900and1400min: {
          raw: '(max-height: 900px) and (min-width: 1400px)',
        },
        short800and1400min: {
          raw: '(max-height: 800px) and (min-width: 1400px)',
        },
        // min width and min height
        tall1000and1070min: {
          raw: '(min-height: 1000px) and (min-width: 1070px)',
        },
        tall900and1070min: {
          raw: '(min-height: 900px) and (min-width: 1070px)',
        },
        tall800and1070min: {
          raw: '(min-height: 800px) and (min-width: 1070px)',
        },
        tall700and1070min: {
          raw: '(min-height: 700px) and (min-width: 1070px)',
        },

        'max-1460': {
          max: '1460px',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        cinza: '#1A1A1A',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
