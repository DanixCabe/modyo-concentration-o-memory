import { render, screen } from "@testing-library/react";
import { ConcentrationOMemoryApp } from "../src/ConcentrationOMemoryApp";
import { configureStore } from "@reduxjs/toolkit";
import { animalsSlice } from "../src/store/animals";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        animals: animalsSlice.reducer
    }
})

describe('Test in <ConcentrationOMemoryApp/>', () => {
    
    test('Must has Concentration or Memory in the H1', () => {
        const oficialTitle = 'Concentration or Memory';
        render(
            <Provider store={store}>
                <ConcentrationOMemoryApp/>
            </Provider>
        );
        const title = screen.getByRole('heading',{level:1}).innerHTML
        expect(title).toBe(oficialTitle);
    });

});