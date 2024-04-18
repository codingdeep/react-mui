import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import SkillPage from "../SkillPage";
import SkillsComponent from "../../components/SkillsComponent/SkillsComponent";

describe("Testing Skills Page", () => {
    const skills = [
        {id: 1, title: 'Title 1'},
        {id: 2, title: 'Title 2'},
        {id: 2, title: 'Title 3'},
    ];
    it('should render the page with skills', function () {
        const {container} = render(<SkillPage/>);
        expect(container).toBeInTheDocument();
    });

    it('should render skills', function () {
        render(<SkillsComponent skills={skills}/>);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument()
    });

    it("Should render list item", () => {
        render(<SkillsComponent skills={skills}/>);
        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(skills.length);
    })

    it("Should render a button", () => {
        render(<SkillsComponent skills={skills}/>);
        const buttonElement = screen.getAllByRole("button");
        expect(buttonElement).toHaveLength(buttonElement.length);
    })


    it("Should not render the loading finished button", () => {
        render(<SkillsComponent skills={skills}/>);
        const buttonElement = screen.queryByRole("button", {name: 'Loading Finished'});
        expect(buttonElement).not.toBeInTheDocument();
    });

    it('should fire a click event', async () => {
        render(<SkillsComponent skills={skills}/>);
        const loadingButton = screen.getByRole("button", {name: 'Loading'});
        expect(loadingButton).toBeInTheDocument()
        fireEvent.click(loadingButton);
        const loadingFinishedButton = await screen.findByRole("button", {name: 'Loading Finished'})
        expect(loadingFinishedButton).toBeInTheDocument();
    });
    it('should render loading finished button and hide loading button', async () => {
        render(<SkillsComponent skills={skills}/>);

        const loadingFinishedButton = await screen.findByRole("button", {name: 'Loading Finished'}, {timeout: 2000})
        expect(loadingFinishedButton).toBeInTheDocument();
        const loadingButton = screen.queryByRole("button", {name: 'Loading'});
        expect(loadingButton).not.toBeInTheDocument();
    });
})