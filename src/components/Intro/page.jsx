
import { ArrowRight } from "../Icons/page";
import "./style.scss";
const page = () => {
    return (
        <section id="intro" className="pt-[145px]">
            <div className="container mx-auto px-5">
                <div className="flex flex-col text-white">
                    <h1 className="text-[45px] font-bold w-[550px] mb-5">Abdukarim Mirzayev
                        bilan <span className="text-[#00E689]"> storytelling </span>  kursi...</h1>

                    <p className="text-[16px] font-bold leading-6 w-[480px] mb-10">Ushbu kurs yordamida jozibali gapirish, sahnada va kamera
                        qarshisida hayajonlanmaslik, vizual kompozitsiya va
                        ovozlashtirish sirlarini bilib olasiz.</p>

                    <button className="bg-[#FAA40C] py-[14px] px-[25px] text-black w-fit flex items-center gap-x-1">Guruhga qo’shilish <ArrowRight/></button>    
                </div>
            </div>
        </section>
    );
};

export default page;