import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("CV", () => {
  it("PDF file exists", () => {
    const file = path.resolve(
      process.cwd(),
      "public/cv/Vitaliy_Parygin_CV.pdf"
    );

    expect(fs.existsSync(file)).toBe(true);
  });
});