/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

        //? Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLeXGBE2UUMxdFrKRnqxFJF5xhpZAu4_M",
  authDomain: "my-first-project-az-6da25.firebaseapp.com",
  projectId: "my-first-project-az-6da25",
  storageBucket: "my-first-project-az-6da25.appspot.com",
  messagingSenderId: "534566377672",
  appId: "1:534566377672:web:a94bd25d578757d3eeedfd"
};
// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);


const app = createApp(App);

registerPlugins(app)

app.mount('#app')


