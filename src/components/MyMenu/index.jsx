import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
    SmileTwoTone,
    CheckCircleTwoTone,
    HeartTwoTone,
} from '@ant-design/icons';
import './style.less'

const { SubMenu } = Menu

const MyMenu = () => {
    


    return (
        <Menu theme='dark' defaultSelectedKeys={['online']} mode="inline">
            <div className = 'icon'/>

            <SubMenu
              key="online"
              title={
                <span>
                  <CheckCircleTwoTone twoToneColor="#52c41a"/>
                  <span>在线列表</span>
                </span>
              }
            >
              <Menu.Item key="11">Tom</Menu.Item>
              <Menu.Item key="12">Bill</Menu.Item>
              <Menu.Item key="13">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key='multichat'>
              <Link to='/multichat'>
                <span>
                    <SmileTwoTone />
                    <span>多人聊天</span>
                </span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="friendchat"
              title={
                <span>
                  <HeartTwoTone twoToneColor="#eb2f96"/>
                  <span>好友聊天</span>
                </span>
              }
            >
              <Menu.Item key="31">Team 1</Menu.Item>
              <Menu.Item key="32">Team 2</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default MyMenu