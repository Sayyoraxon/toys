import React from 'react'

const Home2 = () => {
    return (
        <div className='mt-20 max-w-[1632px] flex flex-wrap justify-between ml-auto mr-auto'>
            <div className='w-[363px] h-[174px] text-center flex flex-col justify-center items-center grow'>
                <img src="./delivery.svg" alt="icon" />
                <p className='px-[43px] mt-2.5 sf-font font-semibold text-[28px] leading-8'>
                    Бесплатная доставка
                </p>
                <p className='px-[71px] sf-font text-base leading-5 text-[#0f104a]'>
                    maishiy texnika mahsulotlari uchun qulay onlayn to'lov
                </p>
            </div>
            <div className='w-[363px] h-[174px] text-center flex flex-col justify-center items-center grow'>
                <img src="./quality.svg" alt="icon" />
                <p className='px-[43px] mt-2.5 sf-font font-semibold text-[28px] leading-8'>
                    100% гарантия качества
                </p>
                <p className='px-[71px] sf-font text-base leading-5 text-[#0f104a]'>
                    mahsulotning kafolati va qaytarilishi haqida hamma narsani bilib oling
                </p>
            </div>
            <div className='w-[363px] h-[174px] text-center flex flex-col justify-center items-center grow'>
                <img src="./contract.svg" alt="icon" />
                <p className='px-[43px] mt-2.5 sf-font font-semibold text-[28px] leading-8'>
                    Имеется рассрочка
                </p>
                <p className='px-[71px] sf-font text-base leading-5 text-[#0f104a]'>
                    Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
                </p>
            </div>
            <div className='w-[363px] h-[174px] text-center flex flex-col justify-center items-center grow'>
                <img src="./payment.svg" alt="icon" />
                <p className='px-[43px] mt-2.5 sf-font font-semibold text-[28px] leading-8'>
                    Все виды оплаты
                </p>
                <p className='px-[71px] sf-font text-base leading-5 text-[#0f104a]'>
                    Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
                </p>
            </div>
        </div>
    )
}

export default Home2