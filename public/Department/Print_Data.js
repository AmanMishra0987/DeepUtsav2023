import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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

// Initialize Firebase (Same as in your code)
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to fetch data by serial
const fetchDataBySerial = (serial) => {
  const dataRef = ref(db, "Print_Data/" + serial);

  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Replace placeholders with actual data
        document.querySelector("#namePlaceholder").textContent = data.name;
        document.querySelector("#numberPlaceholder").textContent = data.mobile;
        document.querySelector("#serialPlaceholder").textContent = data.serial;
        document.querySelector("#imagePlaceholder").setAttribute("src", data.imageUrl);
        // You can also update other fields as needed
      } else {
        console.log("Data not found for serial: " + serial);
      }
    })
    .catch((error) => {
      console.error("Error fetching data: " + error);
    });
};
// Function to fetch all serials
const fetchAllSerials = () => {
  const dataRef = ref(db, "Print_Data");

  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const serials = Object.keys(data);

        // Log all the serials to the console
        console.log("All Serials:");
        serials.forEach((serial) => {
          console.log(serial);
        });
      } else {
        console.log("No data found in the database.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data: " + error);
    });
};
fetchAllSerials();
// Function to extract serial from query parameters
const getSerialFromQueryParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("serial");
};

// Fetch the "serial" from query parameters and call the fetchDataBySerial function
const serialFromURL = getSerialFromQueryParams();

if (serialFromURL) {
  // If "serial" is found in the URL, fetch and display the data
  fetchDataBySerial(serialFromURL);
} else {
  console.log("Serial not found in the URL.");
}
// Function to generate and display QR code
const generateQRCode = (text) => {
  const qrCodeContainer = document.getElementById("qrCodeContainer");
  const qr = new QRCode(qrCodeContainer, {
    text: text,
    width: 140, // Set the width and height as needed
    height: 140,
  });
};

// Get the window's URL and generate the QR code
const windowURL = 'https://deeputsav-rmlauexams.web.app/Department/Print_Data.html?serial='+serialFromURL;
console.log(windowURL);
generateQRCode(windowURL);
