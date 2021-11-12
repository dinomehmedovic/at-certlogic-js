"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationVersion = exports.implementationVersion = exports.evaluate = exports.isInt = void 0;
var internals_1 = require("./internals"); // (export other internals only when necessary)
Object.defineProperty(exports, "isInt", { enumerable: true, get: function () { return internals_1.isInt; } });
var evaluator_1 = require("./evaluator");
Object.defineProperty(exports, "evaluate", { enumerable: true, get: function () { return evaluator_1.evaluate; } });
exports.implementationVersion = require("../package.json").version;
exports.specificationVersion = "1.2.2";
//# sourceMappingURL=index.js.map