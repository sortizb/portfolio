function ProjectCard({ title, short_desc, tags }) {
    return (
        <div className="card bg-card w-11/12 min-h-40 h-fit p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl text-primary">{title}</h2>
            <p className="text-secondary mt-2 text-lg">{short_desc}</p>
            <div className="tags mt-4 flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                    <button key={index} className="tag bg-tag text-thirtiary py-1 rounded-lg text-sm w-fit px-3">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;