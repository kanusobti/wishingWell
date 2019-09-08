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
            <button className="likes" onClick={this.likeButton}><i className="far fa-heart"></i>{this.state.like}</button>
            
        )
    }
}
export default LikeButton;