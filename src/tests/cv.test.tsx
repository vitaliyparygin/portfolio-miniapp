import { describe, expect, test } from "vitest"
import { portfolio } from "../data/portfolio"

describe("CV", () => {
    test("CV download URL is valid", () => {
        expect(portfolio.cv.download).toMatch(
            /^https:\/\/docs\.google\.com\/document\/d\/.+\/export\?format=pdf$/
        )
    })
})