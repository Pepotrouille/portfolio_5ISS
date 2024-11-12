/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#f4f1de',
    surface: '#ffffff',
    'surface-darken-1': '#f4f1de',
    'surface-darken-2': '#f0e7d1',
    'surface-darken-3': '#ebdbc1',
    'surface-darken-4': '#d1bca2',
    'surface-darken-5': '#c8a18c',
    primary: '#81b29a',
    'primary-darken-1': '#6f9e8a',
    'primary-darken-2': '#5f8f7d',
    secondary: '#e07a5f',
    error: '#e07a5f',
    info: '#3d405b',
    success: '#9dd5d1',
    warning: '#f2cc8f',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})