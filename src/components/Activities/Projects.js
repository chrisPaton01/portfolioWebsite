import './Projects.css';

const Projects = () => {
  return (
    <div>
      <span className='Projects-Title'>Projects - REACT</span>
      <br></br>
      <br></br>
      <iframe
        className='centre'
        title='React Placeholder'
        scrolling='0'
        src='assets/reactPlaceholder.png'
        width='100%'
        height='500px'
      ></iframe>
      &nbsp;
      <iframe
        title='React Placeholder'
        scrolling='0'
        src='assets/reactPlaceholder.png'
        width='100%'
        height='500px'
      ></iframe>
    </div>
  );
};

export default Projects;
