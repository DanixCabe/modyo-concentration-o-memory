import { checkLoading, getAnimals, resetListAnimals } from "../../../src/store/animals/animalsSlice";
import { startCheckLoading, startGetAnimals, startResetListAnimals } from "../../../src/store/animals/thunks";

describe('Test in AnimalsThunks', () => {
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());
 

    test('Must to call startCheckLoading', async() => {

        await startCheckLoading()(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(checkLoading());
    });


    test('startGetAnimals must call checkLoading and save Animals List', async() => {
        // const animals = [{name: 'god', url: 'animal.jpg', uuid: 'a123'}]
        await startGetAnimals()(dispatch);

        // expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(checkLoading());
        global.fetch = jest.fn(() =>
            Promise.resolve(
                expect(dispatch).toHaveBeenCalledWith(getAnimals())
            )
        );

    });

    test('startResetListAnimals must call checkLoading and reset list', async() => {
        await startResetListAnimals()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkLoading());
        expect(dispatch).toHaveBeenCalledWith(resetListAnimals());
    });

});