import {describe, it, expect} from "vitest";
import {portfolio} from "../data/portfolio";
import {projects} from "../data/projects";
import {skills} from "../data/skils";

describe("Portfolio data", () => {
    it("has name", () => {
        expect(portfolio.name)
            .toBe("Vitaliy Parygin");
    });

    it("has github link", () => {
        expect(
            portfolio.github.url
        )
            .toContain("github.com");
    });

    it("has projects", () => {
        expect(
            projects.length
        )
            .toBeGreaterThan(0);
    });

    it("projects have stack", () => {
        projects.forEach(project => {
            expect(skills.length)
                .toBeGreaterThan(0);

        });
    });

});
