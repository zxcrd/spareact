import React, { Component } from 'react'
export default class MessageDetail extends Component {
    
       
   
    render() { 
        const messages = [
            {id:1,title:'message001',content:'hello'},
            {id:2,title:'message002',content:'hello React'},
            {id:3,title:'message003',content:'hello javascript'}
        ]
        //取出id,在props里面的match对象里面params对象里面
        const {id} = this.props.match.params
        const res =  messages.find((item) => item.id === id*1 ) //返回第一个结果为true的数组元素，这里需要注意：item.id是数字，而从props取出来的id是字符串
        return ( 
            <ul>
               
                <li>ID:{res.id}}</li>
                <li>Title:{res.title}</li>
                <li>ConTent:{res.content}}</li>
            </ul>
         );
    }
}
 