import { describe, expect, it } from 'vitest';
import { EvalContext } from '../../src/eval/context.js';
import { CqlInteger } from '../../src/types/primitives.js';
import { CqlString } from '../../src/types/primitives.js';
import { CqlCode } from '../../src/types/complex.js';
import type { Library } from '../../src/ast/library.js';
import type { DataProvider } from '../../src/providers/data.js';
import type { TerminologyProvider } from '../../src/providers/terminology.js';

const dummyLibrary: Library = {
  identifier: { name: 'TestLib', version: '1.0.0' },
  usings: [],
  includes: [],
  codeSystems: [],
  valueSets: [],
  codes: [],
  concepts: [],
  parameters: [],
  contexts: [],
  statements: [],
  functions: [],
};

const dummyResource = { resourceType: 'Patient', id: '123' };

describe('EvalContext', () => {
  it('should resolve parameters set on root context', () => {
    const ctx = new EvalContext(dummyLibrary, dummyResource);
    ctx.parameters.set('MeasurementPeriod', new CqlString('2024'));

    expect(ctx.resolveIdentifier('MeasurementPeriod')).toBeInstanceOf(CqlString);
  });

  it('should resolve alias set on child scope', () => {
    const root = new EvalContext(dummyLibrary, dummyResource);
    const child = root.childScope();
    child.aliases.set('E', new CqlInteger(42));

    expect(child.resolveIdentifier('E')).toBeInstanceOf(CqlInteger);
    // Parent should not see child alias
    expect(root.resolveIdentifier('E')).toBeUndefined();
  });

  it('should fall through to parent for definitions', () => {
    const root = new EvalContext(dummyLibrary, dummyResource);
    root.definitions.set('InInitialPopulation', new CqlInteger(1));

    const child = root.childScope();
    expect(child.resolveIdentifier('InInitialPopulation')).toBeInstanceOf(CqlInteger);
  });

  it('should return undefined for unknown identifiers', () => {
    const ctx = new EvalContext(dummyLibrary, dummyResource);
    expect(ctx.resolveIdentifier('DoesNotExist')).toBeUndefined();
  });

  it('should resolve value set URLs through parent chain', () => {
    const root = new EvalContext(dummyLibrary, dummyResource);
    root.valueSets.set('Diabetes', 'http://example.com/vs/diabetes');

    const child = root.childScope();
    expect(child.resolveValueSetUrl('Diabetes')).toBe('http://example.com/vs/diabetes');
    expect(child.resolveValueSetUrl('Unknown')).toBeNull();
  });

  it('should resolve code systems through parent chain', () => {
    const root = new EvalContext(dummyLibrary, dummyResource);
    const code = new CqlCode('http://loinc.org', '2.73', 'LOINC');
    root.codeSystems.set('LOINC', code);

    const child = root.childScope();
    expect(child.resolveCodeSystem('LOINC')).toBe(code);
    expect(child.resolveCodeSystem('SNOMED')).toBeNull();
  });

  it('should inherit library, contextResource, and providers in child scope', () => {
    const dp: DataProvider = {
      retrieve: async () => [],
    };
    const tp: TerminologyProvider = {
      inValueSet: async () => false,
      inCodeSystem: async () => false,
      expand: async () => [],
    };

    const root = new EvalContext(dummyLibrary, dummyResource, dp, tp);
    const child = root.childScope();

    expect(child.library).toBe(dummyLibrary);
    expect(child.contextResource).toBe(dummyResource);
    expect(child.dataProvider).toBe(dp);
    expect(child.terminologyProvider).toBe(tp);
  });

  it('should prefer aliases over definitions with the same name', () => {
    const ctx = new EvalContext(dummyLibrary, dummyResource);
    ctx.definitions.set('X', new CqlInteger(1));
    ctx.aliases.set('X', new CqlInteger(99));

    const resolved = ctx.resolveIdentifier('X');
    expect(resolved).toBeInstanceOf(CqlInteger);
    expect((resolved as CqlInteger).value).toBe(99);
  });
});
