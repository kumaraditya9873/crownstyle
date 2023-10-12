import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// getFirestore, doc, getDoc, and setDoc from "firebase/firestore": Import Firestore-related functions for database operations.
const firebaseConfig = {
  apiKey: "AIzaSyCMa0zPvP9L9WMUjcVLiyGgA5jXqjjbuXI",
  authDomain: "crown-style-094.firebaseapp.com",
  projectId: "crown-style-094",
  storageBucket: "crown-style-094.appspot.com",
  messagingSenderId: "1090267195000",
  appId: "1:1090267195000:web:bb7754acf6c35bd50eaf8d",
};
// this is the firebase config
// Firebase Configuration:
// firebaseConfig: Contains the Firebase configuration object with API key, authDomain, projectId, storageBucket, messagingSenderId, and appId. This configuration is used to initialize the Firebase app.
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase:
// firebaseApp: Initializes the Firebase app using initializeApp with the provided firebaseConfig.

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Google Authentication Setup:
// provider: Creates an instance of GoogleAuthProvider for Google Sign-In.
// provider.setCustomParameters({ prompt: "select_account" }): Sets custom parameters for the Google authentication provider to prompt the user to select an account during sign-in.

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWitheGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// Export Firebase Authentication and Firestore Database Instances:
// auth: Exports the authentication instance using getAuth() to perform authentication operations.
// db: Exports the Firestore database instance using getFirestore() for database operations.

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// createUserDocumentFromAuth Function:

// This function takes a userAuth object as an argument, which typically represents a user authenticated with Firebase.
// It creates a reference to a Firestore document in the "users" collection with the user's UID.
// It then retrieves the document's snapshot using getDoc.
// If the document doesn't exist (the user is new), it extracts displayName and email from userAuth and creates a new document with those details, along with a createdAt timestamp.
// If there are any errors during the document creation process, it logs the error message.
// Finally, it returns a reference to the user's Firestore document.
// This code is typically used in a web application to set up Firebase authentication and Firestore database and provide functions for user authentication and data management. It allows you to authenticate users with Google and create user documents in Firestore when they sign up. These user documents can store additional user-related data.
