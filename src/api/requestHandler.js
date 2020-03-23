import HTTP from './http'

export const sendRequest = () => {
    return HTTP.get('/home')
        .then(data => Promise.resolve(data))
        .catch(err => Promise.reject(err))
}
