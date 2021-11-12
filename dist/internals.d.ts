import { TimeUnit } from "./typings";
/**
 * @returns Whether the given `value` is a "dictionary object".
 */
export declare const isDictionary: (value: any) => value is object;
/**
 * @returns Whether the given `value` is considered *falsy* by CertLogic.
 * Note: the notions of both falsy and truthy are narrower than those of JavaScript, and even of JsonLogic.
 * Truthy and falsy values can be used for conditional logic, e.g. the guard of an `if`-expression.
 * Values that are neither truthy nor falsy (many of which exist) can't be used for that.
 */
export declare const isFalsy: (value: any) => boolean;
/**
 * @returns Whether the given `value` is considered *truthy* by CertLogic.
 * @see isFalsy
 */
export declare const isTruthy: (value: any) => boolean;
export declare const isInt: (value: any) => value is number;
export declare const isDate: (value: any) => value is Date;
/**
 * @returns A JavaScript {@see Date} object representing the date or date-time given as a string.
 * @throws An {@see Error} in case the string couldn't be parsed as a date or date-time.
 */
export declare const dateFromString: (str: string) => Date;
export declare const plusTime: (dateTimeLikeStr: string, amount: number, unit: TimeUnit) => Date;
/**
 * @returns The fragment with given index from the UVCI string
 *  (see Annex 2 in the [UVCI specification](https://ec.europa.eu/health/sites/default/files/ehealth/docs/vaccination-proof_interoperability-guidelines_en.pdf)),
 *  or `null` when that fragment doesn't exist.
 */
export declare const extractFromUVCI: (uvci: string | null, index: number) => string | null;
//# sourceMappingURL=internals.d.ts.map