import React from "react";
import { useHistory } from "react-router-dom";
import { signOut } from "../lib/authentication";
import pathList from "../pathList";

function Header(props) {
  const { setIsAuthenticated } = props;
  const history = useHistory();

  const onSignOut = async () => {
    signOut().then(() => {
      setIsAuthenticated(false);
      history.push(pathList.signIn);
    });
  };

  return (
    <>
      signout <button onClick={() => onSignOut()}>sign out</button>
    </>
  );
}

export default Header;
