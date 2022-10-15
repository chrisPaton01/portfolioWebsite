import './App.css';
import Projects from './components/Activities/Projects';
import Hobbies from './components/Activities/Hobbies';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='App'>
      <Contact />
      <header className='App-header'>
        <p>
          <code>Portfolio</code>
        </p>
        <div>
          <div className="projects"><Projects /></div>
          <div className="hobbies"><Hobbies /></div>
        </div>
      </header>
    </div>
  );
};

export default App;
