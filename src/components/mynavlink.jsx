import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class About extends Component{
    render(){
        return (
            //将外面那个组件传过来的属性加到导航链接组件上
            <NavLink activeClassName="activeClass" {...this.props}></NavLink>
        )
    }
}
