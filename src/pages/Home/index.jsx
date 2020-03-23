import React, { Component, useState, useEffect } from 'react'
import { notification } from 'antd'
import { sendRequest } from '../../api/requestHandler'
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

    return (
        <div>
            Home
            <button onClick = {getData}>send request</button>
            <p>{res}</p>
        </div>
    )
}


export default Home