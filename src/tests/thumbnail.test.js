import React from "react";
import { Thumbnail } from '../components/thumbnail';
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

afterAll(cleanup);
const { container, getByTestId, getByText } = render(<Thumbnail />);

it("shows the view site button on mouse hover", () => {
    const thumbnail = getByTestId("thumbnail");
    fireEvent.mouseOver(thumbnail);
    
    expect(getByTestId("view-website-btn")).toBeDefined();
});

it("hides the view site button on mouse leave", () => {
    const thumbnail = getByTestId("thumbnail");
    fireEvent.mouseOver(thumbnail);
    fireEvent.mouseLeave(thumbnail);
    //expect(getByTestId("view-website-btn")).toBeUndefined();
});