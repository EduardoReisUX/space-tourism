module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      brand: {
        primary: "#D0D6F9",
        black: "#0B0D17",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      serif: ["Bellefair", "serif"],
      sans: ["Barlow", "sans-serif"],
      mono: ["Barlow Condensed", "sans-serif"],
    },
    fontSize: {
      nav: [
        "16px",
        {
          letterSpacing: "2.7px",
        },
      ],
      body: "18px",
      subh2: [
        "14px",
        {
          letterSpacing: "2.35px",
        },
      ],
      subh1: "28px",
      h5: [
        "28px",
        {
          letterSpacing: "4.75px",
        },
      ],
      h4: "32px",
      h3: "56px",
      h2: "100px",
      h1: "150px",
    },

    extend: {
      keyframes: {
        hovering: {
          "0%, 100%": { transform: "translateY(8px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        hover: "hovering 4s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
