import Image from 'next/image'
import React from 'react'

const Home4 = () => {
    return (
        <div className='mt-[94px] max-w-[1632px] ml-auto mr-auto'>
            <div className='flex gap-3 items-center'>
                <p className='inter-font font-semibold text-[32px] leading-[48px]'>
                    Хиты продаж
                </p>
                <button className='inter-font text-[20px] leading-[28px] text-[#468bf5] underline'>
                    Все товары
                </button>
            </div>
            <div className='mt-[42px] w-full gap-6 flex flex-wrap gap-6'>
                <div className='w-[252px] h-[107px] bg-[#f5f5f5] rounded-[16px] pt-5 px-3 flex items-center gap-2'>
                    <div className='w-[66px] h-[66px] rounded-full bg-white overflow-hidden'>
                        <img src="/car.png" alt="car"
                            className='object-cover w-full h-full' />
                    </div>
                    <p className='sf-font font-semibold text-[20px] w-[148px] leading-6'>
                        Радиоуправля емые машинки
                    </p>
                </div>
                <div className='w-[252px] h-[107px] bg-[#f5f5f5] rounded-[16px] pt-5 px-3 flex items-center gap-2'>
                    <div className='w-[66px] h-[66px] rounded-full bg-white overflow-hidden'>
                        <img src="/kitchen.png" alt="car"
                            className='object-cover w-full h-full' />
                    </div>
                    <p className='sf-font font-semibold text-[20px] w-[148px] leading-6'>
                        Кухонные наборы
                    </p>
                </div>
                <div className='w-[252px] h-[107px] bg-[#f5f5f5] rounded-[16px] pt-5 px-3 flex items-center gap-2'>
                    <div className='w-[66px] h-[66px] rounded-full bg-white overflow-hidden'>
                        <img src="./duck.png" alt="car"
                            className='object-cover w-full h-full' />
                    </div>
                    <p className='sf-font font-semibold text-[20px] w-[148px] leading-6'>
                        Игрушки для купания
                    </p>
                </div>
                <div className='w-[252px] h-[107px] bg-[#f5f5f5] rounded-[16px] pt-5 px-3 flex items-center gap-2'>
                    <div className='w-[66px] h-[66px] rounded-full bg-white overflow-hidden'>
                        <img src="./rolic.png" alt="car"
                            className='object-cover w-full h-full' />
                    </div>
                    <p className='sf-font font-semibold text-[20px] w-[148px] leading-6'>
                        Спортивные товары
                    </p>
                </div>

                <div className='w-[252px] h-[107px] bg-[#f5f5f5] rounded-[16px] pt-5 px-3 flex items-center gap-2'>
                    <div className='w-[66px] h-[66px] rounded-full bg-white overflow-hidden'>
                        <img src="./doll.png" alt="car"
                            className='object-cover w-full h-full' />
                    </div>
                    <p className='sf-font font-semibold text-[20px] w-[148px] leading-6'>
                        Куклы
                    </p>
                </div>
                <div className='w-[252px] h-[107px] bg-[#f5f5f5] rounded-[16px] pt-5 px-3 flex items-center gap-2'>
                    <div className='w-[66px] h-[66px] rounded-full bg-white overflow-hidden'>
                        <img src="/kitchen.png" alt="car"
                            className='object-cover w-full h-full' />
                    </div>
                    <p className='sf-font font-semibold text-[20px] w-[148px] leading-6'>
                        Кухонные наборы
                    </p>
                </div>
            </div>

            <div className='flex flex-wrap w-full gap-6 mt-[65px]'>
                <div className='w-[252px] h-[366px]'>
                    <img src="./bear.png" alt="bear"
                        className='w-full h-[260px] rounded-[32px] border border-[#e1e1e1] object-cover' />
                    <div className='mt-2 w-full h-[98px] rounded-[32px] border border-[#e1e1e1] flex gap-2 justify-center items-center'>
                        <div className='w-[161px]'>
                            <p className='inter-font font-medium text-base leading-5'>
                                Плюшевая игрушка “Медвежонок”
                            </p>
                            <p className='mt-1.5 inter-font font-medium text-lg leading-5 text-[#468bf5]'>
                                67 000 usz
                            </p>
                        </div>
                        <button className='w-12 h-12 rounded-full bg-[#a83af6] p-[12px]'>
                            <img src="./basket.svg" alt="basket" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
                <div className='w-[252px] h-[366px]'>
                    <img src="./gun.png" alt="bear"
                        className='w-full h-[260px] rounded-[32px] border border-[#e1e1e1] object-cover' />
                    <div className='mt-2 w-full h-[98px] rounded-[32px] border border-[#e1e1e1] flex gap-2 justify-center items-center'>
                        <div className='w-[161px]'>
                            <p className='inter-font font-medium text-base leading-5'>
                                Плюшевая игрушка “Медвежонок”
                            </p>
                            <p className='mt-1.5 inter-font font-medium text-lg leading-5 text-[#468bf5]'>
                                67 000 usz
                            </p>
                        </div>
                        <button className='w-12 h-12 rounded-full bg-[#a83af6] p-[12px]'>
                            <img src="./basket.svg" alt="basket" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
                <div className='w-[252px] h-[366px]'>
                    <img src="./puzir.png" alt="bear"
                        className='w-full h-[260px] rounded-[32px] border border-[#e1e1e1] object-cover' />
                    <div className='mt-2 w-full h-[98px] rounded-[32px] border border-[#e1e1e1] flex gap-2 justify-center items-center'>
                        <div className='w-[161px]'>
                            <p className='inter-font font-medium text-base leading-5'>
                                Плюшевая игрушка “Медвежонок”
                            </p>
                            <p className='mt-1.5 inter-font font-medium text-lg leading-5 text-[#468bf5]'>
                                67 000 usz
                            </p>
                        </div>
                        <button className='w-12 h-12 rounded-full bg-[#a83af6] p-[12px]'>
                            <img src="./basket.svg" alt="basket" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
                <div className='w-[252px] h-[366px]'>
                    <img src="./gun2.png" alt="bear"
                        className='w-full h-[260px] rounded-[32px] border border-[#e1e1e1] object-cover' />
                    <div className='mt-2 w-full h-[98px] rounded-[32px] border border-[#e1e1e1] flex gap-2 justify-center items-center'>
                        <div className='w-[161px]'>
                            <p className='inter-font font-medium text-base leading-5'>
                                Плюшевая игрушка “Медвежонок”
                            </p>
                            <p className='mt-1.5 inter-font font-medium text-lg leading-5 text-[#468bf5]'>
                                67 000 usz
                            </p>
                        </div>
                        <button className='w-12 h-12 rounded-full bg-[#a83af6] p-[12px]'>
                            <img src="./basket.svg" alt="basket" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
                <div className='w-[252px] h-[366px]'>
                    <img src="./bear.png" alt="bear"
                        className='w-full h-[260px] rounded-[32px] border border-[#e1e1e1] object-cover' />
                    <div className='mt-2 w-full h-[98px] rounded-[32px] border border-[#e1e1e1] flex gap-2 justify-center items-center'>
                        <div className='w-[161px]'>
                            <p className='inter-font font-medium text-base leading-5'>
                                Плюшевая игрушка “Медвежонок”
                            </p>
                            <p className='mt-1.5 inter-font font-medium text-lg leading-5 text-[#468bf5]'>
                                67 000 usz
                            </p>
                        </div>
                        <button className='w-12 h-12 rounded-full bg-[#a83af6] p-[12px]'>
                            <img src="./basket.svg" alt="basket" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
                <div className='w-[252px] h-[366px]'>
                    <img src="./picture.png" alt="bear"
                        className='w-full h-[260px] rounded-[32px] border border-[#e1e1e1] object-cover' />
                    <div className='mt-2 w-full h-[98px] rounded-[32px] border border-[#e1e1e1] flex gap-2 justify-center items-center'>
                        <div className='w-[161px]'>
                            <p className='inter-font font-medium text-base leading-5'>
                                Плюшевая игрушка “Медвежонок”
                            </p>
                            <p className='mt-1.5 inter-font font-medium text-lg leading-5 text-[#468bf5]'>
                                67 000 usz
                            </p>
                        </div>
                        <button className='w-12 h-12 rounded-full bg-[#a83af6] p-[12px]'>
                            <img src="./basket.svg" alt="basket" className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4