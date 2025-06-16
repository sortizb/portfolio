function NavBar() {
    return (
        <nav className="bg-transparent w-full shadow-md flex flex-row justify-between items-center">
            <h3 className="text-lg text-primary">Santiago Ortiz Betancourt</h3>
            <ul className="flex flex-row gap-4">
                <li>
                    <a href="#home-section" className="text-secondary hover:text-primary">Home</a>
                </li>
                <li>
                    <a href="#skills-section" className="text-secondary hover:text-primary">Skills</a>
                </li>
                <li>
                    <a href="#resumes-section" className="text-secondary hover:text-primary">Resumes</a>
                </li>
                <li>
                    <a href="#contact-section" className="text-secondary hover:text-primary">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;