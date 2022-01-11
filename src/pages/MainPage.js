import React, {useState} from 'react';
import icons_color from '../components/icons_color.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './mainPage.css';
import { Link } from 'react-scroll';
import ProjectCard from '../components/ProjectCard';
import projects from '../projects.json';
import Falling from '../components/Falling';
import "animate.css/animate.min.css";
import Carousel from '../components/Carousel';




const MainPage = () => {
    AOS.init();

    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        console.log(visible, "showmore")
        setVisible((prevValue) => prevValue + 3);
    };
    const showLessItems = () => {
        console.log(visible, "showless")

        setVisible((prevValue) => prevValue - 3);
    };
    const StayAtItems = () => {
        console.log(visible, "stay")

        setVisible((prevValue) => prevValue);
    };


    return (

        <div className='page-div'>
            <div className='background-div'>
                <div className='direct-icons-container'>
                    {icons_color.map((icon, key) => {
                        return(
                            <Falling
                            speed = { icon["speed"] }
                            delay =  {icon["delay"] }
                            reverse = { icon["reverse"] }
                            dist =  {icon["dist"] }
                            size =  {icon["size"] }
                            color = { icon["color"] }
                            emote = { icon["emote"] }
                            />
                        )
                    })}
                </div>
            </div>

            <div className='links'>

                <div className='page-links'>
                    <Link activeClass={ "active"} style={{ textDecoration: 'none' }}to="home" spy={true} smooth={true} duration={100}>
                        <p>home.js</p>        
                    </Link>

                    <Link activeClass={ "active"} style={{ textDecoration: 'none' }}to="about-me" spy={true} smooth={true} duration={100}>
                        <p>me.js</p>
                    </Link>

                    <Link activeClass={ "active"} style={{ textDecoration: 'none' }} to="projects" spy={true} smooth={true} duration={100}>
                        <p>projects.js</p>
                    </Link>

                </div>
                <div className='social-links'>
                    <a target="_blank"  href = "mailto: mhasib@wesleyan.edu">                        
                        <i className="fas fa-at"></i>
                    </a>

                    <a target="_blank"  href="https://www.linkedin.com/in/mohammad-hasib/">
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a target="_blank"  href="https://hasibfox.wescreates.wesleyan.edu/">
                        <i className="fas fa-comment-dots"></i>
                    </a>

                    <a target="_blank"  href="https://github.com/hasibfox/">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>  
            </div>
                <div className='main-container'>
                    
                    <div 
                        className='animate__animated animate__bounce hero-page' 
                        id='home'
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-duration="3000"
                        
                        >
                            <h1 className="animate__animated animate__pulse animate__infinite">
                                hey it's mhasib
                            </h1>
                            <h2>welcome to my <h2 className='animate__animated animate__shakeX  animate__infinite'>technosphere</h2> 
                            </h2>
                            <div className='animate__animated animate__bounceInUp hero-social-links'>
                                <a target="_blank"  href = "mailto: mhasib@wesleyan.edu">                        
                                    <i className="fas fa-at"></i>
                                </a>

                                <a target="_blank"  href="https://www.linkedin.com/in/mohammad-hasib/">
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a target="_blank"  href="https://hasibfox.wescreates.wesleyan.edu/">
                                    <i className="fas fa-comment-dots"></i>
                                </a>

                                <a target="_blank"  href="https://github.com/hasibfox/">
                                    <i className="fab fa-github-square"></i>
                                </a>
                            </div>  

                    </div>
                
                    <div className='me-container' id="about-me">

                            <h2 className='section-header' data-aos="zoom-in">
                                About Me
                            </h2>
                            <div className='me-grid'>

                            <div className='me-text' data-aos="zoom-in-right">
                                <img className='mobile-show' src={"https://media-exp1.licdn.com/dms/image/C4E03AQG8NPZOow8JEQ/profile-displayphoto-shrink_800_800/0/1596490348218?e=1647475200&v=beta&t=8-I3X59__pTs2ySHWB7BGjwuya1MRYOY-9_evmSi8xU"} />
                                
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> <br/>

                                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>    
                            </div>
                            <div className='me-extra' data-aos="zoom-in-left">
                                <img className='mobile-hide' src={"https://media-exp1.licdn.com/dms/image/C4E03AQG8NPZOow8JEQ/profile-displayphoto-shrink_800_800/0/1596490348218?e=1647475200&v=beta&t=8-I3X59__pTs2ySHWB7BGjwuya1MRYOY-9_evmSi8xU"} />
                                <h3>
                                    <u>
                                        Tech Stack
                                    </u>
                                </h3>
                                <div className='tech-stack' data-aos="zoom-out-down">
                                    <div className="tech">
                                        <i className="fab fa-python"></i>
                                        <p>Python</p>
                                    </div>
                                    <div className="tech">
                                        <i className="fab fa-js-square"></i>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="tech">
                                        <i className="fab fa-d-and-d"></i>
                                        <p>Kali Linux</p>
                                    </div>
                                    <div className="tech">
                                        <i className="fas fa-file-code"></i>
                                        <p>WireShark</p>
                                    </div>
                                    <div className="tech">
                                        <i className="fas fa-spider"></i>
                                        <p>Burp Suite</p>
                                    </div>
                                    <div className="tech">
                                        <i className="fab fa-r-project"></i>
                                        <p>R</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='project-container' id="projects">
                        <h2 
                        className='section-header'
                        data-aos="zoom-in-down"
                        >
                            Projects
                        </h2>
                        <div className="projects" >
                            <div className="project-box">
                                
                                {projects.slice(0,visible).map((project, index) => {
                                    return(
                                        <div>

                <div className="modal fade" id={`exampleModal${index}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document" style={{
                        maxWidth: "80%"
                    }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="animate__animated animate__fadeInDown modal-title">{project["pname"]}</h2>
                                    <span className="close" data-bs-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
                            </div>
                            <div className="modal-body">
                                <div className = "animate__animated animate__zoomIn carousel-body-content">
                                    <Carousel images = {project["pimages"]} index= {index}/>
                                    <h5 className='animate__animated animate__animated'>{project["pdescription"]}</h5>
                                </div>                         
                            </div>
                            <div className="modal-footer">
                                <div className="carousel-labels-container">
                                    {project["ptags"].map((tag, key) => {
                                        return(
                                            <div key={key} className={`animate__animated animate__fadeInLeft animate__delay-${key-.5}s labels`}>{tag}</div>
                                        )
                                    })}

                                </div>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            <ProjectCard
                                        name = {project.pname} desc = {project.pdescription} tags = {project.ptags} links = {project.plinks} images = {project.pimages} options={project.options} index = {index}/>
                                
                                        </div>
                                        )
                            })}
                        </div>
                        <div className="events-buttons">
                            <button className={(visible) <= projects.length ? "b2" : "b2off"}  onClick={showMoreItems}>Load More</button>
                            <button className={(visible + 3) >= projects.length ? "b2" : "b2off"} onClick={(visible + 3) > projects.length ? showLessItems : StayAtItems} >Load Less</button>
                        </div>
                    </div>
                    </div>
                
                    <div className='animate__animated animate__slideInUp page-footer'>
                        <p>Made by Mohammad Hasib</p>
                    </div>
                </div>
            </div> 
        
        

    )
}

export default MainPage