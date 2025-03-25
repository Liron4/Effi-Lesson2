# Liron4

# Basic Firebase interaction using React

This is a basic React project shown in Effi's Lessons of Android 2 Course to test FireBase using React Frontend.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies required for the project.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Firebase Setup

To run this project, you need to set up Firebase and add your own Firebase credentials.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Add a new web app to your project.
4. Copy the Firebase configuration object.

Add the Firebase configuration in a by creating a new file: `src/Components/FireBase.js` with your own credentials:

```javascript
// filepath: [FireBase.js](http://_vscodecontentref_/0)
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);
const auth = getAuth(app);

export { auth };
export default Database;
