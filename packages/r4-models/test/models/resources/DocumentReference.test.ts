import { describe, it, expect } from 'vitest';
import { DocumentReference } from '../../../src/models/resources/DocumentReference.js';
import { DocumentReferenceBuilder } from '../../../src/builders/resources/DocumentReferenceBuilder.js';
import type { IDocumentReference } from '@fhir-toolkit/r4-types';

describe('DocumentReference', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(documentReference: DocumentReference): void {
    const json = documentReference.toJSON();
    const deserialized = DocumentReference.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(documentReference: DocumentReference): void {
    const cloned = documentReference.clone();
    expect(cloned).not.toBe(documentReference);
    expect(cloned.toJSON()).toEqual(documentReference.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: IDocumentReference): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create DocumentReference with minimal required properties', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        status: 'current',
        content: [
          {
            attachment: {
              contentType: 'application/pdf',
              url: 'http://example.org/documents/doc1.pdf',
            },
          },
        ],
      });

      expect(documentReference.resourceType).toBe('DocumentReference');
      expect(documentReference.status).toBe('current');
      expect(documentReference.content).toHaveLength(1);
    });

    it('should create DocumentReference with all properties', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        id: 'doc-1',
        masterIdentifier: { system: 'urn:oid:1.2.3.4.5', value: 'MASTER-001' },
        identifier: [{ system: 'http://hospital.org/documents', value: 'DOC-001' }],
        status: 'current',
        docStatus: 'final',
        type: { coding: [{ code: '34133-9', display: 'Summarization of Episode Note' }] },
        category: [{ coding: [{ code: 'clinical-note' }] }],
        subject: { reference: 'Patient/123' },
        date: '2024-01-15T10:00:00Z',
        author: [{ reference: 'Practitioner/doc-1' }],
        authenticator: { reference: 'Practitioner/doc-1' },
        custodian: { reference: 'Organization/hospital-1' },
        description: 'Patient discharge summary',
        securityLabel: [{ coding: [{ code: 'R', display: 'Restricted' }] }],
        content: [
          {
            attachment: {
              contentType: 'application/pdf',
              url: 'http://example.org/documents/discharge-summary.pdf',
              title: 'Discharge Summary',
            },
            format: { code: 'urn:ihe:iti:xds:2017:mimeTypeSufficient' },
          },
        ],
        context: {
          encounter: [{ reference: 'Encounter/456' }],
          period: { start: '2024-01-10', end: '2024-01-15' },
        },
      });

      expect(documentReference.resourceType).toBe('DocumentReference');
      expect(documentReference.id).toBe('doc-1');
      expect(documentReference.status).toBe('current');
      expect(documentReference.docStatus).toBe('final');
      expectSerializationRoundtrip(documentReference);
    });

    it('should handle empty constructor', () => {
      const documentReference = new DocumentReference();
      expect(documentReference.resourceType).toBe('DocumentReference');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        status: 'current',
        content: [
          {
            attachment: { contentType: 'text/plain', url: 'http://example.org/doc.txt' },
          },
        ],
      });

      const json = documentReference.toJSON();
      expect(json.resourceType).toBe('DocumentReference');
      expect(json.status).toBe('current');
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        id: 'doc-1',
        meta: { versionId: '1' },
        status: 'current',
        content: [{ attachment: { contentType: 'application/pdf' } }],
      });

      const json = documentReference.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create DocumentReference from JSON', () => {
      const json: IDocumentReference = {
        resourceType: 'DocumentReference',
        status: 'current',
        content: [
          {
            attachment: { contentType: 'application/pdf' },
          },
        ],
      };

      const documentReference = DocumentReference.fromJSON(json);
      expect(documentReference.status).toBe('current');
    });

    it('should handle complex JSON structure', () => {
      const json: IDocumentReference = {
        resourceType: 'DocumentReference',
        status: 'current',
        content: [
          {
            attachment: {
              contentType: 'application/pdf',
              data: 'SGVsbG8gV29ybGQ=',
              title: 'Test Document',
            },
          },
        ],
        context: {
          encounter: [{ reference: 'Encounter/123' }],
          practiceSetting: { coding: [{ code: 'cardiology' }] },
        },
      };

      const documentReference = DocumentReference.fromJSON(json);
      expect(documentReference.content[0]?.attachment?.title).toBe('Test Document');
      expect(documentReference.context?.encounter?.[0]?.reference).toBe('Encounter/123');
      expectSerializationRoundtrip(documentReference);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new DocumentReference({
        resourceType: 'DocumentReference',
        status: 'current',
        content: [{ attachment: { contentType: 'text/plain' } }],
      });

      const modified = original.with({ status: 'superseded' });

      expect(original.status).toBe('current');
      expect(modified.status).toBe('superseded');
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        status: 'current',
        content: [{ attachment: { contentType: 'application/pdf' } }],
      });

      const transformed = documentReference.applyTransform((data) => ({
        ...data,
        status: 'superseded',
        description: 'This document has been superseded by a newer version',
      }));

      expect(transformed.status).toBe('superseded');
      expect(transformed.description).toContain('superseded');
      expect(documentReference.status).toBe('current');
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        status: 'current',
        content: [
          {
            attachment: {
              contentType: 'application/pdf',
              url: 'http://example.org/doc.pdf',
            },
          },
        ],
      });

      expectDeepClone(documentReference);
    });

    it('should clone with all properties', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        id: 'doc-1',
        status: 'current',
        content: [{ attachment: { contentType: 'text/plain' } }],
        description: 'Test document',
      });

      const cloned = documentReference.clone();
      expect(cloned.toJSON()).toEqual(documentReference.toJSON());
      expect(cloned.description).toBe('Test document');
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        status: 'current',
        content: [{ attachment: { contentType: 'text/plain' } }],
      });

      expect(documentReference.toString()).toBe('DocumentReference');
    });

    it('should return string representation with id', () => {
      const documentReference = new DocumentReference({
        resourceType: 'DocumentReference',
        id: 'doc-123',
        status: 'current',
        content: [{ attachment: { contentType: 'text/plain' } }],
      });

      expect(documentReference.toString()).toBe('DocumentReference, id=doc-123');
    });
  });

  // ============================================================
  // Status Tests
  // ============================================================

  describe('Status', () => {
    const validStatuses = ['current', 'superseded', 'entered-in-error'];

    validStatuses.forEach((status) => {
      it(`should accept status: ${status}`, () => {
        const documentReference = new DocumentReference({
          resourceType: 'DocumentReference',
          status: status as any,
          content: [{ attachment: { contentType: 'text/plain' } }],
        });

        expect(documentReference.status).toBe(status);
      });
    });
  });

  // ============================================================
  // DocStatus Tests
  // ============================================================

  describe('DocStatus', () => {
    const validDocStatuses = ['preliminary', 'final', 'amended', 'entered-in-error'];

    validDocStatuses.forEach((docStatus) => {
      it(`should accept docStatus: ${docStatus}`, () => {
        const documentReference = new DocumentReference({
          resourceType: 'DocumentReference',
          status: 'current',
          docStatus: docStatus as any,
          content: [{ attachment: { contentType: 'text/plain' } }],
        });

        expect(documentReference.docStatus).toBe(docStatus);
      });
    });
  });

  // ============================================================
  // DocumentReferenceBuilder Tests
  // ============================================================

  describe('DocumentReferenceBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build DocumentReference with required fields', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addContent({
            attachment: { contentType: 'application/pdf', url: 'http://example.org/doc.pdf' },
          })
          .build();

        expect(documentReference.status).toBe('current');
        expect(documentReference.content).toHaveLength(1);
      });

      it('should build DocumentReference with all scalar fields', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setId('doc-1')
          .setMasterIdentifier({ system: 'urn:oid:1.2.3.4', value: 'MASTER-001' })
          .setStatus('current')
          .setDocStatus('final')
          .setType({ coding: [{ code: '34133-9', display: 'Summarization of Episode Note' }] })
          .setSubject({ reference: 'Patient/123' })
          .setDate('2024-01-15T10:00:00Z')
          .setAuthenticator({ reference: 'Practitioner/doc-1' })
          .setCustodian({ reference: 'Organization/hospital-1' })
          .setDescription('Patient discharge summary')
          .setContext({
            encounter: [{ reference: 'Encounter/456' }],
            period: { start: '2024-01-10', end: '2024-01-15' },
          })
          .build();

        expect(documentReference.id).toBe('doc-1');
        expect(documentReference.masterIdentifier?.value).toBe('MASTER-001');
        expect(documentReference.docStatus).toBe('final');
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addIdentifier({ system: 'http://hospital.org', value: 'DOC-001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'DOC-002' })
          .addContent({ attachment: { contentType: 'text/plain' } })
          .build();

        expect(documentReference.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addCategory({ coding: [{ code: 'clinical-note' }] })
          .addCategory({ coding: [{ code: 'progress-note' }] })
          .addContent({ attachment: { contentType: 'text/plain' } })
          .build();

        expect(documentReference.category).toHaveLength(2);
      });

      it('should add authors', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addAuthor({ reference: 'Practitioner/doc-1' })
          .addAuthor({ reference: 'Practitioner/doc-2' })
          .addContent({ attachment: { contentType: 'text/plain' } })
          .build();

        expect(documentReference.author).toHaveLength(2);
      });

      it('should add relatesTo', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addRelatesTo({
            code: 'replaces',
            target: { reference: 'DocumentReference/old-doc' },
          })
          .addContent({ attachment: { contentType: 'text/plain' } })
          .build();

        expect(documentReference.relatesTo).toHaveLength(1);
      });

      it('should add security labels', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addSecurityLabel({ coding: [{ code: 'R', display: 'Restricted' }] })
          .addSecurityLabel({ coding: [{ code: 'N', display: 'Normal' }] })
          .addContent({ attachment: { contentType: 'text/plain' } })
          .build();

        expect(documentReference.securityLabel).toHaveLength(2);
      });

      it('should add content', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setStatus('current')
          .addContent({
            attachment: { contentType: 'application/pdf', url: 'http://example.org/doc1.pdf' },
          })
          .addContent({
            attachment: { contentType: 'text/plain', url: 'http://example.org/doc2.txt' },
          })
          .build();

        expect(documentReference.content).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const documentReference = new DocumentReferenceBuilder()
          .setId('doc-chain')
          .setStatus('current')
          .setDescription('Test document')
          .addCategory({ coding: [{ code: 'clinical-note' }] })
          .addAuthor({ reference: 'Practitioner/1' })
          .addContent({ attachment: { contentType: 'application/pdf' } })
          .build();

        expect(documentReference.id).toBe('doc-chain');
        expect(documentReference.category).toHaveLength(1);
        expect(documentReference.author).toHaveLength(1);
        expect(documentReference.content).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create discharge summary document reference', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setId('discharge-summary-1')
        .setMasterIdentifier({
          system: 'urn:oid:1.2.840.113619.2.62.994044785528.114289542805',
          value: 'DISCHARGE-2024-001',
        })
        .setStatus('current')
        .setDocStatus('final')
        .setType({
          coding: [
            {
              system: 'http://loinc.org',
              code: '18842-5',
              display: 'Discharge summary',
            },
          ],
        })
        .addCategory({
          coding: [
            {
              system: 'http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category',
              code: 'clinical-note',
              display: 'Clinical Note',
            },
          ],
        })
        .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
        .setDate('2024-01-15T14:30:00Z')
        .addAuthor({ reference: 'Practitioner/attending-physician', display: 'Dr. Sarah Johnson' })
        .setAuthenticator({ reference: 'Practitioner/attending-physician' })
        .setCustodian({ reference: 'Organization/hospital-main' })
        .setDescription('Discharge summary for hospitalization from 2024-01-10 to 2024-01-15')
        .addContent({
          attachment: {
            contentType: 'application/pdf',
            url: 'https://hospital.org/documents/discharge-summary-2024-001.pdf',
            title: 'Discharge Summary - John Doe',
            creation: '2024-01-15T14:30:00Z',
            size: 245678,
            hash: 'SGVsbG8gV29ybGQ=',
          },
          format: {
            system: 'http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem',
            code: 'urn:ihe:iti:xds:2017:mimeTypeSufficient',
            display: 'MimeType sufficient',
          },
        })
        .setContext({
          encounter: [{ reference: 'Encounter/admission-123' }],
          period: { start: '2024-01-10T08:00:00Z', end: '2024-01-15T12:00:00Z' },
          facilityType: {
            coding: [{ code: 'HOSP', display: 'Hospital' }],
          },
          practiceSetting: {
            coding: [{ code: 'cardiology', display: 'Cardiology' }],
          },
        })
        .build();

      expect(documentReference.status).toBe('current');
      expect(documentReference.docStatus).toBe('final');
      expect(documentReference.type?.coding?.[0]?.code).toBe('18842-5');
      expect(documentReference.content[0]?.attachment?.contentType).toBe('application/pdf');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create lab report document reference', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setDocStatus('final')
        .setType({
          coding: [
            {
              system: 'http://loinc.org',
              code: '11502-2',
              display: 'Laboratory report',
            },
          ],
        })
        .setSubject({ reference: 'Patient/123' })
        .setDate('2024-01-15T09:00:00Z')
        .addAuthor({ reference: 'Practitioner/lab-director' })
        .addContent({
          attachment: {
            contentType: 'application/pdf',
            url: 'https://lab.org/reports/lipid-panel-2024-001.pdf',
            title: 'Lipid Panel Results',
          },
        })
        .setContext({
          related: [{ reference: 'ServiceRequest/lipid-panel-order' }],
        })
        .build();

      expect(documentReference.type?.coding?.[0]?.code).toBe('11502-2');
      expect(documentReference.context?.related?.[0]?.reference).toBe('ServiceRequest/lipid-panel-order');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create imaging report document reference', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setDocStatus('final')
        .setType({
          coding: [
            {
              system: 'http://loinc.org',
              code: '18748-4',
              display: 'Diagnostic imaging study',
            },
          ],
        })
        .setSubject({ reference: 'Patient/123' })
        .addAuthor({ reference: 'Practitioner/radiologist-1' })
        .addContent({
          attachment: {
            contentType: 'application/dicom',
            url: 'https://pacs.hospital.org/studies/chest-xray-2024-001',
            title: 'Chest X-Ray PA and Lateral',
          },
        })
        .setContext({
          related: [{ reference: 'ImagingStudy/chest-xray-study' }],
        })
        .build();

      expect(documentReference.content[0]?.attachment?.contentType).toBe('application/dicom');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create progress note with superseded relationship', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setDocStatus('final')
        .setType({
          coding: [{ code: '11506-3', display: 'Progress note' }],
        })
        .setSubject({ reference: 'Patient/123' })
        .addAuthor({ reference: 'Practitioner/doc-1' })
        .addRelatesTo({
          code: 'replaces',
          target: { reference: 'DocumentReference/progress-note-old' },
        })
        .addContent({
          attachment: {
            contentType: 'text/plain',
            data: 'UGF0aWVudCBzaG93aW5nIGltcHJvdmVtZW50',
            title: 'Progress Note - Updated',
          },
        })
        .build();

      expect(documentReference.relatesTo).toHaveLength(1);
      expect(documentReference.relatesTo?.[0]?.code).toBe('replaces');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create restricted document with security labels', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setDocStatus('final')
        .setType({ coding: [{ code: 'psychiatric-note' }] })
        .setSubject({ reference: 'Patient/123' })
        .addSecurityLabel({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-Confidentiality',
              code: 'R',
              display: 'Restricted',
            },
          ],
        })
        .addSecurityLabel({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'PSY',
              display: 'Psychiatry',
            },
          ],
        })
        .addContent({
          attachment: { contentType: 'text/plain', title: 'Psychiatric Evaluation' },
        })
        .build();

      expect(documentReference.securityLabel).toHaveLength(2);
      expect(documentReference.securityLabel?.[0]?.coding?.[0]?.code).toBe('R');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create operative report document', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setDocStatus('final')
        .setType({
          coding: [
            {
              system: 'http://loinc.org',
              code: '11504-8',
              display: 'Surgical operation note',
            },
          ],
        })
        .setSubject({ reference: 'Patient/surgical-patient' })
        .addAuthor({ reference: 'Practitioner/surgeon-1' })
        .addContent({
          attachment: {
            contentType: 'application/pdf',
            url: 'https://hospital.org/operative-reports/appendectomy-2024-001.pdf',
            title: 'Operative Report - Laparoscopic Appendectomy',
          },
        })
        .setContext({
          encounter: [{ reference: 'Encounter/surgery-admission' }],
          related: [{ reference: 'Procedure/appendectomy' }],
        })
        .build();

      expect(documentReference.type?.coding?.[0]?.code).toBe('11504-8');
      expect(documentReference.context?.related?.[0]?.reference).toBe('Procedure/appendectomy');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create preliminary pathology report', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setDocStatus('preliminary')
        .setType({
          coding: [{ code: '60567-5', display: 'Pathology Consultation note' }],
        })
        .setSubject({ reference: 'Patient/123' })
        .addAuthor({ reference: 'Practitioner/pathologist-1' })
        .setDescription('Preliminary frozen section results - awaiting final pathology')
        .addContent({
          attachment: {
            contentType: 'text/plain',
            title: 'Frozen Section - Preliminary',
          },
        })
        .build();

      expect(documentReference.docStatus).toBe('preliminary');
      expect(documentReference.description).toContain('Preliminary');
      expectSerializationRoundtrip(documentReference);
    });

    it('should create scanned consent form', () => {
      const documentReference = new DocumentReferenceBuilder()
        .setStatus('current')
        .setType({
          coding: [{ code: 'consent-form', display: 'Consent Form' }],
        })
        .setSubject({ reference: 'Patient/123' })
        .addContent({
          attachment: {
            contentType: 'image/jpeg',
            url: 'https://hospital.org/scanned-docs/consent-2024-001.jpg',
            title: 'Signed Consent Form',
            creation: '2024-01-15T08:30:00Z',
          },
        })
        .build();

      expect(documentReference.content[0]?.attachment?.contentType).toBe('image/jpeg');
      expectSerializationRoundtrip(documentReference);
    });
  });
});
