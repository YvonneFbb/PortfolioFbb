// components/about.tsx 修改后的版本
export default function About () {
  return (
    <section className='min-h-[calc(100vh)] flex justify-center p-8 mt-8 md:p-36 md:mt-8'>
      {/* 新增姓名标题 */}
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='mb-4 space-y-2'>
          <h1 className='font-serif font-semibold text-xl md:text-2xl tracking-custom-wider text-left'>
            ZHAI YIFAN
          </h1>
          <p className='text-base md:text-xl'>
            CV:{' '}
            <a className='underline decoration-1 hover:text-red-400 transition-colors' href='/CV.pdf'>
              Yvonne's CV
            </a>
          </p>
        </div>

        {/* 调整后的双栏容器 */}
        <div className='grid md:grid-cols-2 text-[#a0a0a0] gap-8'>
          {/* 左侧栏 */}
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h2 className='font-serif text-base font-bold md:font-normal md:text-xl text-[#2b2b2b] tracking-custom-wide'>EDUCATION</h2>
              {/* 研究生 */}
              <div className='text-sm md:text-base'>
                <p>
                  Master's student in School ofInnovation and Design at China
                  Academy of Art, Class of 2022
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
                  Undergraduate in School of Innovation and Design at China
                  Academy of Art, Class of 2018
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
                  Design Tools: Adobe Creative Suite (Photoshop, Illustrator,
                  InDesign, After Effects), Figma, Sketch, CorelDRAW
                </p>
                <p>3D & Visualization: Blender, Rhino, Cinema 4D, KeyShot</p>
                <p>Prototyping UI/UX: Figma, Adobe xD, Axure RP Marvel</p>
                <p>Motion & Animation: After Effects, Principle, Lottie</p>
                <p>Other Tools: Procreate, Canva, Miro, Notion</p>
                <p>
                  Skills: Visual Communication, Typography, Layout Design,
                  Branding, UI/UX Design, Data Visualization, Interactive Design
                </p>
              </div>
            </div>
          </div>

          {/* 右侧栏 */}
          <div className='space-y-4 text-sm md:text-base'>
            <h2 className='font-serif font-bold text-base md:font-normal md:text-xl text-[#2b2b2b] mt-12 md:mt-0 tracking-custom-wide'>
              AWARD
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
              The 24th Platinum Originality International University
              Student Graphic Design Competition, Finalist (2024)
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
          </div>
        </div>
      </div>
    </section>
  )
}
