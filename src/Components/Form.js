import React, { Component} from 'react';

class Form extends Component{
    render(){
        return(
            <form action = "">
            <input 
            name = "personName"
            onChange={this.props.updateForm}
            type="text"
            value={this.props.formName}
            placeholder="enter your name please"
            />
            <textarea
            name="wish"
            onChange={this.props.updateForm}
            type="text"
            value={this.props.formText}
            placeholder="what do you wish for?"
            rows="20"
            cols="30"
            maxLength="300"
            
            />
            {/* <button onclick={this.handleSubmit}>Submit</button> */}
            <button onClick={this.props.submitForm}>Send</button>
          </form>
        )
    }
}

export default Form;