/**
 * FHIR R4 Type Definitions
 *
 * This package contains TypeScript interfaces and valuesets for FHIR R4.
 * It has zero runtime dependencies - only type definitions.
 *
 * @packageDocumentation
 */

// Base types
export * from './base/index.js';

// Generated types (interfaces)
export * from './types/index.js';

// Generated valuesets
export * from './valuesets/index.js';

export const R4_TYPES_VERSION = '0.0.1' as const;
