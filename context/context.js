import React, { useState, createContext } from "react"

const MinterContext = createContext();

function MinterProvider(props) {
  const [walletAddress, setwalletAddress] = useState([]);

  return (
    <MinterContext.Provider value={[walletAddress, setwalletAddress]}>
      {props.children}
    </MinterContext.Provider>
  );
}

export {MinterContext, MinterProvider}