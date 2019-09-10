import React, { Component} from 'react';
import Image from '../Assets/headerImage.png';

class Header extends Component{
    render(){
        return(
            <header>
                <h1>Serve me your wish</h1>
                <div className="wrapper">
                    <div className="wellImage">
                        <img src={Image} alt="a well with a pitcher aside it" />
                    </div>
                    <div className="rightSideHeader">
                        <div className="formWrapper">
                            <p className="description overlay">Law of Attraction works on the basis of clean energy and clear intentions. Sit back and think about what you want to attract into your life. Once you know what you want, <span>wish</span> for it anonymously.</p>
                            <form action = "" className="form">
                                <label for ="personName" class="visuallyHidden">Person Name</label>
                                <input 
                                name = "personName"
                                onChange={this.props.updateForm}
                                type="text"
                                value={this.props.formName}
                                placeholder="enter your name"
                                id = "personName"
                                />
                                <label for ="wish" class="visuallyHidden">Wish</label>
                                <textarea
                                name="wish"
                                onChange={this.props.updateForm}
                                type="text"
                                value={this.props.formText}
                                placeholder="what do you wish for?"
                                id="wish"
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