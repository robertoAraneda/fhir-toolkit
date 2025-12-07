/**
 * @fhir-toolkit/r4-specs
 *
 * FHIR R4 StructureDefinitions, ValueSets, and CodeSystems for validation.
 * This package provides the official HL7 FHIR R4 specification files.
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
export const FHIR_VERSION = 'R4' as const;

/**
 * FHIR version string (e.g., "4.0.1")
 */
export const FHIR_VERSION_STRING = '4.0.1' as const;

/**
 * Path to the specs directory containing StructureDefinitions, ValueSets, and CodeSystems
 *
 * @example
 * ```typescript
 * import { specsPath } from '@fhir-toolkit/r4-specs';
 * import { FhirValidator } from '@fhir-toolkit/yafv';
 *
 * const validator = new FhirValidator({
 *   fhirVersion: 'R4',
 *   specsPath: specsPath
 * });
 * ```
 */
export const specsPath: string = resolve(__dirname, '..', 'specs');

/**
 * Package metadata
 */
export const metadata = {
  name: '@fhir-toolkit/r4-specs',
  version: FHIR_VERSION,
  versionString: FHIR_VERSION_STRING,
  specsPath,
} as const;

export default metadata;
