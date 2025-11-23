import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Selected Work</h2>
      
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project) => (
                <div key={project.id} style={{ background: '#1e1e1e', padding: '2rem', borderRadius: '10px', border: '1px solid #333' }}>
            
                    <h3 style={{ marginTop: 0 }}>{project.title}</h3>
                    <p>{project.description}</p>
            
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                        {project.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: '0.8rem', background: '#333', padding: '4px 8px', borderRadius: '4px' }}>
                            {tag}
                        </span>
                    ))}
                 </div>

                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#646cff', fontWeight: 'bold' }}>
                        View Code →
                        </a>
                    )}

                 </div>
                ))}
             </div>
             <h3 style={{ padding: '30px' }}> See more on my <a href="#contact" style={{ color:'gray' }}>GitHub Page</a>.</h3>
         </section>
    );
}
export default Projects;