import './App.css';
import Header from './Header';
import me from './images/me.png';
import wwgfbt from './images/wwgfbt.svg'
import frog from './images/frog.jpg';
import Tabs from './Tabs';
import Card from './Card'


function App() {

  return (
    <div class="display-center">
      <div className="nav"><h1 className="logo">CHRISTOPHER LO</h1></div>
      <div className="wrapper">
        <Header />
        <Tabs> 
          <div label="What I've worked on"> 
            <div className="fade-in">
              <Card
                image={wwgfbt}
                altText="link to wwgfbt project"
                projectType="UI Design ∽ Front-end Dev"
                projectTitle="WWGFBT"
                projectDesc="Where we goin' for bubble tea? Providing effortless decision making when bubble tea cravings emerge."
                href="https://wwgfbt.com"
              />
              <p>Hi, this section is in progress right now, but here's a frog meme for the time being.</p>
              <img src={frog} alt="frog"/>
              </div>
          </div> 
          <div label="Who I am"> 
            <div className="fade-in">
              <p>I am a designer, an engineer, and a problem solver, but most importantly, I'd say I'm an overall pretty cool human being just like you. 😉</p>
              <p>Some things that excite me are design systems, accessibility, and creating moments of <span className="delight">delight</span>.</p>
              <p>I'm currently working on building enterprise solutions at <a href="https://linkedin.com/in/cleestofuh" target="_blank" rel="noreferrer">Linkedin</a> that help employees be more productive at scale.</p>
              <p>At the same time I'm working on getting my Masters in Human Computer Interaction and Design at UC Irvine and plan to graduate in September 2021.</p>
              <p>Previously, I worked as a Product Designer at <a href="https://whova.com" target="_blank" rel="noreferrer">Whova</a> designing B2B2C products in the event tech industry and also spent some time working as a 
                  Web Developer for <a href="https://www.hjf.org/" target="_blank" rel="noreferrer">Henry M. Jackson Foundation</a>.</p>
              <p>When I'm not making jokes to my friends, I enjoy going outside, staying inside, and sometimes even standing at the doorway so I can do both at the same time.</p>
            </div>
          </div> 
          <div label="How to reach me"> 
            <div className="fade-in">
              <p>Let's talk about boba, coffee, design, fashion, fitness, frog memes, pc gaming, travel, or literally anything else!</p>
              <p>🍵 ∽ ☕ ∽ 🎨 ∽ 👘 ∽ 🏸 ∽ 🐸 ∽ 🎮 ∽ 🌎</p>
              <p>Slide into my DMs on <a href="https://linkedin.com/in/cleestofuh" target="_blank" rel="noreferrer">Linkedin</a> or just shoot me an <a href="chrisedlo@gmail.com" target="_blank" rel="noopener">email</a>.</p>
            </div>
          </div> 
        </Tabs> 
      </div>
      <footer>
          <img className="bottom-left-img" src={me} alt="me"/>
          <p>© 2021 Christopher Lo</p>
      </footer>
    </div>
  );
}

export default App;
