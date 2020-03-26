import { WEBSOCKET } from '../actions/actionTypes'

const initialState = {
    websocket: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case WEBSOCKET:
            const { websocket } = action.payload
            return {
                ...state,
                websocket
            }
        default: return state
    }
}