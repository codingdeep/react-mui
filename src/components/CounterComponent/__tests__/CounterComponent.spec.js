import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterComponent from "../CounterComponent";

describe("CounterComponent", () => {
    const increment = jest.fn();
    const decrement = jest.fn();
    it('should render container', function () {
        const {container} = render(<CounterComponent incrementHandler={increment} decrementHandler={decrement}/>);
        expect(container).toBeTruthy();
    });

    it('should render container', async function () {
        const {getByRole} = render(<CounterComponent incrementHandler={increment} decrementHandler={decrement}/>);
        const incrementButton = await getByRole("button", {name: 'Increment'});
        fireEvent.click(incrementButton);
        expect(increment).toBeCalledTimes(1);
    });

    it('should click and fire even decrement', async function () {
        const {getByRole} = render(<CounterComponent incrementHandler={increment} decrementHandler={decrement}/>);
        const decrementButton = await getByRole("button", {name: 'Decrement'});
        fireEvent.click(decrementButton);
        expect(decrement).toBeCalledTimes(1);
    });
})