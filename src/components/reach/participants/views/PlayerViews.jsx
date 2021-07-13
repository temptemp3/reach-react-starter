import { useState } from "react";

export const GetHand = (props) => {
    const [clicked, setClicked] = useState(false);
    const handleClick = (n) => {
        if (props.resGetHand) {
            props.resGetHand(n);
            setClicked(true);
        }
    };

    return props.resGetHand ? (
        !clicked ? (
            <div>
                <h2>You are {props.role}</h2>
                <button onClick={() => handleClick(0)}>Rock</button>
                <button onClick={() => handleClick(1)}>Paper</button>
                <button onClick={() => handleClick(2)}>Scissors</button>
            </div>
        ) : (
            <div>
                <h2>Waiting for your opponent to make his move...</h2>
            </div>
        )
    ) : (
        <div>
            <h2>Waiting for contract</h2>
        </div>
    );
}

export const SeeOutcome = (props) => {
    switch (props.outcome) {
        case "0":
            return <div>Alice won</div>;
        case "1":
            return <div>Draw</div>;
        case "2":
            return <div>Bob won</div>;
        default:
            return <h2>Waiting for contract</h2>;
    }
}

export const InformTimeout = () => {
    return <div>Timeout happened</div>;
}
