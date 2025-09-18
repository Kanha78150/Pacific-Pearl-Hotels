const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      fontFamily: {
        general: ["var(--font-general-sans)"],
        satoshi: ["var(--font-satoshi)"],
        gilda: ["var(--font-gilda)"],
      },
    },
  },
};

export default config;
