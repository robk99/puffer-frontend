/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A65FF',
                secondary: '#061A40',
                background: '#0F172A',
                surface: '#1E293B',
            },
        },
    },
    plugins: [],
} 