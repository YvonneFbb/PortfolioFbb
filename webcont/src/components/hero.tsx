'use client'

export default function HeroContent () {
  return (
    <div className='relative max-w-6xl mx-auto translate-x-[calc(20px)] whitespace-nowrap px-4
    transform -translate-y-12 md:-translate-y-12'>
      {/* Designer - 左上 */}
      <div className='mb-4 md:mb-6'>
        <h2 className='font-serif text-lg md:text-2xl tracking-custom-wider font-semibold'>
          Designer
        </h2>
      </div>

      {/* 核心姓名 */}
      <div className='flex justify-center'>
        <h1 className='font-serif text-3xl md:text-6xl tracking-custom-widest text-center'>
          ZHAI
          <span className='md:mx-12'> </span>
          YIFAN
        </h1>
      </div>

      {/* 機構信息 */}
      <div className='mt-4 md:mt-6 mr-6 md:mr-12 text-right'>
        <p className='font-serif text-xs md:text-sm tracking-custom-wider font-semibold'>
          From China Academy of Art
        </p>
      </div>
    </div>
  )
}
