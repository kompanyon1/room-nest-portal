
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				hotel: {
					'beige': '#F5F5F0',
					'taupe': '#C8C8C0',
					'brown': '#A89E8A',
					'charcoal': '#333333',
					'cream': '#FFFFF0',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'slide-out-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-out-left': 'slide-out-left 0.5s ease-out'
			},
			backgroundImage: {
				'noise': "url('data:image/png;base64,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')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
