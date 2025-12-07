import { describe, it, expect, beforeEach } from 'vitest';
import { Immunization, ImmunizationBuilder } from '../../../src';
import type { IImmunization } from '@fhir-toolkit/r4-types';

describe('Immunization', () => {
  // Helper functions
  const expectSerializationRoundtrip = (immunization: Immunization) => {
    const json = immunization.toJSON();
    const restored = Immunization.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (immunization: Immunization) => {
    const clone = immunization.clone();
    expect(clone).not.toBe(immunization);
    expect(clone.toJSON()).toEqual(immunization.toJSON());
  };

  const expectNoUndefinedInJSON = (immunization: Immunization) => {
    const json = JSON.stringify(immunization.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal Immunization with required properties', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'COVID-19' }] },
          patient: { reference: 'Patient/123' },
        });

        expect(immunization.resourceType).toBe('Immunization');
        expect(immunization.status).toBe('completed');
        expect(immunization.vaccineCode.coding?.[0].code).toBe('COVID-19');
        expect(immunization.patient).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete Immunization with all properties', () => {
        const fullImmunization: IImmunization = {
          resourceType: 'Immunization',
          id: 'immunization-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>COVID-19 Vaccine</div>' },
          identifier: [{ system: 'http://hospital.org/immunizations', value: 'IMM-001' }],
          status: 'completed',
          vaccineCode: {
            coding: [
              { system: 'http://hl7.org/fhir/sid/cvx', code: '207', display: 'COVID-19, mRNA, LNP-S, PF, 100 mcg/ 0.5 mL dose' },
            ],
            text: 'Moderna COVID-19 Vaccine',
          },
          patient: { reference: 'Patient/patient-123' },
          encounter: { reference: 'Encounter/enc-456' },
          occurrenceDateTime: '2023-06-15T10:00:00Z',
          recorded: '2023-06-15T10:05:00Z',
          primarySource: true,
          location: { reference: 'Location/clinic-1' },
          manufacturer: { reference: 'Organization/moderna', display: 'Moderna' },
          lotNumber: 'LOT-2023-001',
          expirationDate: '2024-06-30',
          site: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite', code: 'LA', display: 'left arm' }],
          },
          route: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration', code: 'IM', display: 'Intramuscular' }],
          },
          doseQuantity: { value: 0.5, unit: 'mL', system: 'http://unitsofmeasure.org', code: 'mL' },
          performer: [
            {
              function: { coding: [{ code: 'AP', display: 'Administering Provider' }] },
              actor: { reference: 'Practitioner/nurse-1' },
            },
          ],
          note: [{ text: 'Patient tolerated vaccine well' }],
          reasonCode: [{ coding: [{ code: 'prevention' }] }],
          isSubpotent: false,
          programEligibility: [{ coding: [{ code: 'public-health' }] }],
          fundingSource: { coding: [{ code: 'private' }] },
          protocolApplied: [
            {
              series: 'COVID-19 Primary Series',
              doseNumberPositiveInt: 1,
              seriesDosesPositiveInt: 2,
            },
          ],
        };

        const immunization = new Immunization(fullImmunization);

        expect(immunization.id).toBe('immunization-123');
        expect(immunization.status).toBe('completed');
        expect(immunization.vaccineCode.coding?.[0].code).toBe('207');
        expect(immunization.lotNumber).toBe('LOT-2023-001');
        expect(immunization.performer).toHaveLength(1);
        expect(immunization.protocolApplied).toHaveLength(1);
      });

      it('should create immunization with occurrenceDateTime', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'flu' }] },
          patient: { reference: 'Patient/123' },
          occurrenceDateTime: '2023-10-15T09:00:00Z',
        });

        expect(immunization.occurrenceDateTime).toBe('2023-10-15T09:00:00Z');
        expect(immunization.occurrenceString).toBeUndefined();
      });

      it('should create immunization with occurrenceString', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'mmr' }] },
          patient: { reference: 'Patient/123' },
          occurrenceString: 'In early childhood',
        });

        expect(immunization.occurrenceString).toBe('In early childhood');
        expect(immunization.occurrenceDateTime).toBeUndefined();
      });

      it('should create immunization with performer', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          performer: [
            {
              function: { coding: [{ code: 'OP', display: 'Ordering Provider' }] },
              actor: { reference: 'Practitioner/doctor-1' },
            },
            {
              function: { coding: [{ code: 'AP', display: 'Administering Provider' }] },
              actor: { reference: 'Practitioner/nurse-1' },
            },
          ],
        });

        expect(immunization.performer).toHaveLength(2);
        expect(immunization.performer![0].function?.coding?.[0].code).toBe('OP');
        expect(immunization.performer![1].function?.coding?.[0].code).toBe('AP');
      });

      it('should create immunization with reactions', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          reaction: [
            {
              date: '2023-06-15T14:00:00Z',
              detail: { reference: 'Observation/reaction-1' },
              reported: true,
            },
          ],
        });

        expect(immunization.reaction).toHaveLength(1);
        expect(immunization.reaction![0].date).toBe('2023-06-15T14:00:00Z');
        expect(immunization.reaction![0].reported).toBe(true);
      });

      it('should create immunization with protocol applied', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          protocolApplied: [
            {
              series: 'Primary Series',
              authority: { reference: 'Organization/cdc' },
              targetDisease: [{ coding: [{ code: 'COVID-19' }] }],
              doseNumberPositiveInt: 2,
              seriesDosesPositiveInt: 2,
            },
          ],
        });

        expect(immunization.protocolApplied).toHaveLength(1);
        expect(immunization.protocolApplied![0].doseNumberPositiveInt).toBe(2);
        expect(immunization.protocolApplied![0].seriesDosesPositiveInt).toBe(2);
      });

      it('should create immunization with education information', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          education: [
            {
              documentType: 'VIS',
              publicationDate: '2023-01-01',
              presentationDate: '2023-06-15',
            },
          ],
        });

        expect(immunization.education).toHaveLength(1);
        expect(immunization.education![0].documentType).toBe('VIS');
      });

      it('should create immunization not done', () => {
        const immunization = new Immunization({
          status: 'not-done',
          statusReason: { coding: [{ code: 'patient-refused', display: 'Patient refused' }] },
          vaccineCode: { coding: [{ code: 'flu' }] },
          patient: { reference: 'Patient/123' },
        });

        expect(immunization.status).toBe('not-done');
        expect(immunization.statusReason?.coding?.[0].code).toBe('patient-refused');
      });

      it('should create immunization with subpotent information', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          isSubpotent: true,
          subpotentReason: [{ coding: [{ code: 'cold-chain-break', display: 'Cold chain break' }] }],
        });

        expect(immunization.isSubpotent).toBe(true);
        expect(immunization.subpotentReason).toHaveLength(1);
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal immunization to JSON', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
        });

        const json = immunization.toJSON();

        expect(json.resourceType).toBe('Immunization');
        expect(json.status).toBe('completed');
        expectNoUndefinedInJSON(immunization);
      });

      it('should serialize complete immunization to JSON', () => {
        const immunization = new Immunization({
          id: 'imm-001',
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          lotNumber: 'LOT-001',
          performer: [{ actor: { reference: 'Practitioner/nurse-1' } }],
        });

        const json = immunization.toJSON();

        expect(json.id).toBe('imm-001');
        expect(json.lotNumber).toBe('LOT-001');
        expectSerializationRoundtrip(immunization);
      });

      it('should exclude undefined values from JSON', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
        });

        const json = immunization.toJSON();

        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('reaction');
        expect(json).not.toHaveProperty('location');
        expectNoUndefinedInJSON(immunization);
      });
    });

    describe('fromJSON', () => {
      it('should create Immunization from JSON', () => {
        const json: IImmunization = {
          resourceType: 'Immunization',
          id: 'from-json-test',
          status: 'completed',
          vaccineCode: { coding: [{ code: 'COVID-19' }] },
          patient: { reference: 'Patient/p1' },
        };

        const immunization = Immunization.fromJSON(json);

        expect(immunization).toBeInstanceOf(Immunization);
        expect(immunization.id).toBe('from-json-test');
        expect(immunization.status).toBe('completed');
      });
    });

    describe('Immutability', () => {
      let immunization: Immunization;

      beforeEach(() => {
        immunization = new Immunization({
          id: 'original',
          status: 'completed',
          vaccineCode: { coding: [{ code: 'original-vaccine' }] },
          patient: { reference: 'Patient/original' },
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = immunization.with({ status: 'entered-in-error' });

        expect(modified).not.toBe(immunization);
        expect(modified.status).toBe('entered-in-error');
        expect(immunization.status).toBe('completed');
      });

      it('should handle with() for complex properties', () => {
        const modified = immunization.with({
          performer: [{ actor: { reference: 'Practitioner/new' } }],
          reaction: [{ date: '2023-06-15' }],
        });

        expect(modified.performer).toHaveLength(1);
        expect(modified.reaction).toHaveLength(1);
        expect(immunization.performer).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = immunization.applyTransform((data) => ({
          status: 'entered-in-error',
          recorded: '2023-12-31T23:59:59Z',
        }));

        expect(modified.status).toBe('entered-in-error');
        expect(modified.recorded).toBe('2023-12-31T23:59:59Z');
        expect(immunization.status).toBe('completed');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          performer: [{ actor: { reference: 'Practitioner/nurse-1' } }],
        });

        const clone = immunization.clone();

        expect(clone).not.toBe(immunization);
        expect(clone.toJSON()).toEqual(immunization.toJSON());

        // Verify deep clone
        clone.performer![0].actor = { reference: 'Practitioner/modified' };
        expect(immunization.performer![0].actor.reference).toBe('Practitioner/nurse-1');
      });

      it('should deep clone nested objects', () => {
        const immunization = new Immunization({
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
          protocolApplied: [{ series: 'Primary', doseNumberPositiveInt: 1 }],
        });

        expectDeepClone(immunization);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const immunization = new Immunization({
          id: 'imm-12345',
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/123' },
        });

        expect(immunization.toString()).toContain('Immunization');
        expect(immunization.toString()).toContain('imm-12345');
      });
    });

    describe('Status Types', () => {
      const statusTypes: Array<IImmunization['status']> = ['completed', 'entered-in-error', 'not-done'];

      statusTypes.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const immunization = new Immunization({
            status,
            vaccineCode: { coding: [{ code: 'vaccine' }] },
            patient: { reference: 'Patient/123' },
          });

          expect(immunization.status).toBe(status);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal Immunization', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .build();

        expect(immunization.resourceType).toBe('Immunization');
        expect(immunization.status).toBe('completed');
      });

      it('should build complete Immunization with all setters', () => {
        const immunization = new ImmunizationBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'COVID-19' }] })
          .setPatient({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setRecorded('2023-06-15T10:00:00Z')
          .setPrimarySource(true)
          .setLocation({ reference: 'Location/clinic' })
          .setManufacturer({ reference: 'Organization/moderna' })
          .setLotNumber('LOT-001')
          .setExpirationDate('2024-12-31')
          .setSite({ coding: [{ code: 'LA' }] })
          .setRoute({ coding: [{ code: 'IM' }] })
          .setDoseQuantity({ value: 0.5, unit: 'mL' })
          .setIsSubpotent(false)
          .setFundingSource({ coding: [{ code: 'private' }] })
          .build();

        expect(immunization.id).toBe('builder-test');
        expect(immunization.status).toBe('completed');
        expect(immunization.lotNumber).toBe('LOT-001');
        expect(immunization.primarySource).toBe(true);
      });
    });

    describe('Choice Type Setters', () => {
      it('should set occurrence as DateTime', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .setOccurrence('DateTime', '2023-06-15T10:00:00Z')
          .build();

        expect(immunization.occurrenceDateTime).toBe('2023-06-15T10:00:00Z');
      });

      it('should set occurrence as String', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .setOccurrence('String', 'In childhood')
          .build();

        expect(immunization.occurrenceString).toBe('In childhood');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'IMM001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'IMM002' })
          .build();

        expect(immunization.identifier).toHaveLength(2);
      });

      it('should add performers', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addPerformer({ actor: { reference: 'Practitioner/dr-1' } })
          .addPerformer({ actor: { reference: 'Practitioner/nurse-1' } })
          .build();

        expect(immunization.performer).toHaveLength(2);
      });

      it('should add notes', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addNote({ text: 'Note 1' })
          .addNote({ text: 'Note 2' })
          .build();

        expect(immunization.note).toHaveLength(2);
      });

      it('should add reactions', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addReaction({ date: '2023-06-15', reported: true })
          .addReaction({ date: '2023-06-16', reported: false })
          .build();

        expect(immunization.reaction).toHaveLength(2);
      });

      it('should add protocol applied', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addProtocolApplied({ series: 'Primary', doseNumberPositiveInt: 1 })
          .addProtocolApplied({ series: 'Booster', doseNumberPositiveInt: 1 })
          .build();

        expect(immunization.protocolApplied).toHaveLength(2);
      });

      it('should add education records', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addEducation({ documentType: 'VIS', publicationDate: '2023-01-01' })
          .build();

        expect(immunization.education).toHaveLength(1);
      });

      it('should add program eligibility', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .addProgramEligibility({ coding: [{ code: 'public-health' }] })
          .build();

        expect(immunization.programEligibility).toHaveLength(1);
      });

      it('should add subpotent reasons', () => {
        const immunization = new ImmunizationBuilder()
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'vaccine' }] })
          .setPatient({ reference: 'Patient/123' })
          .setIsSubpotent(true)
          .addSubpotentReason({ coding: [{ code: 'cold-chain-break' }] })
          .build();

        expect(immunization.subpotentReason).toHaveLength(1);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const immunization = new ImmunizationBuilder()
          .setId('chaining-test')
          .setStatus('completed')
          .setVaccineCode({ coding: [{ code: 'COVID-19' }] })
          .setPatient({ reference: 'Patient/123' })
          .setLotNumber('LOT-123')
          .setPrimarySource(true)
          .addPerformer({ actor: { reference: 'Practitioner/nurse' } })
          .addNote({ text: 'Complete' })
          .build();

        expect(immunization.id).toBe('chaining-test');
        expect(immunization.lotNumber).toBe('LOT-123');
        expect(immunization.performer).toHaveLength(1);
        expect(immunization.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('COVID-19 Vaccination', () => {
      it('should create a complete COVID-19 vaccination record', () => {
        const immunization = new ImmunizationBuilder()
          .setId('covid-vax-001')
          .addIdentifier({ system: 'http://hospital.org/immunizations', value: 'COVID-2023-001' })
          .setStatus('completed')
          .setVaccineCode({
            coding: [
              { system: 'http://hl7.org/fhir/sid/cvx', code: '207', display: 'COVID-19, mRNA, LNP-S, PF, 100 mcg/ 0.5 mL dose' },
            ],
            text: 'Moderna COVID-19 Vaccine',
          })
          .setPatient({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setEncounter({ reference: 'Encounter/vaccination-clinic-456' })
          .setRecorded('2023-06-15T10:05:00Z')
          .setPrimarySource(true)
          .setLocation({ reference: 'Location/clinic-main' })
          .setManufacturer({ reference: 'Organization/moderna', display: 'Moderna, Inc.' })
          .setLotNumber('VAX-2023-M001')
          .setExpirationDate('2024-06-30')
          .setSite({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite', code: 'LA', display: 'left arm' }],
          })
          .setRoute({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration', code: 'IM', display: 'Intramuscular' }],
          })
          .setDoseQuantity({ value: 0.5, unit: 'mL', system: 'http://unitsofmeasure.org', code: 'mL' })
          .addPerformer({
            function: { coding: [{ code: 'AP', display: 'Administering Provider' }] },
            actor: { reference: 'Practitioner/nurse-smith' },
          })
          .addNote({ text: 'Patient tolerated vaccine well, no immediate adverse reactions' })
          .addProtocolApplied({
            series: 'COVID-19 Primary Series',
            targetDisease: [{ coding: [{ system: 'http://snomed.info/sct', code: '840539006', display: 'COVID-19' }] }],
            doseNumberPositiveInt: 1,
            seriesDosesPositiveInt: 2,
          })
          .build();

        // Add occurrence via with()
        const immunizationWithDate = immunization.with({
          occurrenceDateTime: '2023-06-15T10:00:00Z',
        });

        expect(immunizationWithDate.status).toBe('completed');
        expect(immunizationWithDate.vaccineCode.coding?.[0].code).toBe('207');
        expect(immunizationWithDate.lotNumber).toBe('VAX-2023-M001');
        expect(immunizationWithDate.protocolApplied![0].doseNumberPositiveInt).toBe(1);
        expectSerializationRoundtrip(immunizationWithDate);
      });
    });

    describe('Pediatric Immunization', () => {
      it('should create a pediatric MMR vaccination', () => {
        const immunization = new Immunization({
          id: 'pediatric-mmr-001',
          status: 'completed',
          vaccineCode: {
            coding: [{ system: 'http://hl7.org/fhir/sid/cvx', code: '03', display: 'MMR' }],
            text: 'Measles, Mumps and Rubella vaccine',
          },
          patient: { reference: 'Patient/child-123', display: 'Child Patient' },
          occurrenceDateTime: '2023-12-15',
          recorded: '2023-12-15T14:00:00Z',
          primarySource: true,
          location: { reference: 'Location/pediatric-clinic' },
          manufacturer: { reference: 'Organization/merck' },
          lotNumber: 'MMR-2023-001',
          expirationDate: '2025-12-31',
          site: { coding: [{ code: 'LT', display: 'left thigh' }] },
          route: { coding: [{ code: 'SC', display: 'Subcutaneous' }] },
          performer: [
            {
              function: { coding: [{ code: 'AP' }] },
              actor: { reference: 'Practitioner/pediatrician-1' },
            },
          ],
          protocolApplied: [
            {
              series: 'Childhood Immunization Schedule',
              targetDisease: [
                { coding: [{ code: 'measles' }] },
                { coding: [{ code: 'mumps' }] },
                { coding: [{ code: 'rubella' }] },
              ],
              doseNumberPositiveInt: 1,
              seriesDosesPositiveInt: 2,
            },
          ],
        });

        expect(immunization.vaccineCode.coding?.[0].code).toBe('03');
        expect(immunization.protocolApplied![0].targetDisease).toHaveLength(3);
        expectSerializationRoundtrip(immunization);
      });
    });

    describe('Flu Shot', () => {
      it('should create an annual influenza vaccination', () => {
        const immunization = new Immunization({
          id: 'flu-shot-001',
          status: 'completed',
          vaccineCode: {
            coding: [{ system: 'http://hl7.org/fhir/sid/cvx', code: '141', display: 'Influenza, seasonal, injectable' }],
          },
          patient: { reference: 'Patient/patient-123' },
          occurrenceDateTime: '2023-10-15T09:30:00Z',
          recorded: '2023-10-15T09:35:00Z',
          primarySource: true,
          location: { reference: 'Location/pharmacy-main' },
          manufacturer: { reference: 'Organization/sanofi' },
          lotNumber: 'FLU2023-001',
          expirationDate: '2024-06-30',
          site: { coding: [{ code: 'RA', display: 'right arm' }] },
          route: { coding: [{ code: 'IM', display: 'Intramuscular' }] },
          doseQuantity: { value: 0.5, unit: 'mL' },
          performer: [{ actor: { reference: 'Practitioner/pharmacist-1' } }],
          programEligibility: [{ coding: [{ code: 'senior-program', display: 'Senior vaccination program' }] }],
          fundingSource: { coding: [{ code: 'medicare', display: 'Medicare' }] },
        });

        expect(immunization.vaccineCode.coding?.[0].code).toBe('141');
        expect(immunization.programEligibility).toHaveLength(1);
        expectSerializationRoundtrip(immunization);
      });
    });

    describe('Immunization Not Done', () => {
      it('should create a record of immunization not administered', () => {
        const immunization = new Immunization({
          id: 'not-done-001',
          status: 'not-done',
          statusReason: {
            coding: [{ code: 'MEDPREC', display: 'Medical precaution' }],
            text: 'Patient has acute illness',
          },
          vaccineCode: {
            coding: [{ code: 'flu-vaccine' }],
          },
          patient: { reference: 'Patient/patient-123' },
          occurrenceDateTime: '2023-10-15',
          recorded: '2023-10-15T10:00:00Z',
          primarySource: true,
          note: [{ text: 'Deferred due to acute upper respiratory infection. Reschedule when patient recovers.' }],
        });

        expect(immunization.status).toBe('not-done');
        expect(immunization.statusReason?.coding?.[0].code).toBe('MEDPREC');
        expectSerializationRoundtrip(immunization);
      });
    });

    describe('Reported Immunization', () => {
      it('should create a historical immunization record', () => {
        const immunization = new Immunization({
          id: 'reported-001',
          status: 'completed',
          vaccineCode: {
            coding: [{ code: 'hepatitis-b' }],
            text: 'Hepatitis B vaccine',
          },
          patient: { reference: 'Patient/patient-123' },
          occurrenceString: 'Sometime in childhood',
          recorded: '2023-06-15T10:00:00Z',
          primarySource: false,
          reportOrigin: {
            coding: [{ code: 'patient-reported', display: 'Patient reported' }],
            text: 'Reported by patient from memory',
          },
          note: [{ text: 'Patient recalls receiving hepatitis B series as a child but has no records' }],
        });

        expect(immunization.primarySource).toBe(false);
        expect(immunization.reportOrigin?.coding?.[0].code).toBe('patient-reported');
        expect(immunization.occurrenceString).toBe('Sometime in childhood');
        expectSerializationRoundtrip(immunization);
      });
    });

    describe('Immunization with Reaction', () => {
      it('should create immunization with documented adverse reaction', () => {
        const immunization = new Immunization({
          id: 'with-reaction-001',
          status: 'completed',
          vaccineCode: { coding: [{ code: 'tetanus' }] },
          patient: { reference: 'Patient/patient-123' },
          occurrenceDateTime: '2023-06-15T10:00:00Z',
          recorded: '2023-06-15T10:05:00Z',
          primarySource: true,
          performer: [{ actor: { reference: 'Practitioner/nurse-1' } }],
          reaction: [
            {
              date: '2023-06-15T12:00:00Z',
              detail: { reference: 'Observation/local-reaction' },
              reported: true,
            },
          ],
          note: [
            { text: 'Patient developed localized redness and swelling at injection site 2 hours post-vaccination' },
          ],
        });

        expect(immunization.reaction).toHaveLength(1);
        expect(immunization.reaction![0].reported).toBe(true);
        expectSerializationRoundtrip(immunization);
      });
    });

    describe('Subpotent Immunization', () => {
      it('should create immunization marked as subpotent', () => {
        const immunization = new Immunization({
          id: 'subpotent-001',
          status: 'completed',
          vaccineCode: { coding: [{ code: 'vaccine' }] },
          patient: { reference: 'Patient/patient-123' },
          occurrenceDateTime: '2023-06-15T10:00:00Z',
          recorded: '2023-06-15T10:05:00Z',
          primarySource: true,
          isSubpotent: true,
          subpotentReason: [
            { coding: [{ code: 'cold-chain-break', display: 'Cold chain storage break' }] },
          ],
          note: [
            { text: 'Vaccine stored at improper temperature for 2 hours. Patient to be revaccinated.' },
          ],
        });

        expect(immunization.isSubpotent).toBe(true);
        expect(immunization.subpotentReason).toHaveLength(1);
        expectSerializationRoundtrip(immunization);
      });
    });
  });
});
