import initialState from './InitialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_USERS": {
            let { users } = action;
            return {
                ...state,
                users
            }
        }

        default:
            return state
    }
}

export default reducer;