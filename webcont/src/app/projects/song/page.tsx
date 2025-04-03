'use client'

import Image from "next/image"

export default function SongProject() {
    return (
        <div className="w-full flex flex-col font-serif">
            {/* 封面区块 */}
            <div className="h-[80vh] w-full overflow-hidden relative">
                <div className="absolute inset-0 w-[300%] animate-pan transform-gpu will-change-transform">
                    <Image
                        src="/song/song-bg.jpg"
                        alt="Song Printed Books Background"
                        className="h-full w-auto min-w-full object-cover"
                        priority
                        quality={100}
                        fill
                    />
                </div>
                <div className="absolute bottom-0 p-8 md:p-16 z-10">
                    <h1 className="text-4xl md:text-6xl text-white drop-shadow-lg">
                        Digital Song-Printed Books
                    </h1>
                </div>
            </div>

            {/* 项目概述区块 */}
            <div className="md:min-h-[60vh] w-full bg-white p-8 md:p-16 flex items-start">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 左栏 */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl mb-1">
                                Designer
                            </h3>
                            <p> Yifan Zhai / Yifei Wu </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl md:text-2xl mb-1">
                                Awards
                            </h3>
                            <p>
                                Platinum Originality - Excellence (2025) <br />
                                KDA - Bronze (2024) <br />
                                SLOC - Best Design (2024) <br />
                                KTK - Second Prize (2024) <br />
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl md:text-2xl mb-1">
                                Category
                            </h3>
                            <p>
                                Digital Humanities Web
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl md:text-2xl mb-1">
                                Paper
                            </h3>
                            <p>
                                From Text to Visual Parameters: A Study on the Design of Visualization <br />
                                Applications for Ancient Book Heritage in Media Transition
                            </p>
                        </div>
                    </div>

                    {/* 右栏 */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl mb-4">
                                Abstract
                            </h3>
                            <p className="text-justify">
                                In the process of media transformation from physical carriers to digital ones, the preservation and dissemination of traditional ancient book heritage faces many challenges, and innovative methods are urgently needed to achieve their digital protection and display. This study focuses on China's Song Dynasty block-printed calligraphy, an important cultural heritage object, and aims to explore how to achieve effective protection through digital visualization in the context of media changes. This study proposes a universal method for converting historical texts into digital interactive content. Through systematic visual compilation design and digital visualization, an immersive interactive experience is constructed to help users deeply understand the historical texts of Song Dynasty block-printed books. Structure and development process.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl md:text-2xl mb-4">
                                Value Delivered
                            </h3>
                            <p className="text-justify">
                                The research results show that the method of visual visualization of digital information of cultural heritage such as ancient books not only significantly improves its accessibility, but also opens up new ways for its inheritance in the interactive environment of digital applications. At the same time, this study further demonstrates the great potential of digital humanities visualization in promoting the understanding and dissemination of ancient book heritage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 视频区块 */}
            <div className="w-full bg-white">
                <div className="mx-auto">
                    {/* <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-left">
                        Project Video Showcase
                    </h2> */}
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        <video
                            src="/song/song.mp4"
                            controls
                            className="w-full h-auto shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* 背景介绍区块 */}
            <div className="min-h-[60vh] w-full bg-white p-8 md:p-32">
                <h2 className="font-bold text-2xl md:text-8xl mb-8">Background</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
                    {/* 左栏 */}
                    <div>
                        <p className="text-justify">
                            Chinese ancient book culture is an important part of world cultural heritage, known for its rich artistic forms and unique aesthetic value. It includes calligraphy, painting, engraving, printing styles, and literati design. Among them, Song Dynasty printed editions are especially notable for their refined carving, elegant binding, and layout aesthetics. They represent the peak of both functionality and artistry, and are widely regarded as exemplary rare books in Chinese history.
                        </p>
                    </div>

                    {/* 右栏 */}
                    <div>
                        <p className="text-justify">
                            Since the 1980s, China has made significant progress in the digitization of ancient books, transitioning from paper to digital formats. Digital preservation has become a key method for protecting cultural heritage, enabling broader collection, storage, and dissemination. However, challenges remain in maintaining the integrity and accessibility of this non-renewable cultural heritage, despite strong cultural and regional foundations.
                        </p>
                    </div>
                </div>

                {/* Scope of Work */}
                <div className="mt-16">
                    <h3 className="font-bold text-xl md:text-3xl mb-8">Scope of Work</h3>
                    <div className="relative">
                        <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
                            {Array.from({ length: 14 }, (_, i) => i + 1).map((item) => (
                                <div key={item} className="flex-shrink-0 w-28 text-center">
                                    <img
                                        src={`/song/works/${item}.png`}
                                        alt={`Work ${item}`}
                                        className="w-32 h-32 object-contain mx-auto"
                                    />
                                    <p className="mt-2 text-sm md:text-base">
                                        {[
                                            'Data Visualization', 'Concept Design', 'Creative Strategy',
                                            'Data Explore', 'Prototype', 'Development',
                                            'UI/UX', 'Visual Design', 'User Test',
                                            'Social Research', 'Documentation', 'Typesetting',
                                            'Competitive Product Analysis', 'Brand Research'
                                        ][item - 1]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 md:mt-16">
                    {/* 左栏 */}
                    <div>
                        <p className="text-justify">
                            Developing technologies and methods that are broadly applicable to the visualization and preservation of ancient books is a challenging endeavor.
                        </p>
                    </div>

                    {/* 右栏 */}
                    <div>
                        <p className="text-justify">
                            Taking the perspective of digital visualization web applications, we propose a user-centered design framework specifically focused on the digital visualization of Chinese book heritage.
                        </p>
                    </div>
                </div>
            </div>

            {/* 方案区块 */}
            <div className="min-h-[20vh] w-full bg-white p-8 md:p-32">
                <h2 className="font-bold text-2xl md:text-8xl mb-8">Solution</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
                    {/* 左栏 */}
                    <div>
                        <p className="text-justify">
                            This study systematically organizes and employs technological approaches to present the evolution of the regular script (kaishu) used in printed books of the Song dynasty through interactive and visual means, covering a time span from the Northern and Southern Dynasties to the Yuan dynasty.
                        </p>
                    </div>

                    {/* 右栏 */}
                    <div>
                        <p className="text-justify">
                            Using the website as a medium, it visualizes data along a timeline to illustrate both the historical development of regular script and the stylistic evolution of kaishu in Song dynasty printed texts.
                        </p>
                    </div>
                </div>
            </div>

            {/* 中断展示区块 */}
            <div className="w-full bg-white">
                <div className="w-full">
                    <div className="relative w-full">
                        <Image
                            alt="Break"
                            src="/song/break.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* 作品展示区块 1 */}
            <div className="w-full bg-white p-8 md:p-32">
                <div className="mx-auto flex flex-col md:grid md:grid-cols-3 gap-8">
                    {/* 移动端: 图片在下方 */}
                    <div className="order-2 md:order-1 md:col-span-2 flex justify-center md:justify-start">
                        <div className="w-full md:w-[80%]">
                            <Image
                                src="/song/show1.jpg"
                                alt="Feature Image"
                                className="w-full h-auto object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2 md:col-span-1 flex flex-col">
                        <h2 className="font-bold text-xl md:text-2xl mb-6">
                            Home Page
                        </h2>
                        <p className="text-justify">
                            The dynamic visualization and interactive design of the main interface are the core of this study's regular script visualization. Starting from the perspective of the "Eight Principles of the Character 'Yong'," the brushstrokes are combined using the principles of three-dimensional spatial illusion to form the character "宋" (Song). Each stroke is linked with interactive elements, allowing users to click on any stroke to access its corresponding Song Dynasty block print content page, where they can explore the font features, historical context, and cultural information. Additionally, the navigation bar enables users to quickly jump to the pages of different dynasties that interest them for further exploration.
                        </p>
                    </div>
                </div>
            </div>

            {/* 作品展示区块 2 */}
            <div className="w-full bg-white p-8 md:p-32">
                <div className="mx-auto flex flex-col md:grid md:grid-cols-3 gap-8">
                    <div className="order-1 md:order-1 md:col-span-1 flex flex-col">
                        <h2 className="font-bold text-xl md:text-2xl mb-6">
                            Timeline
                        </h2>
                        <p className="text-justify">
                            The entire interactive experience is threaded through with a timeline across the microsite, creating a wonderful journey through the history of the regular script in Song Dynasty printed books.
                        </p>
                    </div>

                    {/* 移动端: 图片在下方 */}
                    <div className="order-2 md:order-2 md:col-span-2 flex justify-center md:justify-end">
                        <div className="w-full md:w-[80%]">
                            <Image
                                src="/song/show2.jpg"
                                alt="Feature Image"
                                className="w-full h-auto object-cover"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}