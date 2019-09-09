import React, {Component} from 'react';
import firebase from '../firebase'; 

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
        // this.setState({
        //     like : newLikeCount + 1
        //     //click likebutton 
        // });

       
            // dbRef.update({like:this.state.like});
        this.setState({
            like : newLikeCount + 1
            // like: this.props.like + 1
            }, () => {
            dbRef.update({like:this.state.like});
            // your firebase update method
            })

       
        
    }
    render(){
        return(
            <button className="likes" onClick={this.likeButton}><i className="far fa-heart"></i>{this.props.likeCount}</button>
            
            
        )
    }
}
export default LikeButton;