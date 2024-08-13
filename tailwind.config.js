import withMT from '@material-tailwind/react/utils/withMT'
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        '1px': '1px 1px 1px gray',
      }
    },
  },
  plugins: [],
})

