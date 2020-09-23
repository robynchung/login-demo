import React from "react";
import { signIn, socialSignIn } from "../../lib/authentication";
import constants from "../../constants";

function SignIn() {
  const { inputType, socialType } = constants;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const signedIn = await signIn(userName, password);

      console.log(signedIn);
    } catch (error) {}
  };

  return (
    <>
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

export default SignIn;
