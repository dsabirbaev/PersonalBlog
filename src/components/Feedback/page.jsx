
import Carousel from "../UI/Carousel";
import "./style.scss";

const page = () => {
    return (
        <section id="feedback" className="py-5">
            <div className="container mx-auto px-5">
                <div className="feedback-carousel flex items-center justify-center h-[556px]">
                    <Carousel/>
                </div>
            </div>      
        </section>
    );
};

export default page;