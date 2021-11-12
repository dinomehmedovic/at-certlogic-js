/**
 * Type definition for generic CertLogic expressions.
 */
export declare type CertLogicExpression = CertLogicExpression[] | CertLogicOperation | boolean | number | string;
/**
 * Type guard function to be able to infer `any` value reliably as a CertLogicExpression.
 */
export declare const isCertLogicExpression: (expr: any) => expr is CertLogicExpression;
/**
 * Type definition for CertLogic operations.
 */
export declare type CertLogicOperation = {
    "var": string;
} | {
    "and": CertLogicExpression[];
} | {
    "if": [CertLogicExpression, CertLogicExpression, CertLogicExpression];
} | {
    "===": [CertLogicExpression, CertLogicExpression];
} | {
    "<": [CertLogicExpression, CertLogicExpression] | [CertLogicExpression, CertLogicExpression, CertLogicExpression];
} | {
    ">": [CertLogicExpression, CertLogicExpression] | [CertLogicExpression, CertLogicExpression, CertLogicExpression];
} | {
    "<=": [CertLogicExpression, CertLogicExpression] | [CertLogicExpression, CertLogicExpression, CertLogicExpression];
} | {
    ">=": [CertLogicExpression, CertLogicExpression] | [CertLogicExpression, CertLogicExpression, CertLogicExpression];
} | {
    "in": [CertLogicExpression, CertLogicExpression];
} | {
    "+": [CertLogicExpression, CertLogicExpression];
} | {
    "!": [CertLogicExpression];
} | {
    "plusTime": [CertLogicExpression, number, TimeUnit];
} | {
    "reduce": [CertLogicExpression, CertLogicExpression, CertLogicExpression];
} | {
    "extractFromUVCI": [CertLogicExpression, number];
};
/**
 * Type guard function to be able to infer `any` value reliably as a CertLogicOperation.
 */
export declare const isCertLogicOperation: (expr: any) => expr is CertLogicOperation;
/**
 * The type definition of the time units that can be used as the third operand of a `plusTime` operation.
 */
export declare type TimeUnit = "year" | "month" | "day" | "hour";
/**
 * All time units as an array.
 */
export declare const timeUnits: TimeUnit[];
//# sourceMappingURL=typings.d.ts.map