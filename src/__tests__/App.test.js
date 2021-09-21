import React from "react";
import App from "../App";
import { formatBirthday } from "../App";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("it displays a list of users on initial load", async () => {
  render(<App />);

  await waitFor(() => screen.getAllByText("John Doe"));

  expect(screen.getAllByText("John Doe")).toHaveLength(5);
});

test("it refreshes the list on subsequent calls", async () => {
  render(<App />);

  await waitFor(() => screen.getAllByText("John Doe"));

  fireEvent.click(screen.getByText("Refresh"));

  await waitFor(() => screen.getAllByText("John Doe"));

  expect(screen.getAllByText("John Doe")).toHaveLength(5);
});

test("formating a birthday should be in the proper format", () => {
  const output = formatBirthday("1993-07-20T09:44:18.674Z");

  expect(output).toEqual("July 20, 1993");
});
