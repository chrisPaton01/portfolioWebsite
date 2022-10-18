import './App.css';
import Projects from './components/Activities/Projects';
import Hobbies from './components/Activities/Hobbies';
import Contact from './components/Contact/Contact';
import Footer from './components/Contact/Footer';

const App = () => {
  return (
    <div className='App'>
      <header className='Navbar'>
        <Contact />
      </header>
      <div className='App-header'>
        {/*<br></br>*/}
        <div className='Portfolio'>
          <div className='Portfolio-column1'>
            <Projects />
          </div>
          <div className='Portfolio-column2'>
            <Hobbies />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
