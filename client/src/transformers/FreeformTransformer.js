export default (originalReducer) => (globalState) => (state, { type, payload }) => {
    if (!state) {
        return globalState.freeform;
    }

    return state;
};
