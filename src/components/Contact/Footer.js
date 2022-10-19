import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <p className='Creator-tag1'>
          email: <a href='mailto:someone@example.com'>example@gmail.com</a>
        </p>
        <a
          className='Creator-tag2'
          target='_blank'
          href='https://www.linkedin.com/in/christian-samuel-paton/'
          rel='noopener noreferrer'
        >
          <p>Designed & Built by Christian P. ©2022</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
