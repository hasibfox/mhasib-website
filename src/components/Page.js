import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './projects.json'

const Page = () => {
    return (
        <div>
            <div className="projects">
                <h1>Projects</h1>
                <div className="project-box">
                    {projects.map((project, index) => {
                        return(
                            <ProjectCard id = {project.pid} name = {project.pname} desc = {project.pdescription} tags = {project.ptags} links = {project.plinks} images = {project.pimages} index = {index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page
