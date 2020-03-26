
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { Layout } from 'antd'

import { getUserName, getWebSocket } from '../redux/selectors'
import MyMenu from '../components/MyMenu'
import MyFooter from '../components/MyFooter'
import UserNameDialog from '../components/UserNameDialog'
import UserNameBar from '../components/UserNameBar'
import Home from '../pages/Home';
import MultiChat from '../pages/MultiChat'
import { changeUserName, createWebSocket } from '../redux/actions/actions';
import { URL_WEBSOCKET } from '../config/network';
import { dataConfig, dataParse } from '../config/json'


import './style.less'

const { Header, Sider, Content } = Layout

class App extends Component {

    _userName = ''
    _ws = null

    state = {
        collapsed: false,   // 收起/展开侧边栏
        userNameDialogShowing: false,    // 弹出登录框
        isConnected: false
    };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    toggleUserNameDialog = flag => this.setState({ userNameDialogShowing: flag })
    toggleWsConnection = flag => this.setState({ isConnected: flag })

    handleSignIn = (userName) => {
        const { changeUserName, createWebSocket } = this.props;
        this._userName = userName
        this._ws = new WebSocket(URL_WEBSOCKET)
        changeUserName(userName)
        createWebSocket(this._ws)

        this._openWsConnection(this._ws, userName)

        this.toggleWsConnection(true)
        this.toggleUserNameDialog(false)
    }

    componentDidMount () {
        /** 弹出对话框登录 */
        this.toggleUserNameDialog(true)
        
    }

    /** WebSocket */
    _openWsConnection = (ws, userName) => {
        
        ws.onopen = () => {
            console.log('open');
            ws.send(dataConfig('enter', userName))
        }
        ws.onclose = () => {
            console.log('closed');
        }
        ws.onmessage = (e) => {
            console.log(e);
            // showMessage(e)
        }
    }

    // sendMessage = () => {
    //     var websocket = this._websocket
    //     var txt = document.getElementById('input').value
    //     websocket.send(dataConfig('message', txt))
    // }
    // sendSignInfo = (ws, username) => {
    //     ws.send(dataConfig('enter', username))
    // }

    // sendClose = (ws) => {
    //     ws.close()
    // }





    render() {
        const {
            userNameDialogShowing
        } = this.state
        return (
            <div>
            <Router  basename=''>
                <Layout className = 'layout'>
                    <Sider 
                        className = 'sider' 
                        collapsible 
                        collapsed={this.state.collapsed} 
                        onCollapse={this.onCollapse}
                    >
                        <MyMenu />
                    </Sider>
                    <Layout >
                        <Header className = 'header'>
                            <UserNameBar onTriggleChange={() => {this.toggleUserNameDialog(true)}}></UserNameBar>
                        </Header>
                        <Content className = 'content'>
                            <Switch>
                                <Route exact path='/'>
                                    <Home />
                                </Route>
                                <Route path='/multichat'>
                                    <MultiChat />
                                </Route>
                            </Switch>
                        </Content>
                        <UserNameDialog
                            show={userNameDialogShowing}
                            onClose={() => this.toggleUserNameDialog(false)}
                            onChange={this.handleSignIn}
                        />
                        <MyFooter />
                    </Layout>
                </Layout>
            </Router>
            </div>
        )
    }
}

const connectToStore = connect(
    null,
    { changeUserName, createWebSocket },
  );
  
  export default connectToStore(App);