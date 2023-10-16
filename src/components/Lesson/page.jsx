import { ArrowRight } from "../Icons/page";

import "./style.scss";

const page = () => {
    return (
        <section className="pt-5 pb-20">
            <div className="container mx-auto px-5">
                <div className="flex justify-around">
                    <div className="flex flex-col gap-y-5">
                        <div className="lesson-card">

                            <h4 className="lesson-title">— 01 dars</h4>
                            <h2 className="lesson-subtitle">Storytelling nima?</h2>
                            <p className="lessom-text">— Ushbu darsda storytelling nima ekanligi haqida
                                gaplashamiz. Mavzuga umumiy kirish qilamiz.
                                Ritorika, qahramon, sayohat, sarguzasht kabi
                                asosiy tushunchalar haqida to'xtalamiz.</p>
                        </div>

                        <div className="lesson-card">

                            <h4 className="lesson-title">— 03 dars</h4>
                            <h2 className="lesson-subtitle">Mavzu topish va tadqiq qilish</h2>
                            <p className="lessom-text mb-5">— Tinglovchi va tomoshabinning qiziqishini
                                saqlab qolish uchun qanday usullardan
                                foydalanamiz?</p>
                            <p className="lesson-text mb-5">— Tomoshabinlarning e'tiborini mavzuga jalb
                                qilish va uni doimo faol tarzda ushlab turish
                                uchun nima qilish zarur?</p>
                            <p className="lesson-text">— Qanday qilib biz kutilmagan burilishlar, aql
                                o’yinlari, keskinlik va noaniqlik kabi vositalar bilan
                                ravon maʼlumot bera olamiz? Darsimizda matnni
                                qayta yozish, tuzatish, qisqartirish, sayqallash va
                                jozibali sarlavha qo’yish haqida so`z yuritamiz.</p>
                        </div>

                        <div className="lesson-card">

                            <h4 className="lesson-title">— 05 dars</h4>
                            <h2 className="lesson-subtitle">Kamera qarshisida ishlash</h2>
                            <p className="lessom-text mb-5">— Tasvirga tushirishdan oldingi eng soʻnggi
                                tayyorgarliklar nimalar? Kamera qarshisida
                                gapirishning sirlari. Obyektiv qarshisida
                                oʻzingizdagi eng yaxshi holatni topa olish uchun
                                nimalar qilish kerak?</p>
                            <p className="lesson-text">— Matnlarni yodlash kerakmi yoki oʻqishmi?
                                Teleprompterdan qayerda va qanday
                                foydalanamiz?</p>
                        </div>

                        <div className="lesson-card">

                            <h4 className="lesson-title">— 07 dars</h4>
                            <h2 className="lesson-subtitle">Studiya sharoitida ishlash</h2>
                            <p className="lessom-text mb-5">— Yorugʻlik – tasvirning asosidir. Ushbu darsda
                                ichki va tashqi yoritish usullarini misollar bilan
                                koʻrib chiqamiz. Dastlabki darslarda oʻrgangan
                                narsalarimizni amalda qoʻllaymiz.</p>
                            <p className="lesson-text">— Tayyorgarlik jarayoni tugagach, birgalikda
                                namuna tarzida koʻrsatuvni tasvirga tushiramiz.</p>
                        </div>

                        <div className="flex gap-x-5">
                            <button className="bg-[#FAA40C] py-[14px] px-[25px] text-black w-fit flex items-center gap-x-1">Guruhga qo’shilish <ArrowRight /></button>
                            <p className="text-[14px] text-white font-bold w-[251px]">
                                Ushbu tugmani bosish orqali kursning
                                Telegramdagi saralash guruhiga a'zo
                                bo'lasiz →
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-5">
                        <div className="lesson-card">

                            <h4 className="lesson-title">— 02 dars</h4>
                            <h2 className="lesson-subtitle">Kopirayterlik va hikoya jozibasi</h2>
                            <p className="lessom-text mb-5">— Qaysi mavzuda yozamiz?
                                Mavzu borasida bir to'xtamga kelgandan keyingi
                                harakatlarimiz nimalardan iborat bo'ladi?</p>
                            <p className="lessom-text">— Ushbu darsda biz mavzuni tadqiq qilish,
                                ma'lumot to'plash, g'oyalar yaratish, yozuvlar va
                                fikrlarni tartibga solish kabi jarayonlarni qanday
                                amalga oshirish haqida gaplashamiz.</p>
                        </div>

                        <div className="lesson-card">

                            <h4 className="lesson-title">— 04 dars</h4>
                            <h2 className="lesson-subtitle">Nutq va gapirish usullari</h2>
                            <p className="lessom-text mb-5">— Bu darsda notiqlik san'ati bilan qisqacha
                                tanishib chiqamiz. Hikoyachining eng kuchli
                                vositasi uning ovozidir. Ushbu dars davomida
                                jonli auditoriya oldida qanday gapirish va
                                taqdimot paytida nimalarga e'tibor qaratish
                                lozimligini bilib olasiz. Ikkinchi qismda esa
                                ovozlashtirish haqida gaplashamiz.</p>
                            <p className="lessom-text">— Ovozingizni tuzatish va tildagi dangasalikdan
                                xalos bo'lish, ovozga ishlov berish, tartibga
                                solish, audio chastotalar, ekvalayzer, kompressor,
                                filtrlar va ulardan qayerda va qanday foydalanish
                                haqida ma'lumotlar beriladi.</p>
                        </div>

                        <div className="lesson-card">

                            <h4 className="lesson-title">— 06 dars</h4>
                            <h2 className="lesson-subtitle">Tasvirga olish vositalari va vizual
                                kompozitsiya</h2>
                            <p className="lessom-text mb-5">— Ushbu darsda biz kamera turlari, kameraning
                                anatomiyasi, muhim sozlamalar, fokuslash,
                                obyektiv turlari va ulardan foydalanish texnikalari
                                bilan tanishib chiqamiz.</p>
                            <p className="lessom-text">— Muvozanat, boʻshliqlar, kompozitsiya qurish
                                usullari, 180 daraja qoidasi kabi tushunchalar
                                haqida to‘xtalamiz.</p>
                        </div>

                        <div className="lesson-card">

                            <h4 className="lesson-title">— 08 dars</h4>
                            <h2 className="lesson-subtitle">Montaj asoslari va uning tartibi</h2>

                            <p className="lessom-text">— Ushbu darsda montaj asoslari va uning tartibi
                                haqida gaplashamiz. Kadrlarning keraksiz
                                qismlarini tozalash, yordamchi kadrlar va
                                animatsiyalar bilan boyitish, ranglardan toʻgʻri
                                foydalanish, qoʻshimcha ovozlar va effektlar
                                ishlatishni oʻrganamiz.</p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;