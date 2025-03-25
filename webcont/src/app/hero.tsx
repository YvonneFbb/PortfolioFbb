import Link from 'next/link'

const projectsNavigation = {
  left: {
    name: '交互装置',
    href: 'projects/test1'
  },
  right: {
    name: '参数化建筑',
    href: 'projects/test2'
  }
}

export default function HeroSection () {
  return (
    <section className='min-h-screen flex flex-col justify-center relative text-gray-800'>
      {/* 主文字內容 */}
      <div className='relative max-w-6xl mx-auto translate-x-[calc(20px)] whitespace-nowrap'>
        {/* Designer - 左上 */}
        <div className='mb-4 md:mb-6'>
          <h2 className='font-serif text-lg md:text-2xl tracking-custom-wider font-semibold'>
            Designer
          </h2>
        </div>

        {/* 核心姓名 - 絕對居中 */}
        <div className='flex justify-center'>
          <h1 className='font-serif text-3xl md:text-6xl tracking-custom-widest text-center'>
            ZHAI
            <span className='md:mx-12'> </span>
            YIFAN
          </h1>
        </div>

        {/* 機構信息 - 右下 */}
        <div className='mt-4 md:mt-6 mr-6 md:mr-12 text-right'>
          <p className='font-serif text-xs md:text-sm tracking-custom-wider font-semibold'>
            From China Academy of Art
          </p>
        </div>
      </div>

      {/* 下方按钮 */}
      <div className='absolute bottom-20 left-1/2 -translate-x-[calc(50%)] z-10 whitespace-nowrap'>
        <div className='flex space-x-16'>
          {/* 左侧按钮 */}
          <Link
            href={projectsNavigation.left.href}
            className='hover:text-red-400 transition-colors'
          >
            <div className='flex -translate-x-[calc(50%+80px)]'>
              <span className='inline'>{projectsNavigation.left.name}</span>
            </div>

            {/* 装饰线 - 与头部保持一致 */}
            <div className='absolute -bottom-[-1px] right-[450px] w-full hidden md:block'>
              <svg
                viewBox='0 0 300 15'
                className='h-5 w-50'
                preserveAspectRatio='none'
              >
                <line
                  x1='2'
                  y1='12'
                  x2='300'
                  y2='12'
                  stroke='currentColor'
                  strokeWidth='0.9'
                  strokeLinecap='round'
                />
                <line
                  x1='2'
                  y1='12'
                  x2='32'
                  y2='0'
                  stroke='currentColor'
                  strokeWidth='0.9'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </Link>

          {/* 右侧按钮 */}
          <Link
            href={projectsNavigation.right.href}
            className='hover:text-red-400 transition-colors'
          >
            <div className='flex translate-x-[calc(50%+90px)]'>
              <span className='inline'>{projectsNavigation.right.name}</span>
            </div>

            {/* 镜像翻转装饰线 */}
            <div className='absolute -bottom-[-1px] left-[450px] w-full hidden md:block transform scale-x-[-1]'>
              <svg
                viewBox='0 0 300 15'
                className='h-5 w-50'
                preserveAspectRatio='none'
              >
                <line
                  x1='2'
                  y1='12'
                  x2='300'
                  y2='12'
                  stroke='currentColor'
                  strokeWidth='0.9'
                  strokeLinecap='round'
                />
                <line
                  x1='2'
                  y1='12'
                  x2='32'
                  y2='0'
                  stroke='currentColor'
                  strokeWidth='0.9'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}