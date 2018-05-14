import React from "react";

export default class Box2 extends React.Component{
    constructor(){
        super()
        this.state={
            value:8
        }
    }

handleClick(){
    
        this.props.updateConsumed(this.state.value) 

}
  
    render(){
        return(
            <div>
                
                <div class="box2" onClick={this.handleClick.bind(this)}>
                    </div>
                </div>
        )
    }
}