import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

const data = [
  {
    id: 1234,
    image: {
      medium: "sample.png",
      original: "sample.png",
    },
    name: "name",
    season: "season",
    number: "number",
    summary: "summary",
    runtime: "runtime",
  },
];

test("Episodes.js renders by default with no errors", () => {
  render(<Episodes episodes={[]} />);
});

test("Episodes.js rerenders", () => {
  const { rerender } = render(<Episodes episodes={[]} />);
  const updatedData = [
    {
      id: 1,
      season: 1,
      name: "Episode 1",
    },
    {
      id: 2,
      season: 1,
      name: "Episode 2",
    },
    {
      id: 3,
      season: 1,
      name: "Episode 3",
    },
  ];
  rerender(<Episodes episodes={updatedData} />);
});
