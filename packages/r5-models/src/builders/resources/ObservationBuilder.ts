import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Observation } from '../../models/resources/Observation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  IIdentifier,
  IObservation,
  IObservationComponent,
  IObservationReferenceRange,
  IObservationTriggeredBy,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISampledData,
  ITiming,
  ObservationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ObservationBuilder - Fluent builder for Observation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const observation = new ObservationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ObservationBuilder extends DomainResourceBuilder<Observation, IObservation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * registered | preliminary | final | amended +
   */
  setStatus(status: ObservationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * Type of observation (code / type)
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who and/or what the observation is about
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Healthcare event during which this observation is made
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set issued
   * Date/Time this version was made available
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set dataAbsentReason
   * Why the result is missing
   */
  setDataAbsentReason(dataAbsentReason: ICodeableConcept): this {
    this.data.dataAbsentReason = dataAbsentReason;
    return this;
  }

  /**
   * Set bodySite
   * Observed body part
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  /**
   * Set bodyStructure
   * Observed body structure
   */
  setBodyStructure(bodyStructure: IReference<'BodyStructure'>): this {
    this.data.bodyStructure = bodyStructure;
    return this;
  }

  /**
   * Set method
   * How it was done
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set specimen
   * Specimen used for this observation
   */
  setSpecimen(specimen: IReference<'Specimen' | 'Group'>): this {
    this.data.specimen = specimen;
    return this;
  }

  /**
   * Set device
   * A reference to the device that generates the measurements or the device settings for the device
   */
  setDevice(device: IReference<'Device' | 'DeviceMetric'>): this {
    this.data.device = device;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instantiates choice type (instantiatesCanonical, instantiatesReference)
   * @param type - 'Canonical' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstantiates('Canonical', value)
   */
  setInstantiates<T extends 'Canonical' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `instantiates${type}` as keyof IObservation;
    const otherKeys: (keyof IObservation)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof IObservation);
      otherKeys.push('_instantiatesCanonical' as keyof IObservation);
    }
    if (type !== 'Reference') {
      otherKeys.push('instantiatesReference' as keyof IObservation);
      otherKeys.push('_instantiatesReference' as keyof IObservation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set effective choice type (effectiveDateTime, effectivePeriod, effectiveTiming, effectiveInstant)
   * @param type - 'DateTime' | 'Period' | 'Timing' | 'Instant'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEffective('DateTime', value)
   */
  setEffective<T extends 'DateTime' | 'Period' | 'Timing' | 'Instant'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `effective${type}` as keyof IObservation;
    const otherKeys: (keyof IObservation)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('effectiveDateTime' as keyof IObservation);
      otherKeys.push('_effectiveDateTime' as keyof IObservation);
    }
    if (type !== 'Period') {
      otherKeys.push('effectivePeriod' as keyof IObservation);
      otherKeys.push('_effectivePeriod' as keyof IObservation);
    }
    if (type !== 'Timing') {
      otherKeys.push('effectiveTiming' as keyof IObservation);
      otherKeys.push('_effectiveTiming' as keyof IObservation);
    }
    if (type !== 'Instant') {
      otherKeys.push('effectiveInstant' as keyof IObservation);
      otherKeys.push('_effectiveInstant' as keyof IObservation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set value choice type (valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueInteger, valueRange, valueRatio, valueSampledData, valueTime, valueDateTime, valuePeriod, valueAttachment, valueReference)
   * @param type - 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Ratio' | 'SampledData' | 'Time' | 'DateTime' | 'Period' | 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Ratio' | 'SampledData' | 'Time' | 'DateTime' | 'Period' | 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IObservation;
    const otherKeys: (keyof IObservation)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IObservation);
      otherKeys.push('_valueQuantity' as keyof IObservation);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IObservation);
      otherKeys.push('_valueCodeableConcept' as keyof IObservation);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IObservation);
      otherKeys.push('_valueString' as keyof IObservation);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IObservation);
      otherKeys.push('_valueBoolean' as keyof IObservation);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IObservation);
      otherKeys.push('_valueInteger' as keyof IObservation);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IObservation);
      otherKeys.push('_valueRange' as keyof IObservation);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IObservation);
      otherKeys.push('_valueRatio' as keyof IObservation);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof IObservation);
      otherKeys.push('_valueSampledData' as keyof IObservation);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IObservation);
      otherKeys.push('_valueTime' as keyof IObservation);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IObservation);
      otherKeys.push('_valueDateTime' as keyof IObservation);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IObservation);
      otherKeys.push('_valuePeriod' as keyof IObservation);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IObservation);
      otherKeys.push('_valueAttachment' as keyof IObservation);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IObservation);
      otherKeys.push('_valueReference' as keyof IObservation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for observation
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Fulfills plan, proposal or order
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add triggeredBy
   * Triggering observation(s)
   */
  addTriggeredBy(triggeredBy: IObservationTriggeredBy): this {
    return this.addToArray('triggeredBy', triggeredBy);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'Procedure' | 'Immunization' | 'ImagingStudy' | 'GenomicStudy'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add category
   * Classification of  type of observation
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add focus
   * What the observation is about, when it is not about the subject of record
   */
  addFocus(focu: IReference<'Resource'>): this {
    return this.addToArray('focus', focu);
  }

  /**
   * Add performer
   * Who is responsible for the observation
   */
  addPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add interpretation
   * High, low, normal, etc
   */
  addInterpretation(interpretation: ICodeableConcept): this {
    return this.addToArray('interpretation', interpretation);
  }

  /**
   * Add note
   * Comments about the observation
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add referenceRange
   * Provides guide for interpretation
   */
  addReferenceRange(referenceRange: IObservationReferenceRange): this {
    return this.addToArray('referenceRange', referenceRange);
  }

  /**
   * Add hasMember
   * Related resource that belongs to the Observation group
   */
  addHasMember(hasMember: IReference<'Observation' | 'QuestionnaireResponse' | 'MolecularSequence'>): this {
    return this.addToArray('hasMember', hasMember);
  }

  /**
   * Add derivedFrom
   * Related resource from which the observation is made
   */
  addDerivedFrom(derivedFrom: IReference<'DocumentReference' | 'ImagingStudy' | 'ImagingSelection' | 'QuestionnaireResponse' | 'Observation' | 'MolecularSequence' | 'GenomicStudy'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add component
   * Component results
   */
  addComponent(component: IObservationComponent): this {
    return this.addToArray('component', component);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Observation instance
   */
  build(): Observation {
    return new Observation(this.data);
  }

  /**
   * Build and validate the Observation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Observation> {
    const observation = this.build();
    await observation.validateOrThrow();
    return observation;
  }
}
