import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiInstagramLogoLight } from 'react-icons/pi'
import { FaApple, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";


const Footer = () => {
    return (
        <div className='w-full bg-[#f5f5f5]'>
            <div className='max-w-[1632px] ml-auto mr-auto'>
                <div className='w-full pt-20 flex justify-between'>
                    <div>
                        <p className='mb-8 sf-font font-medium text-[24px] leading-8 text-[#020105]'>
                            Информация
                        </p>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            О компании
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Наши партнеры
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Блог
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            О наших акциях и скидках
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Пользовательское соглашение
                        </Link>
                    </div>

                    <div>
                        <p className='mb-8 sf-font font-medium text-[24px] leading-8 text-[#020105]'>
                            Поддержка и сервис
                        </p>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Вопросы и ответы
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Отзывы
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Контакты
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Для партнеров
                        </Link>
                    </div>

                    <div>
                        <p className='mb-8 sf-font font-medium text-[24px] leading-8 text-[#020105]'>
                            Каталог товаров
                        </p>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Кирпичи и блоки
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Цемент и сухие смеси
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Изоляционные материалы
                        </Link>
                        <Link href="/"
                            className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Сантехника
                        </Link>
                    </div>

                    <div>
                        <p className='mb-8 sf-font font-medium text-[24px] leading-8 text-[#020105]'>
                            Контакты
                        </p>
                        <p className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Телефон: +998 (71) 200-7-002
                        </p>
                        <p className='mt-4 sf-font text-lg leading-[28px] text-[#727474] block'>
                            Ташкент, ул. Коратош, 106
                        </p>
                        <div className='mt-[56px] flex items-center gap-6'>
                            <div className='w-[120px] h-[120px] bg-white flex justify-center items-center'>
                                <Image src="/qrcode.png" alt="qrcode" width={108} height={108} />
                            </div>
                            <p className='w-[246px] inter-font text-lg leading-6 text-[#9a999b]'>
                                Наведите камеру на QR-код, чтобы найти местоположение
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='mt-9' />
                <div className='py-10 flex justify-between'>
                    <div>
                        <div className='flex gap-6'>
                            <div className='w-[60px] h-[60px] rounded-full bg-white p-2.5'>
                                <PiInstagramLogoLight className='w-[40px] h-[40px] text-[#727474]' />
                            </div>
                            <div className='w-[60px] h-[60px] rounded-full bg-white p-2.5'>
                                <FaTelegramPlane className='w-[40px] h-[40px] text-[#a83af6]' />
                            </div>
                            <div className='w-[60px] h-[60px] rounded-full bg-white p-2.5'>
                                <FaFacebookF className='w-[40px] h-[40px] text-[#727474]' />
                            </div>
                        </div>
                        <p className='mt-8 inter text-lg leading-[28px] text-[#727474]'>
                            © 2022 ООО «Интернет магазин «Get it».
                        </p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p className='inter-font text-lg leading-6 text-[#020105] mr-4'>
                            Мобильное приложение:
                        </p>
                        <div className='w-[60px] h-[60px] rounded-full bg-white p-2.5'>
                            <FaApple className='w-[40px] h-[40px] text-[#727474]' />
                        </div>
                        <div className='w-[60px] h-[60px] rounded-full bg-white p-2.5'>
                            <TfiAndroid className='w-[40px] h-[40px] text-[#727474]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer