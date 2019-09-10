import React, {Component} from 'react';
import firebase from '../firebase'; 
///import firebase here because we need to use dbRef for setting our state for our likes.

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state={
            like : this.props.likeCount
        };
    }
    
    likeButton = () => {
        const dbRef = firebase.database().ref(this.props.likeId);
        const newLikeCount = this.state.like;
        this.setState({
            like : newLikeCount + 1
            }, () => {
            dbRef.update({like:this.state.like});
            // your firebase update method. used the update as callback function the firebase here so that whenever the setState changes its value, it updates the firebase.
            })       
    }

    render(){
        return(
            <button className="likes" onClick={this.likeButton}><i className="fa fa-heart"></i>{this.props.likeCount}</button>
            
            
        )
    }
}
export default LikeButton;