import { describe, it, expect, beforeEach } from 'vitest';
import { DiagnosticReport, DiagnosticReportBuilder } from '../../../src';
import type { IDiagnosticReport } from '@fhir-toolkit/r4-types';

describe('DiagnosticReport', () => {
  // Helper functions
  const expectSerializationRoundtrip = (report: DiagnosticReport) => {
    const json = report.toJSON();
    const restored = DiagnosticReport.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (report: DiagnosticReport) => {
    const clone = report.clone();
    expect(clone).not.toBe(report);
    expect(clone.toJSON()).toEqual(report.toJSON());
  };

  const expectNoUndefinedInJSON = (report: DiagnosticReport) => {
    const json = JSON.stringify(report.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal DiagnosticReport with required properties', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'CBC', display: 'Complete Blood Count' }] },
        });

        expect(report.resourceType).toBe('DiagnosticReport');
        expect(report.status).toBe('final');
        expect(report.code.coding?.[0].code).toBe('CBC');
      });

      it('should create a complete DiagnosticReport with all properties', () => {
        const fullReport: IDiagnosticReport = {
          resourceType: 'DiagnosticReport',
          id: 'report-123',
          meta: { versionId: '1' },
          implicitRules: 'http://example.org/rules',
          language: 'en-US',
          text: { status: 'generated', div: '<div>Lab Results</div>' },
          identifier: [{ system: 'http://lab.org', value: 'LAB001' }],
          basedOn: [{ reference: 'ServiceRequest/sr-001' }],
          status: 'final',
          category: [{ coding: [{ code: 'LAB', display: 'Laboratory' }] }],
          code: { coding: [{ system: 'http://loinc.org', code: '58410-2', display: 'CBC panel' }] },
          subject: { reference: 'Patient/123' },
          encounter: { reference: 'Encounter/456' },
          effectiveDateTime: '2023-06-15T10:30:00Z',
          issued: '2023-06-15T14:00:00Z',
          performer: [{ reference: 'Organization/lab-main' }],
          resultsInterpreter: [{ reference: 'Practitioner/dr-smith' }],
          specimen: [{ reference: 'Specimen/blood-sample-001' }],
          result: [
            { reference: 'Observation/wbc' },
            { reference: 'Observation/rbc' },
            { reference: 'Observation/hemoglobin' },
          ],
          conclusion: 'All values within normal range',
          conclusionCode: [{ coding: [{ code: 'normal', display: 'Normal' }] }],
          presentedForm: [{ contentType: 'application/pdf', url: 'http://lab.org/reports/LAB001.pdf' }],
        };

        const report = new DiagnosticReport(fullReport);

        expect(report.id).toBe('report-123');
        expect(report.identifier).toHaveLength(1);
        expect(report.basedOn).toHaveLength(1);
        expect(report.status).toBe('final');
        expect(report.category).toHaveLength(1);
        expect(report.code.coding?.[0].code).toBe('58410-2');
        expect(report.subject?.reference).toBe('Patient/123');
        expect(report.encounter?.reference).toBe('Encounter/456');
        expect(report.effectiveDateTime).toBe('2023-06-15T10:30:00Z');
        expect(report.issued).toBe('2023-06-15T14:00:00Z');
        expect(report.performer).toHaveLength(1);
        expect(report.resultsInterpreter).toHaveLength(1);
        expect(report.specimen).toHaveLength(1);
        expect(report.result).toHaveLength(3);
        expect(report.conclusion).toBe('All values within normal range');
        expect(report.conclusionCode).toHaveLength(1);
        expect(report.presentedForm).toHaveLength(1);
      });

      it('should create report with effective as DateTime', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
          effectiveDateTime: '2023-06-15T10:00:00Z',
        });

        expect(report.effectiveDateTime).toBe('2023-06-15T10:00:00Z');
        expect(report.effectivePeriod).toBeUndefined();
      });

      it('should create report with effective as Period', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
          effectivePeriod: { start: '2023-06-15T08:00:00Z', end: '2023-06-15T10:00:00Z' },
        });

        expect(report.effectivePeriod?.start).toBe('2023-06-15T08:00:00Z');
        expect(report.effectivePeriod?.end).toBe('2023-06-15T10:00:00Z');
      });

      it('should create report with multiple results', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'lipid-panel' }] },
          result: [
            { reference: 'Observation/cholesterol-total' },
            { reference: 'Observation/cholesterol-hdl' },
            { reference: 'Observation/cholesterol-ldl' },
            { reference: 'Observation/triglycerides' },
          ],
        });

        expect(report.result).toHaveLength(4);
      });

      it('should create report with media', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'xray-chest' }] },
          media: [
            { comment: 'Frontal view', link: { reference: 'Media/chest-xray-frontal' } },
            { comment: 'Lateral view', link: { reference: 'Media/chest-xray-lateral' } },
          ],
        });

        expect(report.media).toHaveLength(2);
        expect(report.media![0].comment).toBe('Frontal view');
      });

      it('should create report with imaging study references', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'ct-scan' }] },
          imagingStudy: [
            { reference: 'ImagingStudy/ct-chest-001' },
            { reference: 'ImagingStudy/ct-abdomen-001' },
          ],
        });

        expect(report.imagingStudy).toHaveLength(2);
      });

      it('should handle report with contained resources', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
          contained: [
            { resourceType: 'Observation', id: 'obs-1', status: 'final', code: {} },
            { resourceType: 'Specimen', id: 'spec-1' },
          ],
          result: [{ reference: '#obs-1' }],
          specimen: [{ reference: '#spec-1' }],
        });

        expect(report.contained).toHaveLength(2);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal report to JSON', () => {
        const report = new DiagnosticReport({
          status: 'registered',
          code: { coding: [{ code: 'pending-test' }] },
        });

        const json = report.toJSON();

        expect(json.resourceType).toBe('DiagnosticReport');
        expect(json.status).toBe('registered');
        expectNoUndefinedInJSON(report);
      });

      it('should serialize complete report to JSON', () => {
        const report = new DiagnosticReport({
          id: 'dr-001',
          status: 'final',
          code: { coding: [{ code: 'cbc' }] },
          subject: { reference: 'Patient/123' },
          result: [{ reference: 'Observation/1' }],
          conclusion: 'Normal results',
        });

        const json = report.toJSON();

        expect(json.id).toBe('dr-001');
        expect(json.conclusion).toBe('Normal results');
        expectSerializationRoundtrip(report);
      });

      it('should exclude undefined values from JSON', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
        });

        const json = report.toJSON();

        expect(json).not.toHaveProperty('subject');
        expect(json).not.toHaveProperty('conclusion');
        expect(json).not.toHaveProperty('result');
        expectNoUndefinedInJSON(report);
      });
    });

    describe('fromJSON', () => {
      it('should create DiagnosticReport from JSON', () => {
        const json: IDiagnosticReport = {
          resourceType: 'DiagnosticReport',
          id: 'from-json-test',
          status: 'preliminary',
          code: { coding: [{ code: 'test' }] },
          subject: { reference: 'Patient/p1' },
        };

        const report = DiagnosticReport.fromJSON(json);

        expect(report).toBeInstanceOf(DiagnosticReport);
        expect(report.id).toBe('from-json-test');
        expect(report.status).toBe('preliminary');
      });

      it('should maintain data integrity through fromJSON', () => {
        const originalReport = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'lipid-panel' }] },
          result: [{ reference: 'Observation/1' }, { reference: 'Observation/2' }],
        });

        const json = originalReport.toJSON();
        const restored = DiagnosticReport.fromJSON(json);

        expect(restored.toJSON()).toEqual(originalReport.toJSON());
      });
    });

    describe('Immutability', () => {
      let report: DiagnosticReport;

      beforeEach(() => {
        report = new DiagnosticReport({
          id: 'original',
          status: 'preliminary',
          code: { coding: [{ code: 'test' }] },
          subject: { reference: 'Patient/original' },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = report.with({ status: 'final' });

        expect(modified).not.toBe(report);
        expect(modified.status).toBe('final');
        expect(report.status).toBe('preliminary');
      });

      it('should handle with() for complex properties', () => {
        const modified = report.with({
          conclusion: 'All normal',
          conclusionCode: [{ coding: [{ code: 'normal' }] }],
        });

        expect(modified.conclusion).toBe('All normal');
        expect(modified.conclusionCode).toHaveLength(1);
        expect(report.conclusion).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = report.applyTransform((data) => ({
          status: 'final',
          issued: '2023-12-31T23:59:59Z',
        }));

        expect(modified.status).toBe('final');
        expect(modified.issued).toBe('2023-12-31T23:59:59Z');
        expect(report.status).toBe('preliminary');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
          result: [{ reference: 'Observation/1' }],
          media: [{ link: { reference: 'Media/1' }, comment: 'Image 1' }],
        });

        const clone = report.clone();

        expect(clone).not.toBe(report);
        expect(clone.toJSON()).toEqual(report.toJSON());

        // Verify deep clone
        clone.result![0].reference = 'Observation/modified';
        expect(report.result![0].reference).toBe('Observation/1');
      });

      it('should deep clone nested objects', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
          presentedForm: [{ contentType: 'application/pdf', data: 'base64data' }],
        });

        expectDeepClone(report);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const report = new DiagnosticReport({
          id: 'dr-12345',
          status: 'final',
          code: { coding: [{ code: 'test' }] },
        });

        expect(report.toString()).toContain('DiagnosticReport');
        expect(report.toString()).toContain('dr-12345');
      });

      it('should return string representation without id', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
        });

        expect(report.toString()).toBe('DiagnosticReport');
      });
    });

    describe('Resource Properties (inherited)', () => {
      it('should handle Resource properties', () => {
        const report = new DiagnosticReport({
          id: 'resource-test',
          meta: {
            versionId: '1',
            lastUpdated: '2023-06-15T10:00:00Z',
          },
          implicitRules: 'http://example.org/rules',
          language: 'de-DE',
          status: 'final',
          code: { coding: [{ code: 'test' }] },
        });

        expect(report.id).toBe('resource-test');
        expect(report.meta?.versionId).toBe('1');
        expect(report.implicitRules).toBe('http://example.org/rules');
        expect(report.language).toBe('de-DE');
      });

      it('should handle DomainResource properties', () => {
        const report = new DiagnosticReport({
          status: 'final',
          code: { coding: [{ code: 'test' }] },
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">Lab Report</div>',
          },
          contained: [{ resourceType: 'Observation', id: 'obs1' }],
          extension: [{ url: 'http://example.org/ext', valueString: 'test' }],
          modifierExtension: [{ url: 'http://example.org/modext', valueBoolean: true }],
        });

        expect(report.text?.status).toBe('generated');
        expect(report.contained).toHaveLength(1);
        expect(report.extension).toHaveLength(1);
        expect(report.modifierExtension).toHaveLength(1);
      });
    });

    describe('Status Types', () => {
      const statusTypes: Array<IDiagnosticReport['status']> = [
        'registered',
        'partial',
        'preliminary',
        'final',
        'amended',
        'corrected',
        'appended',
        'cancelled',
        'entered-in-error',
        'unknown',
      ];

      statusTypes.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const report = new DiagnosticReport({
            status,
            code: { coding: [{ code: 'test' }] },
          });

          expect(report.status).toBe(status);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal DiagnosticReport', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'cbc' }] })
          .build();

        expect(report.resourceType).toBe('DiagnosticReport');
        expect(report.status).toBe('final');
        expect(report.code.coding?.[0].code).toBe('cbc');
      });

      it('should build complete DiagnosticReport with all setters', () => {
        const report = new DiagnosticReportBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setLanguage('en-US')
          .setText({ status: 'generated', div: '<div>Test</div>' })
          .setStatus('final')
          .setCode({ coding: [{ code: 'lipid-panel' }] })
          .setSubject({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setIssued('2023-06-15T14:00:00Z')
          .setConclusion('All values within normal limits')
          .build();

        expect(report.id).toBe('builder-test');
        expect(report.status).toBe('final');
        expect(report.subject?.reference).toBe('Patient/123');
        expect(report.encounter?.reference).toBe('Encounter/456');
        expect(report.issued).toBe('2023-06-15T14:00:00Z');
        expect(report.conclusion).toBe('All values within normal limits');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addIdentifier({ system: 'http://lab.org', value: 'LAB001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'HOSP001' })
          .build();

        expect(report.identifier).toHaveLength(2);
      });

      it('should add basedOn references', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addBasedOn({ reference: 'ServiceRequest/sr-1' })
          .addBasedOn({ reference: 'ServiceRequest/sr-2' })
          .build();

        expect(report.basedOn).toHaveLength(2);
      });

      it('should add categories', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addCategory({ coding: [{ code: 'LAB' }] })
          .addCategory({ coding: [{ code: 'HM' }] })
          .build();

        expect(report.category).toHaveLength(2);
      });

      it('should add performers', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addPerformer({ reference: 'Organization/lab-1' })
          .addPerformer({ reference: 'Practitioner/tech-1' })
          .build();

        expect(report.performer).toHaveLength(2);
      });

      it('should add results interpreters', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addResultsInterpreter({ reference: 'Practitioner/pathologist-1' })
          .addResultsInterpreter({ reference: 'Practitioner/pathologist-2' })
          .build();

        expect(report.resultsInterpreter).toHaveLength(2);
      });

      it('should add specimens', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addSpecimen({ reference: 'Specimen/blood-1' })
          .addSpecimen({ reference: 'Specimen/urine-1' })
          .build();

        expect(report.specimen).toHaveLength(2);
      });

      it('should add results', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'cbc' }] })
          .addResult({ reference: 'Observation/wbc' })
          .addResult({ reference: 'Observation/rbc' })
          .addResult({ reference: 'Observation/hgb' })
          .addResult({ reference: 'Observation/plt' })
          .build();

        expect(report.result).toHaveLength(4);
      });

      it('should add imaging studies', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'radiology' }] })
          .addImagingStudy({ reference: 'ImagingStudy/ct-1' })
          .addImagingStudy({ reference: 'ImagingStudy/mri-1' })
          .build();

        expect(report.imagingStudy).toHaveLength(2);
      });

      it('should add media', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'xray' }] })
          .addMedia({ link: { reference: 'Media/img-1' }, comment: 'Frontal' })
          .addMedia({ link: { reference: 'Media/img-2' }, comment: 'Lateral' })
          .build();

        expect(report.media).toHaveLength(2);
      });

      it('should add conclusion codes', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addConclusionCode({ coding: [{ code: 'normal' }] })
          .addConclusionCode({ coding: [{ code: 'no-abnormality' }] })
          .build();

        expect(report.conclusionCode).toHaveLength(2);
      });

      it('should add presented forms', () => {
        const report = new DiagnosticReportBuilder()
          .setStatus('final')
          .setCode({ coding: [{ code: 'test' }] })
          .addPresentedForm({ contentType: 'application/pdf', url: 'http://example.org/report.pdf' })
          .addPresentedForm({ contentType: 'text/html', data: 'base64html' })
          .build();

        expect(report.presentedForm).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const report = new DiagnosticReportBuilder()
          .setId('chaining-test')
          .setStatus('final')
          .setCode({ coding: [{ code: 'cbc' }] })
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'LAB' }] })
          .addResult({ reference: 'Observation/1' })
          .addResult({ reference: 'Observation/2' })
          .setConclusion('Normal')
          .build();

        expect(report.id).toBe('chaining-test');
        expect(report.result).toHaveLength(2);
        expect(report.conclusion).toBe('Normal');
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Complete Blood Count Report', () => {
      it('should create a complete CBC lab report', () => {
        const report = new DiagnosticReportBuilder()
          .setId('cbc-001')
          .addIdentifier({ system: 'http://lab.org/reports', value: 'CBC-2023-001' })
          .setStatus('final')
          .addCategory({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0074', code: 'LAB', display: 'Laboratory' }],
          })
          .addCategory({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0074', code: 'HM', display: 'Hematology' }],
          })
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '58410-2', display: 'Complete blood count (hemogram) panel' }],
          })
          .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setEncounter({ reference: 'Encounter/enc-456' })
          .setIssued('2023-06-15T14:30:00Z')
          .addPerformer({ reference: 'Organization/lab-main', display: 'Main Laboratory' })
          .addResultsInterpreter({ reference: 'Practitioner/dr-pathologist', display: 'Dr. Pathologist' })
          .addSpecimen({ reference: 'Specimen/blood-edta-001' })
          .addResult({ reference: 'Observation/wbc-001', display: 'White Blood Cell Count' })
          .addResult({ reference: 'Observation/rbc-001', display: 'Red Blood Cell Count' })
          .addResult({ reference: 'Observation/hgb-001', display: 'Hemoglobin' })
          .addResult({ reference: 'Observation/hct-001', display: 'Hematocrit' })
          .addResult({ reference: 'Observation/plt-001', display: 'Platelet Count' })
          .setConclusion('All hematology values are within normal reference ranges.')
          .addConclusionCode({
            coding: [{ system: 'http://snomed.info/sct', code: '281900007', display: 'No abnormality detected' }],
          })
          .build();

        expect(report.status).toBe('final');
        expect(report.category).toHaveLength(2);
        expect(report.result).toHaveLength(5);
        expect(report.conclusion).toContain('normal');
        expectSerializationRoundtrip(report);
      });
    });

    describe('Radiology Report', () => {
      it('should create a chest X-ray radiology report', () => {
        const report = new DiagnosticReportBuilder()
          .setId('xray-chest-001')
          .setStatus('final')
          .addCategory({
            coding: [{ code: 'RAD', display: 'Radiology' }],
          })
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '36643-5', display: 'Chest X-ray 2 Views' }],
          })
          .setSubject({ reference: 'Patient/patient-789' })
          .addPerformer({ reference: 'Organization/radiology-dept' })
          .addResultsInterpreter({ reference: 'Practitioner/dr-radiologist' })
          .addImagingStudy({ reference: 'ImagingStudy/chest-xray-study-001' })
          .addMedia({
            comment: 'PA view',
            link: { reference: 'Media/chest-xray-pa' },
          })
          .addMedia({
            comment: 'Lateral view',
            link: { reference: 'Media/chest-xray-lateral' },
          })
          .setConclusion('No acute cardiopulmonary abnormality. Heart size normal. Lungs are clear.')
          .addConclusionCode({
            coding: [{ code: 'normal-chest', display: 'Normal chest radiograph' }],
          })
          .addPresentedForm({
            contentType: 'application/pdf',
            url: 'http://hospital.org/reports/xray-chest-001.pdf',
            title: 'Chest X-ray Report',
          })
          .build();

        expect(report.imagingStudy).toHaveLength(1);
        expect(report.media).toHaveLength(2);
        expect(report.presentedForm).toHaveLength(1);
        expectSerializationRoundtrip(report);
      });
    });

    describe('Pathology Report', () => {
      it('should create a pathology/biopsy report', () => {
        const report = new DiagnosticReportBuilder()
          .setId('path-001')
          .setStatus('final')
          .addCategory({
            coding: [{ code: 'PAT', display: 'Pathology' }],
          })
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '22034-6', display: 'Pathology report' }],
          })
          .setSubject({ reference: 'Patient/patient-onc' })
          .addSpecimen({ reference: 'Specimen/biopsy-001', display: 'Breast tissue biopsy' })
          .addPerformer({ reference: 'Organization/pathology-lab' })
          .addResultsInterpreter({ reference: 'Practitioner/dr-pathologist' })
          .addResult({ reference: 'Observation/histology-findings' })
          .addResult({ reference: 'Observation/immunohistochemistry' })
          .setConclusion('Invasive ductal carcinoma, grade 2. ER positive, PR positive, HER2 negative.')
          .addConclusionCode({
            coding: [{ system: 'http://snomed.info/sct', code: '408643008', display: 'Infiltrating duct carcinoma of breast' }],
          })
          .build();

        expect(report.specimen).toHaveLength(1);
        expect(report.result).toHaveLength(2);
        expectSerializationRoundtrip(report);
      });
    });

    describe('Microbiology Report', () => {
      it('should create a culture and sensitivity report', () => {
        const report = new DiagnosticReportBuilder()
          .setId('micro-001')
          .setStatus('final')
          .addCategory({
            coding: [{ code: 'MB', display: 'Microbiology' }],
          })
          .setCode({
            coding: [{ system: 'http://loinc.org', code: '630-4', display: 'Bacteria identified in Specimen by Culture' }],
          })
          .setSubject({ reference: 'Patient/patient-infection' })
          .addBasedOn({ reference: 'ServiceRequest/culture-order' })
          .addSpecimen({ reference: 'Specimen/urine-culture-001' })
          .addResult({ reference: 'Observation/organism-identified' })
          .addResult({ reference: 'Observation/antibiotic-susceptibility' })
          .setConclusion('Escherichia coli isolated. Sensitive to ciprofloxacin, nitrofurantoin. Resistant to ampicillin.')
          .build();

        expect(report.basedOn).toHaveLength(1);
        expect(report.result).toHaveLength(2);
        expectSerializationRoundtrip(report);
      });
    });

    describe('Report with Multiple Subjects', () => {
      it('should create report with Device as subject', () => {
        const report = new DiagnosticReportBuilder()
          .setId('device-calibration-001')
          .setStatus('final')
          .setCode({ coding: [{ code: 'device-calibration' }] })
          .setSubject({ reference: 'Device/analyzer-001', display: 'Chemistry Analyzer' })
          .setConclusion('Device calibration successful. All parameters within acceptable limits.')
          .build();

        expect(report.subject?.reference).toBe('Device/analyzer-001');
        expectSerializationRoundtrip(report);
      });

      it('should create report with Location as subject', () => {
        const report = new DiagnosticReportBuilder()
          .setId('environmental-001')
          .setStatus('final')
          .setCode({ coding: [{ code: 'environmental-test' }] })
          .setSubject({ reference: 'Location/operating-room-1', display: 'Operating Room 1' })
          .setConclusion('Environmental testing passed. No microbial contamination detected.')
          .build();

        expect(report.subject?.reference).toBe('Location/operating-room-1');
        expectSerializationRoundtrip(report);
      });
    });

    describe('Preliminary to Final Report', () => {
      it('should handle report status progression', () => {
        // Preliminary report
        const preliminaryReport = new DiagnosticReportBuilder()
          .setId('report-progression')
          .setStatus('preliminary')
          .setCode({ coding: [{ code: 'urgent-labs' }] })
          .setSubject({ reference: 'Patient/er-patient' })
          .addResult({ reference: 'Observation/troponin-preliminary' })
          .setConclusion('Preliminary: Troponin elevated. Final confirmation pending.')
          .build();

        expect(preliminaryReport.status).toBe('preliminary');

        // Final report (using with() to update)
        const finalReport = preliminaryReport.with({
          status: 'final',
          issued: '2023-06-15T16:00:00Z',
          conclusion: 'Final: Troponin elevated, consistent with acute myocardial infarction.',
        });

        expect(finalReport.status).toBe('final');
        expect(finalReport.issued).toBe('2023-06-15T16:00:00Z');
        expect(preliminaryReport.status).toBe('preliminary'); // Original unchanged
      });
    });
  });
});
