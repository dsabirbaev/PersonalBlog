
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import "./style.scss";
const index = () => {

    return (
        <div>
            <Swiper
                slidesPerView={1}

                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="w-[680px] relative"


            >
                <SwiperSlide>
                    <div className="flex flex-col text-white pb-10">
                        <h2 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h2>

                        <p className='mb-5 font-normal text-[20px] leading-[30px]'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda muhim.</p>
                    
                        <p className='mb-10 font-normal text-[20px] leading-[30px]'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                    
                        <h4 className='text-[#FAA40C] font-[20px] font-bold'>Baxrom Abduqayyum</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col text-white pb-10">
                        <h2 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h2>

                        <p className='mb-5 font-normal text-[20px] leading-[30px]'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda muhim.</p>
                    
                        <p className='mb-10 font-normal text-[20px] leading-[30px]'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                    
                        <h4 className='text-[#FAA40C] font-[20px] font-bold'>Baxrom Abduqayyum</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col text-white pb-10">
                        <h2 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h2>

                        <p className='mb-5 font-normal text-[20px] leading-[30px]'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda muhim.</p>
                    
                        <p className='mb-10 font-normal text-[20px] leading-[30px]'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                    
                        <h4 className='text-[#FAA40C] font-[20px] font-bold'>Baxrom Abduqayyum</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col text-white pb-10">
                        <h2 className='text-center text-[25px] font-bold mb-10'>O’quvchilarimizning <span className='text-[#00E689]'>kurs haqidagi fikrlari</span></h2>

                        <p className='mb-5 font-normal text-[20px] leading-[30px]'>Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda muhim.</p>
                    
                        <p className='mb-10 font-normal text-[20px] leading-[30px]'>Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</p>
                    
                        <h4 className='text-[#FAA40C] font-[20px] font-bold'>Baxrom Abduqayyum</h4>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default index;