import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </>
  );
};

export default SignIn;
