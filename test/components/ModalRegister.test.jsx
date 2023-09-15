import { fireEvent, render, screen } from "@testing-library/react";
import { ModalRegister } from "../../src/components";



describe('Test in <ModalRegister/>', () => {;  

    const formState = {username: ''}


    test('Must be change of value for the input and call onInputChange', () => {
        const onInputChange = jest.fn();
        render(<ModalRegister  onInputChange={onInputChange}/>);
        const username = 'John Doe';
        const input = screen.getByLabelText('username', {selector: 'input'});
        fireEvent.input(input, {target: {value: username}});
        expect(onInputChange).toHaveBeenCalled();
        expect(input.value).toBe('John Doe');
    });

    test('Must be call onRegisterUser', () => {
        render(<ModalRegister formState={formState}/>);
        const username = 'John Doe';
        const input = screen.getByLabelText('username', {selector: 'input'});
        const body = document.querySelector('body')
        body.innerHTML += '<div modal-backdrop class="bg-gray-900 bg-opacity-50 fixed inset-0 z-40"></div>'
        const form = screen.getByLabelText('form', {selector: 'form'});
        fireEvent.input(input, {target: {value: username}});
        fireEvent.submit(form)
    });

});