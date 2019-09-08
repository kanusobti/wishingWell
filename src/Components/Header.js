import React, { Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="wrapper">
                    <div className="clearfix">
                        <h1>Serve me your wish</h1>
                        <div className="formWrapper">
                            <p className="description">Law of Attraction works on the basis of clean energy and clear intentions. Sit back and think about what you want to attract into your life. Clarify your goal(s). Once you know and feel what you want, share it anonymously.</p>
                            {/* <img src="../Assets/23210.jpg" /> */}
                            <form action = "" className="form">
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

                        </div>

                    </div>

                </div>
            </header>
        )
    }
}

export default Header;