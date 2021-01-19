import React from "react";
import { render, waitFor, screen, getByText } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./api/fetchShow.js");

const mockData = {
  data: {
    name: "SHOW NAME",
    summary: "SHOW SUMMARY",
    image: {
      original: "img url",
    },
    _embedded: {
      episodes: [
        {
          id: 1,
          season: 1,
          number: 1,
          summary: "Summary ep. 1",
          runtime: "1 min",
        },
        {
          id: 2,
          season: 1,
          number: 2,
          summary: "Summary ep. 2",
          runtime: "2 min",
        },
        {
          id: 3,
          season: 1,
          number: 3,
          summary: "Summary ep. 3",
          runtime: "3 min",
        },
        {
          id: 4,
          season: 1,
          number: 4,
          summary: "Summary ep. 4",
          runtime: "4 min",
        },
      ],
    },
  },
};

test("App.js renders", () => {
  render(<App />);
});
