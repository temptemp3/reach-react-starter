export const setAccount = (acc) => {
    return {
        type: "SET_ACC",
        payload: acc
    };
}

export const setBalance = (bal) => {
    return {
        type: "SET_BAL",
        payload: bal
    };
}

export const setNetwork = (net) => {
    return {
        type: "SET_NET",
        payload: net
    };
}

export const setContract = (ctc) => {
    return {
        type: "SET_CTC",
        payload: ctc
    };
}