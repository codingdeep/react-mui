import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import Todo from "../Todo";


describe('Todo component', function () {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

    const useEffectFn = jest.fn();
    const useEffectMock = (useEffect) => [useEffect, useEffectFn];
    jest.spyOn(React, 'useEffect').mockImplementationOnce(useEffectMock)


    it('should render todo component without crashing', function () {
        const {container} = render(<Todo/>);
        expect(container).toBeTruthy();
    });
    it('should render input field', function () {
        const {getByRole} = render(<Todo/>);
        const inputElement = getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('name', 'username');
        fireEvent.change(inputElement, {target: {value: 'a'}});
        expect(inputElement.value).toBe('a')
    });
    it('should update data here', function () {
        render(<Todo/>);
        expect(setStateMock).toHaveBeenCalledWith('Hello')
    });
    it('should update data here', function () {
        const {getByText} = render(<Todo/>);
        const button = getByText('button');
        fireEvent.click(button);
        expect(setStateMock).toHaveBeenCalledWith('Hello')
    });
    it('should update data here', function () {
        //jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f())
        render(<Todo/>);
        expect(useEffectMock).toHaveBeenCalledTimes(1);
    });
});
