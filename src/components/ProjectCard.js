import React from 'react';
import Carousel from './Carousel';

const ProjectCard = ({name, desc, tags, links, images, index}) => {

    return (
        <div>
            <div className="project-card">
                <h2> {name} </h2>
                <img src={images[0]}/> 
                <div className="redirect-icons">
                    <i className="fas fa-info-circle" data-toggle="modal" data-target={"#" + index}></i>
                    <a href={links[0]} style= {{
                        textDecoration: "none"
                    }}>
                        <i class="fab fa-chrome" ></i>
                    </a>
                    <a href={links[1]} style= {{
                        textDecoration: "none"
                    }}>
                        <i class="fab fa-github" ></i>
                    </a>
                </div>        
                    
                <div class="modal fade" id={index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document" style={{
                        maxWidth: "80%"
                    }}>
                        <div class="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title">Tajweed Website</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
