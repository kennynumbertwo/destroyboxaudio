import React, { Component } from 'react'
import './Navbar.css';

class Navbar extends Component {
  listener = null;
  constructor(props) {
    super(props)
    this.state = {
      nav: false,
      navClass: 'Nav__black Nav__in',  
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
   }
  
  handleScroll() {
    if (window.pageYOffset > 300) {
      if(!this.state.nav){
        this.setState({ nav: true, navClass: 'Nav__black Nav__in'});
      }
    } 
    if (window.pageYOffset < 300) {
      if(this.state.nav){
        this.setState({navClass: 'Nav__black Nav__out'})
        setTimeout(()=> this.setState({nav: false}), 300);
      }
    }
  }

 render(){
  const navText = this.state.nav ? "Destroy Box Audio" : null;
  return (
   <div className="NavWrapper">
    <div className={`Nav ${this.state.nav && this.state.navClass}`}>
      {navText}
    </div>
   </div>
 );}
}

export default Navbar;
