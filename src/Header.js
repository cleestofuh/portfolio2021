import React, { useState } from 'react';
import me from './images/prof.png';

export function ToggleButton () {
    const [isToggled, setToggled] = useState(true);
    const toggleTrueFalse = () => {
      setToggled(!isToggled);
      document.body.classList.toggle('light-theme');
    };
  
    return (  
        <button title={isToggled ? 'Light theme' : 'Dark theme'} className="toggle" onClick={toggleTrueFalse}>
            <span className="toggle-theme-icon">{isToggled ? '☀️' : '🌙'}</span>
        </button>
    );
  }

  export default function Header() {
      return (
        <div className="header-container">
            <div className="blurb-container">
                <div className="title">
                <h1 className="name">Christopher Lo <ToggleButton /></h1>
                <p>designer ⌁ engineer</p>
                <p>I work on enterprise products at <a href="https://linkedin.com/in/cleestofuh">Linkedin</a>.</p>
                <p>Previously designing B2B2C solutions at <a href="https://whova.com">Whova</a> and developing web experiences at <a href="https://www.hjf.org">HJF</a>. </p>
                <p>Check out my work below 👇 or see my <a href="#">resume</a>.</p>
                </div>
            </div>
            <div className="photo-container">
                <div className="me-container">
                    <a href="https://linkedin.com/in/cleestofuh">
                        <img src={me} alt="chris smiling" title="see my linkedin profile" className="me"/>
                    </a>
                </div>
            </div>
        </div>

      );
  }