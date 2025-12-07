/**
 * Structure Map Transform
 * 
 * How data is copied/created.
 *
 * @see http://hl7.org/fhir/ValueSet/map-transform
 */

export type StructureMapTransformType = 'create' | 'copy' | 'truncate' | 'escape' | 'cast' | 'append' | 'translate' | 'reference' | 'dateOp' | 'uuid' | 'pointer' | 'evaluate' | 'cc' | 'c' | 'qty' | 'id' | 'cp';

export enum StructureMapTransformEnum {
  /** create */
  Create = 'create',
  /** copy */
  Copy = 'copy',
  /** truncate */
  Truncate = 'truncate',
  /** escape */
  Escape = 'escape',
  /** cast */
  Cast = 'cast',
  /** append */
  Append = 'append',
  /** translate */
  Translate = 'translate',
  /** reference */
  Reference = 'reference',
  /** dateOp */
  Dateop = 'dateOp',
  /** uuid */
  Uuid = 'uuid',
  /** pointer */
  Pointer = 'pointer',
  /** evaluate */
  Evaluate = 'evaluate',
  /** cc */
  Cc = 'cc',
  /** c */
  C = 'c',
  /** qty */
  Qty = 'qty',
  /** id */
  Id = 'id',
  /** cp */
  Cp = 'cp',
}

export const StructureMapTransformValues = ['create', 'copy', 'truncate', 'escape', 'cast', 'append', 'translate', 'reference', 'dateOp', 'uuid', 'pointer', 'evaluate', 'cc', 'c', 'qty', 'id', 'cp'] as const;
