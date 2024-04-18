/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    900: '#CF18B8',
                    800: '#D62AC6',
                    700: '#E03DD5',
                    600: '#E950E4',
                    500: '#F163F2',
                    400: '#F576FF',
                    300: '#F889FF',
                    200: '#FA9CFF',
                    100: '#FBAFFF',
                }
            }
        },
    },
    plugins: [],
}