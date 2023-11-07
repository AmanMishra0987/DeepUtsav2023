import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAt6S2Epz7NBNzRuzZYXaMN6QIxh-LNuW4",
    authDomain: "deeputsavfake.firebaseapp.com",
    projectId: "deeputsavfake",
    databaseURL: "https://deeputsavfake-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "deeputsavfake.appspot.com",
    messagingSenderId: "881974778156",
    appId: "1:881974778156:web:7d407b9c733d80ebcab489",
    measurementId: "G-FPLJR4ZS1Q"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);
const dataRef = ref(db, "formData"); // Change "formData" to your desired database path

// Event listener for the "Save" button
document.getElementById("btnSave").addEventListener("click", function () {
  const name = document.getElementById("txtname").value;
  const mobile = document.getElementById("txtmob").value;
  const email = document.getElementById("txtemail").value;
  const institution = document.getElementById("txtunit").value;
  const institutionHindi = document.getElementById("txtunitHindi").value;
  const imgurl = document.getElementById("urlimage").value;

  // Create an object with the form data
  const formData = {
    name: name,
    mobile: mobile,
    email: email,
    institution: institution,
    institutionHindi: institutionHindi,
    imageUrl: imgurl,
  };

  // Push the data to Firebase
  push(dataRef, formData);

  // Clear the form fields after submission
  document.getElementById("txtname").value = "";
  document.getElementById("txtmob").value = "";
  document.getElementById("txtemail").value = "";
  document.getElementById("txtunit").value = "";
  document.getElementById("txtunitHindi").value = "";
  document.getElementById("urlimage").value = "";

  alert("Successfully Submitted the Form")

});