export default function Contact(){
    return(
        <div className="mt-20">
            <h1 className="text-center border-b md:w-[800px] m-auto md:text-[40px] text-[30px] w-auto font-runic font-bold">Contacts</h1>
            <div className="ml-auto mr-auto w-auto h-auto px-10 md:w-[800px] md:h-[500px] m-auto mt-10 flex">
                <div>
                    <h1 className="font-runic font-black text-[20px]">Email</h1>
                    <p className="font-mono">michaeljayo.diaz@gmail.com</p>
                    <h1 className="mt-10 font-runic font-black text-[20px]">Phone</h1>
                    <p className="font-mono">+63 976-203-1025</p>
                </div>
                <div className="ml-auto">
                    <h1 className="font-runic font-black text-[20px]">Linkedin</h1>
                    <p className="font-mono">in/mjo-diaz</p>
                </div>
            </div>
        </div>
    )
}