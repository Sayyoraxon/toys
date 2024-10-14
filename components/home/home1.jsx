import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const Home1 = () => {
    return (
        <div className='mt-11 max-w-[1632px] ml-auto mr-auto flex gap-6'>
            <div className='relative w-[1218px] h-[432px] bg-gradient-to-r from-[#5095ff] to-[#7a3af5] rounded-3xl'>
                <div className='pl-24 pt-20 w-[750px]'>
                    <p className='inter-font font-medium text-[52px] leading-[56px] text-white'>
                        Сезон распродажи игрушек детям до 3 лет
                    </p>
                    <p className='mt-2 inter-font text-[24px] leading-8 text-white'>
                        Сезон распродажи игрушек детям до 3 лет
                    </p>
                    <button className='mt-8 sf-font w-[205px] h-[53px] rounded-[100px] bg-white text-[#a83af6] text-lg font-medium'>
                        Посмотеть каталог
                    </button>
                </div>
                <img className='absolute bottom-0 right-0'
                    src="./toys.png" alt="toys" />
                <BsArrowLeft className="bg-white text-[24px] w-12 h-12 p-3 rounded-full absolute left-6 top-1/2 -translate-y-1/2" />
                <BsArrowRight className="bg-white text-[24px] w-12 h-12 p-3 rounded-full absolute right-6 top-1/2 -translate-y-1/2" />
            </div>
            <div className="relative p-6 w-[390px] h-[432px] rounded-3xl border border-[#e1e1e1]">
                <div className="w-[30px] h-[30px] p-[7px] bg-[#f4f5f5] rounded-full absolute top-[30px] right-8">
                    <Image src="/Heart.svg" alt="heart" width={16} height={16}/>
                </div>
                <p className="uppercase inter-font font-medium text-[24px] leading-7">
                    товар дня
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <p className="inter-font font-medium text-base leading-5">
                        Плюшевая игрушка “Медвежонок”
                    </p>
                    <div className="w-[144px] h-[37px] rounded-lg bg-[#f4f5f5] flex">
                        <div className="w-[76px] pl-3.5 pt-2 inter-font text-base leading-5">
                            Cкидка
                        </div>
                        <div className="bgImage w-[68px] h-[37px] flex items-center justify-center rounded-r-[9px]">
                            <p className="inter-font font-bold text-[14px] leading-4 text-white">
                                -90%
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mt-1.5 inter-font font-medium text-[18px] leading-5 text-[#468bf5]">
                    67 000 usz
                </p>
                <Image src="/bear.png" alt="commodity" width={326} height={214} 
                className="mt-8 object-cover"/>
            </div>
        </div>
    )
}

export default Home1