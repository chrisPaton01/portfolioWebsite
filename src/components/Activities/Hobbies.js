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
      <iframe
        title='Kirby Fan Art'
        scrolling='0'
        src='https://sketchfab.com/3d-models/kirby-fan-art-5613d284c2494c818adf87851411e999/embed?ui_infos=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_inspector=0&amp;ui_annotations=0&amp;ui_stop=0&amp;ui_vr=0&amp;preload=1&amp;autostart=1&amp;ui_hint=2&amp;autospin=0.2'
        width='100%'
        height='500px'
      ></iframe>
      &nbsp;
      <iframe
        title='Berserk Dragon Slayer Fan Art'
        scrolling='0'
        src='https://sketchfab.com/3d-models/dragon-slayer-berserk-fan-art-b21cc2759ab145a8afc1659440371c4e/embed?ui_infos=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_inspector=0&amp;ui_annotations=0&amp;ui_stop=0&amp;ui_vr=0&amp;preload=1&amp;autostart=1&amp;ui_hint=2&amp;autospin=0.2'
        width='100%'
        height='500px'
      ></iframe>
    </div>
  );
};

export default Hobbies;
