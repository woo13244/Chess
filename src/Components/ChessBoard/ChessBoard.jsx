import React, { Component } from 'react'
// import Chess from 'chess.js'


export default class ChessBoard extends Component{
    constructor(props){
        super(props)
        this.state={
            boardWidth : 0
        }

        this.board = React.createRef();
    }

    componentDidMount(){
        let height = this.board.current.clientHeight
        this.setState({
            boardWidth : height
        })
    }

    createBoard = () => {

        const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        let board = []

        xAxis.forEach((col, i)=>{
            let rowList = []

            for(let rows = 0; rows < 8; rows++ ){
                if(i % 2 === 0){
                    if( rows % 2 === 0 ){
                        rowList.push(
                            <div 
                                key={rows}
                                className='black_square'
                            />
                        )
                    }
                    else{
                        rowList.push(
                            <div 
                                key={rows}
                                className='white_square'
                            />
                        )
                    }
                }
                else{
                    if( rows % 2 !== 0 ){
                        rowList.push(
                            <div 
                                key={rows}
                                className='black_square'
                            />
                        )
                    }
                    else{
                        rowList.push(
                            <div 
                                key={rows}
                                className='white_square'
                            />
                        )
                    }
                }
            }

            board.push(
                <div key={col} className = 'board_column'>
                    {rowList}
                </div>
            )
        })
        
        return board
    }

    render(){
        let { boardWidth } = this.state
        // let chess = new Chess()
        // let newGame = chess
        // console.log(newGame.ascii())
        return(
            <div className='board_container'>
                <div style={{width: boardWidth}} ref={this.board} className='board'>
                    {this.createBoard()}
                </div>
            </div>
        )
    }
}