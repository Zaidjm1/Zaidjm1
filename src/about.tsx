export default function About(){
    return(
        <div>

            <h1 className="mt-20 text-center border-b md:w-[800px] m-auto md:text-[40px] text-[30px] font-runic font-bold">About</h1>

            <div className="ml-auto mr-auto md:w-[1000px] mt-10 font-mono text-justify px-10">

                <p className="md:text-[18px] text-[16px]">Hi, I'm Michael Jay. I love building and creating fun stuff since I was a kid.</p>

                <p className="mt-10 md:text-[18px] text-[16px]">During my 3rd and 4th year of college I've worked on a capstone project, a school portal that handles all the students records and information.</p>

                <p className="mt-10 md:text-[18px] text-[16px]">Aside from my capstone, I also worked as an Intern to a company named MEUT, a new dating site company by that time.</p>

                <p className="mt-10 md:text-[18px] text-[16px]">If you're interested in working together, you can contact me here</p>

                <a href="https://zaidjm1.github.io/Zaidjm1/contact"><div className="bg-gray-900 mt-2 w-[100px] absolute h-8 rounded-lg hover:bg-gray-700 text-white">
                    <p className="mt-1 text-center">Contact</p>
                </div></a>
            
            </div>
        </div>
    )
}