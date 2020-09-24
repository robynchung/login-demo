import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn, signUpWithEmail, socialSignIn } from "../../lib/authentication";
import constants from "../../constants";
import pathList from "../../pathList";

function SignUp(props) {
  const history = useHistory();
  const { setIsAuthenticated } = props;
  const { inputType, socialType } = constants;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const created = await signUpWithEmail(userName, password);

      setUserName("");
      setPassword("");

      if (created.isSuccess) {
        await signIn(userName, password);
        setIsAuthenticated(true);
        history.push(pathList.home);
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

      <Link to={pathList.signIn}>Sign In</Link>
    </>
  );
}

export default SignUp;
