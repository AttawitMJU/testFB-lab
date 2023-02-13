import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "./assets/main.css";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDasVjxJ-hoySk2PVlRR2CZzhJng3RDZxA",
  authDomain: "cs313-13.firebaseapp.com",
  projectId: "cs313-13",
  storageBucket: "cs313-13.appspot.com",
  messagingSenderId: "160140351459",
  appId: "1:160140351459:web:73ea64c41e58df14fc32d6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
