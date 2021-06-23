import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './projects.json'
import { useState } from 'react'
import icons_color from './icons_color.json';
import Falling from './Falling';

var count = 1
var isTrue = true;

const Page = () => {
    const [visible,setVisible] = useState(3);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue +3);
        count = count +1;
    };
    const showLessItems = () => {
        setVisible((prevValue) => prevValue -3);
        count = count - 1;
    };
    const StayAtItems = () => {
        setVisible((prevValue) => prevValue);
    };
 
    if (count <= 1 ) {
        isTrue = true;
    }
    else if (count > 1){
        isTrue = false;
    };
    return (
        <div>
            <div className="icons-container">
                {icons_color.map((icon)=>{
                return (
                    <Falling emote={icon.emote} size={icon.size} speed={icon.speed} delay={icon.delay} color={icon.color} reverse={icon.reverse} dist={icon.dist}/>
                )
                })}
            </div>
            <div className="projects">
                <h1>Projects</h1>
                <div className="project-box">
                    {projects.slice(0,visible).map((project, index) => {
                        return(
                            <ProjectCard name = {project.pname} desc = {project.pdescription} tags = {project.ptags} links = {project.plinks} images = {project.pimages} index = {index}/>
                        )
                    })}
                </div>
                <div className="events-buttons">
                    <button className="b1" onClick={showMoreItems}>Load More</button>
                    <button className={isTrue ? "b2off" : "b2"} onClick={isTrue ? StayAtItems : showLessItems} >Load Less</button>
                </div>
            </div>
        </div>
    )
}

export default Page
