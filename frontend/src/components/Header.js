import React from "react";
import { signOut } from "../../lib/authentication";

function Header() {
  const history = useHistory();
  const onSignOut = async () => {
    // signOut().then(() =>  );
  };

  return (
    <>
      signout <button>sign out</button>
    </>
  );
}

export default Header;
