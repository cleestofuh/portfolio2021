import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    static propTypes = {
      image: PropTypes.string,
      altText: PropTypes.string,
      projectType: PropTypes.string,
      projectTitle: PropTypes.string,
      projectDesc: PropTypes.string,
      href: PropTypes.string
    };
  
    render() {
      const {
        props: {
          image,
          altText,
          projectType,
          projectTitle,
          projectDesc,
          href
        },
      } = this;
  
      return (
        <a class="card">
            <img src={image} alt={altText} className="card-img"/>
            <div class="card-content">
                <h6 className="card-type">{projectType}</h6>
                <h4 className="card-title">{projectTitle}</h4>
                <p>{projectDesc}</p>
            </div>
        </a>
      );
    }
  }
  
  export default Card;