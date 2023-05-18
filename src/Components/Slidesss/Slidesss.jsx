import React from 'react'
import "./Slidesss.scss"
import Slider from 'infinite-react-carousel';
import ProjectCard from '../projectcard/ProjectCard';
import { projects } from '../../data';
const Slidesss = () => {
  return (
    <div className="slidess">
        <div className="containerss">
        <Slider slidesToShow={4} arrowsScroll={5}>
        {projects.map(project=>(
            <ProjectCard card={project} key={project.id}/>
        ))}
  </Slider> 
        </div>
    </div>
  )
}

export default Slidesss
