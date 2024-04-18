import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "../Header";

it('should render the header with ttitle', function () {
   render(<Header title="Sample Title"/>);
   const heading = screen.getByRole("heading", {name: 'Sample Title'})
   expect(heading).toBeInTheDocument();
});
it('should render the header with ttitle', function () {
   render(<Header title="Sample Title"/>);
   const heading = screen.getByTitle("title")
   expect(heading).toBeInTheDocument();
});