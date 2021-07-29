import React, { Component } from 'react'
import './SubmittedModal.css';

class SubmittedModal extends Component {
  static defaultProps = {
    fadeIn: "SubmittedModal",
    fadeOut: "SubmittedModal fade-out"
  }
  constructor(props) {
    super(props)
    this.state = {
      animatingOut: false
    }
    this.handleModal = this.handleModal.bind(this);
    this.closeAnimation = this.closeAnimation.bind(this);
  }

  handleModal(evt) {
    if(evt.target.className === "SubmittedModal") {
      this.setState({animatingOut: this.props.fadeOut});
      setTimeout(this.props.toggleSubmittedModal, 225);
    }
  }

  closeAnimation(evt) {
    this.setState({animatingOut: this.props.fadeOut});
    setTimeout(this.props.toggleSubmittedModal, 225);
  }

  render() {
    const modalStatus = this.state.animatingOut ? this.props.fadeOut : this.props.fadeIn;
    const formStatus = this.state.animatingOut ? "SubmittedModalContainer fade-out" : "SubmittedModalContainer";
    return(
      <div className={modalStatus} onClick={this.handleModal}>
        <div className={formStatus}>
          <div className="SubmittedModalMessage">Your message has been submitted, <br/>I'll be in touch!</div>
          <button className="closeSubmitted" onClick={this.closeAnimation}>OK</button>
        </div>
      </div>
    )
  }
}

export default SubmittedModal;