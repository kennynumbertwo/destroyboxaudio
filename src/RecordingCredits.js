import React, { Component } from 'react';
import Art from './Art';
import Navbar from './Navbar';
import Modal from './Modal';
import SubmitWarningModal from './SubmitWarningModal';
import SubmittedModal from './SubmittedModal';
import credits from './credits';
import database from "./firebase";
import './RecordingCredits.css';

class RecordingCredits extends Component {
  static defaultProps = {
    credits: credits,
  }
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showSubmitWarningModal: false,
      showSubmittedModal: false,
      formSubmitted: false,
      contact: {}
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleSubmitWarningModal = this.toggleSubmitWarningModal.bind(this);
    this.toggleSubmittedModal = this.toggleSubmittedModal.bind(this);
    this.toggleSubmitted = this.toggleSubmitted.bind(this);
    this.submitContact = this.submitContact.bind(this);
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal})
  }

  toggleSubmitWarningModal() {
    this.setState({showSubmitWarningModal: !this.state.showSubmitWarningModal})
  }

  toggleSubmittedModal() {
    this.setState({showSubmittedModal: !this.state.showSubmittedModal})
  }

  toggleSubmitted() {
    this.setState({formSubmitted: !this.state.formSubmitted})
  }

  submitContact(contact) {
    this.setState({contact: contact})
    setTimeout(() => database.ref(this.state.contact.id).set({
      contact: this.state.contact
    }).catch(alert), 50);
    setTimeout(()=> this.setState({formSubmitted: true}), 300)
  }



  render() {
    const artwork = this.props.credits.map(credit => (
      <Art
        key={credit.title}
        artist={credit.artist}
        title={credit.title}
        type={credit.type}
        credited={credit.credited}
        art={credit.art}
        link={credit.link}
      />
    ))
    const animateArt = "albums animated animatedFadeInUp fadeInUp";
    return (
      <div className="wrapper">
        <Navbar />
        <header>
          <div className="header">
            <h3 className="name">Kenny Tye</h3>
            <div className="occupation-wrapper">
              <h6 className="occupation">Engineer | Mixer | Producer</h6>
              <h6 className="occupation-mobile">Engineer</h6>
              <h6 className="occupation-mobile">Mixer</h6>
              <h6 className="occupation-mobile">Producer</h6>
            </div>
          </div>
        </header>
        <div className={animateArt}>{artwork}</div>
        {
          this.state.showModal 
            ? <Modal 
                showModal={this.state.showModal} 
                showSubmitWarningModal={this.state.showSubmitWarningModal}
                toggleModal={this.toggleModal} 
                toggleSubmitWarningModal={this.toggleSubmitWarningModal}
                toggleSubmittedModal={this.toggleSubmittedModal}
                submitContact={this.submitContact}
                formSubmitted={this.state.formSubmitted}
                toggleSubmitted={this.toggleSubmitted}
                name={this.state.contact.name}
                artistName={this.state.contact.artistName}
                email={this.state.contact.email}
                link={this.state.contact.link}
                message={this.state.contact.message}
                id={this.state.contact.id}
              /> 
            : null
        }
        {
          this.state.showSubmitWarningModal 
            ? <SubmitWarningModal 
              toggleSubmitWarningModal={this.toggleSubmitWarningModal}/> 
            : null
        }
        {
          this.state.showSubmittedModal 
            ? <SubmittedModal 
              toggleSubmittedModal={this.toggleSubmittedModal}/> 
            : null
        }
        <div className="contact-wrapper">
          <button className="contact" onClick={this.toggleModal}>Contact</button>
        </div>
        <div className="design">
          <p>Destroy Box Audio</p>
        </div>
      </div>
    )
  }
}

export default RecordingCredits;