import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
import { Carousel } from "react-responsive-carousel";
import { projects, skill_categories, resumes, contact_links } from "../modules/modules";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage() {

    return (
        <div id='home-page' className="bg-dark flex flex-col w-11/12 h-full rounded-lg shadow-lg text-primary p-8 overflow-x-hidden">
            <NavBar />
            <section id="home-section" className="flex flex-col mb-16 mt-16">
                <span className="text-5xl text-primary font-light mt-16 mb-4">
                    Hello, my name is
                </span>
                <Header />
            </section>
            <section id="projects-section" className="mt-20">
                <h1 className="text-5xl text-primary mb-4">What have I done?</h1>
                <div className="p-8">
                    <Carousel
                        axis="horizontal"
                        showArrows={false}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        transitionTime={500}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                title={project.title} 
                                short_desc={project.short_desc} 
                                tags={project.tags} 
                            />
                        ))}

                    </Carousel>
                </div>
            </section>
            <section id="skills-section" className="grid grid-cols-3 gap-4 mt-16">
                <h1 className="text-5xl text-primary mb-4 col-span-3">My Skills Set</h1>
                {skill_categories.map((category, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">{category.category}</h2>
                        <ul className="list-disc pl-5">
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="text-primary">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section id="resumes-section" className="flex flex-col gap-4 mt-16">
                <h1 className="text-5xl text-primary mb-4">Resumes</h1>
                <div className="grid grid-cols-3 gap-4">
                    {resumes.map((resume, index) => (
                        <div key={index} className="bg-card p-4 rounded-lg shadow-md">
                            <h2 className="text-xl text-thirtiary">{resume}</h2>
                        </div>
                    ))}
                </div>
            </section>
            <section id="contact-section" className="grid grid-cols-2 gap-2 mt-16">
                <div className="flex flex-col">
                    <h1 className="text-5xl text-primary mb-8">Contact Me!</h1>
                    {contact_links.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.url} 
                            className="text-secondary text-lg"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl text-primary mb-4 pt-16">Email</h2>
                    <form action={console.log("email sent")}>
                        <input 
                            type="text"
                            placeholder="Your Name"
                            className="bg-card text-secondary p-2 rounded-lg mb-2 w-full"
                        ></input>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-card text-secondary p-2 rounded-lg mb-2 w-full"
                        ></input>
                        <textarea
                            placeholder="Your Message"
                            className="bg-card text-secondary p-2 rounded-lg mb-2 w-full"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="bg-tag text-secondary p-2 rounded-lg"
                        >Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default HomePage;