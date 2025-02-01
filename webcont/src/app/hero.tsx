// components/HeroSection.tsx
export default function HeroSection () {
  return (
    <section className='min-h-screen flex flex-col justify-center relative text-gray-800'>
      {/* 主文字內容 */}
      <div className='relative max-w-6xl mx-auto'>
        {/* Designer - 左上 */}
        <div className='mb-4 md:mb-6'>
          <h2 className='font-serif text-lg md:text-2xl tracking-custom-wider font-boldness-600'>
            Designer
          </h2>
        </div>

        {/* 核心姓名 - 絕對居中 */}
        <div className='flex justify-center'>
          <h1 className='font-serif text-3xl md:text-6xl tracking-custom-widest text-center whitespace-nowrap'>
            ZHAI
            <span className='md:mx-12'> </span>
            YIFAN
          </h1>
        </div>

        {/* 機構信息 - 右下 */}
        <div className='mt-4 md:mt-6 mr-6 md:mr-12 text-right'>
          <p className='font-serif text-xs md:text-sm tracking-custom-wider font-boldness-600'>
            From China Academy of Art
          </p>
        </div>
      </div>
    </section>
  )
}
