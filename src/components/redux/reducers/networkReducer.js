const initNetState = {
    acc: null,
    bal: null,
    net: null,
    ctc: null,
};

export const networkReducer = (state = initNetState, action) => {
    switch (action.type) {
        case "SET_ACC":
            return { ...state, acc: action.payload };
        case "SET_BAL":
            return { ...state, bal: action.payload };
        case "SET_NET":
            return { ...state, net: action.payload };
        case "SET_CTC":
            return { ...state, ctc: action.payload };
        default:
            return state;

    }
}