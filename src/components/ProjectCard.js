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
                    <i className="fas fa-info-circle" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}></i>
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

            
{/* 
            <div class="modal fade" id={index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document" style={{
                        maxWidth: "80%"
                    }}>
                        <div class="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title">Tajweed Website</h2>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className = "carousel-body-content">
                                    <Carousel images = {images} index= {index}/>
                                    <h5>{desc}</h5>
                                </div>                         
                            </div>
                            <div class="modal-footer">
                                <div class="carousel-labels-container">
                                    {tags.map((tag) => {
                                        return(
                                            <div class="labels">{tag}</div>
                                        )
                                    })}

                                </div>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default ProjectCard
