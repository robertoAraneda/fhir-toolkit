/**
 * LibraryType
 * 
 * The type of knowledge asset this library contains.
 *
 * @see http://hl7.org/fhir/ValueSet/library-type
 */

export type LibraryTypeType = 'logic-library' | 'model-definition' | 'asset-collection' | 'module-definition';

export enum LibraryTypeEnum {
  /** Logic Library */
  LogicLibrary = 'logic-library',
  /** Model Definition */
  ModelDefinition = 'model-definition',
  /** Asset Collection */
  AssetCollection = 'asset-collection',
  /** Module Definition */
  ModuleDefinition = 'module-definition',
}

export const LibraryTypeValues = ['logic-library', 'model-definition', 'asset-collection', 'module-definition'] as const;
