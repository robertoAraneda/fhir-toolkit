/**
 * Organization Resource Model and Builder Tests
 *
 * Tests for the Organization resource class and its builder.
 * Organization represents a formally or informally recognized grouping of
 * people or organizations formed for the purpose of achieving collective action.
 */

import { describe, it, expect } from 'vitest';
import { Organization, OrganizationBuilder } from '../../../src/index.js';
import type { IOrganization } from '@fhir-toolkit/r4-types';
import {
  expectSerializationRoundtrip,
  expectDeepClone,
  expectNoUndefinedInJSON,
} from '../../helpers/test-utils.js';

// Test fixtures
const organizations = {
  simple: {
    resourceType: 'Organization',
    id: 'example',
    active: true,
    name: 'Springfield General Hospital',
  } as IOrganization,
  complete: {
    resourceType: 'Organization',
    id: 'complete-org',
    meta: {
      versionId: '1',
      lastUpdated: '2024-01-15T10:30:00Z',
    },
    identifier: [
      {
        system: 'http://hl7.org/fhir/sid/us-npi',
        value: '1234567890',
      },
      {
        system: 'urn:oid:2.16.840.1.113883.4.7',
        value: 'ABC123',
      },
    ],
    active: true,
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/organization-type',
            code: 'prov',
            display: 'Healthcare Provider',
          },
        ],
      },
    ],
    name: 'Acme Healthcare Corporation',
    alias: ['Acme Health', 'AHC'],
    telecom: [
      {
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'work',
      },
      {
        system: 'email',
        value: 'info@acmehealth.example.org',
        use: 'work',
      },
    ],
    address: [
      {
        use: 'work',
        type: 'physical',
        line: ['123 Healthcare Blvd', 'Suite 100'],
        city: 'Springfield',
        state: 'IL',
        postalCode: '62701',
        country: 'USA',
      },
    ],
    contact: [
      {
        purpose: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/contactentity-type',
              code: 'ADMIN',
              display: 'Administrative',
            },
          ],
        },
        name: {
          family: 'Smith',
          given: ['Jane'],
        },
        telecom: [
          {
            system: 'phone',
            value: '+1-555-987-6543',
          },
        ],
      },
    ],
  } as IOrganization,
  hospital: {
    resourceType: 'Organization',
    id: 'hospital-1',
    active: true,
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/organization-type',
            code: 'prov',
            display: 'Healthcare Provider',
          },
        ],
        text: 'Hospital',
      },
    ],
    name: 'Community Medical Center',
    address: [
      {
        line: ['500 Hospital Drive'],
        city: 'Metropolis',
        state: 'NY',
      },
    ],
  } as IOrganization,
  department: {
    resourceType: 'Organization',
    id: 'dept-cardiology',
    active: true,
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/organization-type',
            code: 'dept',
            display: 'Hospital Department',
          },
        ],
      },
    ],
    name: 'Cardiology Department',
    partOf: {
      reference: 'Organization/hospital-1',
      display: 'Community Medical Center',
    },
  } as IOrganization,
  insurer: {
    resourceType: 'Organization',
    id: 'insurer-1',
    active: true,
    type: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/organization-type',
            code: 'ins',
            display: 'Insurance Company',
          },
        ],
      },
    ],
    name: 'Blue Cross Blue Shield',
  } as IOrganization,
  withEndpoints: {
    resourceType: 'Organization',
    id: 'org-with-endpoints',
    name: 'Digital Health Network',
    endpoint: [
      {
        reference: 'Endpoint/fhir-server',
        display: 'FHIR API Endpoint',
      },
      {
        reference: 'Endpoint/patient-portal',
        display: 'Patient Portal',
      },
    ],
  } as IOrganization,
};

