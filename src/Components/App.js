///Import React, firebase and Scss file.
///Make a constructor and define the state and put all those variables which would change like personName and wish. Make an empty array like wishList so that these variables are pushed inside it.
///The render method would return the App on the screen. Write header, main and footer and use .map array method to itierate though it.
///Make header as a separate component and pass props to it for the personName, wish , handlechange and handleSubmit.
//In App.js , while working on handleChange, setState so that event.target.name gets event.target.value(that would be passed as props.)
////In App.js, on handleSubmit prevent the default first and check error handling if the texts are filled. On clicking it push the setState values to the firebase and empty the fields after use.
////Write function for removeButton and remove it from firebase. Use .child else it would remove all the buttons.this way it would remove the one that is clicked with unique id.
///For like button , make a separate component, add props to constructor so  that the constructor gets the stored liked value from App.js and then use .update to work on a particular node.
///Use component did Mount to retrieve the existing data from firebase. Make a new array called newState as a copy and use for in loop to each object and display it unique id, likes, name nd wish on the page loads

import React, { Component} from 'react';
import firebase from '../firebase';
import Header from './Header';
import LikeButton from './LikeButton';
import '../Styles/App.scss';
import { thisExpression } from '@babel/types';

class App extends Component {
  constructor(){
    super();//define the state & put all the things here that will change
    this.state = {
      ///Firebase stores data in this empty array
      wishList : [],
      personName : '',
      wish : ''
      
    }
   
  }//constructor ends here

  //When the Page Loads
  componentDidMount () {
    ///Refer to your database and store your data as a variable 
    const dbRef = firebase.database().ref();
    //retrieve the existing data from firebase
    dbRef.on('value', data => {
      ///the above data gives me the whole data of a big object. now we need to extract the value we want from it using .val 
      const response = data.val();
      //the stuff we get back from firebase is stored as response.
      //lets define a new variable called newState and give it an empty array where data will be pushed to.
      const newState= [];
      ////for each object (id) from firebase , separate each item and give them name i.e uniqueKey, personName & wish
      for (let uniqueKey in response) {
      //now we push each of these to the newState array.
      //use unshift and not push because push will add the data to the end whereas unshift would add it on the top.
        newState.unshift({
          uniqueKey: uniqueKey,
          personName: response[uniqueKey].personName,
          wish: response[uniqueKey].wish,
          like: response[uniqueKey].like,
        })
      }
      this.setState({
        wishList: newState,
      })
    });
    
  }
  ///ComponentDidMount ends here

  ///The handleChange event would update our user input change to show whatever the user is typing
  handleChange = (event) => {
    // console.log(event.target.name);
    this.setState({
     [event.target.name] : event.target.value
    })
  }///handleChange ends here

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.personName || !this.state.wish) {     
      alert("Please fill out all the fields!")
    }else{
      //get the mailbox div and scroll it into view
      document.getElementById('mainList').scrollIntoView({
      //   //declaring the behavior of the scroll
        block: 'start',
        behaviour: 'smooth'
      })
      alert("Guess what! Your wish is granted!")
      const dbRef = firebase.database().ref();
      ///push the personName and wish values and push them to firebase
      dbRef.push({
        personName: this.state.personName,
        wish:this.state.wish,
        like: 0,
      });
      ///after the values are pushed , make the inputs empty again and update the state.
      this.setState({
        personName: '',
        wish: '',
      })
    }
  }
  ///handleSubmit ends here

  ///removeButton
  removeButton = (wishListRemove) => {
    const dbRef = firebase.database().ref();
    dbRef.child(wishListRemove).remove();
  };

  render() {
  return (
    ///everything in this div would be displayed on the screen
    <div className="App">
      <Header
        formName = {this.state.personName}
        formText = {this.state.wish}
        updateForm = {this.handleChange}
        submitForm = {this.handleSubmit}    
      />
      <main className="mainList" id="mainList">
        <ul className="wrapper">
        {/* //map over each grantedWish . For each grantedWish, return all these things */}
        {this.state.wishList.map( (grantedWish) => {
          return(
            <li key={grantedWish.uniqueKey}>
              <p className="recipient">Dear {grantedWish.personName}</p>
              <p className="content">You wished for: {grantedWish.wish}</p>
              <div className="likeAndRemove">
                <LikeButton 
                  likeId = {grantedWish.uniqueKey} 
                  likeCount = {grantedWish.like}
                /> 
                <button className="remove" onClick={() => this.removeButton(grantedWish.uniqueKey)}><i className="far fa-times-circle"></i></button> 
              </div>
            </li>
          )
        })}
        </ul>
      </main>
      <footer>
        <p>made by kanu sobti | kanusobti.com</p>
      </footer>
    </div>
  );
}///render ends here
}

export default App;
