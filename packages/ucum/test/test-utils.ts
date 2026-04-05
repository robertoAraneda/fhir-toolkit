import {
  PREFIXES as RAW_PREFIXES,
  BASE_UNITS as RAW_BASE_UNITS,
  DEFINED_UNITS as RAW_DEFINED_UNITS,
} from '../src/definitions.js';
import { buildModel } from '../src/model-builder.js';
import type { Model } from '../src/model.js';

/** Build a Model from the embedded UCUM definitions for use in tests. */
export function createTestModel(): Model {
  return buildModel(RAW_PREFIXES, RAW_BASE_UNITS, RAW_DEFINED_UNITS);
}
