

export const CardAnimal = ({animal, onFirstImageId, onSecondImageId, firstImage, secondImage, onReviewIdImages}) => {
    const {name, uuid, url} = animal;

    const onClickCard = (event) => {
        const img = event.target;
        const dataNameImg = img.getAttribute('data-name')
        const similarImg = document.querySelector(`.section-animals__image-animal.${dataNameImg}`);
        img.style.display = 'none'
        img.style.opacity = '0'
        similarImg.style.display = 'block'
        similarImg.style.opacity = '1'
        if(firstImage === ''){
            onFirstImageId(similarImg);
        }else if(!secondImage){
            onSecondImageId(similarImg)
            onReviewIdImages(firstImage, similarImg)
        }
    }
    

    return (
        <picture className="section-animals__card-animal  mx-auto  w-full h-36 xs:h-44  lg:h-56 bg-gray-100 rounded-md shadow-xl flex items-center justify-center" >
            <img 
                src={url} 
                className={`w-full h-full rounded-md section-animals__image-animal ${name} animate__animated animate__fadeIn`} 
                data-id={uuid} 
                data-encounter="false" 
                alt={name}
                loading="lazy"
                data-name={name}/>
                <img onClick={onClickCard} loading="lazy" src={'/images/img-joker.jpg'} className={`w-full h-full rounded-md section-animals__image-unknown  mx-auto ${name} animate__animated animate__fadeIn`} data-name={name} alt="unkwnown-card"/>
        </picture>
    )
}
