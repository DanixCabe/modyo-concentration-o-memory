import { animalsSlice, checkLoading, getAnimals, resetListAnimals } from "../../../src/store/animals";
import { animalSaves, animalsList, animalsListSet, initialState, loadingStateFalse, loadingStateTrue } from "../../fixtures/animalFixtures";

describe('Test in animalsSlice', () => {


    test('must return a initial state called "animals"', () => {
        const state = animalsSlice.reducer(initialState, {})
        expect(animalsSlice.name).toBe('animals');
        expect(state).toEqual(initialState);
    });

    test('must of realize the save animals list', () => {
        const state = animalsSlice.reducer(initialState, getAnimals(animalsList))
        expect(state.isLoading).toBeFalsy();
        expect(state.animals.length).toEqual(3);
    });

    test('must of realize unordered animals list', () => {
        const state = animalsSlice.reducer(animalsListSet, resetListAnimals())
        expect(state.isLoading).toBeFalsy();
        expect(state).not.toEqual(animalsListSet);
    });


    test('must of realize the checkLoading', () => {
        const state = animalsSlice.reducer(loadingStateTrue, checkLoading())
        expect(state.isLoading).toBeTruthy();
        expect(state).toEqual(loadingStateTrue);
    });

});