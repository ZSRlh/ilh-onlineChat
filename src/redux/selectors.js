export const getUserName = store => store.user.userName || '匿名用户'

export const getWebSocket = store => store.ws.websocket || null