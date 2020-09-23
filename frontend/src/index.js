import React from "react";
import ReactDOM from "react-dom";
import { signIn, signUpWithEmail, socialSignIn } from "./lib/authentication";
import constants from "./constants";

function App() {
  const { inputType, socialType } = constants;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const created = await signUpWithEmail(userName, password);

      if (created.isSuccess) {
        const signedIn = await signIn(userName, password);
      }
    } catch (error) {
      console.log(error);
    }
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

ReactDOM.render(<App />, document.getElementById("root"));
