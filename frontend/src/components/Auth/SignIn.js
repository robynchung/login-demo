import React from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn, socialSignIn } from "../../lib/authentication";
import constants from "../../constants";
import pathList from "../../pathList";

function SignIn() {
  const history = useHistory();
  const { inputType, socialType } = constants;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const signedIn = await signIn(userName, password);

      setUserName("");
      setPassword("");

      if (signedIn.isSuccess) {
        history.push(pathList.home);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <input onChange={event => setUserName(event.target.value)} type={inputType.text} value={userName} />
        <input onChange={event => setPassword(event.target.value)} type={inputType.password} value={password} />

        <button type={inputType.submit}>submit</button>
      </form>

      <button onClick={() => socialSignIn(socialType.facebook)}>facebook</button>
      <button onClick={() => socialSignIn(socialType.google)}>google</button>
      <Link to={pathList.signUp}>Sign Up</Link>
    </>
  );
}

export default SignIn;
