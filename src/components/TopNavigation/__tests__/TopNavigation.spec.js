import React from 'react';
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import TopNavigation from "../TopNavigation";

describe("Container will run without crashing", () => {
    it('should render without crashing', function () {
        render(<TopNavigation/>)
    });
    it('should have the container', function () {
        const {container} = render(<TopNavigation/>);
        expect(container).toBeTruthy();
    });
    it('should have logo', function () {
        const { getByTestId, getByText } = render(<TopNavigation />);

        // Check if the logo is rendered
        const logoElement = getByTestId('logo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveTextContent('Logo');

        // Check if the main menu is rendered
        const mainMenuElement = getByText('Main Menu');
        expect(mainMenuElement).toBeInTheDocument();
    });

})