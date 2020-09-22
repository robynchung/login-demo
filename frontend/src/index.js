import React from "react";
import ReactDOM from "react-dom";
import { signUp, socialSignIn } from "./lib/authentication";
import constants from "./constants";

function App() {
  const { inputType, socialType } = constants;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = async event => {
    event.preventDefault();

    const response = await signUp(userName, password);

    console.log(response);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={event => setUserName(event.target.value)} type={inputType.text} value={userName} />
        <input onChange={event => setPassword(event.target.value)} type={inputType.password} value={password} />

        <button onClick={() => socialSignIn(socialType.facebook)}>facebook</button>
        <button onClick={() => socialSignIn(socialType.google)}>google</button>

        <button type={inputType.submit}>submit</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
