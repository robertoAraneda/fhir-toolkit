import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SpecimenCollection Interface
 * 
 * Collection details
 * 
 *
 * @see https://hl7.org/fhir/R4B/specimencollection.html
 */
export interface ISpecimenCollection extends IBackboneElement {
  /**
   * Who collected the specimen
   */
  collector?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Collection time
   */
  collectedDateTime?: string;
  /**
   * Extension for collectedDateTime
   */
  _collectedDateTime?: IElement;

  /**
   * Collection time
   */
  collectedPeriod?: IPeriod;

  /**
   * How long it took to collect specimen
   */
  duration?: IDuration;

  /**
   * The quantity of specimen collected
   */
  quantity?: IQuantity;

  /**
   * Technique used to perform collection
   */
  method?: ICodeableConcept;

  /**
   * Anatomical collection site
   */
  bodySite?: ICodeableConcept;

  /**
   * Whether or how long patient abstained from food and/or drink
   */
  fastingStatusCodeableConcept?: ICodeableConcept;

  /**
   * Whether or how long patient abstained from food and/or drink
   */
  fastingStatusDuration?: IDuration;

}
