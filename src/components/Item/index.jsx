import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { name,done } = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
        )
    }
}