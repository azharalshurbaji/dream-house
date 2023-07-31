/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import  {VDataTable} from 'vuetify/labs/VDataTable'
// import handyUploader from 'handy-uploader/src/components/handyUploader';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {VDataTable, 
          // handyUploader,
        },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          darkBlue: '#0d1b2a',
        },
      },
    },
  },
})
