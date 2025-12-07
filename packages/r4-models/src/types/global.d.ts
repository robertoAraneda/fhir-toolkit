/**
 * Global type declarations for Node.js APIs not included in ES2022 lib
 */

/**
 * structuredClone is available in Node.js 17+ but not in ES2022 lib
 * @see https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
 */
declare function structuredClone<T>(value: T): T;
