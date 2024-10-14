import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";


const Home3 = () => {
    return (
        <div className='mt-24 max-w-[1632px] ml-auto mr-auto'>
            <p className='inter-font font-semibold text-[32px] leading-[39px]'>
                Каталог игрушек
            </p>
            <div className='mt-12 w-full flex gap-6'>
                <div className='relative w-[526px] h-[526px] grow'>
                    <div className="p-6 w-full h-[526px] absolute left-0 top-0 bg-[#ded9f7] rounded-[32px]">
                        <p className="w-[230px] mt-[300px] inter-font font-semibold text-[28px] leading-8">
                            Для малышей до 3 лет
                        </p>
                        <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                        <img src="/toy1.png" alt="commodity"
                            className="absolute bottom-0 right-0" />
                    </div>
                    <div className='absolute -top-6 left-0 w-[275px] h-[299px] pr-6 pb-12 bg-white rounded-b-[32px] rounded-l-[1px] z-10'>
                        <div className='relative w-[251px] h-[251px] p-6 bg-[#f6f1d8] rounded-[32px]'>
                            <p className='w-[166px] inter-font font-semibold text-[20px] leading-6'>
                                Плюшевые игрушки
                            </p>
                            <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                            <img src="/toy2.png" alt="commodity"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2" />
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex">
                        <div className="mr-6 relative w-[666px] h-[251px] rounded-[32px] bg-[#dae8ff] p-6 overflow-hidden">
                            <p className="w-[270px] inter-font font-semibold text-[28px] leading-8">
                                Образовательные игрушки
                            </p>
                            <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                            <img src="./toy3.png" alt="commodity"
                            className="absolute right-0 bottom-0"/>
                        </div>
                        <div className="relative w-[390px] h-[251px] rounded-[32px] bg-[#f4f4f4] p-6 overflow-hidden">
                            <p className="w-[270px] inter-font font-semibold text-[28px] leading-8">
                                Конструкторы
                            </p>
                            <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                            <img src="./toy4.png" alt="commodity"
                            className="absolute right-0 bottom-0"/>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="mt-6 flex">
                        <div className="mr-6 relative w-[390px] h-[251px] rounded-[32px] bg-[#dbf3cb] p-6 overflow-hidden">
                            <p className="w-[270px] inter-font font-semibold text-[28px] leading-8">
                                Образовательные игрушки
                            </p>
                            <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                            <img src="./toy5.png" alt="commodity"
                            className="absolute right-0 bottom-0"/>
                        </div>
                        <div className="relative w-[666px] h-[251px] rounded-[32px] bg-[#f3d0c0] p-6 overflow-hidden">
                            <p className="w-[270px] inter-font font-semibold text-[28px] leading-8">
                                Конструкторы
                            </p>
                            <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                            <img src="./toy6.png" alt="commodity"
                            className="absolute right-0 bottom-0"/>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3