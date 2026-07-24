import {describe, it, expect} from "vitest";
import {portfolio} from "../data/portfolio";


describe("Portfolio data", () => {
    it("has name", () => {
        expect(portfolio.name)
            .toBe("Vitaliy Parygin");
    });

    it("has github link", () => {
        expect(
            portfolio.github
                .url
        )
            .toContain("github.com");
    });

    it("has projects", () => {
        expect(
            portfolio.projects.length
        )
            .toBeGreaterThan(0);
    });

    it("projects have stack", () => {
        portfolio.projects.forEach(project => {
            expect(project.stack.length)
                .toBeGreaterThan(0);

        });
    });

});
