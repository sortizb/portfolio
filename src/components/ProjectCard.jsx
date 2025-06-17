function ProjectCard({ title, short_desc, tags }) {
    return (
        <div className="card bg-card w-full h-[30vh] p-4 rounded-lg shadow-lg flex flex-row">
            <div className="flex flex-col w-2/3">
                <h2 className="text-2xl text-primary">{title}</h2>
                <p className="text-secondary mt-2 text-lg">{short_desc}</p>
            </div>
            <div className="tags mt-4 flex flex-col gap-3">
                {tags.map((tag, index) => (
                    <button key={index} className="tag bg-tag text-thirtiary py-1 rounded-lg text-sm w-full px-3">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;