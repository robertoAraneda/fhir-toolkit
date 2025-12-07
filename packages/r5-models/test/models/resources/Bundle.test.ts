import { describe, it, expect } from 'vitest';
import { Bundle, BundleBuilder, Patient, PatientBuilder } from '../../../src/index.js';
import type { IBundle, IBundleEntry, IBundleLink } from '@fhir-toolkit/r5-types';
import {
  expectSerializationRoundtrip,
  expectImmutability,
  expectDeepClone,
  expectNoUndefinedInJSON,
  expectBuilderProducesType,
} from '../../helpers/test-utils.js';

describe('Bundle', () => {
  const minimalBundle: IBundle = {
    resourceType: 'Bundle',
    type: 'collection',
  };

  const searchSetBundle: IBundle = {
    resourceType: 'Bundle',
    id: 'search-bundle-1',
    type: 'searchset',
    total: 2,
    timestamp: '2024-01-15T10:30:00Z',
    link: [
      {
        relation: 'self',
        url: 'http://example.org/fhir/Patient?name=John',
      },
      {
        relation: 'next',
        url: 'http://example.org/fhir/Patient?name=John&_page=2',
      },
    ],
    entry: [
      {
        fullUrl: 'http://example.org/fhir/Patient/1',
        resource: {
          resourceType: 'Patient',
          id: '1',
          name: [{ family: 'Smith', given: ['John'] }],
        },
        search: {
          mode: 'match',
          score: 1.0,
        },
      },
      {
        fullUrl: 'http://example.org/fhir/Patient/2',
        resource: {
          resourceType: 'Patient',
          id: '2',
          name: [{ family: 'Doe', given: ['John'] }],
        },
        search: {
          mode: 'match',
          score: 0.8,
        },
      },
    ],
  };

  const transactionBundle: IBundle = {
    resourceType: 'Bundle',
    id: 'transaction-1',
    type: 'transaction',
    timestamp: '2024-01-15T10:00:00Z',
    entry: [
      {
        fullUrl: 'urn:uuid:123e4567-e89b-12d3-a456-426614174000',
        resource: {
          resourceType: 'Patient',
          name: [{ family: 'New', given: ['Patient'] }],
        },
        request: {
          method: 'POST',
          url: 'Patient',
        },
      },
      {
        fullUrl: 'http://example.org/fhir/Patient/existing-1',
        resource: {
          resourceType: 'Patient',
          id: 'existing-1',
          name: [{ family: 'Updated', given: ['Patient'] }],
        },
        request: {
          method: 'PUT',
          url: 'Patient/existing-1',
        },
      },
      {
        request: {
          method: 'DELETE',
          url: 'Patient/to-delete',
        },
      },
    ],
  };

  const documentBundle: IBundle = {
    resourceType: 'Bundle',
    id: 'document-1',
    identifier: {
      system: 'http://example.org/documents',
      value: 'doc-001',
    },
    type: 'document',
    timestamp: '2024-01-15T12:00:00Z',
    entry: [
      {
        fullUrl: 'http://example.org/fhir/Composition/1',
        resource: {
          resourceType: 'Composition',
          id: '1',
          status: 'final',
          type: {
            coding: [{ system: 'http://loinc.org', code: '11488-4' }],
          },
          date: '2024-01-15',
          author: [{ reference: 'Practitioner/doc-1' }],
          title: 'Discharge Summary',
        },
      },
      {
        fullUrl: 'http://example.org/fhir/Patient/1',
        resource: {
          resourceType: 'Patient',
          id: '1',
          name: [{ family: 'Smith' }],
        },
      },
    ],
    signature: {
      type: [{ system: 'urn:iso-astm:E1762-95:2013', code: '1.2.840.10065.1.12.1.1' }],
      when: '2024-01-15T12:00:00Z',
      who: { reference: 'Practitioner/doc-1' },
    },
  };

  describe('Model', () => {
    describe('Construction', () => {
      it('should create an instance with minimal data', () => {
        const bundle = new Bundle(minimalBundle);
        expect(bundle.resourceType).toBe('Bundle');
        expect(bundle.type).toBe('collection');
      });

      it('should create a searchset bundle', () => {
        const bundle = new Bundle(searchSetBundle);
        expect(bundle.type).toBe('searchset');
        expect(bundle.total).toBe(2);
        expect(bundle.link).toHaveLength(2);
        expect(bundle.entry).toHaveLength(2);
      });

      it('should create a transaction bundle', () => {
        const bundle = new Bundle(transactionBundle);
        expect(bundle.type).toBe('transaction');
        expect(bundle.entry).toHaveLength(3);
        expect(bundle.entry?.[0].request?.method).toBe('POST');
        expect(bundle.entry?.[1].request?.method).toBe('PUT');
        expect(bundle.entry?.[2].request?.method).toBe('DELETE');
      });

      it('should create a document bundle', () => {
        const bundle = new Bundle(documentBundle);
        expect(bundle.type).toBe('document');
        expect(bundle.identifier?.value).toBe('doc-001');
        expect(bundle.signature).toBeDefined();
        expect(bundle.entry).toHaveLength(2);
      });

      it('should handle empty constructor', () => {
        const bundle = new Bundle();
        expect(bundle.resourceType).toBe('Bundle');
        expect(bundle.type).toBeUndefined();
      });
    });

    describe('Serialization', () => {
      it('should roundtrip searchset bundle through JSON', () => {
        const bundle = new Bundle(searchSetBundle);
        expectSerializationRoundtrip(bundle, Bundle);
      });

      it('should roundtrip transaction bundle through JSON', () => {
        const bundle = new Bundle(transactionBundle);
        expectSerializationRoundtrip(bundle, Bundle);
      });

      it('should roundtrip document bundle through JSON', () => {
        const bundle = new Bundle(documentBundle);
        expectSerializationRoundtrip(bundle, Bundle);
      });

      it('should not include undefined values in JSON', () => {
        const bundle = new Bundle(minimalBundle);
        expectNoUndefinedInJSON(bundle.toJSON());
      });

      it('should preserve nested resources', () => {
        const bundle = new Bundle(searchSetBundle);
        const json = bundle.toJSON();
        expect(json.entry?.[0].resource?.resourceType).toBe('Patient');
        expect((json.entry?.[0].resource as any)?.name?.[0].family).toBe('Smith');
      });
    });

    describe('Immutability', () => {
      it('should create new instance with .with()', () => {
        const original = new Bundle(minimalBundle);
        const updated = original.with({ type: 'batch' });
        expectImmutability(original, updated, 'type');
        expect(original.type).toBe('collection');
        expect(updated.type).toBe('batch');
      });

      it('should create new instance with .applyTransform()', () => {
        const original = new Bundle(searchSetBundle);
        const updated = original.applyTransform((data) => ({
          total: 10,
          timestamp: '2024-06-01T00:00:00Z',
        }));
        expect(original.total).toBe(2);
        expect(updated.total).toBe(10);
        expect(updated.timestamp).toBe('2024-06-01T00:00:00Z');
      });
    });

    describe('Clone', () => {
      it('should create a deep clone', () => {
        const original = new Bundle(searchSetBundle);
        const cloned = original.clone();
        expectDeepClone(original, cloned);
      });

      it('should not share nested objects with clone', () => {
        const original = new Bundle(searchSetBundle);
        const cloned = original.clone();
        cloned.entry![0].search!.score = 0.5;
        expect(original.entry?.[0].search?.score).toBe(1.0);
      });

      it('should not share links with clone', () => {
        const original = new Bundle(searchSetBundle);
        const cloned = original.clone();
        cloned.link![0].url = 'http://modified.url';
        expect(original.link?.[0].url).toBe('http://example.org/fhir/Patient?name=John');
      });
    });

    describe('String Representation', () => {
      it('should return proper toString', () => {
        const bundle = new Bundle({ ...minimalBundle, id: 'bundle-123' });
        expect(bundle.toString()).toContain('Bundle');
        expect(bundle.toString()).toContain('bundle-123');
      });
    });
  });

  describe('Builder', () => {
    describe('Basic Building', () => {
      it('should build a minimal bundle', () => {
        const bundle = new BundleBuilder()
          .setType('collection')
          .build();

        expectBuilderProducesType({ build: () => bundle }, Bundle);
        expect(bundle.type).toBe('collection');
      });

      it('should build a searchset bundle', () => {
        const bundle = new BundleBuilder()
          .setId('searchset-1')
          .setType('searchset')
          .setTotal(5)
          .setTimestamp('2024-01-15T10:00:00Z')
          .addLink({
            relation: 'self',
            url: 'http://example.org/fhir/Patient?active=true',
          })
          .addEntry({
            fullUrl: 'http://example.org/fhir/Patient/1',
            resource: { resourceType: 'Patient', id: '1' },
            search: { mode: 'match' },
          })
          .build();

        expect(bundle.id).toBe('searchset-1');
        expect(bundle.type).toBe('searchset');
        expect(bundle.total).toBe(5);
        expect(bundle.link).toHaveLength(1);
        expect(bundle.entry).toHaveLength(1);
      });

      it('should build a transaction bundle', () => {
        const bundle = new BundleBuilder()
          .setType('transaction')
          .addEntry({
            resource: { resourceType: 'Patient', name: [{ family: 'Test' }] },
            request: { method: 'POST', url: 'Patient' },
          })
          .addEntry({
            resource: { resourceType: 'Patient', id: 'existing' },
            request: { method: 'PUT', url: 'Patient/existing' },
          })
          .build();

        expect(bundle.type).toBe('transaction');
        expect(bundle.entry).toHaveLength(2);
        expect(bundle.entry?.[0].request?.method).toBe('POST');
        expect(bundle.entry?.[1].request?.method).toBe('PUT');
      });

      it('should build a document bundle', () => {
        const bundle = new BundleBuilder()
          .setType('document')
          .setIdentifier({ system: 'http://example.org', value: 'doc-1' })
          .setTimestamp('2024-01-15T12:00:00Z')
          .setSignature({
            type: [{ code: 'author-signature' }],
            when: '2024-01-15T12:00:00Z',
            who: { reference: 'Practitioner/1' },
          })
          .addEntry({
            resource: {
              resourceType: 'Composition',
              status: 'final',
              type: { text: 'Summary' },
              date: '2024-01-15',
              author: [{ reference: 'Practitioner/1' }],
              title: 'Document',
            },
          })
          .build();

        expect(bundle.type).toBe('document');
        expect(bundle.identifier?.value).toBe('doc-1');
        expect(bundle.signature).toBeDefined();
        expect(bundle.entry).toHaveLength(1);
      });
    });

    describe('Bundle Types', () => {
      it('should build all bundle types', () => {
        const types = [
          'document',
          'message',
          'transaction',
          'transaction-response',
          'batch',
          'batch-response',
          'history',
          'searchset',
          'collection',
          'subscription-notification',
        ] as const;

        for (const type of types) {
          const bundle = new BundleBuilder().setType(type).build();
          expect(bundle.type).toBe(type);
        }
      });
    });

    describe('Array Properties', () => {
      it('should accumulate links', () => {
        const bundle = new BundleBuilder()
          .setType('searchset')
          .addLink({ relation: 'self', url: 'http://example.org/self' })
          .addLink({ relation: 'first', url: 'http://example.org/first' })
          .addLink({ relation: 'next', url: 'http://example.org/next' })
          .addLink({ relation: 'last', url: 'http://example.org/last' })
          .build();

        expect(bundle.link).toHaveLength(4);
        expect(bundle.link?.[0].relation).toBe('self');
        expect(bundle.link?.[1].relation).toBe('first');
        expect(bundle.link?.[2].relation).toBe('next');
        expect(bundle.link?.[3].relation).toBe('last');
      });

      it('should accumulate entries', () => {
        const bundle = new BundleBuilder()
          .setType('collection')
          .addEntry({ resource: { resourceType: 'Patient', id: '1' } })
          .addEntry({ resource: { resourceType: 'Patient', id: '2' } })
          .addEntry({ resource: { resourceType: 'Observation', id: '1' } })
          .addEntry({ resource: { resourceType: 'Condition', id: '1' } })
          .build();

        expect(bundle.entry).toHaveLength(4);
      });

      it('should support different entry configurations', () => {
        const bundle = new BundleBuilder()
          .setType('transaction')
          .addEntry({
            fullUrl: 'urn:uuid:new-patient',
            resource: { resourceType: 'Patient' },
            request: { method: 'POST', url: 'Patient' },
          })
          .addEntry({
            fullUrl: 'http://example.org/Patient/1',
            resource: { resourceType: 'Patient', id: '1' },
            request: {
              method: 'PUT',
              url: 'Patient/1',
              ifMatch: 'W/"1"',
            },
          })
          .addEntry({
            request: {
              method: 'DELETE',
              url: 'Patient/old',
            },
          })
          .addEntry({
            request: {
              method: 'GET',
              url: 'Patient?identifier=12345',
            },
          })
          .build();

        expect(bundle.entry).toHaveLength(4);
        expect(bundle.entry?.[1].request?.ifMatch).toBe('W/"1"');
        expect(bundle.entry?.[3].request?.method).toBe('GET');
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const bundle = new BundleBuilder()
          .setId('chain-test')
          .setType('searchset')
          .setTotal(100)
          .setTimestamp('2024-01-15T10:00:00Z')
          .setIdentifier({ value: 'chain-bundle' })
          .addLink({ relation: 'self', url: 'http://self' })
          .addLink({ relation: 'next', url: 'http://next' })
          .addEntry({ resource: { resourceType: 'Patient', id: '1' } })
          .addEntry({ resource: { resourceType: 'Patient', id: '2' } })
          .build();

        expect(bundle.id).toBe('chain-test');
        expect(bundle.type).toBe('searchset');
        expect(bundle.total).toBe(100);
        expect(bundle.identifier?.value).toBe('chain-bundle');
        expect(bundle.link).toHaveLength(2);
        expect(bundle.entry).toHaveLength(2);
      });
    });

    describe('DomainResource Properties', () => {
      it('should set DomainResource properties through builder', () => {
        const bundle = new BundleBuilder()
          .setId('domain-bundle')
          .setMeta({ versionId: '3', lastUpdated: '2024-01-15T10:00:00Z' })
          .setLanguage('en-US')
          .setType('collection')
          .build();

        expect(bundle.id).toBe('domain-bundle');
        expect(bundle.meta?.versionId).toBe('3');
        expect(bundle.language).toBe('en-US');
      });
    });

    describe('Complex Scenarios', () => {
      it('should build a batch bundle with mixed operations', () => {
        const bundle = new BundleBuilder()
          .setType('batch')
          .addEntry({
            request: {
              method: 'GET',
              url: 'Patient/123',
            },
          })
          .addEntry({
            resource: { resourceType: 'Patient', name: [{ family: 'New' }] },
            request: {
              method: 'POST',
              url: 'Patient',
              ifNoneExist: 'identifier=http://example.org|12345',
            },
          })
          .addEntry({
            request: {
              method: 'GET',
              url: 'Observation?patient=Patient/123',
            },
          })
          .build();

        expect(bundle.type).toBe('batch');
        expect(bundle.entry).toHaveLength(3);
        expect(bundle.entry?.[0].request?.method).toBe('GET');
        expect(bundle.entry?.[1].request?.ifNoneExist).toBe('identifier=http://example.org|12345');
      });

      it('should build a history bundle', () => {
        const bundle = new BundleBuilder()
          .setType('history')
          .setTotal(3)
          .addLink({ relation: 'self', url: 'http://example.org/Patient/123/_history' })
          .addEntry({
            fullUrl: 'http://example.org/Patient/123/_history/3',
            resource: { resourceType: 'Patient', id: '123', name: [{ family: 'Latest' }] },
            request: { method: 'PUT', url: 'Patient/123' },
            response: { status: '200 OK', lastModified: '2024-01-15T10:00:00Z' },
          })
          .addEntry({
            fullUrl: 'http://example.org/Patient/123/_history/2',
            resource: { resourceType: 'Patient', id: '123', name: [{ family: 'Previous' }] },
            request: { method: 'PUT', url: 'Patient/123' },
            response: { status: '200 OK', lastModified: '2024-01-10T10:00:00Z' },
          })
          .addEntry({
            fullUrl: 'http://example.org/Patient/123/_history/1',
            resource: { resourceType: 'Patient', id: '123', name: [{ family: 'Original' }] },
            request: { method: 'POST', url: 'Patient' },
            response: { status: '201 Created', lastModified: '2024-01-01T10:00:00Z' },
          })
          .build();

        expect(bundle.type).toBe('history');
        expect(bundle.total).toBe(3);
        expect(bundle.entry).toHaveLength(3);
        expect(bundle.entry?.[0].response?.status).toBe('200 OK');
        expect(bundle.entry?.[2].response?.status).toBe('201 Created');
      });

      it('should build a message bundle', () => {
        const bundle = new BundleBuilder()
          .setType('message')
          .setTimestamp('2024-01-15T10:00:00Z')
          .addEntry({
            fullUrl: 'urn:uuid:message-header-1',
            resource: {
              resourceType: 'MessageHeader',
              eventCoding: {
                system: 'http://example.org/events',
                code: 'patient-admit',
              },
              source: {
                endpoint: 'http://example.org/source',
              },
            },
          })
          .addEntry({
            fullUrl: 'http://example.org/Patient/1',
            resource: { resourceType: 'Patient', id: '1' },
          })
          .build();

        expect(bundle.type).toBe('message');
        expect(bundle.entry).toHaveLength(2);
        expect(bundle.entry?.[0].resource?.resourceType).toBe('MessageHeader');
      });
    });

    describe('Issues and Signature', () => {
      it('should set issues resource', () => {
        const bundle = new BundleBuilder()
          .setType('searchset')
          .setIssues({
            resourceType: 'OperationOutcome',
            issue: [
              {
                severity: 'warning',
                code: 'informational',
                diagnostics: 'Search narrowed to active patients only',
              },
            ],
          })
          .build();

        expect(bundle.issues).toBeDefined();
        expect(bundle.issues?.resourceType).toBe('OperationOutcome');
      });

      it('should set signature', () => {
        const bundle = new BundleBuilder()
          .setType('document')
          .setSignature({
            type: [{ system: 'http://hl7.org/fhir/signature-type', code: 'author' }],
            when: '2024-01-15T12:00:00Z',
            who: { reference: 'Practitioner/doc-1' },
            data: 'base64-signature-data',
          })
          .build();

        expect(bundle.signature).toBeDefined();
        expect(bundle.signature?.data).toBe('base64-signature-data');
      });
    });
  });

  describe('fromJSON', () => {
    it('should create searchset bundle from JSON', () => {
      const bundle = Bundle.fromJSON(searchSetBundle);
      expect(bundle).toBeInstanceOf(Bundle);
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(2);
    });

    it('should create transaction bundle from JSON', () => {
      const bundle = Bundle.fromJSON(transactionBundle);
      expect(bundle).toBeInstanceOf(Bundle);
      expect(bundle.type).toBe('transaction');
      expect(bundle.entry).toHaveLength(3);
    });

    it('should create document bundle from JSON', () => {
      const bundle = Bundle.fromJSON(documentBundle);
      expect(bundle).toBeInstanceOf(Bundle);
      expect(bundle.type).toBe('document');
      expect(bundle.signature).toBeDefined();
    });
  });

  describe('Integration with other models', () => {
    it('should work with Patient model instances in entries', () => {
      const patient = new PatientBuilder()
        .setId('patient-1')
        .addName({ family: 'Test', given: ['Patient'] })
        .setActive(true)
        .build();

      const bundle = new BundleBuilder()
        .setType('collection')
        .addEntry({
          fullUrl: 'http://example.org/Patient/patient-1',
          resource: patient.toJSON(),
        })
        .build();

      expect(bundle.entry).toHaveLength(1);
      expect(bundle.entry?.[0].resource?.resourceType).toBe('Patient');
      expect((bundle.entry?.[0].resource as any)?.id).toBe('patient-1');
    });
  });
});
