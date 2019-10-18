import React, {Component} from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'
import './Routes.scss'

export default class Home extends Component{
    state={
    }


    render(){
        return(
            <div className='Home'>
                <Header/>
                <Body/>
            </div>
        )
    }
}