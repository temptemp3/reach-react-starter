import { loadStdlib } from "@reach-sh/stdlib";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../redux/actions/networkActions";

const ParticipantFactory = ({ setInterface, Views, setBackend }) => {
    const Participant = () => {
        // Load Redux stores and dispatch
        const appState = useSelector(state => state.app);
        const netState = useSelector(state => state.net);
        const dispatch = useDispatch();

        // Load Reach stdlib
        const stdlib = loadStdlib(netState.net);

        const stateInit = { view: "Loading" };

        const [pState, setPState] = useState(stateInit);

        useEffect(() => {
            // Update balance function is common to every participant and is given before-hand
            const updateBalance = async () => {
                const balance = stdlib.formatCurrency(
                    await stdlib.balanceOf(netState.acc),
                    4
                );
                dispatch(setBalance(balance));
            };

            // Parameters for backend construction
            const iParams = {
                state: pState,
                setState: setPState,
                stdlib: stdlib,
                appState: appState,
                ctcParams: appState.args,
                updateBalance: updateBalance
            };

            // Construct the participant functions
            const pInterface = setInterface(iParams);

            // Set the backend for the current contract with constructed backend
            setBackend(netState.ctc, pInterface);
        }, [appState, netState, dispatch, stdlib, pState]);

        return <Views state={pState} setState={setPState} />;
    }

    return Participant;
}

export default ParticipantFactory;