import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import FaucetButton from "./reach/Faucet";
import ConnectWallet from "./reach/ConnectWallet";
import SelectNetwork from "./reach/SelectNetwork";
import Balance from "./reach/Balance";

function Navbar() {
  const netState = useSelector(state => state.net);
  const [network, setNetwork] = useState("ALGO");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        {netState.acc ? (
          <>
            <li>Connected to {netState.net}</li>
            <Balance />
            <FaucetButton />
          </>
        ) : (
          <>
            <SelectNetwork onCh={setNetwork} />
            <ConnectWallet net={network} />
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
