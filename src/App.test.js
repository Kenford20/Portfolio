import React from "react";
import App from './App';
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

afterAll(cleanup);
const { container, getByTestId, getAllByTestId } = render(<App />);

it("renders the accordion", () => {
  expect(container).toMatchSnapshot();
});

it("should render with the resume modal hidden", () => {
  expect(getByTestId("resume-modal")).toHaveStyle(`transform: scale(0)`);
});

it("should toggle the resume modal's visibility when the resume buttons are clicked", () => {
  const resumeSpan = getByTestId("toggle-resume-span");
  const resumeBtn = getByTestId("toggle-resume-btn");
  const resumeModal = getByTestId("resume-modal");
  const modalBackground = getByTestId("modal-background");
  
  fireEvent.click(resumeBtn);
  expect(resumeModal).toHaveStyle(`transform: scale(1)`);
  fireEvent.click(modalBackground);
  expect(resumeModal).toHaveStyle(`transform: scale(0)`);
  fireEvent.click(resumeSpan);
  expect(resumeModal).toHaveStyle(`transform: scale(1)`);
});

// it("should show the navbar when the hamburger menu is clicked", () => {
//   const navBar = getByTestId("navbar");
//   const hamburgerMenu = getByTestId("hamburger-menu");

//   fireEvent.click(hamburgerMenu);
//   expect(navBar).toBeVisible();
//   fireEvent.click(hamburgerMenu);
//   expect(navBar).not.toBeVisible();
// });