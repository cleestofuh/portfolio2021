import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'primary';
  
      if (activeTab === label) {
        className += ' primary-active';
      }
  
      return (
        <button
          className={className}
          onClick={onClick}
        >
          {label}
        </button>
      );
    }
  }
  
  export default Tab;