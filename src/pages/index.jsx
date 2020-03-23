
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import MyMenu from '../components/MyMenu'
import MyFooter from '../components/MyFooter'
import Home from '../pages/Home';
import MultiChat from '../pages/MultiChat'

import './style.less'

const { Header, Sider, Content } = Layout
export default class App extends Component {

    state = {
        collapsed: false,
    };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
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
                        <Header className = 'header'></Header>
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
                        <MyFooter />
                    </Layout>
                </Layout>
            </Router>
            </div>
        )
    }
}
