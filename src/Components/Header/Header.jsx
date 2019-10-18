import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'





export default class Header extends Component{
    state={

    }

    render(){
        return(
            <div className='header'>
                <div className='header_logo'>Chess Simulator</div>
                <div className='header_link_container'>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        )
    }
}