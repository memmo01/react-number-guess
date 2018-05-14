import React from "react";

export default class Box3 extends React.Component{
    constructor(){
        super()
        this.state={
            value:5
        }
    }

handleClick(){
    
        this.props.updateConsumed(this.state.value) 

}
  
    render(){
        return(
            <div>
                
                <div class="box3" onClick={this.handleClick.bind(this)}>
                    </div>
                </div>
        )
    }
}