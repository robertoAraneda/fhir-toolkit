/**
 * Test utilities for FHIR R4B Models
 *
 * Common helper functions for testing models and builders.
 */

import { expect } from 'vitest';

/**
 * Verify that an instance can serialize to JSON and be restored from JSON
 * with identical data (roundtrip test).
 */
export function expectSerializationRoundtrip<T>(
  instance: { toJSON(): T },
  FromClass: { fromJSON(json: T): { toJSON(): T } }
): void {
  const json = instance.toJSON();
  const restored = FromClass.fromJSON(json);
  expect(restored.toJSON()).toEqual(json);
}

/**
 * Verify that a functional update creates a new instance without modifying
 * the original (immutability test).
 */
export function expectImmutability<T extends object>(
  original: T,
  updated: T,
  changedProp: keyof T
): void {
  expect(updated).not.toBe(original);
  expect(original[changedProp]).not.toBe(updated[changedProp]);
}

/**
 * Verify that clone creates a deep copy that is equal but not identical.
 */
export function expectDeepClone<T extends { toJSON(): any }>(
  original: T,
  cloned: T
): void {
  expect(cloned).not.toBe(original);
  expect(cloned.toJSON()).toEqual(original.toJSON());
}

/**
 * Verify that undefined properties are not included in JSON output.
 */
export function expectNoUndefinedInJSON(json: object): void {
  const jsonString = JSON.stringify(json);
  const parsed = JSON.parse(jsonString);

  function checkNoUndefined(obj: any, path = ''): void {
    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      if (obj[key] === undefined) {
        throw new Error(`Found undefined at ${currentPath}`);
      }
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        checkNoUndefined(obj[key], currentPath);
      }
    }
  }

  checkNoUndefined(parsed);
}

/**
 * Verify that a builder produces the expected instance type.
 */
export function expectBuilderProducesType<TModel>(
  builder: { build(): TModel },
  ModelClass: new (...args: any[]) => TModel
): void {
  const instance = builder.build();
  expect(instance).toBeInstanceOf(ModelClass);
}

/**
 * Verify that array properties accumulate correctly in builders.
 */
export function expectArrayAccumulation<T>(
  items: T[],
  expectedLength: number
): void {
  expect(items).toHaveLength(expectedLength);
  items.forEach((item) => {
    expect(item).toBeDefined();
  });
}

/**
 * Helper to test choice type behavior in builders.
 */
export function expectChoiceTypeClearsOthers<T extends object>(
  result: T,
  setProperty: keyof T,
  clearedProperties: (keyof T)[]
): void {
  expect(result[setProperty]).toBeDefined();
  for (const prop of clearedProperties) {
    expect(result[prop]).toBeUndefined();
  }
}
