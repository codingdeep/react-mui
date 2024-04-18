import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPage from "../ProductPage";

describe("Testing product page", () => {
    it('should render product page container without any', function () {
        render(<ProductPage/>);
        const textElement = screen.getByText("Products");
        expect(textElement).toBeInTheDocument();
    });
})