import React, { useEffect } from "react";
import cookies from "js-cookie";
import { useHistory, Redirect } from "react-router-dom";
import pathList from "../../pathList";
import { signIn } from "../../lib/authentication";

function Home() {
  const history = useHistory();

  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;
