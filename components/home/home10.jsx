import Image from 'next/image'
import React from 'react'
import { GoClock } from 'react-icons/go'

const Home10 = () => {
    return (
        <div className='mt-[94px] mb-[81px] max-w-[1632px] ml-auto mr-auto'>
            <div className='flex gap-3 items-center'>
                <p className='inter-font font-semibold text-[32px] leading-[48px]'>
                    Полезно знать
                </p>
                <button className='inter-font text-[20px] leading-[28px] text-[#468bf5] underline'>
                    Посмотеть все
                </button>
            </div>
            <div className='mt-[54px] w-full flex gap-6'>
                <div className='w-[531px] h-[233px] flex border border-[#e1e1e1] rounded-[32px] overflow-hidden'>
                    <Image src="/girl.png" alt="picture" width={227} height={233} objectFit='cover'/>
                    <div className='p-6'>
                        <p className='inter-font font-semibold text-[20px] leading-[28px] pr-2'>
                            Лучшие цены на детские товары возможны благодаря прямым поставкам от...  
                        </p>
                        <div className='mt-12 flex gap-2'>
                            <GoClock/>
                            <p className='inter-font text-[14px] leading-[17px]'>
                                14.07.2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[531px] h-[233px] flex border border-[#e1e1e1] rounded-[32px] overflow-hidden'>
                    <Image src="/card1.png" alt="picture" width={227} height={233} objectFit='cover'/>
                    <div className='p-6'>
                        <p className='inter-font font-semibold text-[20px] leading-[28px] pr-2'>
                            Лучшие цены на детские товары возможны благодаря прямым поставкам от...  
                        </p>
                        <div className='mt-12 flex gap-2'>
                            <GoClock/>
                            <p className='inter-font text-[14px] leading-[17px]'>
                                14.07.2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[531px] h-[233px] flex border border-[#e1e1e1] rounded-[32px] overflow-hidden'>
                    <Image src="/card2.png" alt="picture" width={227} height={233} objectFit='cover'/>
                    <div className='p-6'>
                        <p className='inter-font font-semibold text-[20px] leading-[28px] pr-2'>
                            Лучшие цены на детские товары возможны благодаря прямым поставкам от...  
                        </p>
                        <div className='mt-12 flex gap-2'>
                            <GoClock/>
                            <p className='inter-font text-[14px] leading-[17px]'>
                                14.07.2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home10