import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CarePlanActivityDetail } from '../../models/backbones/CarePlanActivityDetail.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  CarePlanActivityKindType,
  CarePlanActivityStatusType,
  ICarePlanActivityDetail,
  ICodeableConcept,
  IPeriod,
  IQuantity,
  IReference,
  ITiming,
} from '@fhir-toolkit/r4b-types';

/**
 * CarePlanActivityDetailBuilder - Fluent builder for CarePlanActivityDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const carePlanActivityDetail = new CarePlanActivityDetailBuilder()
 *   .setKind(value)
 *   .addInstantiatesCanonical({ ... })
 *   .build();
 */
export class CarePlanActivityDetailBuilder extends BackboneElementBuilder<CarePlanActivityDetail, ICarePlanActivityDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set kind
   * Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription
   */
  setKind(kind: CarePlanActivityKindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set code
   * Detail type of activity
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error
   */
  setStatus(status: CarePlanActivityStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Reason for current status
   */
  setStatusReason(statusReason: ICodeableConcept): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set doNotPerform
   * If true, activity is prohibiting action
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set location
   * Where it should happen
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set dailyAmount
   * How to consume/day?
   */
  setDailyAmount(dailyAmount: IQuantity): this {
    this.data.dailyAmount = dailyAmount;
    return this;
  }

  /**
   * Set quantity
   * How much to administer/supply/consume
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set description
   * Extra info describing activity to perform
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set scheduled choice type (scheduledTiming, scheduledPeriod, scheduledString)
   * @param type - 'Timing' | 'Period' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setScheduled('Timing', value)
   */
  setScheduled<T extends 'Timing' | 'Period' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `scheduled${type}` as keyof ICarePlanActivityDetail;
    const otherKeys: (keyof ICarePlanActivityDetail)[] = [];
    if (type !== 'Timing') {
      otherKeys.push('scheduledTiming' as keyof ICarePlanActivityDetail);
      otherKeys.push('_scheduledTiming' as keyof ICarePlanActivityDetail);
    }
    if (type !== 'Period') {
      otherKeys.push('scheduledPeriod' as keyof ICarePlanActivityDetail);
      otherKeys.push('_scheduledPeriod' as keyof ICarePlanActivityDetail);
    }
    if (type !== 'String') {
      otherKeys.push('scheduledString' as keyof ICarePlanActivityDetail);
      otherKeys.push('_scheduledString' as keyof ICarePlanActivityDetail);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set product choice type (productCodeableConcept, productReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setProduct('CodeableConcept', value)
   */
  setProduct<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `product${type}` as keyof ICarePlanActivityDetail;
    const otherKeys: (keyof ICarePlanActivityDetail)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('productCodeableConcept' as keyof ICarePlanActivityDetail);
      otherKeys.push('_productCodeableConcept' as keyof ICarePlanActivityDetail);
    }
    if (type !== 'Reference') {
      otherKeys.push('productReference' as keyof ICarePlanActivityDetail);
      otherKeys.push('_productReference' as keyof ICarePlanActivityDetail);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

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
   * Add reasonCode
   * Why activity should be done or why activity was prohibited
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * Why activity is needed
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>): this {
    return this.addToArray('reasonReference', reasonReference);
  }

  /**
   * Add goal
   * Goals this activity relates to
   */
  addGoal(goal: IReference<'Goal'>): this {
    return this.addToArray('goal', goal);
  }

  /**
   * Add performer
   * Who will be responsible?
   */
  addPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'RelatedPerson' | 'Patient' | 'CareTeam' | 'HealthcareService' | 'Device'>): this {
    return this.addToArray('performer', performer);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CarePlanActivityDetail instance
   */
  build(): CarePlanActivityDetail {
    return new CarePlanActivityDetail(this.data);
  }

  /**
   * Build and validate the CarePlanActivityDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CarePlanActivityDetail> {
    const carePlanActivityDetail = this.build();
    await carePlanActivityDetail.validateOrThrow();
    return carePlanActivityDetail;
  }
}
