import { waitForInput } from "../../PFHelpers";

const playerInterface = (props) => ({
    random: () => props.stdlib.hasRandom.random(),
    getHand: async () => {
        const hand = await waitForInput(
            props.state, props.setState,
            "GetHand",
            {
                role: props.appState.participant
            }
        );
        return hand;
    },
    seeOutcome: (o) => {
        props.setState({
            ...props.state,
            view: "Seeoutcome",
            outcome: o.toString(),
        });
        props.updateBalance();
    },
    informTimeout: () => {
        props.setState({
            ...props.state,
            view: "InformTimeout"
        });
    }
});

export default playerInterface;