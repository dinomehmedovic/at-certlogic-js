import { CertLogicExpression } from "../typings";
/**
 * Desugars the given “extended” CertLogic expression to an “official” CertLogic expression.
 * That means:
 *  * any `or` operation is rephrased in terms of `and` and `not` operations using [De Morgan's laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws)
 */
export declare const desugar: (expr: any) => CertLogicExpression;
//# sourceMappingURL=desugar.d.ts.map