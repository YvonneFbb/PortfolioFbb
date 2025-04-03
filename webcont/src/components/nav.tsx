'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const projectsList = [
  {
    id: 1,
    name: 'Sonoseal',
    href: '/projects/sonoseal',
    description: 'Voice-Interactive Website'
  },
  {
    id: 2,
    name: 'Digital Song-Printed Books',
    href: '/projects/song',
    description: 'Interactive Visualization Website'
  },
  {
    id: 3,
    name: 'Digital Motuo Orchid',
    href: '/projects/motuo',
    description: 'Visual Design of Digital Cultural and Creative Products'
  },
  {
    id: 4,
    name: 'Mooday',
    href: '/projects/mooday',
    description: 'Emotion Visualization App Design'
  },
  {
    id: 5,
    name: 'Blossoms',
    href: '/projects/blossoms',
    description: 'Brand Design'
  },
  {
    id: 6,
    name: 'Symbols on U.S Rount 66',
    href: '/projects/rount66',
    description: 'Information Visualization Design'
  }
]

export default function GlobalNav() {
  const [isFullscreenMenuOpen, setIsFullscreenMenuOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isFullscreenMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isFullscreenMenuOpen])

  return (
    <>
      <div className='fixed bottom-10 left-0 right-0 z-40 px-4'>
        <div className='flex justify-between max-w-5xl mx-auto relative text-[8px] md:text-base'>
          {/* 左侧按钮 */}
          <Link
            href={projectsList[(currentProject + 6 - 1) % 6].href}
            className='hover:text-red-400 transition-colors flex-1 max-w-[300px]'
          >
            <div className='flex justify-end'>
              <span className='inline mr-4'>
                {projectsList[(currentProject + 6 - 1) % 6].name}
              </span>
            </div>

            {/* 装饰线 - 与头部保持一致 */}
            <div className='absolute -bottom-[-1px] left-0 w-[calc(42vw)] md:w-[300px] md:block'>
              <DecorativeLine
                length={300}
                height={15}
              />
            </div>
          </Link>

          {/* 右侧按钮 */}
          <Link
            href={projectsList[(currentProject + 1) % 6].href}
            className='hover:text-red-400 transition-colors flex-1 max-w-[300px]'
          >
            <div className='flex justify-start'>
              <span className='inline ml-4'>
                {projectsList[(currentProject + 1) % 6].name}
              </span>
            </div>

            {/* 镜像翻转装饰线 */}
            <div className='absolute -bottom-[-1px] right-0 w-[calc(42vw)] md:w-[300px] md:block scale-x-[-1]'>
              <DecorativeLine
                length={300}
                height={15}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* 右上角汉堡按钮 - 移动到右上角 */}
      <button
        onClick={() => setIsFullscreenMenuOpen(!isFullscreenMenuOpen)}
        className='fixed right-8 top-6 z-50 group md:right-8 md:top-1/2 md:-translate-y-1/2'
      >
        <HamburgerIcon isActive={isFullscreenMenuOpen} />
      </button>

      {/* 全屏菜单 */}
      {isFullscreenMenuOpen && (
        <div className='fixed inset-0 z-40 bg-white'>
          <div className='h-full flex flex-col justify-center relative'>
            {/* 项目列表 - 修改移动端布局 */}
            <div
              className='absolute left-[calc(5%)] md:left-[calc(25%)] w-[90%] md:w-full max-w-xl px-4 space-y-8 md:space-y-16'
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              {projectsList.map((project, index) => (
                <div
                  key={project.id}
                  className='animate-menu-item opacity-0'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    href={project.href}
                    className='group flex items-baseline gap-2 md:gap-4 font-serif'
                    onClick={() => setIsFullscreenMenuOpen(false)}
                  >
                    {/* 序号 */}
                    <div className='text-gray-500 text-xs md:text-sm relative -top-1 md:-top-2 group-hover:text-red-400 transition-colors'>
                      No.{index + 1}
                    </div>

                    {/* 项目信息 */}
                    <div className='group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform'>
                      <h3 className='text-lg md:text-2xl tracking-custom-wider group-hover:text-red-400 transition-colors'>
                        {project.name}
                      </h3>
                      <p className='text-xs md:text-sm italic text-[#7c7c7c] mt-0.5 md:mt-1'>
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// 独立汉堡图标组件
const HamburgerIcon = ({ isActive }: { isActive: boolean }) => (
  <div className='relative h-4 w-5 md:h-5 md:w-6'>
    <span
      className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ${isActive ? 'rotate-45 top-1/2' : 'top-1'
        }`}
    />
    <span
      className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ${isActive ? '-rotate-45 bottom-1/2' : 'bottom-1'
        }`}
    />
  </div>
)

const DecorativeLine = ({
  length = 300,
  height = 15,
  className = ''
}: {
  length?: number
  height?: number
  className?: string
}) => (
  <svg
    viewBox={`0 0 ${length} ${height}`}
    className={`h-5 w-full ${className}`}
    preserveAspectRatio='none'
  >
    <line
      x1='0'
      y1={height - 1}
      x2={length}
      y2={height - 1}
      stroke='currentColor'
      strokeWidth='0.4'
      strokeLinecap='round'
      className='md:stroke-[0.9]'
    />
    <line
      x1='0'
      y1={height - 1}
      x2={length * 0.2}
      y2='0'
      stroke='currentColor'
      strokeWidth='0.4'
      strokeLinecap='round'
      className='md:stroke-[0.9]'
    />
  </svg>
)