import './Hobbies.css';

const Hobbies = () => {
  return (
    <div>
      <span className='Hobbies-Title'>Hobbies - 3D ART</span>
      <br></br>
      <br></br>
      <video
        width='100%'
        height='500px'
        autoplay='autoplay'
        loop='true'
        muted
        controls
      >
        <source src='assets/Art_GurrenLagann_noAudio.mp4' type='video/mp4' />
      </video>
      &nbsp;
      <video
        width='100%'
        height='500px'
        autoplay='autoplay'
        loop='true'
        muted
        controls
      >
        <source src='assets/Art_PC_noAudio.mp4' type='video/mp4' />
      </video>
      &nbsp;
      <video
        width='100%'
        height='500px'
        autoplay='autoplay'
        loop='true'
        muted
        controls
      >
        <source src='assets/Art_Cactus_noAudio.mp4' type='video/mp4' />
      </video>
      &nbsp;
      {/*<iframe
        title='PC Low Poly Art'
        scrolling='0'
        src='assets/Art_PC_noAudio.mp4'
        width='100%'
        height='500px'
      ></iframe>
      &nbsp;
      <iframe
        title='Cactus Low Poly Art'
        scrolling='0'
        src='https://cdn-animation.artstation.com/p/video_sources/001/021/850/snoozcee-cactus-no-audio.mp4'
        width='100%'
        height='500px'
      ></iframe>
      &nbsp;*/}
    </div>
  );
};

export default Hobbies;
