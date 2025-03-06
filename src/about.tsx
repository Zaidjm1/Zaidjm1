import github from './assets/images/github.png'
import li from './assets/images/linkedin.png'

export default function About(){
    return(
        <div>

            <h1 className="mt-20 text-center border-b md:w-[800px] m-auto md:text-[40px] text-[30px] font-runic font-bold">About</h1>

            <div className="ml-auto mr-auto md:w-[1000px] mt-10 mb-10 font-mono text-justify px-10 animate-fade-left">

                <p className='text-center uppercase font-bold text-[20px] font-bio'>FRONT END WEB DEVELOPER based in Manila, Philippines</p>

                <p className="md:text-[18px] text-[16px] text-center mt-10 font-mono">Hello! my name is Michael Jay and I main stack that is all about front end web development but I do have and currently working on my back end stack like node.js and laravel.</p>

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