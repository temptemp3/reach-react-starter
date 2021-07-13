import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { GetHand, InformTimeout, SeeOutcome } from "./PlayerViews";

const BobViews = (props) => {
    switch (props.state.view) {
        case "AcceptWager":
            return (
                <AcceptWager
                    resAcceptWager={props.state.resAcceptWager}
                    wager={props.state.wager}
                />
            );
        case "GetHand":
            return (
                <GetHand role={props.state.role} resGetHand={props.state.resGetHand} />
            );
        case "SeeOutcome":
            return <SeeOutcome outcome={props.state.outcome} />;
        case "Inform Timeout":
            return <InformTimeout />;
        default:
            return <h2>Loading...</h2>;
    }
}

const AcceptWager = (props) => {
    const netState = useSelector(state => state.net);
    const [goHome, setGoHome] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        if (props.resAcceptWager) props.resAcceptWager(true);
        setAccepted(true);
    };
    const handleReject = () => {
        setGoHome(true);
    };

    return props.wager ? (
        <div>
            {!accepted ? (
                <>
                    <h2>
                        Wager is {props.wager} {netState.net}
                    </h2>
                    <button onClick={handleAccept}>Accept wager</button>
                    <button onClick={handleReject}>Reject Wager</button>
                    {goHome && <Redirect to="/" />}
                </>
            ) : (
                <h2>Teleporting to the game right now...</h2>
            )}
        </div>
    ) : (
        <h2>Waiting for contract...</h2>
    );
}

export default BobViews;
