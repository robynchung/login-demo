import React from "react";
import { signIn, signUpWithEmail, socialSignIn } from "../../lib/authentication";
import constants from "../../constants";

function SignUp() {
  const { inputType, socialType } = constants;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const created = await signUpWithEmail(userName, password);

      if (created.isSuccess) {
        await signIn(userName, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input onChange={event => setUserName(event.target.value)} type={inputType.text} value={userName} />
        <input onChange={event => setPassword(event.target.value)} type={inputType.password} value={password} />

        <button type={inputType.submit}>submit</button>
      </form>

      <button onClick={() => socialSignIn(socialType.facebook)}>facebook</button>
      <button onClick={() => socialSignIn(socialType.google)}>google</button>
    </>
  );
}

export default SignUp;
