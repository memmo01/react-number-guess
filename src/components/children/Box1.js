import React from "react";

export default class Box1 extends React.Component{
    constructor(){
        super()
        this.state={
            value:12
        }
    }

handleClick(){
  this.props.updateConsumed(this.state.value)       

}
  
    render(){
        return(
            <div>
                
                <div class="box" onClick={this.handleClick.bind(this)}>
                    </div>
                </div>
        )
    }
}