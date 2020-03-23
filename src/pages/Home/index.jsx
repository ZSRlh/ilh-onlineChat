import React, { Component } from 'react'
import { Layout } from 'antd'

import './style.less'

const { Header, Sider, Content, Footer } = Layout
export default class Home extends Component {

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
            <Layout className = 'layout'>
                    <Sider className = 'sider' collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        
                    </Sider>
                <Layout >
                    <Header className = 'header'></Header>
                    <Content className = 'content'>
                        <div>chat</div>
                    </Content>
                    <Footer className = 'footer'></Footer>
                </Layout>
            </Layout>
            </div>
        )
    }
}
