import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <p className='Creator-tag1'>
          email: <a href='mailto:someone@example.com'>example@gmail.com</a>
        </p>
        <p className='Creator-tag2'>
          Designed & Built by &nbsp;
          <a
            target='_blank'
            href='https://www.linkedin.com/in/christian-samuel-paton/'
            rel='noopener noreferrer'
          >
            Christian P. ©2022
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
