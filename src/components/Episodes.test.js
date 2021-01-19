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

test("Episodes.js renders", () => {
  render(<Episodes episodes={[]} />);
});

test("Episodes shows data when rerendered with mock data"), () {
    const {queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);
    
    expect(queryAllByTestId("episode")).toHaveLength(0);
    expect(queryAllByTestId("episode")).toStrictEqual([]);
    
    rerender(<Episodes episodes={data} />)
    expect(queryAllByTestId("episode")).toHaveLength(0);
}