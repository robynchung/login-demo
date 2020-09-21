import React from "react";
import ReactDOM from "react-dom";
import constants from "./constants";
import env from "./config";

console.log(env);

function App() {
  const { inputType } = constants;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = event => {
    event.preventDefault();

    console.log(userName, password);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={event => setUserName(event.target.value)} type={inputType.text} value={userName} />
        <input onChange={event => setPassword(event.target.value)} type={inputType.password} value={password} />

        <button type={inputType.submit}>submit</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
