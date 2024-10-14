import { CiLocationOn } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";


const Header = () => {
    return (
        <div>
            <div className="bg-[#f4f5f5]">
                <div className='max-w-[1632px] ml-auto mr-auto h-10 flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <CiLocationOn />
                        <p className="font-normal text-[14px] leading-[20px] text-[#727474] inter-font mr-1">
                            Город:
                        </p>
                        <p className="font-normal text-[14px] leading-[20px] inter-font text-[#020105] underline">
                            Ташкент
                        </p>
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="flex gap-1.5 items-center">
                            <PiInstagramLogoLight />
                            <p className="inter-font text-[14px] leading-5 text-[#727474]">
                                home24.uz
                            </p>
                        </div>

                        <div className="flex gap-1.5 items-center">
                            <PiTelegramLogoThin />
                            <p className="inter-font text-[14px] leading-5 text-[#727474]">
                                t.me/home24uz
                            </p>
                        </div>

                        <p className="text-base leading-6 font-semibold text-[#5095ff] tt-font">
                            +998 71 200 7 002
                        </p>

                        <select className="bg-inherit text-[14px] leading-5 text-[#727474]">
                            <option value="rus">Рус</option>
                            <option value="uzb">O'zb</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className="mt-5 flex items-center justify-between max-w-[1632px] ml-auto mr-auto gap-[38px]">
                <p className="font-black text-[32px] leading-10 mr-[83px]">
                    Get it .
                </p>
                
                    <div className="w-[130px] h-11 flex justify-center items-center gap-2 rounded bg-[rgba(168,58,246,0.08)]">
                        <FaBars style={{ color: "#A83AF6" }} />
                        <p className="inter-font text-lg leading-6 text-[#a83af6]">
                            Каталог
                        </p>
                    </div>
                    <div className="pl-4 max-w-[671px] h-11 rounded flex justify-between items-center border border-[#ebebeb] overflow-hidden">
                        <input type='text' placeholder="Искать"
                            className="w-[560px] text-base inter-font leading-7 outline-none" />
                        <div className="w-[110px] h-11 bg-[#f8f8f8] flex justify-center items-center">
                            <LuSearch style={{ fontSize: "20px" }} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <GoArrowSwitch style={{ fontSize: "24px" }} />
                        <p className="inter-font text-base leading-6 text-[#020105]">
                            Сравнение
                        </p>
                    </div>

                    <div className="ml-0.5 flex items-center gap-2">
                        <Image src="./Heart.svg" alt="heart" width={24} height={24} />
                        <p className="inter-font text-base leading-6 text-[#020105]">
                            Избранное
                        </p>
                    </div>

                    <div className="ml-0.5 flex items-center gap-2">
                        <Image src="./Bag.svg" alt="heart" width={24} height={24} />
                        <p className="inter-font text-base leading-6 text-[#020105]">
                            Корзина
                        </p>
                    </div>

                    <div className="ml-0.5 flex items-center gap-2">
                        <Image src="./Profile.svg" alt="heart" width={24} height={24} />
                        <p className="inter-font text-base leading-6 text-[#020105]">
                            Войти
                        </p>
                    </div>
                
            </div>

            <div className="mt-[22px] max-w-[1632px] h-[26px] ml-auto mr-auto flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Image src="/coronw.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Подарки
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/Sofa.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Мебель
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/tech.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Техника
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/dish.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Текстиль
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/dish.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Посуда
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/plumb.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Сантехника
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/building.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Стройматириалы
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/stationary.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Канцтовары
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src="/sale.svg" alt="icon" width={24} height={24} />
                    <p className="text-lg leading-[26px] inter-font text-[#727474]">
                        Акции
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <p className="text-lg leading-[26px] inter-font text-[#5095ff]">
                        Ещё
                    </p>
                    <IoIosArrowDown style={{fontSize: "24px", color: "#5095ff"}}/>
                </div>
            </div>
        </div>
    )
}

export default Header