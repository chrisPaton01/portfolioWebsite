import './Summary.css';

const Summary = () => {
  return (
    <div>
      <h1 className='Summary-Title'>Computer Science graduate & 3D Artist</h1>
      <p className='Summary-p1'>
        <span>Skills:</span>&nbsp;
        <span className='Skill-Text'>HTML</span>&nbsp;
        <span className='Skill-Text'>CSS</span>&nbsp;
        <span className='Skill-Text'>JavaScript</span> &nbsp;
        <span className='Skill-Text'>(React)</span> &nbsp;
        <span className='Skill-Text'>Git</span>&nbsp;
        <span className='Skill-Text'>Python</span>
      </p>
      <p className='Summary-p2'>
        Tools:&nbsp;
        <img
          className='icons'
          src='assets/vscode_icon_512x512.png'
          alt='blender_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/zbrush_icon_512x512.png'
          alt='blender_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/blender_icon_512x512.png'
          alt='blender_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/painter_icon_512x512.png'
          alt='painter_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/designer_icon_512x512.png'
          alt='designer_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/photoshop_icon_512x512.png'
          alt='photoshop_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/premiere_icon_512x512.png'
          alt='premiere_icon'
        />{' '}
        &nbsp;
        <img
          className='icons'
          src='assets/aftereffects_icon_512x512.png'
          alt='aftereffects_icon'
        />
        &nbsp;
      </p>
    </div>
  );
};

export default Summary;
