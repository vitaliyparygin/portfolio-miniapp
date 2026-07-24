import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Hero from "../components/Hero";
import { portfolio } from "../data/portfolio";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => children,
    section: ({ children }: any) => children,
  },
}));

describe("Hero", () => {
  it("renders developer name", () => {
    render(<Hero />);
    print(portfolio.name)
    expect(
      screen.getByText(portfolio.name)
    ).toBeInTheDocument();
    expect(portfolio.name).not.toBe("");
    expect(portfolio.github.url).toMatch(/^https:\/\/github.com/);
    expect(portfolio.projects.length).toBeGreaterThan(0);
    expect(portfolio.cv.download).toMatch(/\.pdf$/);
  });

  it("renders developer role", () => {
    render(<Hero />);

    expect(
      screen.getByText(portfolio.role)
    ).toBeInTheDocument();
  });
});