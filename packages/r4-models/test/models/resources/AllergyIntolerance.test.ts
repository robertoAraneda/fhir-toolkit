import { describe, it, expect, beforeEach } from 'vitest';
import { AllergyIntolerance, AllergyIntoleranceBuilder } from '../../../src';
import type { IAllergyIntolerance } from '@fhir-toolkit/r4-types';

describe('AllergyIntolerance', () => {
  // Helper functions
  const expectSerializationRoundtrip = (allergy: AllergyIntolerance) => {
    const json = allergy.toJSON();
    const restored = AllergyIntolerance.fromJSON(json);
    expect(restored.toJSON()).toEqual(json);
  };

  const expectDeepClone = (allergy: AllergyIntolerance) => {
    const clone = allergy.clone();
    expect(clone).not.toBe(allergy);
    expect(clone.toJSON()).toEqual(allergy.toJSON());
  };

  const expectNoUndefinedInJSON = (allergy: AllergyIntolerance) => {
    const json = JSON.stringify(allergy.toJSON());
    expect(json).not.toContain('undefined');
  };

  describe('Model Tests', () => {
    describe('Constructor', () => {
      it('should create a minimal AllergyIntolerance with required properties', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
        });

        expect(allergy.resourceType).toBe('AllergyIntolerance');
        expect(allergy.patient).toEqual({ reference: 'Patient/123' });
      });

      it('should create a complete AllergyIntolerance with all properties', () => {
        const fullAllergy: IAllergyIntolerance = {
          resourceType: 'AllergyIntolerance',
          id: 'allergy-123',
          meta: { versionId: '1' },
          language: 'en-US',
          text: { status: 'generated', div: '<div>Penicillin Allergy</div>' },
          identifier: [{ system: 'http://hospital.org', value: 'ALLERGY-001' }],
          clinicalStatus: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical', code: 'active' }],
          },
          verificationStatus: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification', code: 'confirmed' }],
          },
          type: 'allergy',
          category: ['medication'],
          criticality: 'high',
          code: {
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '7980', display: 'Penicillin' }],
            text: 'Penicillin',
          },
          patient: { reference: 'Patient/patient-123' },
          encounter: { reference: 'Encounter/enc-456' },
          onsetDateTime: '2010-03-15',
          recordedDate: '2023-06-15T10:00:00Z',
          recorder: { reference: 'Practitioner/dr-recorder' },
          asserter: { reference: 'Patient/patient-123' },
          lastOccurrence: '2023-01-15',
          note: [{ text: 'Patient reports severe reaction to penicillin as a child' }],
          reaction: [
            {
              substance: { coding: [{ code: 'penicillin' }] },
              manifestation: [
                { coding: [{ system: 'http://snomed.info/sct', code: '39579001', display: 'Anaphylaxis' }] },
              ],
              description: 'Severe anaphylactic reaction',
              onset: '2010-03-15T14:00:00Z',
              severity: 'severe',
              exposureRoute: { coding: [{ code: 'oral' }] },
              note: [{ text: 'Required emergency treatment' }],
            },
          ],
        };

        const allergy = new AllergyIntolerance(fullAllergy);

        expect(allergy.id).toBe('allergy-123');
        expect(allergy.type).toBe('allergy');
        expect(allergy.category).toEqual(['medication']);
        expect(allergy.criticality).toBe('high');
        expect(allergy.reaction).toHaveLength(1);
        expect(allergy.reaction![0].severity).toBe('severe');
      });

      it('should create allergy with onsetDateTime', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          onsetDateTime: '2020-05-15T10:00:00Z',
        });

        expect(allergy.onsetDateTime).toBe('2020-05-15T10:00:00Z');
        expect(allergy.onsetAge).toBeUndefined();
      });

      it('should create allergy with onsetAge', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          onsetAge: { value: 5, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
        });

        expect(allergy.onsetAge?.value).toBe(5);
        expect(allergy.onsetAge?.unit).toBe('years');
      });

      it('should create allergy with onsetPeriod', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          onsetPeriod: {
            start: '2020-01-01',
            end: '2020-12-31',
          },
        });

        expect(allergy.onsetPeriod?.start).toBe('2020-01-01');
        expect(allergy.onsetPeriod?.end).toBe('2020-12-31');
      });

      it('should create allergy with onsetRange', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          onsetRange: {
            low: { value: 3, unit: 'years' },
            high: { value: 5, unit: 'years' },
          },
        });

        expect(allergy.onsetRange?.low?.value).toBe(3);
        expect(allergy.onsetRange?.high?.value).toBe(5);
      });

      it('should create allergy with onsetString', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          onsetString: 'In early childhood',
        });

        expect(allergy.onsetString).toBe('In early childhood');
      });

      it('should create allergy with multiple categories', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          category: ['food', 'environment'],
        });

        expect(allergy.category).toHaveLength(2);
        expect(allergy.category).toContain('food');
        expect(allergy.category).toContain('environment');
      });

      it('should create allergy with multiple reactions', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          code: { coding: [{ code: 'peanut' }] },
          reaction: [
            {
              manifestation: [{ coding: [{ code: 'hives' }] }],
              severity: 'mild',
            },
            {
              manifestation: [{ coding: [{ code: 'anaphylaxis' }] }],
              severity: 'severe',
            },
          ],
        });

        expect(allergy.reaction).toHaveLength(2);
        expect(allergy.reaction![0].severity).toBe('mild');
        expect(allergy.reaction![1].severity).toBe('severe');
      });

      it('should create allergy with detailed reaction information', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          reaction: [
            {
              substance: { coding: [{ code: 'shellfish' }] },
              manifestation: [
                { coding: [{ code: 'urticaria', display: 'Hives' }] },
                { coding: [{ code: 'angioedema', display: 'Swelling' }] },
              ],
              description: 'Developed hives and facial swelling after eating shrimp',
              onset: '2023-06-15T19:30:00Z',
              severity: 'moderate',
              exposureRoute: { coding: [{ code: 'oral', display: 'Oral route' }] },
            },
          ],
        });

        expect(allergy.reaction![0].manifestation).toHaveLength(2);
        expect(allergy.reaction![0].exposureRoute?.coding?.[0].code).toBe('oral');
      });
    });

    describe('Serialization', () => {
      it('should serialize minimal allergy to JSON', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
        });

        const json = allergy.toJSON();

        expect(json.resourceType).toBe('AllergyIntolerance');
        expect(json.patient).toEqual({ reference: 'Patient/123' });
        expectNoUndefinedInJSON(allergy);
      });

      it('should serialize complete allergy to JSON', () => {
        const allergy = new AllergyIntolerance({
          id: 'allergy-001',
          patient: { reference: 'Patient/123' },
          code: { coding: [{ code: 'penicillin' }] },
          type: 'allergy',
          category: ['medication'],
          criticality: 'high',
        });

        const json = allergy.toJSON();

        expect(json.id).toBe('allergy-001');
        expect(json.type).toBe('allergy');
        expectSerializationRoundtrip(allergy);
      });

      it('should exclude undefined values from JSON', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
        });

        const json = allergy.toJSON();

        expect(json).not.toHaveProperty('encounter');
        expect(json).not.toHaveProperty('reaction');
        expect(json).not.toHaveProperty('criticality');
        expectNoUndefinedInJSON(allergy);
      });
    });

    describe('fromJSON', () => {
      it('should create AllergyIntolerance from JSON', () => {
        const json: IAllergyIntolerance = {
          resourceType: 'AllergyIntolerance',
          id: 'from-json-test',
          patient: { reference: 'Patient/p1' },
          code: { coding: [{ code: 'peanut' }] },
          type: 'allergy',
        };

        const allergy = AllergyIntolerance.fromJSON(json);

        expect(allergy).toBeInstanceOf(AllergyIntolerance);
        expect(allergy.id).toBe('from-json-test');
        expect(allergy.type).toBe('allergy');
      });
    });

    describe('Immutability', () => {
      let allergy: AllergyIntolerance;

      beforeEach(() => {
        allergy = new AllergyIntolerance({
          id: 'original',
          patient: { reference: 'Patient/original' },
          type: 'allergy',
          criticality: 'low',
        });
      });

      it('should create new instance with() without modifying original', () => {
        const modified = allergy.with({ criticality: 'high' });

        expect(modified).not.toBe(allergy);
        expect(modified.criticality).toBe('high');
        expect(allergy.criticality).toBe('low');
      });

      it('should handle with() for complex properties', () => {
        const modified = allergy.with({
          reaction: [{ manifestation: [{ coding: [{ code: 'rash' }] }] }],
          category: ['medication', 'food'],
        });

        expect(modified.reaction).toHaveLength(1);
        expect(modified.category).toHaveLength(2);
        expect(allergy.reaction).toBeUndefined();
      });

      it('should apply transformation with applyTransform()', () => {
        const modified = allergy.applyTransform((data) => ({
          criticality: 'high',
          recordedDate: '2023-12-31T23:59:59Z',
        }));

        expect(modified.criticality).toBe('high');
        expect(modified.recordedDate).toBe('2023-12-31T23:59:59Z');
        expect(allergy.criticality).toBe('low');
      });
    });

    describe('Clone', () => {
      it('should create independent clone', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          reaction: [{ manifestation: [{ coding: [{ code: 'rash' }] }] }],
        });

        const clone = allergy.clone();

        expect(clone).not.toBe(allergy);
        expect(clone.toJSON()).toEqual(allergy.toJSON());

        // Verify deep clone
        clone.reaction![0].manifestation[0] = { coding: [{ code: 'modified' }] };
        expect(allergy.reaction![0].manifestation[0].coding![0].code).toBe('rash');
      });

      it('should deep clone nested objects', () => {
        const allergy = new AllergyIntolerance({
          patient: { reference: 'Patient/123' },
          clinicalStatus: { coding: [{ code: 'active' }] },
          reaction: [
            { manifestation: [{ coding: [{ code: 'anaphylaxis' }] }], severity: 'severe' },
          ],
        });

        expectDeepClone(allergy);
      });
    });

    describe('toString', () => {
      it('should return string representation with id', () => {
        const allergy = new AllergyIntolerance({
          id: 'allergy-12345',
          patient: { reference: 'Patient/123' },
        });

        expect(allergy.toString()).toContain('AllergyIntolerance');
        expect(allergy.toString()).toContain('allergy-12345');
      });
    });

    describe('Type Values', () => {
      const typeValues: Array<NonNullable<IAllergyIntolerance['type']>> = ['allergy', 'intolerance'];

      typeValues.forEach((type) => {
        it(`should accept type: ${type}`, () => {
          const allergy = new AllergyIntolerance({
            patient: { reference: 'Patient/123' },
            type,
          });

          expect(allergy.type).toBe(type);
        });
      });
    });

    describe('Category Values', () => {
      const categoryValues: Array<'food' | 'medication' | 'environment' | 'biologic'> = [
        'food',
        'medication',
        'environment',
        'biologic',
      ];

      categoryValues.forEach((category) => {
        it(`should accept category: ${category}`, () => {
          const allergy = new AllergyIntolerance({
            patient: { reference: 'Patient/123' },
            category: [category],
          });

          expect(allergy.category).toContain(category);
        });
      });
    });

    describe('Criticality Values', () => {
      const criticalityValues: Array<NonNullable<IAllergyIntolerance['criticality']>> = [
        'low',
        'high',
        'unable-to-assess',
      ];

      criticalityValues.forEach((criticality) => {
        it(`should accept criticality: ${criticality}`, () => {
          const allergy = new AllergyIntolerance({
            patient: { reference: 'Patient/123' },
            criticality,
          });

          expect(allergy.criticality).toBe(criticality);
        });
      });
    });
  });

  describe('Builder Tests', () => {
    describe('Basic Builder Usage', () => {
      it('should build minimal AllergyIntolerance', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .build();

        expect(allergy.resourceType).toBe('AllergyIntolerance');
        expect(allergy.patient).toEqual({ reference: 'Patient/123' });
      });

      it('should build complete AllergyIntolerance with all setters', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setId('builder-test')
          .setMeta({ versionId: '1' })
          .setClinicalStatus({ coding: [{ code: 'active' }] })
          .setVerificationStatus({ coding: [{ code: 'confirmed' }] })
          .setType('allergy')
          .setCriticality('high')
          .setCode({ coding: [{ code: 'penicillin' }] })
          .setPatient({ reference: 'Patient/123' })
          .setEncounter({ reference: 'Encounter/456' })
          .setRecordedDate('2023-06-15T10:00:00Z')
          .setRecorder({ reference: 'Practitioner/recorder-1' })
          .setAsserter({ reference: 'Patient/123' })
          .setLastOccurrence('2023-01-15')
          .build();

        expect(allergy.id).toBe('builder-test');
        expect(allergy.type).toBe('allergy');
        expect(allergy.criticality).toBe('high');
        expect(allergy.recorder?.reference).toBe('Practitioner/recorder-1');
      });
    });

    describe('Choice Type Setters', () => {
      it('should set onset as DateTime', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .setOnset('DateTime', '2020-05-15T10:00:00Z')
          .build();

        expect(allergy.onsetDateTime).toBe('2020-05-15T10:00:00Z');
      });

      it('should set onset as String', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .setOnset('String', 'In childhood')
          .build();

        expect(allergy.onsetString).toBe('In childhood');
      });
    });

    describe('Array Adders', () => {
      it('should add identifiers', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://hospital.org', value: 'ALLERGY001' })
          .addIdentifier({ system: 'http://hospital.org', value: 'ALLERGY002' })
          .build();

        expect(allergy.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addCategory('medication')
          .addCategory('food')
          .build();

        expect(allergy.category).toHaveLength(2);
        expect(allergy.category).toContain('medication');
        expect(allergy.category).toContain('food');
      });

      it('should add notes', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addNote({ text: 'Note 1' })
          .addNote({ text: 'Note 2' })
          .build();

        expect(allergy.note).toHaveLength(2);
      });

      it('should add reactions', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setPatient({ reference: 'Patient/123' })
          .addReaction({
            manifestation: [{ coding: [{ code: 'hives' }] }],
            severity: 'mild',
          })
          .addReaction({
            manifestation: [{ coding: [{ code: 'anaphylaxis' }] }],
            severity: 'severe',
          })
          .build();

        expect(allergy.reaction).toHaveLength(2);
        expect(allergy.reaction![0].severity).toBe('mild');
        expect(allergy.reaction![1].severity).toBe('severe');
      });
    });

    describe('Builder Chaining', () => {
      it('should support method chaining', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setId('chaining-test')
          .setPatient({ reference: 'Patient/123' })
          .setType('allergy')
          .setCriticality('high')
          .setCode({ coding: [{ code: 'peanut' }] })
          .addCategory('food')
          .addReaction({ manifestation: [{ coding: [{ code: 'anaphylaxis' }] }] })
          .addNote({ text: 'Important' })
          .build();

        expect(allergy.id).toBe('chaining-test');
        expect(allergy.category).toHaveLength(1);
        expect(allergy.reaction).toHaveLength(1);
        expect(allergy.note).toHaveLength(1);
      });
    });
  });

  describe('Integration Tests', () => {
    describe('Drug Allergy', () => {
      it('should create a complete drug allergy record', () => {
        const allergy = new AllergyIntoleranceBuilder()
          .setId('drug-allergy-001')
          .addIdentifier({ system: 'http://hospital.org/allergies', value: 'ALLERGY-2023-001' })
          .setClinicalStatus({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical', code: 'active' }],
          })
          .setVerificationStatus({
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification', code: 'confirmed' }],
          })
          .setType('allergy')
          .addCategory('medication')
          .setCriticality('high')
          .setCode({
            coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '7980', display: 'Penicillin V' }],
            text: 'Penicillin',
          })
          .setPatient({ reference: 'Patient/patient-123', display: 'John Doe' })
          .setRecordedDate('2023-06-15T10:00:00Z')
          .setRecorder({ reference: 'Practitioner/dr-smith' })
          .setAsserter({ reference: 'Patient/patient-123' })
          .setLastOccurrence('2015-03-20')
          .addReaction({
            substance: {
              coding: [{ system: 'http://www.nlm.nih.gov/research/umls/rxnorm', code: '7980', display: 'Penicillin V' }],
            },
            manifestation: [
              { coding: [{ system: 'http://snomed.info/sct', code: '39579001', display: 'Anaphylaxis' }] },
              { coding: [{ system: 'http://snomed.info/sct', code: '271807003', display: 'Skin rash' }] },
            ],
            description: 'Patient experienced anaphylaxis requiring emergency treatment',
            onset: '2015-03-20T14:30:00Z',
            severity: 'severe',
            exposureRoute: { coding: [{ system: 'http://snomed.info/sct', code: '26643006', display: 'Oral route' }] },
          })
          .addNote({ text: 'Patient must avoid all penicillin-based antibiotics and cephalosporins due to cross-reactivity risk' })
          .build();

        // Add onset via with()
        const allergyWithOnset = allergy.with({
          onsetDateTime: '2015-03-20',
        });

        expect(allergyWithOnset.type).toBe('allergy');
        expect(allergyWithOnset.criticality).toBe('high');
        expect(allergyWithOnset.reaction).toHaveLength(1);
        expect(allergyWithOnset.reaction![0].severity).toBe('severe');
        expectSerializationRoundtrip(allergyWithOnset);
      });
    });

    describe('Food Allergy', () => {
      it('should create a food allergy with multiple reactions', () => {
        const allergy = new AllergyIntolerance({
          id: 'food-allergy-001',
          clinicalStatus: { coding: [{ code: 'active' }] },
          verificationStatus: { coding: [{ code: 'confirmed' }] },
          type: 'allergy',
          category: ['food'],
          criticality: 'high',
          code: {
            coding: [{ system: 'http://snomed.info/sct', code: '91935009', display: 'Allergy to peanuts' }],
            text: 'Peanut Allergy',
          },
          patient: { reference: 'Patient/child-123' },
          onsetAge: { value: 2, unit: 'years', system: 'http://unitsofmeasure.org', code: 'a' },
          recordedDate: '2023-06-15',
          asserter: { reference: 'RelatedPerson/parent-123' },
          reaction: [
            {
              substance: { coding: [{ code: 'peanut' }] },
              manifestation: [{ coding: [{ code: 'urticaria', display: 'Hives' }] }],
              severity: 'mild',
              description: 'Initial exposure - developed hives',
            },
            {
              substance: { coding: [{ code: 'peanut' }] },
              manifestation: [
                { coding: [{ code: 'anaphylaxis' }] },
                { coding: [{ code: 'respiratory-distress' }] },
              ],
              severity: 'severe',
              description: 'Subsequent exposure - required epinephrine',
            },
          ],
          note: [
            { text: 'Patient carries EpiPen at all times' },
            { text: 'School notified of allergy' },
          ],
        });

        expect(allergy.category).toContain('food');
        expect(allergy.reaction).toHaveLength(2);
        expect(allergy.onsetAge?.value).toBe(2);
        expectSerializationRoundtrip(allergy);
      });
    });

    describe('Environmental Allergy', () => {
      it('should create an environmental allergy', () => {
        const allergy = new AllergyIntolerance({
          id: 'env-allergy-001',
          clinicalStatus: { coding: [{ code: 'active' }] },
          verificationStatus: { coding: [{ code: 'confirmed' }] },
          type: 'allergy',
          category: ['environment'],
          criticality: 'low',
          code: {
            coding: [{ system: 'http://snomed.info/sct', code: '256259004', display: 'Pollen' }],
            text: 'Pollen allergy (hay fever)',
          },
          patient: { reference: 'Patient/123' },
          onsetString: 'Since childhood',
          reaction: [
            {
              manifestation: [
                { coding: [{ code: 'sneezing' }] },
                { coding: [{ code: 'rhinorrhea', display: 'Runny nose' }] },
                { coding: [{ code: 'itchy-eyes' }] },
              ],
              severity: 'mild',
              description: 'Seasonal symptoms, worse in spring',
            },
          ],
          note: [{ text: 'Takes antihistamines during pollen season' }],
        });

        expect(allergy.category).toContain('environment');
        expect(allergy.criticality).toBe('low');
        expect(allergy.onsetString).toBe('Since childhood');
        expectSerializationRoundtrip(allergy);
      });
    });

    describe('Intolerance', () => {
      it('should create a food intolerance (not allergy)', () => {
        const intolerance = new AllergyIntolerance({
          id: 'intolerance-001',
          clinicalStatus: { coding: [{ code: 'active' }] },
          verificationStatus: { coding: [{ code: 'confirmed' }] },
          type: 'intolerance',
          category: ['food'],
          criticality: 'low',
          code: {
            coding: [{ system: 'http://snomed.info/sct', code: '190751001', display: 'Lactose intolerance' }],
            text: 'Lactose intolerance',
          },
          patient: { reference: 'Patient/123' },
          onsetDateTime: '2020-01-15',
          reaction: [
            {
              manifestation: [
                { coding: [{ code: 'abdominal-pain' }] },
                { coding: [{ code: 'bloating' }] },
                { coding: [{ code: 'diarrhea' }] },
              ],
              severity: 'moderate',
              description: 'GI symptoms after consuming dairy products',
            },
          ],
          note: [{ text: 'Patient tolerates small amounts of dairy and lactose-free products' }],
        });

        expect(intolerance.type).toBe('intolerance');
        expect(intolerance.criticality).toBe('low');
        expectSerializationRoundtrip(intolerance);
      });
    });

    describe('Resolved Allergy', () => {
      it('should create a resolved allergy', () => {
        const allergy = new AllergyIntolerance({
          id: 'resolved-allergy-001',
          clinicalStatus: { coding: [{ code: 'resolved' }] },
          verificationStatus: { coding: [{ code: 'confirmed' }] },
          type: 'allergy',
          category: ['food'],
          code: {
            coding: [{ code: 'egg-allergy' }],
            text: 'Egg allergy',
          },
          patient: { reference: 'Patient/child-123' },
          onsetAge: { value: 1, unit: 'year' },
          recordedDate: '2023-06-15',
          note: [
            { text: 'Patient has outgrown egg allergy per allergist evaluation' },
            { text: 'Oral food challenge completed successfully' },
          ],
        });

        expect(allergy.clinicalStatus?.coding?.[0].code).toBe('resolved');
        expectSerializationRoundtrip(allergy);
      });
    });

    describe('Refuted Allergy', () => {
      it('should create a refuted allergy', () => {
        const allergy = new AllergyIntolerance({
          id: 'refuted-allergy-001',
          clinicalStatus: { coding: [{ code: 'inactive' }] },
          verificationStatus: { coding: [{ code: 'refuted' }] },
          type: 'allergy',
          category: ['medication'],
          code: {
            coding: [{ code: 'sulfa' }],
            text: 'Sulfa antibiotics',
          },
          patient: { reference: 'Patient/123' },
          recordedDate: '2023-06-15',
          recorder: { reference: 'Practitioner/allergist-1' },
          note: [
            { text: 'Patient was tested and does not have sulfa allergy' },
            { text: 'Previous reaction was likely GI side effect, not allergic' },
          ],
        });

        expect(allergy.verificationStatus?.coding?.[0].code).toBe('refuted');
        expectSerializationRoundtrip(allergy);
      });
    });

    describe('Biologic Allergy', () => {
      it('should create an allergy to biologic agent', () => {
        const allergy = new AllergyIntolerance({
          id: 'biologic-allergy-001',
          clinicalStatus: { coding: [{ code: 'active' }] },
          verificationStatus: { coding: [{ code: 'confirmed' }] },
          type: 'allergy',
          category: ['biologic'],
          criticality: 'high',
          code: {
            coding: [{ code: 'bee-venom', display: 'Bee venom' }],
            text: 'Bee sting allergy',
          },
          patient: { reference: 'Patient/123' },
          lastOccurrence: '2022-08-15',
          reaction: [
            {
              manifestation: [{ coding: [{ code: 'anaphylaxis' }] }],
              severity: 'severe',
              description: 'Systemic reaction to bee sting',
            },
          ],
          note: [
            { text: 'Patient undergoing venom immunotherapy' },
            { text: 'Carries epinephrine auto-injector' },
          ],
        });

        expect(allergy.category).toContain('biologic');
        expect(allergy.criticality).toBe('high');
        expectSerializationRoundtrip(allergy);
      });
    });

    describe('Multiple Categories', () => {
      it('should create allergy with multiple categories', () => {
        const allergy = new AllergyIntolerance({
          id: 'multi-category-001',
          clinicalStatus: { coding: [{ code: 'active' }] },
          type: 'allergy',
          category: ['food', 'environment'],
          code: {
            text: 'Multiple allergies',
          },
          patient: { reference: 'Patient/123' },
          note: [{ text: 'Patient has multiple food and environmental allergies' }],
        });

        expect(allergy.category).toHaveLength(2);
        expect(allergy.category).toContain('food');
        expect(allergy.category).toContain('environment');
        expectSerializationRoundtrip(allergy);
      });
    });
  });
});
