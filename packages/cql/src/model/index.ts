import type { ModelInfo } from './model-info.js';
import { createR4ModelInfo } from './r4.js';
import { createR4BModelInfo } from './r4b.js';
import { createR5ModelInfo } from './r5.js';

export type { ModelInfo, TypeInfo, ElementInfo } from './model-info.js';
export { StaticModelInfo } from './model-info.js';
export { createR4ModelInfo } from './r4.js';
export { createR4BModelInfo } from './r4b.js';
export { createR5ModelInfo } from './r5.js';

/** Supported FHIR version identifiers for built-in model info. */
export type FhirVersion = 'R4' | 'R4B' | 'R5';

/**
 * Resolves a FHIR version string or custom ModelInfo instance to a ModelInfo.
 * Pass 'R4', 'R4B', or 'R5' for built-in models, or a custom ModelInfo object.
 */
export function resolveModelInfo(spec: FhirVersion | ModelInfo): ModelInfo {
  if (typeof spec === 'object') return spec;
  switch (spec) {
    case 'R4':
      return createR4ModelInfo();
    case 'R4B':
      return createR4BModelInfo();
    case 'R5':
      return createR5ModelInfo();
  }
}
