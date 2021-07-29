import React, { Component } from 'react';
import { v4 as uuidv4 }from 'uuid';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const date = yyyy + '-' +  mm + '-' + dd
    
    this.state = {
      name: "",
      email: "",
      artistName: "",
      link: "",
      message: "",
      id: "",
      date: date,
      clearAnimation: "formButton"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  } 

  handleSubmit(evt) {
    evt.preventDefault();
    if(Object.values(this.state).includes("")) {
      this.props.toggleSubmitWarningModal();
    } else {
      this.props.submitContact({
        name: this.state.name,
        artistName: this.state.artistName,
        email: this.state.email,
        link: this.state.link,
        message: this.state.message,
        id: this.state.id,
        date: this.state.date
      })
      this.props.toggleSubmittedModal();
      this.props.submitAnimation();
    }
  }

  handleClearForm(evt) {
    evt.preventDefault();
    this.setState({
      name: "",
      email: "",
      artistName: "",
      link: "",
      message: "",
      id: this.state.date + '-' + uuidv4(),
      clearAnimation: "formButtonOut fadeOut"
    })
    setTimeout(
      ()=> this.props.toggleSubmitted(), 250
    )
  }

  componentDidMount() {
    this.props.formSubmitted 
      ? this.setState({
        name: this.props.name,
        artistName: this.props.artistName,
        email: this.props.email,
        link: this.props.link,
        message: this.props.message,
        id: this.state.date + '-' + this.props.id}) 
      : this.setState({id: this.state.date + '-' + uuidv4()})
  }

  render() {
    const clearButton = this.props.formSubmitted ? <button className={this.state.clearAnimation} onClick={this.handleClearForm}>Clear</button> : null;
    return(
      <div>
        <form name="Contact" action="POST" data-netlify="true">
          <div className="field half">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="field half last">
            <label htmlFor="artistName">Artist/Band</label>
            <input type="text" id="artistName" name="artistName" value={this.state.artistName} onChange={this.handleChange}/>
          </div>
          <div className="field tnb">
          <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="field tnb">
            <label htmlFor="link">Link to your music</label>
            <input type="text" id="link" name="link" value={this.state.link} onChange={this.handleChange}/>
          </div>
          <div className="field tnb message">
            <label htmlFor="message">Message about your project</label>
            <textarea type="text" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
            <div className="contact-email">or email kenny@destroyboxaudio.com</div>
          </div>
          <button className="formButton" onClick={this.handleSubmit}>Submit</button>
          {clearButton}
        </form>
      </div>    
    )
  }
}

export default ContactForm;
