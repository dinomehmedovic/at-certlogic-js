"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const desugar_1 = require("./desugar");
const typings_1 = require("../typings");
process.stdin.resume();
process.stdin.setEncoding("utf-8");
let exprAsText = "";
process.stdin.on("data", (inputStdin) => {
    exprAsText += inputStdin;
});
process.stdin.on("end", (_) => {
    try {
        const expr = JSON.parse(exprAsText);
        const desugaredExpr = (0, desugar_1.desugar)(expr);
        if (!(0, typings_1.isCertLogicExpression)(desugaredExpr)) {
            console.warn("desugared expression is (still) not a valid CertLogic expression");
        }
        console.log(JSON.stringify(desugaredExpr, null, 2));
    }
    catch (e) {
        console.error(`could not parse JSON: ${e.message}`);
    }
});
//# sourceMappingURL=desugar-cli.js.map