
import {   useSelector } from "react-redux"
import { CardAnimal, ModalWinner } from "./";
import { useSetImages } from "../hooks/useSetImages";


export const ListAnimal = () => {
    const {animals} = useSelector(state => state.animals);
    const {
        firstImage, onFirstImageId, secondImage, 
        onSecondImageId, onReviewIdImages, counterSuccesses, 
        counterFails, countForWin, onResetCount 
    } = useSetImages();



    return (
        <>
            <div className="">
                <div className="flex flex-wrap md:flex-row items-center justify-center space-x-8 md:space-x-36 mb-10 animate__animated animate__fadeIn">
                    <p className="text-cyan-300 font-semibold text-2xl">Successes: <span className="font-normal">{counterSuccesses}</span></p>
                    <p className="text-red-400 font-semibold text-2xl">Fails: <span className="font-normal">{counterFails}</span></p>
                    <p className="text-lime-400 font-semibold text-2xl">Moves: <span className="font-normal">{counterFails+counterSuccesses}</span></p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5  gap-6 animate__animated animate__fadeIn">
                    {
                        animals.map(animal => {
                            return <CardAnimal 
                                        key={animal.name} 
                                        animal={animal} 
                                        onFirstImageId={onFirstImageId} 
                                        onSecondImageId={onSecondImageId} 
                                        firstImage={firstImage} 
                                        secondImage={secondImage}
                                        onReviewIdImages={onReviewIdImages}
                                    />
                        })
                    }
                </div>
                {
                    (countForWin === 0) ? <ModalWinner onResetCount={onResetCount}/> : ''
                    
                }
            </div>

        </>
    )
}
