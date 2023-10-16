import { Logo } from "../Icons/page";

const Header = () => {
    return (
        <header className="pt-10">
            <div className="container mx-auto px-5">
                <nav>
                    <a href="#" className="text-white"><Logo/></a>
                </nav>
            </div>
        </header>
    );
};

export default Header;