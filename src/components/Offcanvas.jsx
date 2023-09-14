import {GiCardJoker ,GiRollingDices} from 'react-icons/gi'

export const Offcanvas = ({username}) => {
    return (
        <>
    
            <div id="drawer-profile" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-64 bg-gray-800" tabIndex="-1" aria-labelledby="drawer-profile-label">
                <h5 id="drawer-profile-label" className="text-base font-semibold  uppercase text-gray-400">{username}</h5>
                <button type="button" data-drawer-hide="drawer-profile" aria-controls="drawer-profile" className="text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2  rounded-lg text-white  bg-gray-700 ">
                                <GiCardJoker className='text-3xl'/>
                                <span className="ml-3 text-sm">Concentration or Memory</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                                <GiRollingDices className='text-3xl'/>
                                <span className="ml-3 text-sm">Coming soon...</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
