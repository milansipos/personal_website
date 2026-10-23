import { projects } from "../data/projects";
import Reveal from "../components/Reveal";

const Projects = () => {
    return (
        <section id="projects">
            <Reveal>
                <h2 className="section-title">Personal Projects</h2>
            </Reveal>

            <div className="projects-grid">
                {projects.map((project, i) => (
                    <Reveal key={project.id} delay={(i % 2) * 0.1}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            {project.link && <span className="project-link">View Code →</span>}
                        </a>
                    </Reveal>
                ))}
            </div>
            <h3 style={{ padding: '30px' }}> See more on my <a href="https://github.com/milansipos" target="_blank" rel="noopener noreferrer" className="text-link">GitHub Page</a>.</h3>
        </section>
    );
}
export default Projects;
