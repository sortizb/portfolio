

function Header() {

    // Placeholder name, later fetched from database
    let name = "Santiago Ortiz Betancourt";

    // Placeholder positions array, later fetched from database
    let positions = [
        "Position 1",
        "Position 2",
        "Position 3"
    ]

    return (
        <div id='header-container' className="bg-transparent w-full h-1/5">
            <div id='name' className="text-5xl text-primary">
                {name}
            </div>
            <div id='positions' className=" text-3xl text-accent mt-4 flex gap-4">
                {positions.map((position, index) => (
                    <p key={index}>
                        {position} 
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Header;