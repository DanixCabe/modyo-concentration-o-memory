import { useEffect } from "react"
import { ListAnimal, Loading, ModalRegister, Navbar, Offcanvas } from "./components"
import { useForm } from "./hooks"
import { startGetAnimals } from "./store/animals"
import { useDispatch, useSelector } from "react-redux"

const formData = {
    username: (!localStorage?.getItem("username")) ? '': localStorage?.getItem("username")
}


export const ConcentrationOMemoryApp = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.animals);
    const {username, formState, onInputChange} = useForm(formData);

    useEffect(() => {
        dispatch(startGetAnimals())
    }, [])

    return (
        <>
            <header>
                <Offcanvas username={formState.username}/>
                <Navbar />
            </header>
            <main className="bg-slate-700 min-h-screen h-full">
                <section className="section-animals mx-6 1xl:mx-auto 1xl:max-w-7xl">
                    {
                        (!formData.username) ? <ModalRegister username={username} formState={formState} onInputChange={onInputChange}/> : ''
                    }
                    {
                        
                    }
                    {
                        (isLoading) ? <Loading/> :<ListAnimal/>
                    }

                </section>

            </main>
        </>
    )
}
