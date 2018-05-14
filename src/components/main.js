import React from 'react';
import Box1 from './children/Box1';
import Box2 from './children/Box2';
import Box3 from './children/Box3';

export default class Main extends React.Component{
    constructor(){
        super()
        this.state={
            consumed:0,
            targetNumber: Math.floor(Math.random()*100),
            wins:0,
            losses:0
         
        }        
        this.checkScore = this.checkScore.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }

    updateConsumed(number){
       let x =(number + this.state.consumed)
       this.setState({
           consumed:x,
           newGame:true
       })
        this.checkScore(x)
    }

    checkScore(x){
        if(x === this.state.targetNumber){
            alert("you win!")
            this.setState({wins:this.state.wins +1})
            this.resetGame()
        }
        else if(x > this.state.targetNumber){
            alert("you lose")
            this.setState({losses: this.state.losses +1})
            this.resetGame()
        }
    }

    resetGame(){
        this.setState({
            consumed:0,
            targetNumber:Math.floor(Math.random()*100),
           
           
        })
    }



    render(){
        return(
            <div>
                <div className="box-group">
                <Box1 updateConsumed={this.updateConsumed.bind(this)} currentNumber={this.state.consumed} checkGame={this.state.newGame} />
                <Box2 updateConsumed={this.updateConsumed.bind(this)} currentNumber={this.state.consumed} checkGame={this.state.newGame}/>                
                <Box3 updateConsumed={this.updateConsumed.bind(this)} currentNumber={this.state.consumed} checkGame={this.state.newGame}/>
                </div>
                <h1>{this.state.consumed}</h1>
                <h1>{this.state.targetNumber}</h1>
                <h1>wins: {this.state.wins} losses: {this.state.losses}</h1>
            </div>
        )
    }
}