import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

function HomePage() {

    // Placeholder projects array, later fetched from database
    let projects = [
        {
            title: "Project 1",
            short_desc: "This is a short description of project 1.",
            tags: ["React", "JavaScript", "CSS"]
        },
        {
            title: "Project 2",
            short_desc: "This is a short description of project 2.",
            tags: ["Node.js", "Express", "MongoDB"]
        },
        {
            title: "Project 3",
            short_desc: "This is a short description of project 3.",
            tags: ["Python", "Flask", "SQLAlchemy"]
        }
    ]


    return (
        <div id='home-page' className="bg-dark flex flex-col w-11/12 h-full rounded-lg shadow-lg text-primary p-8 overflow-x-hidden">
            <Header />
            <section id="projects-section" className="grid grid-cols-2 gap-4 mt-2">
                <h1 className="text-4xl text-primary mb-4 col-span-2">Projects</h1>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        short_desc={project.short_desc} 
                        tags={project.tags} 
                    />
                ))}
            </section>
        </div>
    )
}

export default HomePage;