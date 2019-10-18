import React, { Component } from 'react'
import ChessBoard from '../ChessBoard/ChessBoard'
import './Body.scss'

export default class Body extends Component{
    state={

    }

    render(){
       
        return(
            <div className='home_body'>
                <div className='chess_container'>
                    <ChessBoard/>
                    <div className='chess_side'>

                    </div>
                </div>
            </div>
        )
    }
}