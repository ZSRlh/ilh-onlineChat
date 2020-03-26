import React, { Component, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getUserName, getWebSocket } from '../../redux/selectors'
import { URL_WEBSOCKET } from '../../config/network';
import { showMessage, configData } from './dataConfig';

import './style.less'



const MultiChat = () => {
    
    // 不能在生命周期函数中调用，不知道为啥。。。
    const userName = useSelector(getUserName)
    const websocket = useSelector(getWebSocket)
    
    var join = () => {
        
        console.log(userName);
        console.log(websocket);

        sendSignIn(userName)

        websocket.onopen = () => {
            console.log('open');
        }
        websocket.onclose = () => {
            console.log('closed');
        }
        websocket.onmessage = (e) => {
            console.log(e);
            showMessage(e)
        }

    }


    const sendMessage = () => {
        var txt = document.getElementById('input').value
        websocket.send(configData('message', txt))
    }
    const sendSignIn = (username) => {
        websocket.send(configData('enter', username))
    }

    const sendClose = () => {
        websocket.close()
    }



    return (
        <div id='multiChatDiv'>
            MultiChat<br/>
            <button onClick={join}>加入群聊</button>
            <input type="text"  id="input"/>
            <button id='sendData' onClick={sendMessage}>发送</button>
            {/* <button onClick={sendClose}>关闭连接</button> */}
            <p id='output'></p>
        </div>
    )
}
export default MultiChat
