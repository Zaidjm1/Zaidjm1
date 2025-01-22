import { Outlet, Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <nav className="flex justify-center mt-20 font-bio font-black">
                <Link className='text-[18px] cursor-pointer' to="/">mj</Link>
                <Link className="ml-[25%] cursor-pointer" to="/about">About</Link>
                <Link className="ml-10 cursor-pointer" to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    )
}