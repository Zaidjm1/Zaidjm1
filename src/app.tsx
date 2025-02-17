import { TypeAnimation } from 'react-type-animation';
import css from './assets/images/css.png'
import html from './assets/images/html.png'
import twcss from './assets/images/tailwindcss.png'
import js from './assets/images/js.png'
import react from './assets/images/react.png'
import project1 from './assets/images/hobbies.png'
import project2 from './assets/images/project2.png'
import ts from './assets/images/ts.png'
import bs from './assets/images/bootstrap.png'
import mysql from './assets/images/mysql.png'
import sql from './assets/images/sql.png'
import phy from './assets/images/phyton.png'
import git from './assets/images/git.png'
import github from './assets/images/github.png'
import excel from './assets/images/msexcel.png'
import vs from './assets/images/vs.png'
import vscode from './assets/images/vscode.png'

export default function App(){
    return(
        <div>
            <div className="mt-[200px] text-center text-[26px] md:text-[34px] font-runic h-[100vh]">
            <p>Hi, I am Michael Jay</p>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Developer',
                    3000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Programmer',
                    3000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontWeight: 'bold', fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
            />
                <p className="text-center text-[18px] md:text-[24px] mt-[-10px] text-gray-500">from CvSU - Tanza</p>
                <p className="text-center text-[12px] md:text-[18px] mt-10">Powered by</p>
                <div className='flex justify-center mt-10 gap-6 md:gap-10'>
                    <img src={ts} className='size-8 md:size-14' title='TypeScript'/>
                    <img src={html} className='size-8 md:size-14' title='HTML'/>
                    <img src={js} className='size-8 md:size-14' title='JavaScript'/>
                    <img src={twcss} className='h-8 w-12 md:h-14 md:w-16' title='TailwindCSS'/>
                    <img src={react} className='size-8 md:size-14' title='ReactJS'/>
                </div>
            </div>

            <div className='h-[100vh]'>
                <p className='mb-20 text-[16px] md:text-[30px] font-bold text-center font-bio'>SKILLS</p>
                <p className='text-center text-[12px] md:text-[20px] font-mono mb-10'>Here are the skills that I am highly proficient with.</p>

                <div className='flex justify-center gap-6'>
                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={react} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>React</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={ts} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[8px] md:text-[10px]'>TypeScript</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={js} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[8px] md:text-[10px]'>JavaScript</p>
                    </div>
                    
                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={html} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>HTML</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={css} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>CSS</p>
                    </div>
                </div>

                <div className='flex justify-center gap-6 mt-10'>
                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={twcss} className='h-8 w-[40px] md:h-12 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>Tailwind</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={sql} className='h-8 w-[40px] md:h-10 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>SQL</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={mysql} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>MySQL</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={bs} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[8px] md:text-[10px]'>Bootstrap</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={phy} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>Phyton</p>
                    </div>
                </div>

                <p className='text-center text-[20px] md:text-[30px] font-bio mt-10 font-bold'>TOOLS</p>

                <div className='flex justify-center gap-6 mt-10'>
                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={excel} className='h-10 w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>MS Excel</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={vs} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>VS</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={vscode} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>VS Code</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={git} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>Git</p>
                    </div>

                    <div className='group h-20'>
                        <div className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] bg-gray-700 flex justify-center items-center rounded-md'>
                        <img src={github} className='h-10 w-[40px] md:h-14 md:w-[60px] grayscale group-hover:grayscale-0' />
                        </div>
                        <p className='hidden mt-2 font-bio group-hover:block text-center bg-gray-800 text-white rounded-xl text-[10px]'>Github</p>
                    </div>
                </div>
            </div>

            <div className='h-[100vh]'>

            <p className='mb-20 text-[14px] md:text-[20px] font-bold text-center font-bio'>Personal Projects</p>

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
        </div>
    )
}