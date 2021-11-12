"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { isTrue } = require("chai").assert;
const index_1 = require("../index");
describe("versions", () => {
    it("should be able to say which implementation version (semver) this engine is at", () => {
        isTrue(index_1.implementationVersion.match(/^\d+\.\d+\.\d+$/) !== null);
    });
    it("should be able to say which specification version (semver) this engine is compatible with", () => {
        isTrue(index_1.specificationVersion.match(/^\d+\.\d+\.\d+$/) !== null);
    });
});
//# sourceMappingURL=test-version.js.map