import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { NutritionOrder } from '../../models/resources/NutritionOrder.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  INutritionOrder,
  INutritionOrderEnteralFormula,
  INutritionOrderOralDiet,
  INutritionOrderSupplement,
  IReference,
  RequestIntentType,
  RequestStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * NutritionOrderBuilder - Fluent builder for NutritionOrder resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrder = new NutritionOrderBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class NutritionOrderBuilder extends DomainResourceBuilder<NutritionOrder, INutritionOrder> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  setStatus(status: RequestStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set intent
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: RequestIntentType): this {
    this.data.intent = intent;
    return this;
  }

  /**
   * Set patient
   * The person who requires the diet, formula or nutritional supplement
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set encounter
   * The encounter associated with this nutrition order
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set dateTime
   * Date and time the nutrition order was requested
   */
  setDateTime(dateTime: string): this {
    this.data.dateTime = dateTime;
    return this;
  }

  /**
   * Set orderer
   * Who ordered the diet, formula or nutritional supplement
   */
  setOrderer(orderer: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.orderer = orderer;
    return this;
  }

  /**
   * Set oralDiet
   * Oral diet components
   */
  setOralDiet(oralDiet: INutritionOrderOralDiet): this {
    this.data.oralDiet = oralDiet;
    return this;
  }

  /**
   * Set enteralFormula
   * Enteral formula components
   */
  setEnteralFormula(enteralFormula: INutritionOrderEnteralFormula): this {
    this.data.enteralFormula = enteralFormula;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instantiates choice type
   * @param type - 'Canonical' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstantiates('Canonical', value)
   */
  setInstantiates<T extends 'Canonical' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `instantiates${type}` as keyof INutritionOrder;
    const otherKeys: (keyof INutritionOrder)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof INutritionOrder);
      otherKeys.push('_instantiatesCanonical' as keyof INutritionOrder);
    }
    if (type !== 'Uri') {
      otherKeys.push('instantiatesUri' as keyof INutritionOrder);
      otherKeys.push('_instantiatesUri' as keyof INutritionOrder);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifiers assigned to this order
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add instantiates
   * Instantiates protocol or definition
   */
  addInstantiates(instantiat: string): this {
    return this.addToArray('instantiates', instantiat);
  }

  /**
   * Add allergyIntolerance
   * List of the patient's food and nutrition-related allergies and intolerances
   */
  addAllergyIntolerance(allergyIntolerance: IReference<'AllergyIntolerance'>): this {
    return this.addToArray('allergyIntolerance', allergyIntolerance);
  }

  /**
   * Add foodPreferenceModifier
   * Order-specific modifier about the type of food that should be given
   */
  addFoodPreferenceModifier(foodPreferenceModifier: ICodeableConcept): this {
    return this.addToArray('foodPreferenceModifier', foodPreferenceModifier);
  }

  /**
   * Add excludeFoodModifier
   * Order-specific modifier about the type of food that should not be given
   */
  addExcludeFoodModifier(excludeFoodModifier: ICodeableConcept): this {
    return this.addToArray('excludeFoodModifier', excludeFoodModifier);
  }

  /**
   * Add supplement
   * Supplement components
   */
  addSupplement(supplement: INutritionOrderSupplement): this {
    return this.addToArray('supplement', supplement);
  }

  /**
   * Add note
   * Comments
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrder instance
   */
  build(): NutritionOrder {
    return new NutritionOrder(this.data);
  }

  /**
   * Build and validate the NutritionOrder instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrder> {
    const nutritionOrder = this.build();
    await nutritionOrder.validateOrThrow();
    return nutritionOrder;
  }
}
