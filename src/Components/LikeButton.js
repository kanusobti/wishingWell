import React, {Component} from 'react';

class LikeButton extends Component {
    constructor(){
        super();
        this.state={
            like : 0
        };
    }
    
    likeButton = () => {
        this.setState({
            like : this.state.like + 1
        });
    }
    render(){
        return(
            <button onClick={this.likeButton}>Like{this.state.like}</button>
            
        )
    }
}
export default LikeButton;