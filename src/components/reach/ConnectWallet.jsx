import { loadStdlib } from "@reach-sh/stdlib";
import { useDispatch } from "react-redux";
import {
  setAccount,
  setBalance,
  setNetwork,
} from "../redux/actions/networkActions";

function ConnectWallet(props) {
  const dispatch = useDispatch();

  const connect = async () => {
    // Load standard library with selected network
    const stdlib = loadStdlib(props.net);

    // Update the global state for network
    dispatch(setNetwork(props.net));

    // Get the default account
    const acc = await stdlib.getDefaultAccount();
    // Update the global state for account
    dispatch(setAccount(acc));

    // Get the balance of the account
    const balAtomic = await stdlib.balanceOf(acc);
    const bal = stdlib.formatCurrency(balAtomic, 4);
    // Update the global state for balance
    dispatch(setBalance(bal));
  };

  return <button onClick={connect}>Connect {props.net} Wallet</button>;
}

export default ConnectWallet;
