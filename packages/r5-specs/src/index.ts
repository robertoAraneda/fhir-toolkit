/**
 * @fhir-toolkit/r5-specs
 *
 * FHIR R5 StructureDefinitions, ValueSets, and CodeSystems for validation.
 * This package provides the official HL7 FHIR R5 specification files.
 *
 * @packageDocumentation
 */

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * FHIR version provided by this package
 */
export const FHIR_VERSION = 'R5' as const;

/**
 * FHIR version string (e.g., "5.0.0")
 */
export const FHIR_VERSION_STRING = '5.0.0' as const;

/**
 * Path to the specs directory containing StructureDefinitions, ValueSets, and CodeSystems
 *
 * @example
 * ```typescript
 * import { specsPath } from '@fhir-toolkit/r5-specs';
 * import { FhirValidator } from '@fhir-toolkit/yafv';
 *
 * const validator = new FhirValidator({
 *   fhirVersion: 'R5',
 *   specsPath: specsPath
 * });
 * ```
 */
export const specsPath: string = resolve(__dirname, '..', 'specs');

/**
 * Package metadata
 */
export const metadata = {
  name: '@fhir-toolkit/r5-specs',
  version: FHIR_VERSION,
  versionString: FHIR_VERSION_STRING,
  specsPath,
} as const;

export default metadata;
