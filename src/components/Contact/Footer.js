import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <p>email: example@gmail.com</p>
        <a
          className='Creator-tag'
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
