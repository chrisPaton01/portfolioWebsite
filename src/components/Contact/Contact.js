import './Contact.css';

const Contact = () => {
  return (
    <div className='Navbar-title'>
      <span className='Title'>Christian's</span>
      <br></br>
      <span className='Title'>Portfolio</span>
      <span className='App-links'>
        <a className='link1'
          target='_blank'
          href='https://www.linkedin.com/in/christian-samuel-paton/'
          rel='noopener noreferrer'
        >
          LINKEDIN
        </a>

        <a className='link2'
          target='_blank'
          href='https://github.com/chrisPaton01'
          rel='noopener noreferrer'
        >
          GITHUB
        </a>

        <a
          className='link3'
          target='_blank'
          href='https://www.google.com/'
          rel='noopener noreferrer'
        >
          RESUME
        </a>
      </span>
    </div>
  );
};

export default Contact;
