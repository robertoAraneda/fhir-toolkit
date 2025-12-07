import { describe, it, expect, beforeEach } from 'vitest';
import { Medication, MedicationBuilder } from '../../../src';
import type { IMedication } from '@fhir-toolkit/r4-types';

describe('Medication', () => {
  // Helper functions
  const expectSerializationRoundtrip = (medication: Medication) => {
    const json = medication.toJSON();
    const restored = Medication.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (medication: Medication) => {
    const clone = medication.clone();
    expect(clone).not.toBe(medication);
    expect(clone.toJSON()).toEqual(medication.toJSON());
  };

  const expectNoUndefinedInJSON = (medication: Medication) => {
    const json = JSON.stringify(medication.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal Medication', () => {
        const medication = new Medication({});

        expect(medication.resourceType).toBe('Medication');
      });

      it('should create a Medication with code', () => {
        const medication = new Medication({
          code: {
            coding: [
              {
                system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                code: '197361',
                display: 'Lisinopril 10 MG Oral Tablet',
              },
            ],
            text: 'Lisinopril 10mg',
          },
        });

        expect(medication.code?.coding?.[0].code).toBe('197361');
        expect(medication.code?.text).toBe('Lisinopril 10mg');
      });

      it('should create a complete Medication with all properties', () => {
        const fullMedication: IMedication = {
          resourceType: 'Medication',
          id: 'med-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>Lisinopril 10mg</div>' },
          identifier: [{ system: 'http://hospital.org/medications', value: 'MED-001' }],
          code: {
            coding: [
              {
                system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                code: '197361',
                display: 'Lisinopril 10 MG Oral Tablet',
              },
            ],
            text: 'Lisinopril 10mg',
          },
          status: 'active',
          manufacturer: { reference: 'Organization/pharma-company' },
          form: {
            coding: [
              { system: 'http://snomed.info/sct', code: '385055001', display: 'Tablet' },
            ],
          },
          amount: {
            numerator: { value: 30, unit: 'tablets' },
            denominator: { value: 1, unit: 'bottle' },
          },
          ingredient: [
            {
              itemCodeableConcept: {
                coding: [{ code: 'lisinopril', display: 'Lisinopril' }],
              },
              isActive: true,
              strength: {
                numerator: { value: 10, unit: 'mg' },
                denominator: { value: 1, unit: 'tablet' },
              },
            },
          ],
          batch: {
            lotNumber: 'LOT-12345',
            expirationDate: '2025-12-31',
          },
        };

        const medication = new Medication(fullMedication);

        expect(medication.id).toBe('med-123');
        expect(medication.status).toBe('active');
        expect(medication.code?.coding?.[0].code).toBe('197361');
        expect(medication.form?.coding?.[0].display).toBe('Tablet');
        expect(medication.ingredient).toHaveLength(1);
        expect(medication.batch?.lotNumber).toBe('LOT-12345');
      });

      it('should create medication with manufacturer', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'aspirin' }] },
          manufacturer: { reference: 'Organization/bayer', display: 'Bayer' },
        });

        expect(medication.manufacturer?.reference).toBe('Organization/bayer');
        expect(medication.manufacturer?.display).toBe('Bayer');
      });

      it('should create medication with form', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'med' }] },
          form: {
            coding: [
              { system: 'http://snomed.info/sct', code: '385049006', display: 'Capsule' },
            ],
          },
        });

        expect(medication.form?.coding?.[0].code).toBe('385049006');
        expect(medication.form?.coding?.[0].display).toBe('Capsule');
      });

      it('should create medication with amount', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'med' }] },
          amount: {
            numerator: { value: 100, unit: 'tablets' },
            denominator: { value: 1, unit: 'bottle' },
          },
        });

        expect(medication.amount?.numerator?.value).toBe(100);
        expect(medication.amount?.denominator?.value).toBe(1);
      });

      it('should create medication with multiple ingredients', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'combination-drug' }] },
          ingredient: [
            {
              itemCodeableConcept: { coding: [{ code: 'acetaminophen' }] },
              isActive: true,
              strength: {
                numerator: { value: 325, unit: 'mg' },
                denominator: { value: 1, unit: 'tablet' },
              },
            },
            {
              itemCodeableConcept: { coding: [{ code: 'hydrocodone' }] },
              isActive: true,
              strength: {
                numerator: { value: 5, unit: 'mg' },
                denominator: { value: 1, unit: 'tablet' },
              },
            },
          ],
        });

        expect(medication.ingredient).toHaveLength(2);
        expect(medication.ingredient![0].itemCodeableConcept?.coding?.[0].code).toBe('acetaminophen');
        expect(medication.ingredient![1].itemCodeableConcept?.coding?.[0].code).toBe('hydrocodone');
      });

      it('should create medication with batch information', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'vaccine' }] },
          batch: {
            lotNumber: 'BATCH-2023-001',
            expirationDate: '2025-06-30',
          },
        });

        expect(medication.batch?.lotNumber).toBe('BATCH-2023-001');
        expect(medication.batch?.expirationDate).toBe('2025-06-30');
      });

      it('should create medication with ingredient as Reference', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'compound' }] },
          ingredient: [
            {
              itemReference: { reference: 'Substance/substance-123' },
              isActive: true,
            },
          ],
        });

        expect(medication.ingredient![0].itemReference?.reference).toBe('Substance/substance-123');
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal medication to JSON', () => {
        const medication = new Medication({});

        const json = medication.toJSON();

        expect(json.resourceType).toBe('Medication');
        expectNoUndefinedInJSON(medication);
      });

      it('should serialize complete medication to JSON', () => {
        const medication = new Medication({
          id: 'med-001',
          code: { coding: [{ code: 'aspirin' }] },
          status: 'active',
          form: { coding: [{ code: 'tablet' }] },
        });

        const json = medication.toJSON();

        expect(json.id).toBe('med-001');
        expect(json.status).toBe('active');
        expectSerializationRoundtrip(medication);
      });

      it('should exclude undefined values from JSON', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'med' }] },
        });

        const json = medication.toJSON();

        expect(json).not.toHaveProperty('manufacturer');
        expect(json).not.toHaveProperty('batch');
        expect(json).not.toHaveProperty('amount');
        expectNoUndefinedInJSON(medication);
      });
    });

    describe('fromJSON', () => {
      it('should create Medication from JSON', () => {
        const json: IMedication = {
          resourceType: 'Medication',
          id: 'from-json-test',
          code: { coding: [{ code: 'ibuprofen' }] },
          status: 'active',
        };

        const medication = Medication.fromJSON(json);

        expect(medication).toBeInstanceOf(Medication);
        expect(medication.id).toBe('from-json-test');
        expect(medication.status).toBe('active');
      });
    });

    describe('Immutability', () => {
      let medication: Medication;

      beforeEach(() => {
        medication = new Medication({
          id: 'original',
          code: { coding: [{ code: 'original-code' }] },
          status: 'active',
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = medication.with({ status: 'inactive' });

        expect(modified).not.toBe(medication);
        expect(modified.status).toBe('inactive');
        expect(medication.status).toBe('active');
      });

      it('should handle with() for complex properties', () => {
        const modified = medication.with({
          ingredient: [{ itemCodeableConcept: { coding: [{ code: 'ingredient-1' }] } }],
          form: { coding: [{ code: 'tablet' }] },
        });

        expect(modified.ingredient).toHaveLength(1);
        expect(modified.form?.coding?.[0].code).toBe('tablet');
        expect(medication.ingredient).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = medication.applyTransform((data) => ({
          status: 'inactive',
          manufacturer: { reference: 'Organization/new-manufacturer' },
        }));

        expect(modified.status).toBe('inactive');
        expect(modified.manufacturer?.reference).toBe('Organization/new-manufacturer');
        expect(medication.status).toBe('active');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'med' }] },
          ingredient: [{ itemCodeableConcept: { coding: [{ code: 'ingredient' }] } }],
        });

        const clone = medication.clone();

        expect(clone).not.toBe(medication);
        expect(clone.toJSON()).toEqual(medication.toJSON());

        // Verify deep clone
        clone.ingredient![0].itemCodeableConcept = { coding: [{ code: 'modified' }] };
        expect(medication.ingredient![0].itemCodeableConcept?.coding?.[0].code).toBe('ingredient');
      });

      it('should deep clone nested objects', () => {
        const medication = new Medication({
          code: { coding: [{ code: 'med' }] },
          batch: { lotNumber: 'LOT-001', expirationDate: '2025-12-31' },
        });

        expectDeepClone(medication);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const medication = new Medication({
          id: 'med-12345',
          code: { coding: [{ code: 'aspirin' }] },
        });

        expect(medication.toString()).toContain('Medication');
        expect(medication.toString()).toContain('med-12345');
      });
    });

    describe('Status Values', () => {
      const statusValues: Array<NonNullable<IMedication['status']>> = [
        'active',
        'inactive',
        'entered-in-error',
      ];

      statusValues.forEach((status) => {
        it(`should accept status: ${status}`, () => {
          const medication = new Medication({
            code: { coding: [{ code: 'med' }] },
            status,
          });

          expect(medication.status).toBe(status);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal Medication', () => {
        const medication = new MedicationBuilder().build();

        expect(medication.resourceType).toBe('Medication');
      });

      it('should build complete Medication with all setters', () => {
        const medication = new MedicationBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setCode({
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '197361' }],
          })
          .setStatus('active')
          .setManufacturer({ reference: 'Organization/pharma' })
          .setForm({ coding: [{ code: 'tablet' }] })
          .setAmount({
            numerator: { value: 30, unit: 'tablets' },
            denominator: { value: 1, unit: 'bottle' },
          })
          .setBatch({ lotNumber: 'LOT-001', expirationDate: '2025-12-31' })
          .build();

        expect(medication.id).toBe('builder-test');
        expect(medication.status).toBe('active');
        expect(medication.form?.coding?.[0].code).toBe('tablet');
        expect(medication.batch?.lotNumber).toBe('LOT-001');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const medication = new MedicationBuilder()
          .addIdentifier({ system: 'http://hospital.org', value: 'MED001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'MED002' })
          .build();

        expect(medication.identifier).toHaveLength(2);
      });

      it('should add ingredients', () => {
        const medication = new MedicationBuilder()
          .addIngredient({
            itemCodeableConcept: { coding: [{ code: 'ingredient-1' }] },
            isActive: true,
          })
          .addIngredient({
            itemCodeableConcept: { coding: [{ code: 'ingredient-2' }] },
            isActive: true,
          })
          .build();

        expect(medication.ingredient).toHaveLength(2);
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const medication = new MedicationBuilder()
          .setId('chaining-test')
          .setCode({ coding: [{ code: 'aspirin' }] })
          .setStatus('active')
          .setForm({ coding: [{ code: 'tablet' }] })
          .addIngredient({ itemCodeableConcept: { coding: [{ code: 'aspirin' }] } })
          .build();

        expect(medication.id).toBe('chaining-test');
        expect(medication.status).toBe('active');
        expect(medication.ingredient).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Simple Generic Medication', () => {
      it('should create a simple generic medication', () => {
        const medication = new MedicationBuilder()
          .setId('generic-med-001')
          .setCode({
            coding: [
              {
                system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                code: '313782',
                display: 'Acetaminophen 325 MG Oral Tablet',
              },
            ],
            text: 'Acetaminophen 325mg tablet',
          })
          .setStatus('active')
          .setForm({
            coding: [{ system: 'http://snomed.info/sct', code: '385055001', display: 'Tablet' }],
          })
          .addIngredient({
            itemCodeableConcept: {
              coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '161', display: 'Acetaminophen' }],
            },
            isActive: true,
            strength: {
              numerator: { value: 325, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' },
              denominator: { value: 1, unit: 'tablet', system: 'http://unitsofmeasure.org', code: '{tablet}' },
            },
          })
          .build();

        expect(medication.status).toBe('active');
        expect(medication.code?.coding?.[0].code).toBe('313782');
        expect(medication.ingredient).toHaveLength(1);
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Brand Name Medication with Manufacturer', () => {
      it('should create a brand name medication with manufacturer', () => {
        const medication = new Medication({
          id: 'brand-med-001',
          identifier: [{ system: 'http://ema.europa.eu/identifier', value: 'EU/1/97/049/001' }],
          code: {
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '206765', display: 'Lipitor 20 MG Oral Tablet' }],
            text: 'Lipitor 20mg',
          },
          status: 'active',
          manufacturer: { reference: 'Organization/pfizer', display: 'Pfizer Inc.' },
          form: {
            coding: [{ system: 'http://snomed.info/sct', code: '385055001', display: 'Tablet' }],
          },
          ingredient: [
            {
              itemCodeableConcept: {
                coding: [{ code: 'atorvastatin', display: 'Atorvastatin' }],
              },
              isActive: true,
              strength: {
                numerator: { value: 20, unit: 'mg' },
                denominator: { value: 1, unit: 'tablet' },
              },
            },
          ],
        });

        expect(medication.manufacturer?.reference).toBe('Organization/pfizer');
        expect(medication.code?.text).toBe('Lipitor 20mg');
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Combination Drug', () => {
      it('should create a combination drug with multiple ingredients', () => {
        const medication = new Medication({
          id: 'combination-001',
          code: {
            coding: [
              {
                system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                code: '857005',
                display: 'Hydrocodone Bitartrate 5 MG / Acetaminophen 325 MG Oral Tablet',
              },
            ],
            text: 'Hydrocodone/Acetaminophen 5-325mg',
          },
          status: 'active',
          form: { coding: [{ code: '385055001', display: 'Tablet' }] },
          ingredient: [
            {
              itemCodeableConcept: { coding: [{ code: 'hydrocodone', display: 'Hydrocodone' }] },
              isActive: true,
              strength: {
                numerator: { value: 5, unit: 'mg' },
                denominator: { value: 1, unit: 'tablet' },
              },
            },
            {
              itemCodeableConcept: { coding: [{ code: 'acetaminophen', display: 'Acetaminophen' }] },
              isActive: true,
              strength: {
                numerator: { value: 325, unit: 'mg' },
                denominator: { value: 1, unit: 'tablet' },
              },
            },
          ],
        });

        expect(medication.ingredient).toHaveLength(2);
        expect(medication.ingredient![0].itemCodeableConcept?.coding?.[0].code).toBe('hydrocodone');
        expect(medication.ingredient![1].itemCodeableConcept?.coding?.[0].code).toBe('acetaminophen');
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Packaged Medication with Batch', () => {
      it('should create a packaged medication with batch information', () => {
        const medication = new Medication({
          id: 'packaged-med-001',
          code: {
            coding: [{ code: '866427', display: 'Amoxicillin 500 MG Oral Capsule' }],
            text: 'Amoxicillin 500mg capsule',
          },
          status: 'active',
          form: { coding: [{ code: '385049006', display: 'Capsule' }] },
          amount: {
            numerator: { value: 21, unit: 'capsules' },
            denominator: { value: 1, unit: 'bottle' },
          },
          batch: {
            lotNumber: 'AMOX-2023-12345',
            expirationDate: '2025-12-31',
          },
        });

        expect(medication.amount?.numerator?.value).toBe(21);
        expect(medication.batch?.lotNumber).toBe('AMOX-2023-12345');
        expect(medication.batch?.expirationDate).toBe('2025-12-31');
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Liquid Medication', () => {
      it('should create a liquid medication formulation', () => {
        const medication = new Medication({
          id: 'liquid-med-001',
          code: {
            coding: [{ code: 'liquid-ibuprofen', display: 'Ibuprofen 100 MG/5 ML Oral Suspension' }],
            text: 'Ibuprofen oral suspension',
          },
          status: 'active',
          form: {
            coding: [{ system: 'http://snomed.info/sct', code: '385023001', display: 'Oral suspension' }],
          },
          ingredient: [
            {
              itemCodeableConcept: { coding: [{ code: 'ibuprofen', display: 'Ibuprofen' }] },
              isActive: true,
              strength: {
                numerator: { value: 100, unit: 'mg', system: 'http://unitsofmeasure.org', code: 'mg' },
                denominator: { value: 5, unit: 'mL', system: 'http://unitsofmeasure.org', code: 'mL' },
              },
            },
          ],
        });

        expect(medication.form?.coding?.[0].display).toBe('Oral suspension');
        expect(medication.ingredient![0].strength?.numerator?.value).toBe(100);
        expect(medication.ingredient![0].strength?.denominator?.value).toBe(5);
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Compound Medication', () => {
      it('should create a compounded medication', () => {
        const medication = new Medication({
          id: 'compound-001',
          code: { text: 'Custom Compound: Hydrocortisone 1% / Lidocaine 2% topical cream' },
          status: 'active',
          form: { coding: [{ code: 'cream', display: 'Topical cream' }] },
          ingredient: [
            {
              itemCodeableConcept: { coding: [{ code: 'hydrocortisone', display: 'Hydrocortisone' }] },
              isActive: true,
              strength: {
                numerator: { value: 1, unit: '%' },
                denominator: { value: 100, unit: 'g' },
              },
            },
            {
              itemCodeableConcept: { coding: [{ code: 'lidocaine', display: 'Lidocaine' }] },
              isActive: true,
              strength: {
                numerator: { value: 2, unit: '%' },
                denominator: { value: 100, unit: 'g' },
              },
            },
          ],
        });

        expect(medication.code?.text).toContain('Custom Compound');
        expect(medication.ingredient).toHaveLength(2);
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Vaccine', () => {
      it('should create a vaccine medication', () => {
        const medication = new Medication({
          id: 'vaccine-001',
          code: {
            coding: [
              { system: 'http://hl7.org/fhir/sid/cvx', code: '207', display: 'COVID-19, mRNA, LNP-S, PF, 100 mcg/ 0.5 mL dose' },
            ],
            text: 'Moderna COVID-19 Vaccine',
          },
          status: 'active',
          manufacturer: { reference: 'Organization/moderna', display: 'Moderna' },
          form: { coding: [{ code: 'injection', display: 'Injectable solution' }] },
          batch: {
            lotNumber: 'VAX-2023-001',
            expirationDate: '2024-06-30',
          },
        });

        expect(medication.code?.coding?.[0].system).toBe('http://hl7.org/fhir/sid/cvx');
        expect(medication.batch?.lotNumber).toBe('VAX-2023-001');
        expectSerializationRoundtrip(medication);
      });
    });

    describe('Inactive Medication', () => {
      it('should create an inactive medication', () => {
        const medication = new Medication({
          id: 'inactive-med-001',
          code: {
            coding: [{ code: 'discontinued-drug', display: 'Discontinued Brand Name' }],
            text: 'No longer manufactured',
          },
          status: 'inactive',
        });

        expect(medication.status).toBe('inactive');
        expectSerializationRoundtrip(medication);
      });
    });
  });
});
