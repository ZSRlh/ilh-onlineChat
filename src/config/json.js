export const showMessage = (msg) => {

    /** JSON 数据解析 */
    
    var data = JSON.parse(msg.data).data
    var type = JSON.parse(msg.data).type

    /** 显示新消息 */

    var p = document.createElement('p')
    p.innerHTML = data

    if (type === 'enter') {
        p.style.color = 'green'
    } else if (type === 'leave') {
        p.style.color = 'red'
    }
    document.getElementById('multiChatDiv').appendChild(p)

}



export const dataParse = (msg) => {
    /** JSON 数据解析 */
    var data = JSON.parse(msg.data).data
    var type = JSON.parse(msg.data).type
    return {
        type: type,
        data: data
    }
}

export const dataConfig = (type, data) => {
    var msg = {
        type: type,
        data: data
    }
    return JSON.stringify(msg)
}