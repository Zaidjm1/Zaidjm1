import css from './assets/images/css.png'
import html from './assets/images/html.png'
import twcss from './assets/images/tailwindcss.png'
import js from './assets/images/js.png'
import react from './assets/images/react.png'
import project1 from './assets/images/hobbies.png'
import project2 from './assets/images/project2.png'

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
                    <img src={twcss} className='size-10 md:size-14' title='TailwindCSS'/>
                    <img src={react} className='size-10 md:size-14' title='ReactJS'/>
                </div>
            </div>

            <p className='mt-20 mb-20 text-[14px] md:text-[20px] font-bold text-center font-runic'>Personal Projects</p>

            <div className='md:flex md:justify-center md:gap-10'>
                <a href='https://zaiiiiiid.github.io/'><div className='font-runic text-[12px] md:text-[14px] mb-10'>
                    <div className='h-auto w-[360px] md:h-[400px] md:w-[600px] m-auto rounded-md border shadow-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors'>
                        <img src={project1}className='rounded size-auto relative m-auto w-[90%] mt-10'/>
                        <p className='text-center mt-10'>My first ever project. A website about me and my capstone project.</p>
                    </div>
                </div></a>

                <a href='https://zaiiiiiid.github.io/'><div className='font-runic text-[12px] md:text-[14px] mb-10'>
                    <div className='h-auto w-[360px] md:h-[400px] md:w-[600px] m-auto rounded-md border shadow-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors'>
                        <img src={project2}className='rounded size-auto relative m-auto w-[90%] mt-10'/>
                        <p className='text-center mt-10'>Mighty Tea website.</p>
                    </div>
                </div></a>
            </div>
        </div>
    )
}