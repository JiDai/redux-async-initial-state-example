const REQUEST_USER = 'REQUEST_USER'
const RECEIVE_USER = 'RECEIVE_USER'

const initialState = {
    isFetching: false,
    user: {},
}

export default function user (state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_USER:
            return {
                ...state,
                isFetching: false,
                user: action.user
            }
        default:
            return state
    }
}
