import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Landing from "./Landing";

describe("Landing Page", () => {
    let width;
    let setWidth;
    beforeEach(() => {
        width = jest.fn();
        setWidth = jest.fn();
        useWidth.mockImplementation(() => [width, setWidth]);
    });

    test("should display the logo, slogan and sign-up button when the screen width is less than 768px", () => {
        // Arrange
        width.mockReturnValue(767);
        const { getByAltText, getByText } = render(<Landing />);
        // Act
        const logo = getByAltText("Logo");
        const slogan = getByText("The music that unites us");
        const signUpButton = getByText("Sign Up");
        // Assert
        expect(logo).toBeInTheDocument();
        expect(slogan).toBeInTheDocument();
        expect(signUpButton).toBeInTheDocument();
    });

    test("should display the logo, slogan, sign-up button and log-in button when the screen width is more than 768px", () => {
        // Arrange
        width.mockReturnValue(769);
        const { getByAltText, getByText } = render(<Landing />);
        // Act
        const logo = getByAltText("Logo");
        const slogan = getByText("The music that unites us");
        const signUpButton = getByText("Sign Up");
        // Assert
        expect(logo).toBeInTheDocument();
        expect(slogan).toBeInTheDocument();
        expect(signUpButton).toBeInTheDocument();
    });
});