import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

const Home9 = () => {
  return (
    <div className='mt-[100px] max-w-[1632px] ml-auto mr-auto'>
        <div className='relative w-full h-[357px] flex justify-between px-[106px] bg-gradient-to-r from-[#5095ff] to-[#7a3af5] rounded-[32px]'>
            <div className='w-[600px] pt-[90px] realtive z-10'>
                <p className='sf-font-bold text-[40px] leading-[48px] text-white'>
                    игрушки из мультфильма “История игрушек”
                </p>
                <button className='mt-[23px] w-[234px] h-[53px] rounded-[100px] bg-white sf-font font-medium text-lg leading-[21px] text-[#a83af6]'>
                    Посмотреть и выбрать
                </button>
            </div>
            <img src="./history-toys.png" alt="toys"
            className='relative z-10'/>
            <img src="./toystory.png" alt="toys"
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        <div className='mt-6 flex gap-6 w-full'>
            <div className='relative w-[528px] h-[252px] rounded-[32px] bg-[#ffb28f] pt-[56px] pl-12 overflow-hidden'>
                <p className='w-[200px] inter-font font-semibold text-[28px] leading-8 text-white'>
                    Распродажи и скидки 
                </p>
                <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                <img src="./sale.png" alt="toys"
                className='absolute bottom-0 right-0'/>
            </div>
            <div className='relative w-[528px] h-[252px] rounded-[32px] bg-[#ffb28f] pt-[56px] pl-12 overflow-hidden'>
                <p className='w-[200px] inter-font font-semibold text-[28px] leading-8 text-white'>
                    Распродажи и скидки 
                </p>
                <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                <img src="./sale.png" alt="toys"
                className='absolute bottom-0 right-0'/>
            </div>
            <div className='relative w-[528px] h-[252px] rounded-[32px] bg-[#ffb28f] pt-[56px] pl-12 overflow-hidden'>
                <p className='w-[200px] inter-font font-semibold text-[28px] leading-8 text-white'>
                    Распродажи и скидки 
                </p>
                <MdArrowForwardIos className="mt-6 w-11 h-11 rounded-full bg-white p-[14px]" />
                <img src="./sale.png" alt="toys"
                className='absolute bottom-0 right-0'/>
            </div>
        </div>
    </div>
  )
}

export default Home9