import './App.css';
import Portfolio from './components/Activities/Portfolio';
import Hobbies from './components/Activities/Hobbies';
import Contact from './components/Contact/Contact';

const App = () => {
  
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <code>snoozcee</code>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
        >Learn React</a>
        <Portfolio />
        <Hobbies />
        <Contact />
        <Contact />
      </header>
    </div>
  );
};

export default App;
