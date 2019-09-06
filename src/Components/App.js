import React, { Component} from 'react';
import firebase from '../firebase';
import Header from './Header';
import Form from './Form';
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
      wish : '',
      
    }
   
  }//constructor ends here

  //When the Page Loads
  componentDidMount () {
    ///Refer to your database and store your data as a variable 
    const dbRef = firebase.database().ref();
//retrieve the existing data from firebase
    dbRef.on('value', data => {
      console.log(data);
      ///the above data gives me the whole data of a big object. now we need to extract the value we want from it using .val 
      const response = data.val();
      //the stuff we get back from firebase is stored as response.

      // console.log(response);
      //lets define a new variable called newState and give it an empty array where data will be pushed to.
      const newState= [];
      
      ////for each object (id) from firebase , separate each item and give them name i.e uniqueKey, name & userWish
      for (let id in response) {
        console.log(response);
        console.log(id);
        console.log(response[id]);
        //now we push each of these to the newState array.
        //use unshift and not push because push will add the data to the end whereas unshift would add it on the top.
        newState.push({
          uniqueKey: id,
          name: response[id].name,
          userWish: response[id].userWish,
        })
      }
      this.setState({
        wishList: newState,
      })
console.log(newState)
    });
    

  }
  ///ComponentDidMount ends here

  ///The handleChange event would update our user input change to show whatever the user is typing
  handleChange = (event) => {
    // console.log(event.target.value);
    console.log(event.target.name);
    this.setState({
      // personName: event.target.value,
     [event.target.name] : event.target.value
      
    })
    
  }///handleChange ends here

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");

    if(!this.state.personName || !this.state.wish) {
      // const errorMessage = "Please fill out all the fields!"
      
      alert("Please fill out all the fields!")
    }else{
      alert("Your wish is granted!")
      const dbRef = firebase.database().ref();
      ///push the name and userWish values and push them to firebase
      dbRef.push({
        name: this.state.personName,
        userWish:this.state.wish,
      });
  
      console.log(this.state.personName);
      console.log(this.state.wish);
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
    console.log(this.state.wishList);
    dbRef.child(wishListRemove).remove();
  };


  render() {
    return (
      ///everything in this div would be displayed on the screen
      <div className="App">
        <Header />
        <div className="formWrapper">
          <p className="description">
          Law of Attraction works on the basis of clean energy and clear intentions. Sit back and think about what you want to attract into your life. Clarify your goal(s). Once you know and feel what you want, share it anonymously.  
          </p>
        </div>
       <Form 
       formName = {this.state.personName}
       formText = {this.state.wish}
       updateForm = {this.handleChange}
       submitForm = {this.handleSubmit}
       />
       <ul>
       {/* //map over each grantedWish . For each grantedWish, return all these things */}
      {this.state.wishList.map( (grantedWish) => {
        return(
          <li>
          <p>{grantedWish.id}</p>
          <p>Dear {grantedWish.name}</p>
          <p>Your wish: {grantedWish.userWish}</p>
          <p>Guess, what! Your wish is granted.</p>
          <button onClick={() => this.removeButton(grantedWish.uniqueKey)}>Remove Button</button>
          </li>
        
        )
      })}
      </ul>
      <footer>
        <p>made by kanu sobti | kanusobti.com</p>
      </footer>


      </div>
    );

  }///render ends here
}

export default App;
