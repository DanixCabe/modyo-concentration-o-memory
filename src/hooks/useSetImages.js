import {  useState } from "react"

export const useSetImages = () => {
    const [firstImage, setFirstImage] = useState('');
    const [secondImage, setSecondImage] = useState('');
    const [counterSuccesses, setCounterSuccesses] = useState(0);
    const [counterFails, setCounterFails] = useState(0);
    const [countForWin, setCountForWin] = useState(10);
    
    const onResetCount = () => {
        setCountForWin(0)
        setCounterFails(0)
        setCounterSuccesses(0)
    }

    const onFirstImageId = (id) => {
        setFirstImage(id)
    }
    
    const onSecondImageId = (id) => {
        setSecondImage(id)
    }

    const onReviewIdImages = (firstImage, secondImage, eventOnClickCard) => {
        const idFirstImage = firstImage.getAttribute('data-id');
        const idSecondImage = secondImage.getAttribute('data-id');
        const dataNameFirstImage = firstImage.getAttribute('data-name');
        const dataNameSecondImage = secondImage.getAttribute('data-name');
        const similarFirstImg = document.querySelector(`.section-animals__image-unknown.${dataNameFirstImage}`);
        const similarSecondImg = document.querySelector(`.section-animals__image-unknown.${dataNameSecondImage}`);
        // Will compare image id's and excute corect funcionality
        if (idFirstImage === idSecondImage){
            firstImage.removeEventListener('click', eventOnClickCard)
            secondImage.removeEventListener('click', eventOnClickCard)
            firstImage.setAttribute('data-encounter', true);
            secondImage.setAttribute('data-encounter', true);
            setFirstImage('')
            setSecondImage('')
            setCounterSuccesses(counterSuccesses + 1)
            setCountForWin(countForWin - 1)
        }else{
            setFirstImage('')
            setSecondImage('')
            setTimeout(() => {
                firstImage.style.display = 'none';
                firstImage.style.opacity = '0';
                secondImage.style.display = 'none';
                secondImage.style.opacity = '0';
                similarFirstImg.style.display = 'block';
                similarFirstImg.style.opacity = '1';
                similarSecondImg.style.display = 'block';
                similarSecondImg.style.opacity = '1';
            }, 500);
            setCounterFails(counterFails + 1)
        }
    }


    return {
        firstImage,
        onFirstImageId,
        secondImage,
        onSecondImageId,
        onReviewIdImages,
        counterSuccesses,
        counterFails,
        countForWin,
        onResetCount

    }
}
