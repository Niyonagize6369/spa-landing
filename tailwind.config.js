/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: "#1E40AF", // Customize for brand color
            light: "#3B82F6",
          },
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"], // Example custom font
        },
      },
    },
    plugins: [],
  };
  