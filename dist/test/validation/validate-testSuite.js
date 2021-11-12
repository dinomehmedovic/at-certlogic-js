"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const validation_1 = require("../../validation");
const testSuitesPath = (0, path_1.join)(__dirname, "../../../../specification/testSuite");
describe("test suites", () => {
    (0, fs_1.readdirSync)(testSuitesPath)
        .filter((path) => path.endsWith(".json"))
        .map((path) => JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(testSuitesPath, path), "utf8")))
        .forEach((testSuite) => {
        it(`should validate test suite "${testSuite.name}"...`, () => {
            testSuite.cases.forEach((testCase) => {
                const validateAndReport = (testExpr, index) => {
                    const errors = (0, validation_1.validate)(testExpr);
                    if (errors.length > 0) {
                        console.log(`${errors.length} validation error${errors.length > 1 ? "s" : ""} found on expression of ${index === undefined ? "" : `assertion #${index + 1} of`} test case "${testCase.name}" in test suite "${testSuite.name}":`);
                        errors.forEach(({ message, expr }) => {
                            console.log(`\t${message} on (sub) expression:`);
                            console.dir(expr);
                        });
                    }
                };
                if (testCase.certLogicExpression !== undefined) {
                    validateAndReport(testCase.certLogicExpression);
                }
                testCase.assertions
                    .forEach((assertion, index) => {
                    if (assertion.certLogicExpression !== undefined) {
                        validateAndReport(assertion.certLogicExpression, index);
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=validate-testSuite.js.map