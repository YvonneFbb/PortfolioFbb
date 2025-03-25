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

export default function GlobalNav () {
  return (
      <div className='fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4'>
        <div className='flex justify-between relative'>
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
  )
}