import React,{Component} from 'react'

// NavLink是导航链接，由于我们要使用前端路由，所以链接不能再是a标签了，switch是切换组件，如果我们当前只显示多个组件中的一个就要用这个switch将多个组件包裹，只有当匹配到某个路由时才显示对应的组件
import {Switch,Route,Redirect} from 'react-router-dom'
import About from '../../views/about'
import Home from '../../views/home'
import MyNavLink from '../mynavlink'
//reat-router的使用文档：https://reacttraining.com/react-router/web/guides/quick-start
// 路由的理解：就是一种映射关系，键值对，键是路径，值有两种情况：
/*
    (1)前台路由的话值就是某个组件，点击链接时，不会跳转也不会刷新页面，不会向服务器发送请求，它只是通过组件更新界面，这个页面没有被刷新
    (2)如果是后台路由，值就是某个回调函数
*/
export default class App extends Component{
    render(){
        return(
            <div>
                <h2>切换路由组件</h2>
                <div className="list-group">
                {/* 由于react-router-dom中自己提供了某些组件的样式，我们有时候不想用它自带的样式，所以优化了自己的导航链接MyNavLink */}
                    <MyNavLink  className="list-group-item" to="/about">about</MyNavLink>
                    <MyNavLink  className="list-group-item" to="/home">home</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                        {/* 为了让用户看到初始的界面上显示一个默认的组件，使用了重定向组件 */}
                        <Redirect to="/about" />
                    </Switch>
                </div>
            </div>
        )
    }
}
