import React from 'react';
import {act, render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import HomePage from "../HomePage";
import {useTitle} from "react-use";

jest.mock('react-use', () => ({
    ...jest.requireActual('react-use'),
    useTitle: jest.fn()
}))
describe('Should call useTitle', () => {
    const mockedUseTitle = useTitle;
    mockedUseTitle.mockImplementation((title) => {
        document.title = title;
    });
    it('should call', async function () {
        await act(async () => render(<HomePage/>))
        expect(mockedUseTitle).toHaveBeenCalledWith('My Home');
        expect(document.title).toBe('My Home')
    });
})