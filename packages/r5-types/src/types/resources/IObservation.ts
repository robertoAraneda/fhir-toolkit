import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { ISampledData } from '../datatypes/ISampledData.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IObservationComponent } from '../backbones/IObservationComponent.js';
import type { IObservationReferenceRange } from '../backbones/IObservationReferenceRange.js';
import type { IObservationTriggeredBy } from '../backbones/IObservationTriggeredBy.js';
import type { ObservationStatusType } from '../../valuesets/index.js';

/**
 * Observation Interface
 * 
 * Measurements and simple assertions made about a patient, device or other subject.
 * 
 *
 * @see https://hl7.org/fhir/R5/observation.html
 */
export interface IObservation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Observation';

  /**
   * Business Identifier for observation
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR ObservationDefinition
   */
  instantiatesCanonical?: string;
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates FHIR ObservationDefinition
   */
  instantiatesReference?: IReference;

  /**
   * Fulfills plan, proposal or order
   */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest'>[];

  /**
   * Triggering observation(s)
   */
  triggeredBy?: IObservationTriggeredBy[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'Procedure' | 'Immunization' | 'ImagingStudy' | 'GenomicStudy'>[];

  /**
   * registered | preliminary | final | amended +
   */
  status: ObservationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Classification of  type of observation
   */
  category?: ICodeableConcept[];

  /**
   * Type of observation (code / type)
   */
  code: ICodeableConcept;

  /**
   * Who and/or what the observation is about
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /**
   * What the observation is about, when it is not about the subject of record
   */
  focus?: IReference<'Resource'>[];

  /**
   * Healthcare event during which this observation is made
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Clinically relevant time/time-period for observation
   */
  effectiveDateTime?: string;
  /**
   * Extension for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * Clinically relevant time/time-period for observation
   */
  effectivePeriod?: IPeriod;

  /**
   * Clinically relevant time/time-period for observation
   */
  effectiveTiming?: ITiming;

  /**
   * Clinically relevant time/time-period for observation
   */
  effectiveInstant?: string;
  /**
   * Extension for effectiveInstant
   */
  _effectiveInstant?: IElement;

  /**
   * Date/Time this version was made available
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * Who is responsible for the observation
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>[];

  /**
   * Actual result
   */
  valueQuantity?: IQuantity;

  /**
   * Actual result
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Actual result
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Actual result
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Actual result
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Actual result
   */
  valueRange?: IRange;

  /**
   * Actual result
   */
  valueRatio?: IRatio;

  /**
   * Actual result
   */
  valueSampledData?: ISampledData;

  /**
   * Actual result
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Actual result
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Actual result
   */
  valuePeriod?: IPeriod;

  /**
   * Actual result
   */
  valueAttachment?: IAttachment;

  /**
   * Actual result
   */
  valueReference?: IReference;

  /**
   * Why the result is missing
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * High, low, normal, etc
   */
  interpretation?: ICodeableConcept[];

  /**
   * Comments about the observation
   */
  note?: IAnnotation[];

  /**
   * Observed body part
   */
  bodySite?: ICodeableConcept;

  /**
   * Observed body structure
   */
  bodyStructure?: IReference<'BodyStructure'>;

  /**
   * How it was done
   */
  method?: ICodeableConcept;

  /**
   * Specimen used for this observation
   */
  specimen?: IReference<'Specimen' | 'Group'>;

  /**
   * A reference to the device that generates the measurements or the device settings for the device
   */
  device?: IReference<'Device' | 'DeviceMetric'>;

  /**
   * Provides guide for interpretation
   */
  referenceRange?: IObservationReferenceRange[];

  /**
   * Related resource that belongs to the Observation group
   */
  hasMember?: IReference<'Observation' | 'QuestionnaireResponse' | 'MolecularSequence'>[];

  /**
   * Related resource from which the observation is made
   */
  derivedFrom?: IReference<'DocumentReference' | 'ImagingStudy' | 'ImagingSelection' | 'QuestionnaireResponse' | 'Observation' | 'MolecularSequence' | 'GenomicStudy'>[];

  /**
   * Component results
   */
  component?: IObservationComponent[];

}
