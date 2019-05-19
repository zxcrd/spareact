import React, { Component } from 'react';
export default class News extends Component {
    state = { 
        arr:['news001','news002','news003']
     }
    render() { 
        const {arr} = this.state
        return ( 
            <ul>
               {
                   arr.map((item,index) => 
                       <li key={index}>{item}</li>
                   )
               }
            </ul>
         )
    }
}