import React from 'react';
import Carousel from './Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ProjectCard = ({name, desc, tags, links, images, options, index}) => {
    return (
        // 
        <div data-aos={index%3 === 0 ?  "zoom-in-left" : index % 3 === 1 ? "zoom-in-down" : "zoom-in-right" } >
            <div className="project-card" id={"#" + index.toString()}>
                <h2> {name} </h2>
                <img src={images[0]}/> 
                <div className="redirect-icons">
                    <i className="fas fa-info-circle" data-toggle="modal" data-target={"#" + index}></i>
                    <a href={links[0]} style= {{
                        textDecoration: "none",
                    }} target={options[0] === "no-drop" ? "_self"  : "_blank"} >
                        <i class="fab fa-chrome" style={{cursor: options[0]}}></i>
                    </a>
                    <a href={links[1]} style= {{
                        textDecoration: "none",
                    }} target={options[1] === "no-drop" ? "_self"  : "_blank"} >
                        <i class="fab fa-github" style={{cursor: options[1]}}></i>
                    </a>
                </div>        

            </div>
        </div>
    )
}

export default ProjectCard
