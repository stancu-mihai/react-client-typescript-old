import ScrollSpy from "react-scrollspy";
import './Landing.css';

function Landing() {
  return (
        <div id="page-top" data-bs-spy="scroll" data-bs-target="#navbar-example">
            <div className="container-fluid p-0">
                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Mihai
                            <span className="text-primary">Stancu</span>
                        </h1>
                        <div className="subheading mb-5">
                            Drumul Valea Doftanei 47-51, bl.T3, sc.3, et.2, ap.86 · Bucharest, 061981 · +40 765 278 017 ·
                            <a href="mailto:mihaistancu5683@yahoo.com">mihaistancu5683@yahoo.com</a>
                        </div>
                        <p className="lead mb-5">Currently working as Software Engineer on Revit (which is a architecture, engineering and construction modeling software). Passionate about web development (front end, back end, Docker, serverless and security). Tech enthusiast, always looking for opportunities to learn new things.</p>
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/mihai-stancu-02729347"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="https://github.com/stancu-mihai"><i className="fab fa-github"></i></a>
                            <a className="social-icon" href="https://www.facebook.com/mihai.stancu.777"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />
                <section className="resume-section" id="experience">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Experience</h2>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Senior Software Engineer</h3>
                                <div className="subheading mb-3"><a href = "https://www.autodesk.com">Autodesk</a></div>
                                <p>Implemented new features and maintained existing code base for <a href = "https://www.autodesk.com/products/revit/overview">Revit</a>, using C++ and .NET. Leveraged agile methodology to provide an iterative approach to developing software.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">October 2019 - Present</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Senior Software Engineer in Test</h3>
                                <div className="subheading mb-3"><a href = "https://www.autodesk.com">Autodesk</a></div>
                                <p>Authored unit and integration tests for cloud services and desktop products (Node.js, Typescript, C++, .NET). Maintained testing infrastructure (virtual machines, in-house testing tools, etc)</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">May 2018 - October 2019</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Senior Quality Assurance Analyst</h3>
                                <div className="subheading mb-3"><a href = "https://www.autodesk.com">Autodesk</a></div>
                                <p>Analyzed stories and specifications, created and executed test cases, including (regression and performance tests). Found and tracked defects (JIRA), collaborated with developers to prioritize and fix defects, provided regular reports of software quality to management team. Participated in Beta release activities, active on customer newsgroups, presented at “Inside the factory” event, incorporated feedback from users in development process.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">June 2015 - May 2018</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Design Engineer</h3>
                                <div className="subheading mb-3"><a href = "https://www.wienerberger.com">Wienerberger</a></div>
                                <p>Provided technical consulting for ceramic floor solution. Created full documentation (execution plans, bill of material, strength calculations). Automated most of the detailing work by using VB.NET in Autocad and all of the structural calculation by using SMath Studio. Tested Android application for computing ceramic material consumption. Developed back end for ceramic roof bill of material estimation website.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">February 2013 - June 2015</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Autocad Trainer</h3>
                                <div className="subheading mb-3"><a href = "https://www.absoluteschool.net">Absolute School</a></div>
                                <p>Created and maintained up-to-date the documentation for training. Provided training services from drawing the first line in AutoCAD to scripting and rendering. Maintained customer feedback score above 9.6.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">February 2013 - June 2015</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Design Engineer</h3>
                                <div className="subheading mb-3"><a href = "https://www.ipcmg.ro">IPCMG</a></div>
                                <p>Designed and detailed Steel and Concrete structures using FEM based software. Created full documentation (execution plans, bill of material, strength and stability calculation, etc.) Automated structural detailing process by developing Autocad script generator tool</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">March 2009 - February 2013</span></div>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />
                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Education</h2>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0"><a href = "https://unibuc.ro/?lang=en">University of Bucharest</a></h3>
                                <div className="subheading mb-3">Bachelor's degree</div>
                                <div>Computer Science</div>
                                <p>Score: 9.33</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">October 2017 - June 2020</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="mb-0"><a href = "https://utcb.ro/en">Technical University of Civil Engineering, Bucharest</a></h3>
                                <div className="subheading mb-3">Bachelor's degree</div>
                                <div>Civil Engineering</div>
                                <p>Score: 9.75</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">October 2004 - June 2009</span></div>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />
                <section className="resume-section" id="portfolio">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Portfolio</h2>
                        <p className="lead mb-5">Below are some small pet project that I've created in order to satisfy my thirst of knowledge about a certain technology. Please note that not all developers work on open source software, thus, work-related code cannot be presented due to legal constraints. Most of the projects below are made after office hours. </p>
                        <div className="subheading mb-3">.NET</div>
                            <ul className="fa-ul mb-0">
                                <li> Maintained existing code, prototyped new features for a .NET Revit Addin, as part of my job at Autodesk. </li>
                                <li> Lead innovation project where I had major contribution developing another Revit Addin and a cross platform Xamarin app that communicated with it. </li>
                                <li> As part of my Software Engineer in Test experience, I’ve made API tests for Advance Steel, including CRUD in a test LocalDB database. </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/serverless-dotnet-api">https://github.com/stancu-mihai/serverless-dotnet-api</a>
                                    <ul>
                                        <li>Check it out <a href ="/home">here</a> (served on AWS Lambda)</li> 
                                        <li>.NET REST API</li> 
                                        <li>Uses DynamoDB and The serverless framework</li> 
                                        <li>Generates Swagger documentation automatically</li> 
                                        <li>Contains unit tests (xUnit) that can also run offline (db is mocked)</li> 
                                        <li>Implements JWT authentification, contains user roles</li> 
                                        <li>Measures test coverage</li> 
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://github.com/stancu-mihai/RDCproject">https://github.com/stancu-mihai/RDCproject</a>
                                    <ul>
                                        <li>Chat application consisting of a server accepting connections from multiple clients</li>
                                        <li>Client-server communication using sockets and mutual exclusion on common resources</li>
                                        <li>WPF GUI</li>
                                        <li>Broadcasted messages enter a queue, used for logging (logger in different thread)</li>
                                    </ul>
                                </li>
                            </ul>
                    </div>
                </section>
                <hr className="m-0" />
                <section className="resume-section" id="interests">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Interests</h2>
                        <p>Apart from being a software engineer, I enjoy spending precious time with my family, escaping as far away from home as possible and immersing ourselves in other cultures around the world. </p>
                        <p className="mb-0">When forced indoors, I follow a number of sci-fi movies and television shows, learn about cryptocurrency and spend a large amount of my free time exploring the latest technology advancements in the web development world.</p>
                    </div>
                </section>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Mihai Stancu</span>
                        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/profile.jpg" alt="..." /></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ScrollSpy 
                            items={ ['about', 'experience','education','portfolio','interests'] } 
                            className="navbar-nav"
                            currentClassName ="notyetused">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                            </li>
                        </ScrollSpy>  
                    </div>
                </nav>
            </div>
        </div>
  );
}

export default Landing;