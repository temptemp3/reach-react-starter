import playerInterface from "./interfacePlayer";

const aliceInterface = (props) => ({
    ...playerInterface(props),

    // Since we set wager before we deployed, take it from ctcParams
    wager: props.stdlib.parseCurrency(props.ctcParams.wager),
});

export default aliceInterface;