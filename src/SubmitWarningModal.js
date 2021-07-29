import React, { Component } from 'react'
import './SubmitWarningModal.css';

class SubmitWarningModal extends Component {
  static defaultProps = {
    fadeIn: "SubmitWarningModal",
    fadeOut: "SubmitWarningModal fade-out"
  }
  constructor(props) {
    super(props)
    this.state = {
      animatingOut: false
    }
    this.handleModal = this.handleModal.bind(this);
    this.closeAnimation = this.closeAnimation.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleModal(evt) {
    if(evt.target.className === "SubmitWarningModal") {
      this.setState({animatingOut: this.props.fadeOut});
      setTimeout(this.props.toggleSubmitWarningModal, 225);
    }
  }

  handleEscape(evt) {
    if(evt.key === 'Escape') {
      this.setState({animatingOut: this.props.fadeOut});
      setTimeout(this.props.toggleSubmitWarningModal, 225);
    }
  } 

  closeAnimation(evt) {
    this.setState({animatingOut: this.props.fadeOut});
    setTimeout(this.props.toggleSubmitWarningModal, 225);
  }

  render() {
    const modalStatus = this.state.animatingOut ? this.props.fadeOut : this.props.fadeIn;
    const formStatus = this.state.animatingOut ? "SubmitWarningModalContainer fade-out" : "SubmitWarningModalContainer";
    return(
      <div className={modalStatus} onClick={this.handleModal}>
        <div className={formStatus}>
          <div className="SubmitWarningModalMessage">Please fill out all fields before submitting.</div>
          <button className="closeWarning" onClick={this.closeAnimation}>OK</button>
        </div>
      </div>
    )
  }
}

export default SubmitWarningModal;