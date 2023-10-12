import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

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
