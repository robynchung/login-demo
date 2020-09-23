import React from "react";

import { signOut } from "../../lib/authentication";

function Home() {
  const onSignOut = async () => {
    await signOut();
  };

  return (
    <>
      Sign out
      <button onClick={() => onSignOut()}>Sign Out</button>
    </>
  );
}

export default Home;
