import React from 'react'
import { useSelector } from 'react-redux'
import { getUserName } from '../../redux/selectors'
import { Icon } from 'antd'
import './style.less'

const UserNameBar = (props) => {
    const {
        onTriggleChange = () => {}
    } = props

    const userName = useSelector(getUserName)

    const handleClick = () => {}


    return (
        <div id='username'>{userName}</div>
    )
}

export default UserNameBar