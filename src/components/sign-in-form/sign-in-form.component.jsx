import { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import "./sign-in-form.styles.scss";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";
// import { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your eamil and passowrd</span>
      <form onSubmit={handleSubmit}>
        {/* */}

        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="text"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign-In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
