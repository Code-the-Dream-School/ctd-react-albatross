import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAeLnirvsVlquS3bk0bEIGPNZys6y5d8pg",
    authDomain: "todo-list-1561e.firebaseapp.com",
    projectId: "todo-list-1561e",
    storageBucket: "todo-list-1561e.appspot.com",
    messagingSenderId: "869684313344",
    appId: "1:869684313344:web:e53aeaac7e2b9b5c3e87e5"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);



  export { db };