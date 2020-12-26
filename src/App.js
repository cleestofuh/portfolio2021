import './App.css';
import me from './images/prof.png';

function App() {
  return (
    <div className="wrapper">
      <div class="header-container">
        <div className="blurb-container">
            <div className="title">
              <h1 className="name">Christopher Lo ☕️</h1>
              <p>designer ⌁ engineer</p>
              <p>I design and build enterprise products at <a href="https://linkedin.com">Linkedin</a>.</p>
              <p>Previously designing B2B2C solutions at <a href="https://whova.com">Whova</a> and developing web experiences at <a href="https://www.hjf.org">HJF</a>. </p>
            </div>
        </div>
        <div className="photo-container">
          <img src={me} alt="me" className="me"/>
        </div>
      </div>
    </div>
  );
}

export default App;
