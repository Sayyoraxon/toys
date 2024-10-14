import React from 'react'

const Home5 = () => {
  return (
    <div className='relative mt-[168px] max-w-[1632px] h-[247px] rounded-3xl bg-[#8bb7ff] ml-auto mr-auto pt-[42px] pl-[51px]'>
        <div className='w-[600px]'>
            <p className='inter-font font-bold text-[32px] leading-10 text-white'>
                Заказывайте в новом приложении Маркета и получайте бонусы
            </p>
            <div className='mt-5 flex gap-[5px]'>
                <img src="./google-play.png" alt="google"/>
                <img src="./app-store.png" alt="google"/>
            </div>
        </div>
        <img src="./iPhone12pro1.png" alt="iphone"
        className='absolute bottom-0 right-[210px]'/>
        <img src="./iPhone12pro2.png" alt="iphone"
        className='absolute bottom-0 right-[80px]'/>
        <div className='w-[281px] h-[56px] rounded-2xl bg-[#3b007e] absolute bottom-10 right-[620px]'>
            <p className='text-center pt-4 inter-font text-base leading-6 font-black text-white'>
            -20% скидку на первый заказ
            </p>
        </div>
        <div className='w-[233px] h-[56px] rounded-2xl bg-[#f8f800] rotate-[-9deg] absolute bottom-24 right-[680px]'>
            <p className='text-center pt-4 inter-font text-base leading-6 font-black'>
            регистрируйся и получи
            </p>
        </div>
    </div>
  )
}

export default Home5