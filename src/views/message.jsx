import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import MyNavLink from '../components/mynavlink'
import MessageDetail from './message-detail'

export default class Message extends Component {
    state = {  
        messages:[
            // {id:1,title:'message001'},
            // {id:2,title:'message002'},
            // {id:3,title:'message003'}
        ]
    }
    componentDidMount(){
        //模拟发送ajax请求,异步获取数据
        const messages = [
            {id:1,title:'message001'},
            {id:2,title:'message002'},
            {id:3,title:'message003'}
        ]
        setTimeout(() => {
          this.setState({
            messages
          })
        },1000)
    }
    handleClick =(id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }
    handleClick2 =(id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.messages.map((item,index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${item.id}`}>{item.title}</MyNavLink>
                                <button onClick={() => {
                                    this.handleClick(item.id)
                                }}>push查看</button>
                                <button onClick={() => {
                                    this.handleClick2(item.id)
                                }}>replace查看</button>
                            </li>)
                        )
                    }              
                </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
                <div>
                    <Route path='/home/message/messagedetail/:id' component={MessageDetail}></Route>
                </div>
            </div>
            
         )
    }
}