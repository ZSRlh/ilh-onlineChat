import React, { useState } from 'react'
import { Modal, Input } from 'antd'

const UserNameDialog = (props) => {
    const {
        show = false,
        onClose = () => {},
        onChange = () => {}
    } = props

    const [userName, setUserName] = useState('')

    const handleInput = (e) => {
        const { value } = e.target
        setUserName(value)
    }

    const handleOK = () => {
        onChange(userName)
        onClose()
    }

    return (
        <Modal
            visible={show}
            title='请登录'
            okText='Sign In'
            cancelText='Cancel'
            onCancel={onClose}
            onOk={handleOK}
        >
            <div id='form'>
                姓名：
                <Input id='input' value={userName} onChange={handleInput}></Input>
            </div>

        </Modal>
    )
}

export default UserNameDialog