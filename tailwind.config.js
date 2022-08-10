module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                14: "repeat(14, minmax(0, 1fr))",
            },
            gridColumnStart: {
                13: "13",
                14: "14",
            },
            gridColumn: {
                "span-13": "span 13 / span 13",
                "span-14": "span 14 / span 14",
            },
            colors: {
                "accent-1": "#FAFAFA",
                "accent-2": "#EAEAEA",
                "accent-7": "#333",
                "color-base": "#1D233A",
                success: "#0070f3",
                cyan: "#79FFE1",
            },
            spacing: {
                28: "7rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4rem",
                "8xl": "6.25rem",
            },
            boxShadow: {
                small: "0 5px 10px rgba(0, 0, 0, 0.12)",
                medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
            },
            screens: {
                xs: "400px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
    plugins: [],
};
