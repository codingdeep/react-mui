import React from 'react'
import {fireEvent, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import LoginPage from "../LoginPage";


describe('Should pass all the test scenario for login page', () => {
    it('should run the login page component without any issue', function () {
        const {container} = render(<LoginPage/>);
        expect(container).toBeTruthy();
    });
    it("Page Header Should be present in the document", () => {
        const {getByRole} = render(<LoginPage/>);
        const pageHeader = getByRole("heading", {name: 'Login Page'});
        expect(pageHeader).toBeInTheDocument();
    })
    it("Login title Should be present in the document", () => {
        const {getByRole} = render(<LoginPage/>);
        const title = getByRole("heading", {level: 4});
        expect(title).toBeInTheDocument();
    })
    it("username input element should be in the document", () => {
        const {getByTestId} = render(<LoginPage/>);
        const usernameInputElement = getByTestId("username");
        expect(usernameInputElement).toBeInTheDocument();
    });
    it("username input element should be in the document", () => {
        const {getByTestId} = render(<LoginPage/>);
        const passwordInputElement = getByTestId("password");
        expect(passwordInputElement).toBeInTheDocument();
    });

    it("bio textarea element should be in the document", () => {
        const {getByRole} = render(<LoginPage/>);
        const textAreaElement = getByRole("textbox", {name: 'Bio'});
        expect(textAreaElement).toBeInTheDocument();
        const textAreaByLableText = getByLabelText("Bio");
        expect(textAreaByLableText).toBeInTheDocument();
    });

    it("button should be in the login page", () => {
        const {getByText} = render(<LoginPage/>);
        const button = getByText('Submit');
        expect(button).toBeInTheDocument();
    });
    it("button should be in the login page", () => {
        const {getByText} = render(<LoginPage/>);
        const button = getByText('Submit');
        expect(button).toBeDisabled();
    });

    it("button should be in the login page", () => {
        const {getByText} = render(<LoginPage/>);
        const button = getByText('Submit');
        expect(button).toBeDisabled();
    });

    it("button should be in the login page", () => {
        const {getByText, getByTestId} = render(<LoginPage/>);
        const usernameInputElement = getByTestId("username");
        const passwordInputElement = getByTestId("password");
        const button = getByText('Submit');
        fireEvent.change(usernameInputElement, {target: {value: 'username'}});
        fireEvent.change(passwordInputElement, {target: {value: 'password'}});
        expect(usernameInputElement.value).toBe('username');
        expect(passwordInputElement.value).toBe('password');
        expect(button).toBeEnabled();
    });

    it("button should be in the login page", () => {
        const {getByText, getByTestId} = render(<LoginPage/>);
        const usernameInputElement = getByTestId("username");
        const passwordInputElement = getByTestId("password");
        const button = getByText('Submit');
        fireEvent.change(usernameInputElement, {target: {value: 'username'}});
        fireEvent.change(passwordInputElement, {target: {value: 'password'}});
        expect(usernameInputElement.value).toBe('username');
        expect(passwordInputElement.value).toBe('password');
        expect(button).toBeEnabled();
    });

    it("button should be in the login page", () => {
        const handleLoginSubmission = jest.fn();
        const {getByText, getByTestId} = render(<LoginPage/>);
        const usernameInputElement = getByTestId("username");
        const passwordInputElement = getByTestId("password");
        const button = getByText('Submit');
        fireEvent.change(usernameInputElement, {target: {value: 'username'}});
        fireEvent.change(passwordInputElement, {target: {value: 'password'}});
        expect(usernameInputElement.value).toBe('username');
        expect(passwordInputElement.value).toBe('password');
        expect(button).toBeEnabled();
        fireEvent.submit(button);
        //expect(handleLoginSubmission).toHaveBeenCalledWith({username: 'username', password: 'password'})
        expect(handleLoginSubmission).toBeCalledTimes(1)
    })
});