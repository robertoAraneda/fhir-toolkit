/**
 * integer64 primitive type alias
 *
 * In FHIR R5, integer64 is a 64-bit signed integer represented as a string
 * because JavaScript's number type cannot accurately represent all 64-bit integers.
 *
 * @see https://hl7.org/fhir/R5/datatypes.html#integer64
 */
export type Iinteger64 = string;
