import { describe, it, expect } from 'vitest';
import { parseScope, formatScope, parseScopes, hasScope } from '../src/scopes.js';

describe('Scopes', () => {
  describe('parseScope', () => {
    it('parses patient scope', () => {
      const result = parseScope('patient/Patient.read');
      expect(result).toEqual({
        context: 'patient',
        resourceType: 'Patient',
        permissions: 'read',
      });
    });

    it('parses user scope', () => {
      const result = parseScope('user/Observation.write');
      expect(result).toEqual({
        context: 'user',
        resourceType: 'Observation',
        permissions: 'write',
      });
    });

    it('parses system scope', () => {
      const result = parseScope('system/Patient.rs');
      expect(result).toEqual({
        context: 'system',
        resourceType: 'Patient',
        permissions: 'rs',
      });
    });

    it('parses SMART v2 scope format', () => {
      const result = parseScope('patient/Observation.cruds');
      expect(result).toEqual({
        context: 'patient',
        resourceType: 'Observation',
        permissions: 'cruds',
      });
    });

    it('returns null for openid', () => {
      expect(parseScope('openid')).toBeNull();
    });

    it('returns null for launch', () => {
      expect(parseScope('launch')).toBeNull();
    });

    it('returns null for launch/patient', () => {
      expect(parseScope('launch/patient')).toBeNull();
    });

    it('returns null for offline_access', () => {
      expect(parseScope('offline_access')).toBeNull();
    });

    it('returns null for fhirUser', () => {
      expect(parseScope('fhirUser')).toBeNull();
    });
  });

  describe('formatScope', () => {
    it('formats a parsed scope back to string', () => {
      const result = formatScope({
        context: 'patient',
        resourceType: 'Patient',
        permissions: 'read',
      });
      expect(result).toBe('patient/Patient.read');
    });

    it('round-trips with parseScope', () => {
      const original = 'user/Observation.cruds';
      const parsed = parseScope(original)!;
      expect(formatScope(parsed)).toBe(original);
    });
  });

  describe('parseScopes', () => {
    it('parses multiple scopes from space-separated string', () => {
      const result = parseScopes('patient/Patient.read user/Observation.write');
      expect(result).toHaveLength(2);
      expect(result[0]!.resourceType).toBe('Patient');
      expect(result[1]!.resourceType).toBe('Observation');
    });

    it('filters out non-resource scopes', () => {
      const result = parseScopes(
        'openid fhirUser patient/Patient.read launch offline_access',
      );
      expect(result).toHaveLength(1);
      expect(result[0]!.resourceType).toBe('Patient');
    });

    it('handles empty string', () => {
      expect(parseScopes('')).toEqual([]);
    });
  });

  describe('hasScope', () => {
    const scopes = 'openid patient/Patient.read user/Observation.write';

    it('finds by context and resourceType', () => {
      expect(hasScope(scopes, { context: 'patient', resourceType: 'Patient' })).toBe(true);
    });

    it('finds by resourceType only', () => {
      expect(hasScope(scopes, { resourceType: 'Observation' })).toBe(true);
    });

    it('returns false for missing scope', () => {
      expect(hasScope(scopes, { resourceType: 'Encounter' })).toBe(false);
    });

    it('checks permissions', () => {
      expect(hasScope(scopes, { resourceType: 'Patient', permissions: 'read' })).toBe(true);
      expect(hasScope(scopes, { resourceType: 'Patient', permissions: 'write' })).toBe(false);
    });
  });
});
