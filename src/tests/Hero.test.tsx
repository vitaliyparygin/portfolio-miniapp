import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Hero from "../components/Hero";
import { portfolio } from "../data/portfolio";
import {projects} from "../data/projects";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => children,
    section: ({ children }: any) => children,
  },
}));

describe("Hero", () => {
  it("renders developer name", () => {
    render(
        <Hero onAsk={() => {}} />
    );
    expect(
        screen.getByRole("heading")
    ).toHaveTextContent(portfolio.name);

    expect(portfolio.name).not.toBe("");
    expect(portfolio.github.url).toMatch(/^https:\/\/github.com/);
    expect(projects.length).toBeGreaterThan(0);
    expect(portfolio.cv.download).toMatch(/\.pdf$/);
  });

  it("renders developer role", () => {
    render(<Hero />);

    expect(
      screen.getByText(portfolio.role)
    ).toBeInTheDocument();
  });
});