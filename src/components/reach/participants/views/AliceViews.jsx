import { GetHand, InformTimeout, SeeOutcome } from "./PlayerViews";

const AliceViews = (props) => {
    switch (props.state.view) {
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

export default AliceViews;
