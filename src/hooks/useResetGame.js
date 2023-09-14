
export const useResetGame = () => {

    const onResetGame = () => {
        const imagesAnimals = document.querySelectorAll('.section-animals__image-animal');
        const imagesUnknown = document.querySelectorAll('.section-animals__image-unknown');
        imagesAnimals.forEach(element => {
            element.style.display = 'none'
            element.style.opacity = '0'
        });
        imagesUnknown.forEach(element => {
            element.style.display = 'block'
            element.style.opacity = '1'
        });
    }

    return {
        onResetGame

    }
}
