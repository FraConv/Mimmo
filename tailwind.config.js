/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
       
      "Loader1":"Loader1 3s linear infinite", 
      "Loader2":"Loader2 3s linear infinite" ,
      "Loader3":"Loader3 3s linear infinite" ,
      "Loader4":"Loader4 3s linear infinite" ,
      "Loader1m":"Loader1m 3s linear infinite", 
      "Loader2m":"Loader2m 3s linear infinite" ,
      "Loader3m":"Loader3m 3s linear infinite" ,
      "Loader4m":"Loader4m 3s linear infinite" ,
      "Loader1t":"Loader1m 3s linear infinite", 
      "Loader2t":"Loader2m 3s linear infinite" ,
      "Loader3t":"Loader3m 3s linear infinite" ,
      "Loader4t":"Loader4m 3s linear infinite" ,
      
    },

    keyframes:{

      Loader1:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '33%' , backgroundColor: "#1b4455"},
        '100%': {marginTop: '27%'},

      },

      Loader2:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '24%', backgroundColor: "#f9b65d"},
        '100%': {marginTop: '27%'},

      },

      Loader3:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '30%', backgroundColor: "#1b4455" } ,
        '100%': {marginTop: '27%'},

      },

      Loader4:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '21%', backgroundColor: "#f9b65d"},
        '100%': {marginTop: '27%'},

      },

      
      Loader1m:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '67%' , backgroundColor: "#1b4455"},
        '100%': {marginTop: '27%'},

      },

      Loader2m:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '4%', backgroundColor: "#f9b65d"},
        '100%': {marginTop: '27%'},

      },

      Loader3m:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '50%', backgroundColor: "#1b4455" } ,
        '100%': {marginTop: '27%'},

      },

      Loader4m:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '-19%', backgroundColor: "#f9b65d"},
        '100%': {marginTop: '27%'},

      },

      Loader1t:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '27%' , backgroundColor: "#1b4455"},
        '100%': {marginTop: '27%'},

      },

      Loader2t:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '507%', backgroundColor: "#f9b65d"},
        '100%': {marginTop: '27%'},

      },

      Loader3t:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '27%', backgroundColor: "#1b4455" } ,
        '100%': {marginTop: '27%'},

      },

      Loader4t:{

        '0%': {marginTop: '27%'},
        '50%': {marginTop: '27%', backgroundColor: "#f9b65d"},
        '100%': {marginTop: '27%'},

      }

    }
       
  },
  plugins: [],
}

