import { CertLogicExpression } from "../typings";
/**
 * Compute which data accesses can be performed by the given CertLogic expression.
 * @param expr A CertLogic expression.
 */
export declare const dataAccesses: (expr: CertLogicExpression) => string[];
/**
 * A map with paths accessed as keys,
 * and for each path an array of CertLogic expressions "triggering" the access.
 * Example:
<pre>
 {
    "extractFromUVCI": [
        { "var": "ci" },
        1
    ]
 }
</pre>
 * produces
<pre>
 { "ci": [ <the entire expression above> ] }
</pre>
 */
export declare type DataAccessesWithContext = {
    [path: string]: CertLogicExpression[];
};
/**
 * Compute which data accesses can be performed by the given CertLogic expression,
 * including in which contexts that would then happen.
 * The context consists of the CertLogic expression with an operand that performs the data access (= `var` operation),
 * or that `var` operation when it's the entire expression.
 * @param expr A CertLogic expression.
 */
export declare const dataAccessesWithContext: (expr: CertLogicExpression) => DataAccessesWithContext;
//# sourceMappingURL=data-accesses.d.ts.map