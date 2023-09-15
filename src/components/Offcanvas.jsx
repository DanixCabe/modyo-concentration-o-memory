import { Popover } from 'flowbite';
import {GiCardJoker ,GiRollingDices} from 'react-icons/gi'

export const Offcanvas = ({username}) => {
    return (
        <>
    
            <div id="drawer-profile" className="fixed top-0 left-0 z-40 h-screen p-4 transition-transform -translate-x-full overflow-hidden bg-gray-800" tabIndex="-1" aria-labelledby="drawer-profile-label">
                <h5 id="drawer-profile-label" className="text-base font-semibold text-gray-400">{username}</h5>
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
                            <a href="#"  data-popover-target="popover-bottom" data-popover-placement="bottom" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                                <GiRollingDices className='text-3xl'/>
                                <span className="ml-3 text-sm">Coming soon...</span>
                            </a>
                            <div data-popover id="popover-bottom" role="tooltip" class="absolute z-50 invisible inline-block w-[80%] text-sm transition-opacity rounded-lg shadow-sm opacity-0 text-gray-200 border-gray-100 bg-slate-900">
                                <div class="px-3 py-2 border-b  rounded-t-lg border-gray-600 bg-gray-700">
                                    <h3 class="font-semibol text-white">Dices Game</h3>
                                </div>
                                <div class="px-3 py-2">
                                    <p>Our developers work in this game.</p>
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
