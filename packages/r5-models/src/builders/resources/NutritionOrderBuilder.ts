import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { NutritionOrder } from '../../models/resources/NutritionOrder.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  INutritionOrder,
  INutritionOrderEnteralFormula,
  INutritionOrderOralDiet,
  INutritionOrderSupplement,
  IReference,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r5-types';

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
 *   .setGroupIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class NutritionOrderBuilder extends DomainResourceBuilder<NutritionOrder, INutritionOrder> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set groupIdentifier
   * Composite Request ID
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
    return this;
  }

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
   * Set priority
   * routine | urgent | asap | stat
   */
  setPriority(priority: RequestPriorityType): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set subject
   * Who requires the diet, formula or nutritional supplement
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
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
   * Set outsideFoodAllowed
   * Capture when a food item is brought in by the patient and/or family
   */
  setOutsideFoodAllowed(outsideFoodAllowed: boolean): this {
    this.data.outsideFoodAllowed = outsideFoodAllowed;
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
   * Add instantiates
   * Instantiates protocol or definition
   */
  addInstantiates(instantiat: string): this {
    return this.addToArray('instantiates', instantiat);
  }

  /**
   * Add basedOn
   * What this order fulfills
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'NutritionOrder' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add supportingInformation
   * Information to support fulfilling of the nutrition order
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add performer
   * Who is desired to perform the administration of what is being ordered
   */
  addPerformer(performer: ICodeableReference): this {
    return this.addToArray('performer', performer);
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
