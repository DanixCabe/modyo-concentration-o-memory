import { checkLoading, getAnimals, resetListAnimals } from "./animalsSlice"

const optionsGet = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
}

export const startGetAnimals = () => {
    return async(dispatch) => {
        const url = "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=10"
        dispatch(checkLoading());
        console.log('trest')
        fetch(url, optionsGet)
        .then(response => response.json())
        .then(response => {
            const data = response.entries;
            const listAnimals = [];
            data.map(animal => {
                listAnimals.push(
                    {name: animal.fields.image.title, url: animal.fields.image.url, uuid: animal.fields.image.uuid},
                    {name: animal.fields.image.title+"copy", url: animal.fields.image.url, uuid: animal.fields.image.uuid} 
                    )
                });
                console.log('trest')
                dispatch(getAnimals(listAnimals));
            })
            .catch(err => console.error(err))

    }
}

export const startResetListAnimals = () => {
    return async(dispatch) => {
        dispatch(checkLoading());
        dispatch(resetListAnimals());

    }
}

export const startCheckLoading = () => {
    return async(dispatch) => {
        dispatch(checkLoading());
    }
}