import { createSlice } from '@reduxjs/toolkit';

    export const animalsSlice = createSlice({
        name: 'animals',
        initialState: {
            animals: [],
            isLoading: true,
        },
        reducers: {
            getAnimals: (state, {payload}  ) => {
                const unorderedListAnimals = payload.sort( () => {return Math.random() -0.5})
                state.animals = [...unorderedListAnimals]
                state.isLoading = false;
            },
            resetListAnimals: (state ) => {
                const unorderedListAnimals = state.animals.sort( () => {return Math.random() -0.5})
                state.animals = [...unorderedListAnimals];
                state.isLoading = false;
            },
            checkLoading: (state) => {
                state.isLoading = true;
            },
        }
});
// Action creators are generated for each case reducer function
export const { getAnimals, resetListAnimals, checkLoading } = animalsSlice.actions;