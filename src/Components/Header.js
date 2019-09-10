import React, { Component} from 'react';
import Image from '../Assets/headerImage.png';

class Header extends Component{
    render(){
        return(
            <header>
                <h1>Serve me your wish</h1>
                <div className="wrapper">
                    <div className="wellImage">
                        <img src={Image} alt="an image of well with a pitcher aside it" />
                    </div>
                    <div className="rightSideHeader">
                        <div className="formWrapper">
                            <p className="description overlay">Law of Attraction works on the basis of clean energy and clear intentions. Sit back and think about what you want to attract into your life. Once you know what you want, <span>wish</span> for it anonymously.</p>
                            <form action = "" className="form">
                                <input 
                                name = "personName"
                                onChange={this.props.updateForm}
                                type="text"
                                value={this.props.formName}
                                placeholder="enter your name"
                                />
                                <textarea
                                name="wish"
                                onChange={this.props.updateForm}
                                type="text"
                                value={this.props.formText}
                                placeholder="what do you wish for?"
                                rows="10"
                                cols="20"
                                maxLength="300"

                                />
                                {/* <button onclick={this.handleSubmit}>Submit</button> */}
                                <button className="send" onClick={this.props.submitForm}>Send</button>
                            </form>

                        </div>

                    </div>

                </div>
            </header>
        )
    }
}

export default Header;