import { name, positions} from '../modules/modules.js';

function Header() {

    return (
        <div id='header-container' className="bg-transparent w-full h-1/5">
            <div id='name' className="text-8xl text-primary">
                {name}
            </div>
            <div id='positions' className=" text-5xl text-accent mt-8 flex gap-4">
                {positions.map((position, index) => (
                    <p key={index} className="font-light">
                        {position} 
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Header;