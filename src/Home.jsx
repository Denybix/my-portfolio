import React from "react";
import { useRef } from "react";
import profile from "./assets/profilepic.jpg"
import blog from "./assets/Blogging-site.png"
import ecomm from "./assets/E-commerce-site.png"
import todo from "./assets/To-do-list.png"
import "./home.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from "./ContactForm.jsx"

const Home = () =>
{
    const projectSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    const scrollIntoProjects = () =>
    {
        projectSectionRef.current.scrollIntoView({behavior: "smooth"});
    }

    const scrollIntoContacts = () =>
    {
        contactSectionRef.current.scrollIntoView({behavior: "smooth"});
    }

    return(
        <>
            <div className="introduction"> 
                <img src={profile} className="profile-img"></img>
                <p>Katyayan Borthakur</p>
                <span>Aspiring Frontend Developer | Crafting User-Friendly Interfaces.</span>
                <div className="work-buttons">
                    <button onClick={scrollIntoProjects}>View My Work</button>
                    <button onClick={scrollIntoContacts}>Contact Me</button>
                    <a href = '/resume.pdf'>
                        <button>Download Resume</button>
                    </a>
                </div>
            </div>

            <div className="about">
               <h2>About</h2>
               <p>"I am a recent BSc IT graduate with a solid foundation in web technologies and a strong passion for frontend development. 
                I specialize in creating clean, intuitive user interfaces with HTML, CSS, JavaScript, and React.js. 
                Through my projects, such as an e-commerce site, a blogging platform, and a todo list application, I have demonstrated my ability to craft responsive, user-centric solutions. 
                Always eager to expand my skill set, I take pride in applying best practices to deliver high-quality results. 
                With a keen eye for detail and a strong work ethic, I am excited to contribute to innovative development teams and grow as a frontend developer."</p> 
            </div>

            <div className="skills">
                <h2>My Skills</h2>
                    <div className="skill-list">
                        <h3>Frontend</h3>
                        <div className="frontend">
                                <div className="skill">
                                    <i className="fab fa-html5"></i>
                                    <span>HTML</span>
                                </div>
                                <div className="skill">
                                    <i className="fab fa-css3-alt"></i>
                                    <span>CSS</span>
                                </div>
                                <div className="skill">
                                    <i className="fab fa-js-square"></i>
                                    <span>JavaScript</span>
                                </div>
                                <div className="skill">
                                    <i className="fab fa-react"></i>
                                    <span>React.js</span>
                                </div>
                        </div>
                        
                        <h3>Tools</h3>
                        <div className="tools">
                                <div className="skill">
                                    <i className="fab fa-github"></i>
                                    <span>GitHub</span>
                                </div>
                                <div className="skill">
                                    <i className="fas fa-cogs"></i>
                                    <span>API</span>
                                </div>
                        </div>
                    </div>
            </div>

            <div className="projects-section" ref={projectSectionRef}>
                <h2>My Projects</h2>
                    <h3>Projects done in college</h3>
                    <div className="projects">
                        <ul>
                            <h4>SCRAP CRAFTED FINDS - An E-commerce platform for scrap products</h4>
                            <li>
                                Developed an E-commerce platform for scrap-built products.
                            </li>
                            <li>
                                Implemented a product comparison tool to list products based on ratings and prices. 
                            </li>
                            <li>
                                Technologies used: HTML, CSS, PHP, JavaScript, Python, MySQL.
                            </li>
                        </ul>

                        <ul>
                            <h4>Medicinal Plant detection using Deep Learning Approach</h4>
                            <li>
                                Created a web application for identifying medicinal plants from images and displaying their uses. 
                            </li>
                            <li>
                                Compared three deep learning models (CNN, YOLOv8, ResNet) based on accuracy. 
                            </li>
                            <li>
                                Technologies used: Streamlit (Python framework). 
                            </li>
                        </ul>
                    </div>
                    <h3>Front-end Projects to showcase</h3>
                    <div className="front-end-projects">
                        <a href=" https://blogging-site-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={blog} className="blog-page"></img>
                        </a>
                        <a href=" https://my-e-commerce-site-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={ecomm} className="e-com-page"></img>
                        </a>
                        <a href=" https://my-todo-list-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={todo} className="to-do-page"></img>
                        </a>
                    </div>
            </div>
            <ContactForm ref={contactSectionRef}/>
        </>
    )
}

export default Home;