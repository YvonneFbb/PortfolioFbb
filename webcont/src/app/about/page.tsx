// components/about.tsx 修改后的版本
export default function About () {
  return (
    <section className='min-h-[calc(100vh)] flex justify-center p-16 md:p-36 md:mt-12 '>
      {/* 新增姓名标题 */}
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <div className='mb-4 space-y-4'>
          <h1 className='font-serif text-2xl md:text-3xl tracking-custom-wider text-left'>
            ZHAI YIFAN
          </h1>
          <p className=''>
            CV:{' '}
            <a className='underline' href='/CV.pdf'>
              Yvonne's CV
            </a>
          </p>
        </div>

        {/* 调整后的双栏容器 */}
        <div className='grid md:grid-cols-2 text-[#7c7c7c]'>
          {/* 左侧栏 */}
          <div className='space-y-6'>
            <div>
              <h2 className='font-serif text-2xl text-black'>EDUCATION</h2>
              {/* 研究生 */}
              <div className=''>
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
              <div className='mt-4'>
                <p>
                  Undergraduate in School of Innovation and Design at China
                  Academy of Art, Class of 2018
                </p>
                <p>First-Class Scholarship of China Academy of Art (2019)</p>
              </div>
            </div>
            {/* 技能 */}
            <div>
              <h2 className='font-serif text-2xl text-black'>
                SKILLS & SOFTWARE
              </h2>
              <div className=''>
                <p>
                  Design Tools: Adobe Creative Suite (Photoshop, Illustrator,
                  InDesign, After Effects), Figma. Sketch. CorelDRAW
                </p>
                <p>3D & Visualization: Blender, Rhino, Cinema 4D, KeyShot</p>
                <p>Prototyping &U/UX: Figma, Adobe xD, Axure RP Marvel</p>
                <p>Motion & Animation: After Effects, Principle, Lottie</p>
                <p>Other Tools: Procreate, Canva, Miro, Notion</p>
                <p>
                  Skills: Visual Communication, Typography, Layout Design,
                  Branding, U//UX Design, Data Visualization, Interactive Design
                </p>
              </div>
            </div>
          </div>

          {/* 右侧栏 */}
          <div className='space-y-6 '>
            <h2 className='font-serif text-2xl text-black mt-12 md:mt-0'>
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
              StudentGraphic Design Competition, Finalist (2024)
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
