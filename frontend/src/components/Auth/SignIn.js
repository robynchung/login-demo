import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn, socialSignIn } from "../../lib/authentication";
import constants from "../../constants";
import pathList from "../../pathList";

function SignIn(props) {
  const history = useHistory();
  const { setIsAuthenticated } = props;
  const { inputType, socialType } = constants;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const signedIn = await signIn(userName, password);

      setUserName("");
      setPassword("");

      if (signedIn.isSuccess) {
        setIsAuthenticated(true);
        history.push(pathList.home);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit} data-cy={inputType.submit}>
        <input onChange={event => setUserName(event.target.value)} type={inputType.email} value={userName} data-cy="username" />
        <input onChange={event => setPassword(event.target.value)} type={inputType.password} value={password} data-cy="password" />

        <button type={inputType.submit}>submit</button>
      </form>

      <button onClick={() => socialSignIn(socialType.facebook)}>facebook</button>
      <button onClick={() => socialSignIn(socialType.google)}>google</button>

      <Link to={pathList.signUp}>Sign Up</Link>
    </>
  );
}

export default SignIn;
