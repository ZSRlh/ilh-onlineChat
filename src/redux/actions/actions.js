import { CHANGE_USERNAME, WEBSOCKET } from './actionTypes'

export const changeUserName = (userName) => ({
    type: CHANGE_USERNAME,
    payload: { userName }
})

export const createWebSocket = (websocket) => ({
    type: WEBSOCKET,
    payload: { websocket }
})

