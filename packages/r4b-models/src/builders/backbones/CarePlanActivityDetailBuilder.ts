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
 *   .addGoal({ ... })
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
    const key = `instantiates${type}` as keyof ICarePlanActivityDetail;
    const otherKeys: (keyof ICarePlanActivityDetail)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof ICarePlanActivityDetail);
      otherKeys.push('_instantiatesCanonical' as keyof ICarePlanActivityDetail);
    }
    if (type !== 'Uri') {
      otherKeys.push('instantiatesUri' as keyof ICarePlanActivityDetail);
      otherKeys.push('_instantiatesUri' as keyof ICarePlanActivityDetail);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set reason choice type
   * @param type - 'Code' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReason('Code', value)
   */
  setReason<T extends 'Code' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `reason${type}` as keyof ICarePlanActivityDetail;
    const otherKeys: (keyof ICarePlanActivityDetail)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof ICarePlanActivityDetail);
      otherKeys.push('_reasonCode' as keyof ICarePlanActivityDetail);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof ICarePlanActivityDetail);
      otherKeys.push('_reasonReference' as keyof ICarePlanActivityDetail);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set scheduled choice type
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
   * Set product choice type
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
