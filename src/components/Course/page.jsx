

import "./style.scss";

const page = () => {
    return (
        <section id="course">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between h-[262px]">
                    <div className="course-card  w-[250px] h-[100px] flex justify-end items-end">
                        <p className="text-[25px] font-bold text-white">Kursning <span className="text-[#00E689] block">davomiyligi 1 oy</span></p>
                    </div>
                    <div className="course-card   w-[250px] h-[100px] flex justify-end items-end">
                        <p className="text-[25px] font-bold text-white">Kursning <span className="text-[#00E689] block">davomiyligi 1 oy</span></p>
                    </div>
                    <div className="course-card  w-[250px] h-[100px] flex justify-end items-end">
                        <p className="text-[25px] font-bold text-white">Kursning <span className="text-[#00E689] block">davomiyligi 1 oy</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;