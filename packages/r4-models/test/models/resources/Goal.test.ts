import { describe, it, expect } from 'vitest';
import { Goal } from '../../../src/models/resources/Goal.js';
import { GoalBuilder } from '../../../src/builders/resources/GoalBuilder.js';
import type { IGoal } from '@fhir-toolkit/r4-types';

describe('Goal', () => {
  // ============================================================
  // Helper Functions
  // ============================================================

  /**
   * Helper to verify serialization round-trip
   */
  function expectSerializationRoundtrip(goal: Goal): void {
    const json = goal.toJSON();
    const deserialized = Goal.fromJSON(json);
    expect(deserialized.toJSON()).toEqual(json);
  }

  /**
   * Helper to verify deep clone
   */
  function expectDeepClone(goal: Goal): void {
    const cloned = goal.clone();
    expect(cloned).not.toBe(goal);
    expect(cloned.toJSON()).toEqual(goal.toJSON());
  }

  /**
   * Helper to verify no undefined values in JSON
   */
  function expectNoUndefinedInJSON(json: IGoal): void {
    Object.entries(json).forEach(([key, value]) => {
      expect(value).not.toBeUndefined();
    });
  }

  // ============================================================
  // Constructor Tests
  // ============================================================

  describe('Constructor', () => {
    it('should create Goal with minimal required properties', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Lose weight' },
        subject: { reference: 'Patient/123' },
      });

      expect(goal.resourceType).toBe('Goal');
      expect(goal.lifecycleStatus).toBe('active');
      expect(goal.description.text).toBe('Lose weight');
      expect(goal.subject.reference).toBe('Patient/123');
    });

    it('should create Goal with all properties', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        id: 'goal-1',
        lifecycleStatus: 'active',
        achievementStatus: {
          coding: [{ code: 'in-progress', display: 'In Progress' }],
        },
        category: [
          { coding: [{ code: 'dietary', display: 'Dietary' }] },
        ],
        priority: {
          coding: [{ code: 'high-priority', display: 'High Priority' }],
        },
        description: {
          coding: [{ code: 'weight-loss', display: 'Weight Loss' }],
          text: 'Lose 15 pounds',
        },
        subject: { reference: 'Patient/123' },
        startDate: '2024-01-15',
        target: [
          {
            measure: { coding: [{ code: 'weight', display: 'Body Weight' }] },
            detailQuantity: { value: 185, unit: 'lbs' },
            dueDate: '2024-06-15',
          },
        ],
        statusDate: '2024-01-15',
        expressedBy: { reference: 'Practitioner/doc-1' },
        addresses: [{ reference: 'Condition/obesity' }],
        note: [{ text: 'Patient motivated to lose weight' }],
      });

      expect(goal.resourceType).toBe('Goal');
      expect(goal.id).toBe('goal-1');
      expect(goal.priority?.coding?.[0]?.code).toBe('high-priority');
      expectSerializationRoundtrip(goal);
    });

    it('should handle empty constructor', () => {
      const goal = new Goal();
      expect(goal.resourceType).toBe('Goal');
    });
  });

  // ============================================================
  // Serialization Tests
  // ============================================================

  describe('Serialization', () => {
    it('should serialize to JSON correctly', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Improve A1C' },
        subject: { reference: 'Patient/123' },
      });

      const json = goal.toJSON();
      expect(json.resourceType).toBe('Goal');
      expect(json.lifecycleStatus).toBe('active');
      expectNoUndefinedInJSON(json);
    });

    it('should serialize with all properties', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        id: 'goal-1',
        meta: { versionId: '1' },
        lifecycleStatus: 'completed',
        achievementStatus: { coding: [{ code: 'achieved' }] },
        description: { text: 'HbA1c < 7%' },
        subject: { reference: 'Patient/123' },
        target: [
          {
            measure: { coding: [{ code: 'hba1c' }] },
            detailQuantity: { value: 7, unit: '%' },
          },
        ],
      });

      const json = goal.toJSON();
      expect(json.meta?.versionId).toBe('1');
      expect(json.achievementStatus?.coding?.[0]?.code).toBe('achieved');
      expectNoUndefinedInJSON(json);
    });
  });

  // ============================================================
  // fromJSON Tests
  // ============================================================

  describe('fromJSON', () => {
    it('should create Goal from JSON', () => {
      const json: IGoal = {
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Quit smoking' },
        subject: { reference: 'Patient/123' },
      };

      const goal = Goal.fromJSON(json);
      expect(goal.lifecycleStatus).toBe('active');
      expect(goal.description.text).toBe('Quit smoking');
    });

    it('should handle complex JSON structure', () => {
      const json: IGoal = {
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Control blood pressure' },
        subject: { reference: 'Patient/123' },
        target: [
          {
            measure: { coding: [{ code: 'systolic-bp' }] },
            detailRange: {
              low: { value: 110, unit: 'mmHg' },
              high: { value: 120, unit: 'mmHg' },
            },
          },
        ],
      };

      const goal = Goal.fromJSON(json);
      expect(goal.target?.[0]?.detailRange?.high?.value).toBe(120);
      expectSerializationRoundtrip(goal);
    });
  });

  // ============================================================
  // Immutability Tests (with, applyTransform)
  // ============================================================

  describe('Immutability', () => {
    it('should create new instance with "with" method', () => {
      const original = new Goal({
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Exercise regularly' },
        subject: { reference: 'Patient/123' },
      });

      const modified = original.with({ lifecycleStatus: 'completed' });

      expect(original.lifecycleStatus).toBe('active');
      expect(modified.lifecycleStatus).toBe('completed');
      expect(modified).not.toBe(original);
    });

    it('should apply transformation function', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Reduce salt intake' },
        subject: { reference: 'Patient/123' },
      });

      const transformed = goal.applyTransform((data) => ({
        ...data,
        lifecycleStatus: 'on-hold',
        statusReason: 'Patient requested pause',
      }));

      expect(transformed.lifecycleStatus).toBe('on-hold');
      expect(transformed.statusReason).toBe('Patient requested pause');
      expect(goal.lifecycleStatus).toBe('active');
    });
  });

  // ============================================================
  // Clone Tests
  // ============================================================

  describe('Clone', () => {
    it('should create deep clone', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Maintain healthy diet' },
        subject: { reference: 'Patient/123' },
        target: [
          {
            measure: { coding: [{ code: 'daily-vegetables' }] },
            detailQuantity: { value: 5, unit: 'servings' },
          },
        ],
      });

      expectDeepClone(goal);
    });

    it('should clone with all properties', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        id: 'goal-1',
        lifecycleStatus: 'completed',
        achievementStatus: { coding: [{ code: 'achieved' }] },
        description: { text: 'Complete physical therapy' },
        subject: { reference: 'Patient/123' },
        note: [{ text: 'Excellent progress' }],
      });

      const cloned = goal.clone();
      expect(cloned.toJSON()).toEqual(goal.toJSON());
      expect(cloned.note?.[0]?.text).toBe('Excellent progress');
    });
  });

  // ============================================================
  // toString Tests
  // ============================================================

  describe('toString', () => {
    it('should return string representation without id', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        lifecycleStatus: 'active',
        description: { text: 'Walk daily' },
        subject: { reference: 'Patient/123' },
      });

      expect(goal.toString()).toBe('Goal');
    });

    it('should return string representation with id', () => {
      const goal = new Goal({
        resourceType: 'Goal',
        id: 'goal-123',
        lifecycleStatus: 'active',
        description: { text: 'Walk daily' },
        subject: { reference: 'Patient/123' },
      });

      expect(goal.toString()).toBe('Goal, id=goal-123');
    });
  });

  // ============================================================
  // Lifecycle Status Tests
  // ============================================================

  describe('Lifecycle Status', () => {
    const validStatuses = [
      'proposed',
      'planned',
      'accepted',
      'active',
      'on-hold',
      'completed',
      'cancelled',
      'entered-in-error',
      'rejected',
    ];

    validStatuses.forEach((status) => {
      it(`should accept lifecycleStatus: ${status}`, () => {
        const goal = new Goal({
          resourceType: 'Goal',
          lifecycleStatus: status as any,
          description: { text: 'Test goal' },
          subject: { reference: 'Patient/123' },
        });

        expect(goal.lifecycleStatus).toBe(status);
      });
    });
  });

  // ============================================================
  // GoalBuilder Tests
  // ============================================================

  describe('GoalBuilder', () => {
    describe('Basic Builder Methods', () => {
      it('should build Goal with required fields', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Lose weight' })
          .setSubject({ reference: 'Patient/123' })
          .build();

        expect(goal.lifecycleStatus).toBe('active');
        expect(goal.description.text).toBe('Lose weight');
      });

      it('should build Goal with all scalar fields', () => {
        const goal = new GoalBuilder()
          .setId('goal-1')
          .setLifecycleStatus('active')
          .setAchievementStatus({
            coding: [{ code: 'improving', display: 'Improving' }],
          })
          .setPriority({
            coding: [{ code: 'high-priority', display: 'High' }],
          })
          .setDescription({ text: 'Reduce cholesterol' })
          .setSubject({ reference: 'Patient/123' })
          .setStatusDate('2024-01-15')
          .setStatusReason('Initial assessment')
          .setExpressedBy({ reference: 'Practitioner/doc-1' })
          .build();

        expect(goal.id).toBe('goal-1');
        expect(goal.achievementStatus?.coding?.[0]?.code).toBe('improving');
        expect(goal.priority?.coding?.[0]?.code).toBe('high-priority');
        expect(goal.statusReason).toBe('Initial assessment');
      });
    });

    describe('Choice Type Methods', () => {
      it('should set start as Date', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Exercise program' })
          .setSubject({ reference: 'Patient/123' })
          .setStart('Date', '2024-01-15')
          .build();

        expect(goal.startDate).toBe('2024-01-15');
        expect(goal.startCodeableConcept).toBeUndefined();
      });

      it('should set start as CodeableConcept', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Rehabilitation' })
          .setSubject({ reference: 'Patient/123' })
          .setStart('CodeableConcept', { coding: [{ code: 'post-surgery' }] } as any)
          .build();

        expect(goal.startCodeableConcept).toBeDefined();
        expect(goal.startDate).toBeUndefined();
      });
    });

    describe('Array Methods', () => {
      it('should add identifiers', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Medication adherence' })
          .setSubject({ reference: 'Patient/123' })
          .addIdentifier({ system: 'http://example.org', value: 'goal-001' })
          .addIdentifier({ system: 'http://example.org', value: 'goal-002' })
          .build();

        expect(goal.identifier).toHaveLength(2);
      });

      it('should add categories', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Lifestyle modification' })
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'dietary' }] })
          .addCategory({ coding: [{ code: 'behavioral' }] })
          .build();

        expect(goal.category).toHaveLength(2);
      });

      it('should add targets', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Blood pressure control' })
          .setSubject({ reference: 'Patient/123' })
          .addTarget({
            measure: { coding: [{ code: 'systolic-bp' }] },
            detailQuantity: { value: 120, unit: 'mmHg' },
          })
          .addTarget({
            measure: { coding: [{ code: 'diastolic-bp' }] },
            detailQuantity: { value: 80, unit: 'mmHg' },
          })
          .build();

        expect(goal.target).toHaveLength(2);
      });

      it('should add addresses', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Manage chronic conditions' })
          .setSubject({ reference: 'Patient/123' })
          .addAddresses({ reference: 'Condition/diabetes' })
          .addAddresses({ reference: 'Condition/hypertension' })
          .build();

        expect(goal.addresses).toHaveLength(2);
      });

      it('should add notes', () => {
        const goal = new GoalBuilder()
          .setLifecycleStatus('active')
          .setDescription({ text: 'Pain management' })
          .setSubject({ reference: 'Patient/123' })
          .addNote({ text: 'Patient prefers non-pharmacological approaches' })
          .addNote({ text: 'Follow up in 2 weeks' })
          .build();

        expect(goal.note).toHaveLength(2);
      });
    });

    describe('Method Chaining', () => {
      it('should support fluent method chaining', () => {
        const goal = new GoalBuilder()
          .setId('goal-chain')
          .setLifecycleStatus('active')
          .setDescription({ text: 'Complex goal' })
          .setSubject({ reference: 'Patient/123' })
          .addCategory({ coding: [{ code: 'dietary' }] })
          .addTarget({
            measure: { coding: [{ code: 'weight' }] },
            detailQuantity: { value: 180, unit: 'lbs' },
          })
          .addNote({ text: 'Important note' })
          .build();

        expect(goal.id).toBe('goal-chain');
        expect(goal.category).toHaveLength(1);
        expect(goal.target).toHaveLength(1);
        expect(goal.note).toHaveLength(1);
      });
    });
  });

  // ============================================================
  // Integration Tests (Clinical Scenarios)
  // ============================================================

  describe('Integration Tests', () => {
    it('should create weight loss goal', () => {
      const goal = new GoalBuilder()
        .setId('weight-loss-goal')
        .setLifecycleStatus('active')
        .setAchievementStatus({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
              code: 'in-progress',
              display: 'In Progress',
            },
          ],
        })
        .addCategory({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-category',
              code: 'dietary',
              display: 'Dietary',
            },
          ],
        })
        .setPriority({
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/goal-priority',
              code: 'high-priority',
              display: 'High Priority',
            },
          ],
        })
        .setDescription({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '289169006',
              display: 'Weight loss',
            },
          ],
          text: 'Lose 15 pounds in 6 months',
        })
        .setSubject({ reference: 'Patient/patient-123', display: 'John Doe' })
        .setStart('Date', '2024-01-15')
        .addTarget({
          measure: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '29463-7',
                display: 'Body Weight',
              },
            ],
          },
          detailQuantity: {
            value: 185,
            unit: 'lbs',
            system: 'http://unitsofmeasure.org',
            code: '[lb_av]',
          },
          dueDate: '2024-07-15',
        })
        .setExpressedBy({ reference: 'Practitioner/practitioner-1', display: 'Dr. Smith' })
        .addAddresses({ reference: 'Condition/obesity', display: 'Obesity' })
        .addNote({ text: 'Patient motivated and committed to dietary changes and regular exercise' })
        .build();

      expect(goal.lifecycleStatus).toBe('active');
      expect(goal.description.text).toContain('15 pounds');
      expect(goal.target?.[0]?.detailQuantity?.value).toBe(185);
      expectSerializationRoundtrip(goal);
    });

    it('should create diabetes HbA1c goal', () => {
      const goal = new GoalBuilder()
        .setId('hba1c-goal')
        .setLifecycleStatus('active')
        .setAchievementStatus({
          coding: [{ code: 'improving', display: 'Improving' }],
        })
        .addCategory({
          coding: [{ code: 'safety', display: 'Safety' }],
        })
        .setPriority({
          coding: [{ code: 'high-priority', display: 'High Priority' }],
        })
        .setDescription({
          text: 'Achieve HbA1c below 7%',
        })
        .setSubject({ reference: 'Patient/123' })
        .setStart('Date', '2024-01-01')
        .addTarget({
          measure: { coding: [{ code: '4548-4', display: 'Hemoglobin A1c' }] },
          detailQuantity: { value: 7, unit: '%' },
          dueDate: '2024-06-01',
        })
        .setStatusDate('2024-01-15')
        .setExpressedBy({ reference: 'Practitioner/endocrinologist' })
        .addAddresses({ reference: 'Condition/type2-diabetes' })
        .addNote({ text: 'Patient on metformin therapy, diet counseling provided' })
        .build();

      expect(goal.description.text).toContain('HbA1c');
      expect(goal.target?.[0]?.detailQuantity?.value).toBe(7);
      expectSerializationRoundtrip(goal);
    });

    it('should create blood pressure control goal with range', () => {
      const goal = new GoalBuilder()
        .setLifecycleStatus('active')
        .setDescription({ text: 'Maintain blood pressure in normal range' })
        .setSubject({ reference: 'Patient/123' })
        .addTarget({
          measure: { coding: [{ code: 'systolic-bp', display: 'Systolic Blood Pressure' }] },
          detailRange: {
            low: { value: 110, unit: 'mmHg' },
            high: { value: 120, unit: 'mmHg' },
          },
        })
        .addTarget({
          measure: { coding: [{ code: 'diastolic-bp', display: 'Diastolic Blood Pressure' }] },
          detailRange: {
            low: { value: 70, unit: 'mmHg' },
            high: { value: 80, unit: 'mmHg' },
          },
        })
        .addAddresses({ reference: 'Condition/hypertension' })
        .build();

      expect(goal.target).toHaveLength(2);
      expect(goal.target?.[0]?.detailRange?.high?.value).toBe(120);
      expectSerializationRoundtrip(goal);
    });

    it('should create completed smoking cessation goal', () => {
      const goal = new GoalBuilder()
        .setLifecycleStatus('completed')
        .setAchievementStatus({
          coding: [{ code: 'achieved', display: 'Achieved' }],
        })
        .setDescription({
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '160617001',
              display: 'Smoking cessation',
            },
          ],
          text: 'Quit smoking completely',
        })
        .setSubject({ reference: 'Patient/123' })
        .setStart('Date', '2023-01-15')
        .setStatusDate('2024-01-15')
        .setStatusReason('Patient has not smoked for 12 months')
        .setExpressedBy({ reference: 'Patient/123' })
        .addNote({ text: 'Patient successfully quit with support of nicotine replacement therapy' })
        .build();

      const goalWithOutcome = goal.with({
        outcomeCode: [
          {
            coding: [{ code: 'tobacco-free', display: 'Tobacco Free for 1 year' }],
          },
        ],
      });

      expect(goalWithOutcome.lifecycleStatus).toBe('completed');
      expect(goalWithOutcome.achievementStatus?.coding?.[0]?.code).toBe('achieved');
      expect(goalWithOutcome.outcomeCode?.[0]?.coding?.[0]?.code).toBe('tobacco-free');
      expectSerializationRoundtrip(goalWithOutcome);
    });

    it('should create physical activity goal', () => {
      const goal = new GoalBuilder()
        .setLifecycleStatus('active')
        .addCategory({ coding: [{ code: 'behavioral', display: 'Behavioral' }] })
        .setPriority({ coding: [{ code: 'medium-priority', display: 'Medium' }] })
        .setDescription({ text: 'Increase daily physical activity' })
        .setSubject({ reference: 'Patient/123' })
        .setStart('Date', '2024-01-01')
        .addTarget({
          measure: { coding: [{ code: 'daily-steps', display: 'Daily Steps' }] },
          detailQuantity: { value: 10000, unit: 'steps' },
        })
        .addTarget({
          measure: { coding: [{ code: 'exercise-minutes', display: 'Exercise Minutes' }] },
          detailQuantity: { value: 150, unit: 'minutes/week' },
        })
        .setExpressedBy({ reference: 'Patient/123' })
        .addNote({ text: 'Patient has fitness tracker to monitor progress' })
        .build();

      expect(goal.target).toHaveLength(2);
      expect(goal.category?.[0]?.coding?.[0]?.code).toBe('behavioral');
      expectSerializationRoundtrip(goal);
    });

    it('should create pain management goal', () => {
      const goal = new GoalBuilder()
        .setLifecycleStatus('active')
        .setAchievementStatus({
          coding: [{ code: 'in-progress', display: 'In Progress' }],
        })
        .setDescription({ text: 'Reduce chronic back pain to manageable levels' })
        .setSubject({ reference: 'Patient/123' })
        .addTarget({
          measure: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '72514-3',
                display: 'Pain severity',
              },
            ],
          },
          detailQuantity: { value: 3, unit: 'score (0-10)' },
          dueDate: '2024-06-15',
        })
        .addAddresses({ reference: 'Condition/chronic-low-back-pain' })
        .addNote({ text: 'Multimodal approach: PT, medications, lifestyle modifications' })
        .build();

      expect(goal.target?.[0]?.measure?.coding?.[0]?.code).toBe('72514-3');
      expectSerializationRoundtrip(goal);
    });
  });
});
