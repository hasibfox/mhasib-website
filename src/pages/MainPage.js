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

    const [visible, setVisible] = useState(6);

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
                            <Falling key={key}
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
                                hey it's hasib
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
                                <img className='mobile-show' src={"images/mhasibpic.jpg"} alt="mhasib-image" />
                                
                                <p>I'm currently a rising junior at Wesleyan University, majoring in Computer Science with great interest in the intersection between <b>web development</b>,  <b>cybersecurity</b>, and <b>cloud computing</b>.
                                </p> 

                                <p>In effort to grow in these areas, I am studying for the CompTIA Security+ Exam, learning web penetration testing, and working as a Information Security Analyst on campus. I also provide <b><a target="_blank"  href="https://hasibfox.wescreates.wesleyan.edu/">free web development assistance</a></b> for any businesses, organizations, and individuals who wish to take their presence into the digital sphere!</p>

                                <p> Additionally, I am working towards becoming fluent in both <b>formal and colloquial Levantine Arabic</b>. I'm confident that I can benefit my community through technology, but I hope to leverage my others interests to create equally as meaningful interactions through language.</p>    
                            
                                <p>To grab a cup of tea and talk or have a conversation virtually, please do not hesitate to <b><a href = "mailto: mhasib@wesleyan.edu">reach out!</a></b></p>
                            </div>
                            <div className='me-extra' data-aos="zoom-in-left">
                                <img className='mobile-hide' src={"images/mhasibpic.jpg"} alt="mobile-mhasib-image" />
                                <h3 data-aos="zoom-out-down"><u>Tech Stack</u></h3>
                                <div className='tech-stack' data-aos="zoom-out-down" data-aos-delay="500">
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
                                        <p>Linux</p>
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
                                        <div key={index}>
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
                                        name = {project.pname} 
                                        desc = {project.pdescription} 
                                        tags = {project.ptags} 
                                        links = {project.plinks} 
                                        images = {project.pimages} 
                                        options={project.options} 
                                        index = {index}/>
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
                
                    <div className='page-footer'>
                        <p>Made by Mohammad Hasib</p>
                    </div>
                </div>
            </div> 
    )
}

export default MainPage