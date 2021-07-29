import React, { Component } from 'react';
import './Art.css';

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleArtClick = this.handleArtClick.bind(this);
  }

  handleButtonClick() {
    window.open(this.props.link, '_blank');
  }

  handleArtClick() {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    const albumArt = {"backgroundImage": `url(${this.props.art})`}
    const overlay = this.state.clicked ? "overlay clicked overlay--blur" : "overlay overlay--blur";
    const title = this.props.title.length >= 28 ? "titleSmall" : "title";
    return(
      <div className="album-container animated animatedFadeInUp fadeInUp">
        <div className="album-image" style={albumArt}>         
          <div className={overlay} onClick={this.handleArtClick}>
            <p className={title}>{this.props.type === "album" ? <i>{this.props.title}</i> : `"${this.props.title}"`}</p>
            <p className="artist">{this.props.artist}</p>
            <p className="credits">{this.props.credited}</p>
            <button className="musicLink" onClick={this.handleButtonClick}>Listen on Spotify</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Art;