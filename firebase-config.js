// ====== إعدادات Firebase ======
// عوّض هذي القيم بإعدادات مشروعك الخاص من Firebase Console
// (Project settings > General > Your apps > SDK setup and configuration)
const firebaseConfig = {
  apiKey: "AIzaSyCNltalRcyy4_gRMS5QyStTg6zDpbTAGf0",
  authDomain: "menu-8434a.firebaseapp.com",
  databaseURL: "https://menu-8434a-default-rtdb.firebaseio.com",
  projectId: "menu-8434a",
  storageBucket: "menu-8434a.firebasestorage.app",
  messagingSenderId: "1029382659608",
  appId: "1:1029382659608:web:653fb9ab14bfd5cc506d6d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
