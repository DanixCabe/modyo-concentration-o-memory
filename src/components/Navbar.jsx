import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav className="bg-slate-800 border-b-0">
            <div className="max-w-screen-xl mx-auto p-6 flex flex-row items-center justify-between">
                <img src="/ico-web.png"  className="max-w-[32px] md:max-w-[80px] mt-1 mr-2 md:mr-4 ml-2"/>
                <h1 className=" text-white text-center text-md xs:text-lg md:text-4xl font-semibold tracking-widest uppercase">Concentration or Memory</h1>
                <div className="hover:bg-slate-700  p-2 rounded-full">
                    <button 
                        type="button" 
                        className="flex rounded-full items-center text-gray-600 text-sm font-medium h-auto w-auto" 
                        data-drawer-target="drawer-profile" data-drawer-show="drawer-profile" aria-controls="drawer-profile">
                            <span className="sr-only">Open user menu</span>
                            <FaUserCircle className='text-2xl md:text-3xl text-white '/> 
                    </button>
                </div>
            </div>
        </nav>
    )
}
