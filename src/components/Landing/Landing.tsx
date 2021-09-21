import './Landing.css';
import useScript from './useScript';
 

function Landing() {
    useScript('/js/script.js');

    return (
    <div> 
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                </ul>
            </nav>
        </header>

        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Mihai Stancu</h1>
                <p>Software Engineer</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/mihai.stancu.777" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/mihai-stancu-02729347" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/stancu-mihai" className="github"><i className="bx bxl-github"></i></a>
                </div>
            </div>
        </section>
        
        <main id="main">
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="/profile.jpg" className="img-fluid img-profile mx-auto mb-2" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Software Engineer</h3>
                            <p className="fst-italic">
                            Currently working as Software Engineer on Revit. Passionate about web development (front end, back end, Docker, serverless and security). Tech enthusiast, always looking for opportunities to learn new things.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href = "stancu-mihai.github.io">stancu-mihai.github.io</a></span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+4 0765 278 017</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bucharest, Romania</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>36</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's degree</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href = "mihai.stancu@autodesk.com">mihai.stancu@autodesk.com</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>A candid self assessment of my relevant skills.</p>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">.NET <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Node.js <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">React <i className="val">30%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Resume</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Senior Software Engineer</h4>
                                <h5>Oct 2019 - Present</h5>
                                <p><em>Autodesk, Romania </em></p>
                                <ul>
                                    <li>Implemented new features and maintained existing code base for <a href = "https://www.autodesk.com/products/revit/overview">Revit</a>, using C++ and .NET. Leveraged agile methodology to provide an iterative approach to developing software.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Senior Software Engineer in Test</h4>
                                <h5>May 2018 - Oct 2019</h5>
                                <p><em>Autodesk, Romania </em></p>
                                <ul>
                                    <li>Authored unit and integration tests for cloud services and desktop products (Node.js, Typescript, C++, .NET). Maintained testing infrastructure (virtual machines, in-house testing tools, etc)</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Senior Quality Assurance Analyst</h4>
                                <h5>Jun 2015 - May 2018</h5>
                                <p><em>Autodesk, Romania </em></p>
                                <ul>
                                    <li>Analyzed stories and specifications, created and executed test cases, including (regression and performance tests). Found and tracked defects (JIRA), collaborated with developers to prioritize and fix defects, provided regular reports of software quality to management team. Participated in Beta release activities, active on customer newsgroups, presented at “Inside the factory” event, incorporated feedback from users in development process.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-item">
                                <h4>Design Engineer</h4>
                                <h5>Feb 2013 - Jun 2015</h5>
                                <p><em>Wienerberger, Romania </em></p>
                                <ul>
                                    <li>Provided technical consulting for ceramic floor solution. Created full documentation (execution plans, bill of material, strength calculations). Automated most of the detailing work by using VB.NET in Autocad and all of the structural calculation by using SMath Studio. Tested Android application for computing ceramic material consumption. Developed back end for ceramic roof bill of material estimation website.</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor's degree, Computer Science</h4>
                                <h5>Oct 2017 - Jun 2020</h5>
                                <p><em>University of Bucharest</em></p>
                                <p>Score: 9.33</p>
                            </div>
                            <div className="resume-item">
                                <h4>Master's degree, Structural Engineering</h4>
                                <h5>Oct 2004 - June 2009</h5>
                                <p><em>Technical University Of Civil Engineering, Bucharest</em></p>
                                <p>Score: 9.75</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Below are some late night small pet project that I've created in order to satisfy my thirst of knowledge about certain technologies or web concepts that I felt unfamiliar with.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul id="portfolio-flters">
                                <li data-filter="*">All</li>
                                <li data-filter=".filter-net">.NET</li>
                                <li data-filter=".filter-node">Node.js</li>
                                <li data-filter=".filter-python">Python</li>
                                <li data-filter=".filter-react">React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="portfolio-item filter-net">
                            <div className="subheading mb-3">.NET</div>
                            <ul className="fa-ul mb-0">
                                <li> Maintained existing code, prototyped new features for a .NET Revit Addin, as part of my job at Autodesk. </li>
                                <li> Lead innovation project where I had major contribution developing another Revit Addin and a cross platform Xamarin app that communicated with it. </li>
                                <li> As part of my Software Engineer in Test experience, I’ve made API tests for Advance Steel, including CRUD in a test LocalDB database. </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/serverless-dotnet-api">https://github.com/stancu-mihai/serverless-dotnet-api</a>
                                    <ul>
                                        <li>Check it out <a href ="/home">here</a> (served on AWS Lambda).</li> 
                                        <li>.NET REST API.</li> 
                                        <li>Uses DynamoDB (locally via Docker container) and The serverless framework.</li> 
                                        <li>Generates Swagger documentation automatically.</li> 
                                        <li>Contains unit tests (xUnit) that mock the db using Moq. Measures test coverage.</li> 
                                        <li>Implements JWT authentification, contains user roles.</li> 
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/RDCproject">https://github.com/stancu-mihai/RDCproject</a>
                                    <ul>
                                        <li>Chat application consisting of a server accepting connections from multiple clients</li>
                                        <li>Client-server communication using sockets and mutual exclusion on common resources.</li>
                                        <li>WPF GUI.</li>
                                        <li>Broadcasted messages enter a queue, used for logging (logger in different thread).</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="portfolio-item filter-node">
                            <div className="subheading mb-3">Node.js</div>
                            <ul className="fa-ul mb-0">
                                <li> Diploma project for university. </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/FMI-DiplomaProject">https://github.com/stancu-mihai/FMI-DiplomaProject</a>
                                    <ul>
                                        <li>Check it out <a href ="https://stancu-mihai.herokuapp.com">here</a> (served on Docker container hosted by Heroku free dyno).</li> 
                                        <li>Timetable generation for university, based on inputs: Rooms (+features), Groups, Professors, Courses, etc.</li> 
                                        <li>Uses Node.js + Typescript + MongoDB for REST services on backend, Bootstrap + Pug / Jade on the frontend, Travis CI for pipeline.</li> 
                                        <li>Contains user roles. </li> 
                                        <li>Uses backtracking algorithm for generation. </li> 
                                        <li>Uses Jest for testing. </li> 
                                        <li>Patterns: MVC, Repository, Factory, DI.</li> 
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="portfolio-item filter-python">
                            <div className="subheading mb-3">Python</div>
                            <ul className="fa-ul mb-0">
                                <li> As part of my Software Engineer in Test experience, I’ve created some <a href="https://dynamobim.org">Dynamo</a> custom nodes using Python. </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/PythonAutomation">https://github.com/stancu-mihai/PythonAutomation</a>
                                    <ul>
                                        <li>This is probably the least developed repository I have.</li> 
                                        <li>It contains some simple functions like OS operations (folder creation, deleetion, copying, unzipping, etc) used in daily task automation.</li> 
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="portfolio-item filter-react">
                            <div className="subheading mb-3">React</div>
                            <ul className="fa-ul mb-0">
                                <li> Pet project, not work related. </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/react-client-typescript ">https://github.com/stancu-mihai/react-client-typescript </a>
                                    <ul>
                                        <li>This (current website) is the project above, served through GitHub Pages.</li> 
                                        <li>React + React Router DOM + Typescript + Bootstrap + form validation.</li> 
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>  
        </main>
        
        <footer id="footer">
            <div className="container">
                <h3>Mihai Stancu</h3>
                <p>Thank you for your time! Don't hesitate to contact me for any questions you may have.</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/mihai.stancu.777" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/mihai-stancu-02729347" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/stancu-mihai" className="github"><i className="bx bxl-github"></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default Landing;