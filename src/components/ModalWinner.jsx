import { useEffect } from 'react';
import { Modal } from 'flowbite';
import {BiReset} from 'react-icons/bi'
import { startCheckLoading, startResetListAnimals } from '../store/animals';
import { useDispatch } from 'react-redux';
import { useResetGame } from '../hooks';


export const ModalWinner = ({onResetCount}) => {
    const dispatch = useDispatch();
    const username = localStorage?.getItem("username");
    const {onResetGame} = useResetGame();

    useEffect(() => {
        const $targetEl = document.getElementById('modalWinner');
        const options = {
            placement: 'center',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-20 modal-winner__backdrop animate__animated animate__fadeIn',
            closable: true,
        };
        const modal = new Modal($targetEl, options);
        modal.show();
    }, [])
    

    const onCloseModal = () => {
        const modalWinnerBackdrops = document.querySelectorAll('.modal-winner__backdrop');
        modalWinnerBackdrops.forEach(backdrop => {
            backdrop.remove();
        });
    }

    const onClickResetGame = () => {
        onCloseModal();
        onResetCount();
        onResetGame();
        dispatch(startCheckLoading());
        dispatch(startResetListAnimals())
        const $targetEl = document.getElementById('modalWinner');
        const modal = new Modal($targetEl);
        modal.hide();
        
    }

    return (
        <>
            <button data-modal-target="modalWinner"  data-modal-toggle="modalWinner"></button>
            
            <div id="modalWinner" tabIndex="-1" aria-hidden="true" className="modal-winner animate__animated animate__fadeIn fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    
                    <div className="relative bg-white rounded-lg shadow ">
                        
                        <div className="flex items-start justify-between p-4 border-b rounded-t ">
                            <h3 className="text-md xs:text-xl font-semibold text-gray-900 ">
                                Congratulations {username}!!
                            </h3>
                            <button type="button" onClick={onCloseModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="modalWinner">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-center border-gray-200 rounded-b ">
                                <p className='text-2xl md:text-4xl font-bold modal-winner__text tracking-widest'>
                                    <span className='modal-winner__text-step-1'>Y</span>
                                    <span className='modal-winner__text-step-2'>O</span>
                                    <span className='modal-winner__text-step-3'>U</span>
                                    <span className='modal-winner__text-step-4'>'</span>
                                    <span className='modal-winner__text-step-5'>R</span>
                                    <span className='modal-winner__text-step-6'>E</span>
                                    <span className='modal-winner__text-step-7'> W</span>
                                    <span className='modal-winner__text-step-8'>I</span>
                                    <span className='modal-winner__text-step-9'>N</span>
                                    <span className='modal-winner__text-step-10'>N</span>
                                    <span className='modal-winner__text-step-11'>E</span>
                                    <span className='modal-winner__text-step-12'>R</span>
                                </p>
                            </div>
                        </div>
                        <div className='text-center text-white border-t py-3'>
                            <button
                                data-modal-hide="modalWinner" 
                                onClick={onClickResetGame}
                                type="button" 
                                className={`flex items-center mx-auto focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm pl-5 pr-3 py-2.5  focus:ring-blue-300 bg-blue-700 hover:bg-blue-800`}>
                                Reset
                                <BiReset className='text-sm text-white ml-2'/>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
