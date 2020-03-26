import React, { Component, useState, useEffect } from 'react'
import { notification } from 'antd'
import { sendRequest } from '../../api/requestHandler'
import { createWebSocket, receiveMessage, sendMessage } from '../../api/wsClient'
import { initRes } from './dataConfig';

import './style.less'

const Home = () => {
    
    const [res, setRes] = useState('')

    const getData = () => {
        sendRequest()
            .then(res => setRes(res.data))
            .catch(err => {
                notification.error({
                    message: '出错了',
                    description: err,
                })
            });
    };

    const url = 'ws://localhost:8888'

    return (
        <div>
            Home<br></br>
            <input type="text" id="input" placeholder = 'input...'/>
            {/* <button onClick = {sendMessage}>send request</button> */}
            <p id = 'output'>...</p>
        </div>
    )
}


export default Home