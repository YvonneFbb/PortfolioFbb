'use client'

export default function About() {
  return (
    <section className='relative flex justify-center p-6 md:p-36 top-10'>
      {/* 新增姓名标题 */}
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='mb-4 space-y-2'>
          <h1 className='font-serif font-semibold text-xl md:text-2xl tracking-custom-wider text-left'>
            ZHAI YIFAN
          </h1>
          <p className='text-base md:text-xl'>
            CV:{' '}
            <a
              className='underline decoration-1 hover:text-red-400 transition-colors'
              href='/CV.pdf'
            >
              Yvonne's CV
            </a>
          </p>
        </div>

        {/* 调整后的双栏容器 - 增加最大高度和滚动功能 */}
        <div className='grid md:grid-cols-2 text-[#a0a0a0] gap-8 max-h-[calc(70vh)] md:max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide'>
          {/* 左侧栏 */}
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h2 className='font-serif text-base font-bold md:font-normal md:text-xl text-[#2b2b2b] tracking-custom-wide'>
                EDUCATION
              </h2>
              {/* 研究生 */}
              <div className='text-sm md:text-base'>
                <p>
                  <span className='text-[#5e5e5e]'>
                    Master's student in School of Innovation and Design at China
                    Academy of Art, Class of 2022
                  </span>
                </p>
                <p>Mentor: Youmin Yuan, September 2022 - March 2025</p>
                <p>
                  First author of one paper in Packaging Engineering
                  (北大核心/AMI)
                </p>
              </div>
              {/* 本科 */}
              <div className='mt-4 text-sm md:text-base'>
                <p>
                  <span className='text-[#5e5e5e]'>
                    {' '}
                    Undergraduate in School of Innovation and Design at China
                    Academy of Art, Class of 2018
                  </span>
                </p>
                <p>First-Class Scholarship of China Academy of Art (2019)</p>
              </div>
            </div>
            {/* 技能 */}
            <div className='space-y-4'>
              <h2 className='font-serif text-base font-bold md:text-xl md:font-normal text-[#2b2b2b] tracking-custom-wide'>
                SKILLS & SOFTWARE
              </h2>
              <div className='text-sm md:text-base'>
                <p>
                  <span className='text-[#5e5e5e]'>Design Tools: </span>Adobe
                  Creative Suite (Photoshop, Illustrator, InDesign, After
                  Effects), Figma, Sketch
                </p>
                <p>
                  <span className='text-[#5e5e5e]'>3D & Visualization: </span>
                  Blender, Rhino, Cinema 4D, Adobe
                </p>
                <p>
                  <span className='text-[#5e5e5e]'>Prototyping UI/UX: </span>
                  Figma
                </p>
                <p>
                  <span className='text-[#5e5e5e]'>Motion & Animation: </span>
                  After Effects
                </p>
                <p>
                  <span className='text-[#5e5e5e]'>Other Tools: </span>
                  Procreate, Notion, Office
                </p>
                <p>
                  <br />
                  <span className='text-[#5e5e5e]'>Skills: </span>Visual
                  Communication, Digital Visualization Design, Branding
                  UI/UX/Web Design,Typography, Layout Design
                </p>
              </div>
            </div>
          </div>

          {/* 右侧栏 */}
          <div className='space-y-4 text-sm md:text-base'>
            <h2 className='font-serif font-bold text-base md:font-normal md:text-xl text-[#2b2b2b] mt-6 md:mt-0 tracking-custom-wide'>
              AWARDS
            </h2>
            <p>
              Digital Design Category, Kunpeng Award, Shenzhen Global Design
              Award, Bronze Award (2024)
            </p>
            <p>
              9th Shanghai Library Open Data Competition, Application
              Development Contest, Best Design Award (2024)
            </p>
            <p>
              KTK Design Competition, Ul Design Category, Second Prize (2024)
            </p>
            <p>
              The 24th Platinum Originality International University Student
              Graphic Design Competition, Finalist (2024)
            </p>
            <p>
              2024 INNODESIGN PRIZE Global Innovative Design Competition,
              Communication Design Category, Bronze Award (2024)
            </p>
            <p>
              The 3rd Hong Kong Youth Design Competition, Bronze Award (2024)
            </p>
            <p>
              Motuo Orchid Cultural and Creative Design Competition, First Prize
              (2024)
            </p>
            <p>
              The 24th Platinum Originality International University Student Graphic Design Competition, Multimedia Design Excellence Award（2025）
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
