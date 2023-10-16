

import "./style.scss";

const page = () => {
    return (
        <section id="video-screen" className="py-[80px]">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-center">
                    <iframe width="1040" height="565" src="https://www.youtube.com/embed/KLE6QkbYBsI" title="PUBG | @AbdukarimMirzayev2002" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default page;