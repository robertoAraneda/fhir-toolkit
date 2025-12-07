import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { NutritionIntake } from '../../models/resources/NutritionIntake.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EventStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  INutritionIntake,
  INutritionIntakeConsumedItem,
  INutritionIntakeIngredientLabel,
  INutritionIntakePerformer,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionIntakeBuilder - Fluent builder for NutritionIntake resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionIntake = new NutritionIntakeBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class NutritionIntakeBuilder extends DomainResourceBuilder<NutritionIntake, INutritionIntake> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  setStatus(status: EventStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * Code representing an overall type of nutrition intake
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who is/was consuming the food or fluid
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter associated with NutritionIntake
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set recorded
   * When the intake was recorded
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
    return this;
  }

  /**
   * Set location
   * Where the intake occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof INutritionIntake;
    const otherKeys: (keyof INutritionIntake)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof INutritionIntake);
      otherKeys.push('_occurrenceDateTime' as keyof INutritionIntake);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof INutritionIntake);
      otherKeys.push('_occurrencePeriod' as keyof INutritionIntake);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set reported choice type (reportedBoolean, reportedReference)
   * @param type - 'Boolean' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReported('Boolean', value)
   */
  setReported<T extends 'Boolean' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `reported${type}` as keyof INutritionIntake;
    const otherKeys: (keyof INutritionIntake)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('reportedBoolean' as keyof INutritionIntake);
      otherKeys.push('_reportedBoolean' as keyof INutritionIntake);
    }
    if (type !== 'Reference') {
      otherKeys.push('reportedReference' as keyof INutritionIntake);
      otherKeys.push('_reportedReference' as keyof INutritionIntake);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add instantiatesCanonical
   * Instantiates FHIR protocol or definition
   */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addToArray('instantiatesCanonical', instantiatesCanonical);
  }

  /**
   * Add instantiatesUri
   * Instantiates external protocol or definition
   */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addToArray('instantiatesUri', instantiatesUri);
  }

  /**
   * Add basedOn
   * Fulfils plan, proposal or order
   */
  addBasedOn(basedOn: IReference<'NutritionOrder' | 'CarePlan' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'NutritionIntake' | 'Procedure' | 'Observation'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add statusReason
   * Reason for current status
   */
  addStatusReason(statusReason: ICodeableConcept): this {
    return this.addToArray('statusReason', statusReason);
  }

  /**
   * Add consumedItem
   * What food or fluid product or item was consumed
   */
  addConsumedItem(consumedItem: INutritionIntakeConsumedItem): this {
    return this.addToArray('consumedItem', consumedItem);
  }

  /**
   * Add ingredientLabel
   * Total nutrient for the whole meal, product, serving
   */
  addIngredientLabel(ingredientLabel: INutritionIntakeIngredientLabel): this {
    return this.addToArray('ingredientLabel', ingredientLabel);
  }

  /**
   * Add performer
   * Who was performed in the intake
   */
  addPerformer(performer: INutritionIntakePerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add derivedFrom
   * Additional supporting information
   */
  addDerivedFrom(derivedFrom: IReference<'Resource'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add reason
   * Reason for why the food or fluid is /was consumed
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add note
   * Further information about the consumption
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionIntake instance
   */
  build(): NutritionIntake {
    return new NutritionIntake(this.data);
  }

  /**
   * Build and validate the NutritionIntake instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionIntake> {
    const nutritionIntake = this.build();
    await nutritionIntake.validateOrThrow();
    return nutritionIntake;
  }
}
