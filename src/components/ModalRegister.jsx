import { Modal } from 'flowbite';


export const ModalRegister = ({username, formState, onInputChange}) => {

    window.onload = () => {
        const $targetEl = document.getElementById('modalRegister');
        const options = {
            placement: 'center',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-40',
            closable: false,
          };
        const modal = new Modal($targetEl, options);

        modal.show();
    }


    const closeBackDrop = () => {
        const backdropModal = document.querySelector('[modal-backdrop]');
        backdropModal.remove();
    }


    const onRegisterUser = (event) => {
        event.preventDefault();
        localStorage.setItem("username", formState.username)
        closeBackDrop();
    }

    return (
        <>
            <button data-modal-target="modalRegister"></button>
            
            <div id="modalRegister" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    
                    <div className="relative bg-white rounded-lg shadow ">
                        
                        <div className="flex items-start justify-between p-4 border-b rounded-t ">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                Register Username
                            </h3>    
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <form onSubmit={onRegisterUser} aria-label='form'>
                                <input
                                onChange={onInputChange} 
                                    value={username}
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                    placeholder="Username" 
                                    required
                                    aria-label='username'
                                />
                                <div className="flex items-center pt-3  border-t border-gray-200 rounded-b ">
                                    <button
                                        disabled={username === '' ? true : false}
                                        data-modal-hide="modalRegister" 
                                        type="submit" 
                                        className={`focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ${username === '' ? 'text-gray-400 bg-gray-600 focus:ring-gray-400 opacity-50 cursor-not-allowed' : 'text-white focus:ring-blue-300 bg-blue-700 hover:bg-blue-800'}`}>Register</button>
                                </div>
                            </form>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}
