import github from './assets/images/github.png'
import li from './assets/images/linkedin.png'

export default function About(){
    return(
        <div>

            <h1 className="mt-20 text-center border-b md:w-[800px] m-auto md:text-[40px] text-[30px] font-runic font-bold">About</h1>

            <div className="ml-auto mr-auto md:w-[1000px] mt-10 mb-10 font-mono text-justify px-10 animate-fade-left">

                <p className="md:text-[18px] text-[16px]">Hi, I'm Michael Jay. I love building and creating fun stuff since I was a kid.</p>

                <p className="mt-10 md:text-[18px] text-[16px]">During my 3rd and 4th year of college I've worked on a capstone project, a school portal that handles all the students records and information.</p>

                <p className="mt-10 md:text-[18px] text-[16px]">Aside from my capstone, I also worked as an Intern to a company named MEUT, a new dating site company by that time.</p>

                <p className="mt-20 md:text-[18px] text-[16px] text-center font-bold">If you're interested and want to know more about me</p>

                <div className='flex justify-center items-center group gap-10'>
                    <a href='https://github.com/Zaidjm1'>
                        <img src={github} className='h-10 mt-10' />
                    </a>
                    <a href='https://www.linkedin.com/in/mjo-diaz/'>
                        <img src={li} className='h-10 mt-10' />
                    </a>
                </div>
                
            
            </div>
        </div>
    )
}