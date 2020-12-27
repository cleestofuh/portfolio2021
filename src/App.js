import './App.css';
import Header from './Header.js';
import Card from './Card.js';


const projectList = [
  {
    id: '1',
    title: 'Linkedin',
    subtitle: 'Senior UX Engineer',
    desc: 'description'
  }
]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Card />
    </div>
  );
}

export default App;
