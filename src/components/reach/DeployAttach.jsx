import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setContract } from "../redux/actions/networkActions";
import { setArgs, setContractInfo, setRole } from "../redux/actions/appActions";

const Backend = require("./build/index.main.mjs");


/**
 * @param props Contains all contract parameters
 * @returns A button you can use the instantiate the Reach application
 */
export function DeployButton(props) {
  const netState = useSelector(state => state.net);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [goDeploy, setGoDeploy] = useState(false);

  /**
   *  Deploys the contract (Backend)
   */
  const deploy = async () => {
    // Trigger the loading animation
    setLoading(true);

    const account = netState.acc;
    const contract = account.deploy(Backend);

    dispatch(setContract(contract));
    dispatch(setRole(props.role));
    dispatch(setArgs({ wager: props.wager }));

    // Set contract info
    const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
    dispatch(setContractInfo(ctcInfo));

    console.log("Deployed the contract");

    // Go to the deployment page
    setGoDeploy(true);
  };

  return (
    <div>
      {goDeploy && <Redirect to="/deploy" />}
      <button onClick={deploy}>{loading ? "Loading..." : "Deploy"}</button>
    </div>
  );
}

export function AttachButton(props) {
  const netState = useSelector(state => state.net);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [goApp, setGoApp] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  /**
   * attach: Attaches to an existing contract
   * @param ctcInfo Contract Info
   */
  const attach = async (ctcInfo) => {
    // Attach to the contract
    const contract = await netState.acc.attach(Backend, JSON.parse(ctcInfo));

    // We'll need contract later, update the global state
    dispatch(setContract(contract));
    dispatch(setRole(props.role));

    // Close the modal
    handleClose();

    console.log("Attached to the contract");

    // Go to the application page
    setGoApp(true);
  };

  return (
    <div>
      <button onClick={handleShow}>Attach</button>
      {show && <AttachModal close={handleClose} attach={attach} />}
      {goApp && <Redirect to="/app" />}
    </div>
  );
}

function AttachModal(props) {
  const [info, setInfo] = useState("");

  const handleAttach = (e) => {
    e.preventDefault();

    // Call parent's attach function
    props.attach(info);
  };

  const handleChange = (e) => setInfo(e.target.value);

  return (
    <div>
      <div>
        <button onClick={props.close}>X</button>
        <div>
          <form>
            <label htmlFor="ctc-info">Contract Info:</label>
            <textarea
              name="ctc-info"
              id="ctc-info"
              cols={10}
              rows={5}
              value={info}
              onChange={handleChange}
              placeholder="Paste your contract info here..."
            />
            <input onClick={handleAttach} type="submit" value="Attach" />
          </form>
        </div>
      </div>
    </div>
  );
}
