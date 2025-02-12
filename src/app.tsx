import css from './assets/images/css.png'
import html from './assets/images/html.png'
import twcss from './assets/images/tailwindcss.png'
import js from './assets/images/js.png'
import react from './assets/images/react.png'
import project1 from './assets/images/hobbies.png'
import project2 from './assets/images/project2.png'
import ts from './assets/images/ts.png'

export default function App(){
    return(
        <div>
            <div className="text-center mt-20 text-[26px] md:text-[34px] font-runic">
                <p className='font-bold'>Hello, I'm Michael Jay</p>
                <p className="text-center text-[18px] md:text-[24px] mt-[-10px] text-gray-500">A fresher from CvSU</p>
                <p className="text-center text-[12px] md:text-[18px] mt-10">I'm a front-end web developer!</p>
                <div className='flex justify-center mt-10 gap-4'>
                    <img src={css} className='size-10 md:size-14' title='CSS'/>
                    <img src={html} className='size-10 md:size-14' title='HTML'/>
                    <img src={js} className='size-10 md:size-14' title='JavaScript'/>
                    <img src={twcss} className='h-10 w-12 md:h-14 md:w-16' title='TailwindCSS'/>
                    <img src={react} className='size-10 md:size-14' title='ReactJS'/>
                </div>
            </div>

            <p className='mt-20 mb-20 text-[14px] md:text-[20px] font-bold text-center font-runic'>Personal Projects</p>

            <div className='md:flex md:justify-center md:gap-10 animate-fade-up'>
                <a href='https://zaiiiiiid.github.io/'><div className='group font-runic text-[12px] md:text-[14px] mb-10'>
                    <div className='h-auto max-w-[360px] md:h-[400px] md:max-w-[600px] m-auto rounded-md border shadow-lg bg-gray-100 hover:bg-gray-700 cursor-pointer transition-colors'>
                        <img src={project1} className='rounded max-h-[280px] relative m-auto max-w-[90%] mt-10 group-hover:scale-105 transition duration-500'/>
                        <p className='text-center mt-4 mb-4 md:mt-10 font-serif group-hover:hidden'>My first ever project. A website about me and my capstone project.</p>
                        <div className='flex justify-center mt-10 mb-10 gap-10 hidden group-hover:flex'>
                            <img src={html} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='HTML'/>
                            <img src={js} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='JavaScript'/>
                            <img src={twcss} className='h-6 w-10 md:h-10 md:w-14 animate-fade-up animate-duration-1000' title='TailwindCSS'/>
                            <img src={react} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='ReactJS'/>
                        </div>
                    </div>
                </div></a>

                <a href='https://zaidjm1.github.io/mighty-tea/'><div className='group font-runic text-[12px] md:text-[14px] mb-10'>
                    <div className='h-auto max-w-[360px] md:h-[400px] md:max-w-[600px] m-auto rounded-md border shadow-lg bg-gray-100 hover:bg-gray-700 cursor-pointer transition-colors'>
                        <img src={project2} className='rounded max-h-[280px] relative m-auto max-w-[90%] mt-10 group-hover:scale-105 transition duration-500'/>
                        <p className='text-center mt-4 mb-4 md:mt-10 font-serif group-hover:hidden'>Mighty Tea.</p>
                        <div className='flex justify-center mt-10 mb-10 gap-10 hidden group-hover:flex'>
                            <img src={ts} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='TypeScript'/>
                            <img src={html} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='HTML'/>
                            <img src={js} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='JavaScript'/>
                            <img src={twcss} className='h-6 w-10 md:h-10 md:w-14 animate-fade-up animate-duration-1000' title='TailwindCSS'/>
                            <img src={react} className='size-6 md:size-10 animate-fade-up animate-duration-1000' title='ReactJS'/>
                        </div>
                    </div>
                </div></a>
            </div>
        </div>
    )
}