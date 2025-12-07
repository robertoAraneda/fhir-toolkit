/**
 * @fhir-toolkit/r4b-specs
 *
 * FHIR R4B StructureDefinitions, ValueSets, and CodeSystems for validation.
 * This package provides the official HL7 FHIR R4B specification files.
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
export const FHIR_VERSION = 'R4B' as const;

/**
 * FHIR version string (e.g., "4.3.0")
 */
export const FHIR_VERSION_STRING = '4.3.0' as const;

/**
 * Path to the specs directory containing StructureDefinitions, ValueSets, and CodeSystems
 *
 * @example
 * ```typescript
 * import { specsPath } from '@fhir-toolkit/r4b-specs';
 * import { FhirValidator } from '@fhir-toolkit/yafv';
 *
 * const validator = new FhirValidator({
 *   fhirVersion: 'R4B',
 *   specsPath: specsPath
 * });
 * ```
 */
export const specsPath: string = resolve(__dirname, '..', 'specs');

/**
 * Package metadata
 */
export const metadata = {
  name: '@fhir-toolkit/r4b-specs',
  version: FHIR_VERSION,
  versionString: FHIR_VERSION_STRING,
  specsPath,
} as const;

export default metadata;
