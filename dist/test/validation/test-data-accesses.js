"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { deepEqual } = require("chai").assert;
const validation_1 = require("../../validation");
describe("dataAccessesWithContext", () => {
    it("should produce correct context (1)", () => {
        const expr = { "var": "ci" };
        deepEqual((0, validation_1.dataAccessesWithContext)(expr), { "ci": [expr] });
    });
    it("should produce correct context (2)", () => {
        const expr = { "extractFromUVCI": [{ "var": "ci" }, 1] };
        deepEqual((0, validation_1.dataAccessesWithContext)(expr), { "ci": [expr] });
    });
});
//# sourceMappingURL=test-data-accesses.js.map