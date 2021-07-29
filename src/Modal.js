import React, { Component } from 'react';
import ContactForm from './ContactForm';
import './Modal.css';

class Modal extends Component {
  static defaultProps = {
    fadeIn: "Modal",
    fadeOut: "Modal fade-out"
  }
  
  constructor(props) {
    super(props)
    this.state = {
      animatingOut: false
    }
    this.handleModal = this.handleModal.bind(this);
    this.submitAnimation = this.submitAnimation.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleModal(evt) {
    if(evt.target.className === "Modal") {
      this.setState({animatingOut: this.props.fadeOut});
      setTimeout(this.props.toggleModal, 225);
    }
  }

  handleEscape(evt) {
    if(evt.key === 'Escape' && !this.props.showSubmitWarningModal) {
      this.setState({animatingOut: this.props.fadeOut});
      setTimeout(this.props.toggleModal, 225);
    }
  } 

  submitAnimation(evt) {
    this.setState({animatingOut: this.props.fadeOut});
    setTimeout(this.props.toggleModal, 225);
  }

  render() {
    const modalStatus = this.state.animatingOut ? "Modal fade-out" : "Modal";
    const formStatus = this.state.animatingOut ? "container fade-out" : "container";
    return(
      <div className={modalStatus} onClick={this.handleModal}>
        <div className={formStatus}>
          <ContactForm 
            toggleModal={this.props.toggleModal} 
            toggleSubmitWarningModal={this.props.toggleSubmitWarningModal}
            toggleSubmittedModal={this.props.toggleSubmittedModal}
            submitAnimation={this.submitAnimation} 
            submitContact={this.props.submitContact}
            formSubmitted={this.props.formSubmitted}
            toggleSubmitted={this.props.toggleSubmitted}
            name={this.props.name}
            artistName={this.props.artistName}
            email={this.props.email}
            link={this.props.link}
            message={this.props.message}
            id={this.props.id}
          />
        </div>
      </div>
    )
  }
}

export default Modal;
