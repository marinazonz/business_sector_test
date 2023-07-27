/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                11: "repeat(11, minmax(0, 1fr))",
            },
        },
        plugins: [],
    },
};
