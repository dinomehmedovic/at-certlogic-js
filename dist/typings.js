"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeUnits = exports.isCertLogicOperation = exports.isCertLogicExpression = void 0;
const validation_1 = require("./validation");
/**
 * Type guard function to be able to infer `any` value reliably as a CertLogicExpression.
 */
const isCertLogicExpression = (expr) => (0, validation_1.validate)(expr).length === 0;
exports.isCertLogicExpression = isCertLogicExpression;
const internals_1 = require("./internals");
/**
 * Type guard function to be able to infer `any` value reliably as a CertLogicOperation.
 */
const isCertLogicOperation = (expr) => (0, exports.isCertLogicExpression)(expr) && (0, internals_1.isDictionary)(expr);
exports.isCertLogicOperation = isCertLogicOperation;
/**
 * All time units as an array.
 */
exports.timeUnits = ["year", "month", "day", "hour"];
//# sourceMappingURL=typings.js.map