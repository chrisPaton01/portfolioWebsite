import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <p className='Creator-tag1'>
          <a href='mailto:christian.paton01@gmail.com'>click to email me!</a>
        </p>
        <p className='Creator-tag2'>
          Designed & Built by &nbsp;
          <a
            className='Hyperlink-Space'
            target='_blank'
            href='https://www.linkedin.com/in/christian-samuel-paton/'
            rel='noopener noreferrer'
          >
            Christian P.
          </a>
          &nbsp; ©2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
