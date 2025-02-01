// components/Header.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { User, Mail, MessageSquare, Book } from 'lucide-react'

export default function Header () {
  const [showWechat, setShowWechat] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭微信弹窗
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setShowWechat(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 导航项配置
  const leftItem = {
    name: 'About Me',
    href: '#about',
    icon: <User className='h-5 w-5 md:hidden' />
  }

  const rightItems = [
    {
      name: 'Gmail',
      href: 'mailto:your.email@gmail.com',
      icon: <Mail className='h-5 w-5 md:hidden' />,
      type: 'link'
    },
    {
      name: 'Wechat',
      icon: <MessageSquare className='h-5 w-5 md:hidden' />,
      type: 'popover'
    },
    {
      name: 'Redbook',
      href: 'https://www.xiaohongshu.com',
      icon: <Book className='h-5 w-5 md:hidden' />,
      type: 'link'
    }
  ]

  return (
    <header className='fixed top-0 inset-x-0 z-50'>
      <nav className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* 左侧 - About Me */}
          <div className='flex items-center'>
            <a
              href={leftItem.href}
              className='relative group font-serif font-boldness-600 tracking-custom-wider text-gray-800'
            >
              <div className='flex items-center space-x-1'>
                {leftItem.icon}
                <span className='hidden md:inline'>{leftItem.name}</span>
              </div>

              {/* 静态装饰线 */}
              <div className='absolute -bottom-[-2px] left-0 w-full hidden md:block'>
                <svg
                  viewBox='0 0 135 15'
                  className='h-5 w-50'
                  preserveAspectRatio='none'
                >
                  <line
                    x1='2'
                    y1='12'
                    x2='110'
                    y2='12'
                    stroke='currentColor'
                    strokeWidth='0.9'
                    strokeLinecap='round'
                  />
                  <line
                    x1='110'
                    y1='12'
                    x2='95'
                    y2='5'
                    stroke='currentColor'
                    strokeWidth='0.9'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* 右侧 - 社交链接 */}
          <div className='flex items-center'>
            {rightItems.map((item, index) => (
              <div key={item.name} className='flex items-center'>
                <div
                  className='relative'
                  ref={item.type === 'popover' ? popoverRef : null}
                >
                  {item.type === 'link' ? (
                    <a
                      href={item.href}
                      className='group font-serif font-boldness-600 tracking-custom-wider text-gray-800 hover:text-black transition-colors'
                      onClick={e => {
                        if (item.name === 'Gmail') e.preventDefault()
                      }}
                    >
                      <div className='inline-flex items-center space-x-1'>
                        {item.icon}
                        <span className='hidden md:inline'>{item.name}</span>
                      </div>
                      <div className='absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full' />
                    </a>
                  ) : (
                    <button
                      onClick={() => setShowWechat(!showWechat)}
                      className='group font-serif font-boldness-600 tracking-custom-wider text-gray-800 hover:text-black transition-colors'
                    >
                      <div className='inline-flex items-center space-x-1'>
                        {item.icon}
                        <span className='hidden md:inline'>{item.name}</span>
                      </div>
                      <div className='absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full' />
                    </button>
                  )}

                  {/* 微信弹窗 */}
                  {item.name === 'Wechat' && showWechat && (
                    <div className='absolute top-full right-0 mt-3 w-48 p-4 bg-white rounded-lg shadow-xl border animate-fade-in'>
                      <img
                        src='/images/wechat-qr.png'
                        alt='WeChat QR Code'
                        className='w-full h-auto'
                      />
                    </div>
                  )}
                </div>

                {/* 分隔线（最后一个项目不显示） */}
                {index !== rightItems.length - 1 && (
                  <span className='text-gray-800 font-boldness-600 mx-2 md:mx-3 select-none'>
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
