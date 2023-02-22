import './Contact.css';

const Contact = () => {
  return (
    <nav className='Navbar'>
      <h1 className='Title'>
        Christian's<br></br>
        <span className='Title'>Portfolio</span>
      </h1>
      <img className='Logo' src='assets/logo.png' alt='logo' />
      <ul className='App-links'>
        <li className>
          <a
            className='link1'
            target='_blank'
            href='https://www.linkedin.com/in/christian-paton/'
            rel='noopener noreferrer'
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
            className='link2'
            target='_blank'
            href='https://github.com/chrisPaton01'
            rel='noopener noreferrer'
          >
            GITHUB
          </a>
        </li>
        <li>
          <a
            className='link3'
            target='_blank'
            href='https://docs.google.com/document/d/1TfU8hEoj4HMpv5fh7RIvR93W92W0ASaF/view'
            rel='noopener noreferrer'
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Contact;
