"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desugar = void 0;
const not = (expr) => ({ "!": [expr] });
/**
 * Desugars the given “extended” CertLogic expression to an “official” CertLogic expression.
 * That means:
 *  * any `or` operation is rephrased in terms of `and` and `not` operations using [De Morgan's laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws)
 */
const desugar = (expr) => {
    if (Array.isArray(expr)) {
        return expr.map(exports.desugar);
    }
    if (typeof expr === "object" && Object.entries(expr).length === 1) {
        const [operator, operands] = Object.entries(expr)[0];
        switch (operator) {
            case "or": return not({
                "and": operands.map((operand) => not((0, exports.desugar)(operand)))
            });
            case "var": return expr;
            default: return { [operator]: operands.map(exports.desugar) };
        }
    }
    return expr;
};
exports.desugar = desugar;
//# sourceMappingURL=desugar.js.map