import './Summary.css';

const Summary = () => {
  return (
    <div>
      <h1 className='Summary-Title'>Computer Science graduate & 3D Artist</h1>
      <p className='Summary-p3'>-Skills-</p>
      <p className='Summary-p1'>
        <span className='Skill-Text'>HTML,</span>
        <span className='Skill-Text'>CSS,</span>
        <span className='Skill-Text'>JavaScript,</span>
        <span className='Skill-Text'>React,</span>
        <span className='Skill-Text'>Git,</span>
        <span className='Skill-Text'>Python</span>
      </p>
      <p className='Summary-p3'>-Tools-</p>
      <p className='Summary-p2'>
        <img
          className='icons'
          src='assets/vscode_icon_512x512.png'
          alt='blender_icon'
        />{' '}
        <img
          className='icons'
          src='assets/zbrush_icon_512x512.png'
          alt='blender_icon'
        />{' '}
        <img
          className='icons'
          src='assets/blender_icon_512x512.png'
          alt='blender_icon'
        />{' '}
        <img
          className='icons'
          src='assets/painter_icon_512x512.png'
          alt='painter_icon'
        />{' '}
        <img
          className='icons'
          src='assets/designer_icon_512x512.png'
          alt='designer_icon'
        />{' '}
        <img
          className='icons'
          src='assets/photoshop_icon_512x512.png'
          alt='photoshop_icon'
        />{' '}
        <img
          className='icons'
          src='assets/premiere_icon_512x512.png'
          alt='premiere_icon'
        />{' '}
        <img
          className='icons'
          src='assets/aftereffects_icon_512x512.png'
          alt='aftereffects_icon'
        />
      </p>
    </div>
  );
};

export default Summary;
