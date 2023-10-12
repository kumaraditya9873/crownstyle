import {
  // auth,
  signInWithGooglePopup,
  // signInWitheGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
// ../../utils/firebase/firebase.utils
import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

// <button onClick={signInWitheGoogleRedirect}>
//   Sign in with Google Redirect
// </button>;

// useEffect(async () => {
//   const response = await getRedirectResult(auth);

//   if (response) {
//     const userDocRef = await createUserDocumentFromAuth(response.user);
//   }
// }, []);

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// const logGoogleRedirectUser = async () => {
//   const { user } = await signInWitheGoogleRedirect();
//   console.log({ user });
// };
