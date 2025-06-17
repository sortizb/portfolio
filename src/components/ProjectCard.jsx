function ProjectCard({ title, short_desc, tags }) {
    return (
        <div className="bg-linear-to-t from-dark from-0% to-contrast w-full h-[30vh] p-4 rounded-lg shadow-lg flex flex-row">
            <div className="flex flex-col w-2/3">
                <h2 className="text-4xl text-primary font-semibold">{title}</h2>
                <p className="text-primary mt-2 text-lg font-light">{short_desc}</p>
            </div>
            <div className="tags mt-4 flex flex-col gap-3">
                {tags.map((tag, index) => (
                    <button key={index} className="tag bg-tag text-primary py-1 rounded-xl text-lg w-full px-3">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;