describe('Organization', () => {
  // ============================================================================
  // Model Tests
  // ============================================================================
  describe('Model', () => {
    describe('Constructor', () => {
      it('should create empty instance', () => {
        const org = new Organization({});
        expect(org).toBeInstanceOf(Organization);
        expect(org.resourceType).toBe('Organization');
      });

      it('should create simple organization', () => {
        const org = new Organization(organizations.simple);
        expect(org.id).toBe('example');
        expect(org.active).toBe(true);
        expect(org.name).toBe('Springfield General Hospital');
      });

      it('should create complete organization', () => {
        const org = new Organization(organizations.complete);
        expect(org.identifier).toHaveLength(2);
        expect(org.type).toHaveLength(1);
        expect(org.alias).toHaveLength(2);
        expect(org.telecom).toHaveLength(2);
        expect(org.address).toHaveLength(1);
        expect(org.contact).toHaveLength(1);
      });

      it('should create hospital organization', () => {
        const org = new Organization(organizations.hospital);
        expect(org.type?.[0].text).toBe('Hospital');
      });

      it('should create department with partOf', () => {
        const org = new Organization(organizations.department);
        expect(org.partOf?.reference).toBe('Organization/hospital-1');
      });

      it('should create insurer organization', () => {
        const org = new Organization(organizations.insurer);
        expect(org.type?.[0].coding?.[0].code).toBe('ins');
      });

      it('should create organization with endpoints', () => {
        const org = new Organization(organizations.withEndpoints);
        expect(org.endpoint).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should convert to JSON', () => {
        const org = new Organization(organizations.complete);
        const json = org.toJSON();

        expect(json.resourceType).toBe('Organization');
        expect(json.id).toBe('complete-org');
        expect(json.name).toBe('Acme Healthcare Corporation');
      });

      it('should omit undefined properties in JSON', () => {
        const org = new Organization(organizations.simple);
        const json = org.toJSON();

        expect(json.resourceType).toBeDefined();
        expect(json.name).toBeDefined();
        expect(json).not.toHaveProperty('type');
        expect(json).not.toHaveProperty('partOf');
        expect(json).not.toHaveProperty('contact');

        expectNoUndefinedInJSON(json);
      });

      it('should round-trip through JSON correctly', () => {
        const original = new Organization(organizations.complete);
        expectSerializationRoundtrip(original, Organization);
      });
    });

    describe('fromJSON', () => {
      it('should create instance from JSON', () => {
        const json: IOrganization = {
          resourceType: 'Organization',
          id: 'test',
          name: 'Test Organization',
        };
        const org = Organization.fromJSON(json);

        expect(org).toBeInstanceOf(Organization);
        expect(org.id).toBe('test');
        expect(org.name).toBe('Test Organization');
      });

      it('should create identical instance from JSON', () => {
        const original = new Organization(organizations.complete);
        const json = original.toJSON();
        const restored = Organization.fromJSON(json);

        expect(restored.toJSON()).toEqual(original.toJSON());
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Organization(organizations.simple);
        const updated = original.with({ name: 'New Name' });

        expect(updated).not.toBe(original);
        expect(updated.name).toBe('New Name');
        expect(original.name).toBe('Springfield General Hospital');
      });

      it('should apply transform function correctly', () => {
        const org = new Organization(organizations.simple);
        const transformed = org.applyTransform((data) => ({
          name: data.name?.toUpperCase(),
        }));

        expect(transformed.name).toBe('SPRINGFIELD GENERAL HOSPITAL');
        expect(org.name).toBe('Springfield General Hospital');
      });
    });

    describe('Clone', () => {
      it('should create deep clone', () => {
        const original = new Organization(organizations.complete);
        const cloned = original.clone();

        expectDeepClone(original, cloned);
      });

      it('should not affect original when modifying cloned address', () => {
        const original = new Organization(organizations.complete);
        const cloned = original.clone();

        if (cloned.address && cloned.address[0]) {
          cloned.address[0].city = 'Modified City';
        }

        expect(original.address?.[0].city).toBe('Springfield');
      });
    });

    describe('toString', () => {
      it('should return string representation', () => {
        const org = new Organization(organizations.simple);
        const str = org.toString();

        expect(typeof str).toBe('string');
        expect(str).toContain('Organization');
        expect(str).toContain('example');
      });
    });

    describe('Resource Properties', () => {
      it('should handle meta property', () => {
        const org = new Organization({
          resourceType: 'Organization',
          meta: {
            versionId: '2',
            profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'],
          },
        });

        expect(org.meta?.versionId).toBe('2');
      });

      it('should handle language', () => {
        const org = new Organization({
          resourceType: 'Organization',
          language: 'en-US',
        });

        expect(org.language).toBe('en-US');
      });
    });
  });

  // ============================================================================
  // Builder Tests
  // ============================================================================
  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build empty instance', () => {
        const org = new OrganizationBuilder().build();
        expect(org).toBeInstanceOf(Organization);
        expect(org.resourceType).toBe('Organization');
      });

      it('should build with id', () => {
        const org = new OrganizationBuilder()
          .setId('123')
          .build();

        expect(org.id).toBe('123');
      });

      it('should build with active status', () => {
        const org = new OrganizationBuilder()
          .setActive(true)
          .build();

        expect(org.active).toBe(true);
      });

      it('should build with name', () => {
        const org = new OrganizationBuilder()
          .setName('Test Hospital')
          .build();

        expect(org.name).toBe('Test Hospital');
      });

      it('should build with partOf', () => {
        const org = new OrganizationBuilder()
          .setName('Cardiology')
          .setPartOf({ reference: 'Organization/hospital-1' })
          .build();

        expect(org.partOf?.reference).toBe('Organization/hospital-1');
      });
    });

    describe('Array Properties', () => {
      it('should add identifiers', () => {
        const org = new OrganizationBuilder()
          .addIdentifier({ system: 'http://example.org/npi', value: '1234567890' })
          .addIdentifier({ system: 'http://example.org/local', value: 'ORG001' })
          .build();

        expect(org.identifier).toHaveLength(2);
      });

      it('should add types', () => {
        const org = new OrganizationBuilder()
          .addType({
            coding: [{ code: 'prov', display: 'Healthcare Provider' }],
          })
          .addType({
            coding: [{ code: 'edu', display: 'Educational Institute' }],
          })
          .build();

        expect(org.type).toHaveLength(2);
      });

      it('should add aliases', () => {
        const org = new OrganizationBuilder()
          .setName('Acme Healthcare Corporation')
          .addAlias('Acme Health')
          .addAlias('AHC')
          .build();

        expect(org.alias).toHaveLength(2);
        expect(org.alias).toContain('AHC');
      });

      it('should add telecom', () => {
        const org = new OrganizationBuilder()
          .addTelecom({ system: 'phone', value: '555-1234', use: 'work' })
          .addTelecom({ system: 'email', value: 'info@example.org' })
          .build();

        expect(org.telecom).toHaveLength(2);
      });

      it('should add addresses', () => {
        const org = new OrganizationBuilder()
          .addAddress({ city: 'Springfield', state: 'IL' })
          .addAddress({ city: 'Chicago', state: 'IL' })
          .build();

        expect(org.address).toHaveLength(2);
      });

      it('should add contacts', () => {
        const org = new OrganizationBuilder()
          .addContact({
            name: { family: 'Smith' },
            telecom: [{ system: 'phone', value: '555-9999' }],
          })
          .build();

        expect(org.contact).toHaveLength(1);
      });

      it('should add endpoints', () => {
        const org = new OrganizationBuilder()
          .addEndpoint({ reference: 'Endpoint/fhir' })
          .addEndpoint({ reference: 'Endpoint/portal' })
          .build();

        expect(org.endpoint).toHaveLength(2);
      });
    });

    describe('DomainResource Builder Methods', () => {
      it('should set meta', () => {
        const org = new OrganizationBuilder()
          .setMeta({ versionId: '1' })
          .build();

        expect(org.meta?.versionId).toBe('1');
      });

      it('should add extensions', () => {
        const org = new OrganizationBuilder()
          .addExtension({
            url: 'http://example.org/ext',
            valueString: 'test',
          })
          .build();

        expect(org.extension).toHaveLength(1);
      });
    });

    describe('Fluent API', () => {
      it('should support method chaining', () => {
        const builder = new OrganizationBuilder()
          .setId('123')
          .setActive(true)
          .setName('Test Org');

        expect(builder).toBeInstanceOf(OrganizationBuilder);
      });

      it('should allow overwriting properties', () => {
        const org = new OrganizationBuilder()
          .setName('First Name')
          .setName('Second Name')
          .build();

        expect(org.name).toBe('Second Name');
      });
    });

    describe('Build Result', () => {
      it('should produce valid JSON', () => {
        const org = new OrganizationBuilder()
          .setId('123')
          .setActive(true)
          .setName('Test Organization')
          .addType({ coding: [{ code: 'prov' }] })
          .build();

        const json = org.toJSON();
        expectNoUndefinedInJSON(json);
      });

      it('should produce clonable result', () => {
        const original = new OrganizationBuilder()
          .setId('123')
          .setName('Test Org')
          .build();

        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });
    });
  });

  // ============================================================================
  // Integration Tests
  // ============================================================================
  describe('Integration', () => {
    it('should work in hospital registration scenario', () => {
      const hospital = new OrganizationBuilder()
        .setId('hospital-001')
        .setActive(true)
        .addIdentifier({
          system: 'http://hl7.org/fhir/sid/us-npi',
          value: '1234567890',
        })
        .setName('Metropolitan General Hospital')
        .addAlias('Metro General')
        .addAlias('MGH')
        .addType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/organization-type',
              code: 'prov',
              display: 'Healthcare Provider',
            },
          ],
        })
        .addAddress({
          use: 'work',
          line: ['100 Hospital Drive'],
          city: 'Metropolis',
          state: 'NY',
          postalCode: '10001',
        })
        .addTelecom({
          system: 'phone',
          value: '+1-555-HOSPITAL',
          use: 'work',
        })
        .build();

      expect(hospital.identifier?.[0].value).toBe('1234567890');
      expect(hospital.alias).toContain('MGH');
      expect(hospital.type?.[0].coding?.[0].code).toBe('prov');

      const json = hospital.toJSON();
      const restored = Organization.fromJSON(json);

      expect(restored.name).toBe('Metropolitan General Hospital');
    });

    it('should work in department hierarchy scenario', () => {
      const hospital = new OrganizationBuilder()
        .setId('hospital-main')
        .setName('General Hospital')
        .setActive(true)
        .build();

      const cardiology = new OrganizationBuilder()
        .setId('dept-cardiology')
        .setName('Cardiology Department')
        .setActive(true)
        .addType({ coding: [{ code: 'dept' }] })
        .setPartOf({ reference: `Organization/${hospital.id}` })
        .build();

      const icuUnit = new OrganizationBuilder()
        .setId('unit-cardiac-icu')
        .setName('Cardiac ICU')
        .setActive(true)
        .setPartOf({ reference: `Organization/${cardiology.id}` })
        .build();

      expect(cardiology.partOf?.reference).toBe('Organization/hospital-main');
      expect(icuUnit.partOf?.reference).toBe('Organization/dept-cardiology');
    });

    it('should work in insurance company scenario', () => {
      const insurer = new OrganizationBuilder()
        .setId('insurer-001')
        .setActive(true)
        .setName('National Health Insurance')
        .addType({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/organization-type',
              code: 'ins',
              display: 'Insurance Company',
            },
          ],
        })
        .addContact({
          purpose: {
            coding: [{ code: 'PATINF', display: 'Patient' }],
          },
          telecom: [
            { system: 'phone', value: '1-800-CLAIMS' },
          ],
        })
        .build();

      expect(insurer.type?.[0].coding?.[0].code).toBe('ins');
      expect(insurer.contact?.[0].telecom?.[0].value).toBe('1-800-CLAIMS');
    });

    it('should handle organization update', () => {
      const original = new Organization(organizations.simple);

      const updated = original.with({
        name: 'Springfield Regional Medical Center',
        alias: ['SRMC'],
      });

      expect(updated.name).toBe('Springfield Regional Medical Center');
      expect(updated.alias).toContain('SRMC');
      expect(original.name).toBe('Springfield General Hospital');
    });

    it('should work in healthcare network scenario', () => {
      const network = new OrganizationBuilder()
        .setId('network-001')
        .setName('Regional Healthcare Network')
        .setActive(true)
        .addType({ coding: [{ code: 'bus', display: 'Non-Healthcare Business' }] })
        .addEndpoint({ reference: 'Endpoint/directory' })
        .addEndpoint({ reference: 'Endpoint/fhir-r4' })
        .build();

      expect(network.endpoint).toHaveLength(2);
    });

    it('should work in multi-location organization scenario', () => {
      const multiLocation = new OrganizationBuilder()
        .setId('multi-location')
        .setName('City Medical Group')
        .addAddress({
          use: 'work',
          line: ['100 Main St'],
          city: 'Downtown',
        })
        .addAddress({
          use: 'work',
          line: ['200 Oak Ave'],
          city: 'Westside',
        })
        .addAddress({
          use: 'work',
          line: ['300 Elm Blvd'],
          city: 'Eastside',
        })
        .build();

      expect(multiLocation.address).toHaveLength(3);
    });
  });
});
