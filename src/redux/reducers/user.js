import { CHANGE_USERNAME } from '../actions/actionTypes'

const initialState = {
    userName: '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            const { userName } = action.payload
            return {
                ...state,
                userName: userName
            }

        default: return state
    }
}