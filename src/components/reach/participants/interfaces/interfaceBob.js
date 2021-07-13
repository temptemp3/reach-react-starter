import { waitForInput } from "../../PFHelpers";
import playerInterface from "./interfacePlayer";

const bobInterface = (props) => ({
    ...playerInterface(props),
    acceptWager: async (wager) => {
        const wagerFmt = props.stdlib.formatCurrency(wager, 4);

        await waitForInput(
            props.state, props.setState,
            "AcceptWager",
            {
                wager: wagerFmt
            }
        );
    },
});

export default bobInterface;
