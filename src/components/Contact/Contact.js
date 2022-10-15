import './Contact.css';

const Contact = () => {
  return (
    <div className='Navbar-title'>
      <div>
      <a className='App-links'
          target='_blank'
          href='https://www.google.com/'
          rel='noopener noreferrer'>RESUME</a>
        <span className='App-links'>&nbsp; &nbsp;</span>
        <a className='App-links'
          target='_blank'
          href='https://github.com/chrisPaton01'
          rel='noopener noreferrer'>GITHUB</a>
        <span className='App-links'>&nbsp; &nbsp;</span>
          <a className='App-links'
          target='_blank'
          href='https://www.linkedin.com/in/christian-samuel-paton/'
          rel='noopener noreferrer'>LINKEDIN</a>
        <span className='title'>
          Christian's
          <br></br>
          Portfolio
        </span>
        
      </div>
    </div>
  );
};

export default Contact;
