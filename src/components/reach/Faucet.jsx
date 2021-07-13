import { loadStdlib } from "@reach-sh/stdlib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../redux/actions/networkActions";

const FaucetButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const conf = useSelector(state => state.net);
  const dispatch = useDispatch();

  const faucet = async (amt) => {
    try {
      // Load standard library
      const stdlib = loadStdlib(conf.net);

      // Trigger the loading animation
      setLoading(true);
      setModalVisible(false);

      // Parse the amount
      const faucetAmt = stdlib.parseCurrency(amt);
      await stdlib.fundFromFaucet(conf.acc, faucetAmt);

      // Get the balance again
      const balAtomic = await stdlib.balanceOf(conf.acc);
      const bal = stdlib.formatCurrency(balAtomic, 4);

      // Update the global state
      dispatch(setBalance(bal));

      // Finish loading
      setLoading(false);
    } catch (err) {
      console.error(err);
      setModalVisible(false);
    }
  };

  return (
    <div>
      {modalVisible && <FaucetModal faucet={faucet} close={setModalVisible} />}
      <button onClick={() => setModalVisible(true)}>
        {loading ? "Loading..." : "Faucet"}
      </button>
    </div>
  );
}

const FaucetModal = (props) => {
  const [amt, setAmt] = useState(10);

  const handleAmtChange = (e) => setAmt(parseInt(e.target.value));

  const handleModalClose = () => {
    props.close(false);
  };

  const handleFaucetClick = async (e) => {
    e.preventDefault();

    await props.faucet(amt);
  };

  return (
    <div>
      <div>
        <button onClick={handleModalClose}>X</button>
        <div>
          <form>
            <label htmlFor="faucet-amt">Faucet Amount</label>
            <input id="faucet-amt" value={amt} onChange={handleAmtChange} />

            <input onClick={handleFaucetClick} type="submit" value="Faucet" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FaucetButton;
