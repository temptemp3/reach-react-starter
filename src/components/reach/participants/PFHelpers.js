export const waitForInput = (state, setState, view, args) => {
    return new Promise((resolve) => {
        // Define a name for the resolve
        const resName = "res" + view;
        // Append to the current state
        let newState = { ...state, view: view, ...args };
        // Set the resolve of the state
        Object.defineProperty(newState, resName, {
            value: resolve
        });

        // Apply changes
        setState(newState);
    });
}