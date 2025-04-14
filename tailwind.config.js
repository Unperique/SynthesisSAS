module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime': {
          400: '#a3e635', // Color del logo para referencias
          500: '#84cc16', // Color principal verde lima
          600: '#65a30d', // Variante más oscura para hover
        },
      },
    },
  },
  plugins: [],
}