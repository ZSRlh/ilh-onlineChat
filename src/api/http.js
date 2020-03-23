import axios from 'axios'
import { URL_PREFIX } from '../config/network'

const handleFailed = (errOrRes) => {
    let dscp = ''
    if (errOrRes.response) {
        dscp = `[请求] ${errOrRes.response.statusText || errOrRes.message}`
    } else {
        dscp = errOrRes.msg
    }
    return Promise.reject(dscp)
}

export const getHttp = (path, params) => {
    return axios.get(`${URL_PREFIX}${path}`, { params })
        .then(res => {
            console.log(res)
            return Promise.resolve(res)
        })
        .catch(err => {
            console.log(err)
            return handleFailed(err)
        })
}

export default {
    get: getHttp
}