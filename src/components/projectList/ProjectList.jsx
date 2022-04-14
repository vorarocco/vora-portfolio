import React from 'react'
import './projectList.css'
import Project from '../myProject/Project'
import { projects } from '../../data'

const ProjectList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pldesc">
                {/* here is some of my projects */}
            </p>
        </div>
        <div className="pl-list">
            {projects.map((item) =>(
            <Project key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectList