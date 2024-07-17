/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    screens: {
      xsm:'375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors:{
      primary:'#00c394',
      black:'#031417',
      hazyBlack:'#000028',
      white:'#FFFFFF',
      gray:'#1F2937',
      lightGray:'#374151',
      fontColor:'#656565',
      yellow:'#ffea00',
      violet:'#8B5CF6',
      fuchsia:'#D946EF',
      pureBlack:'#000000',
      error:'#EF4444',
      slate:'#94A3B8',
      bgGray:'#F1F5F9'


    },
	},
	plugins: [],
};
