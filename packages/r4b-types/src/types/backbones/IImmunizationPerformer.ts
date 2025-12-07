import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ImmunizationPerformer Interface
 * 
 * Who performed event
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationperformer.html
 */
export interface IImmunizationPerformer extends IBackboneElement {
  /**
   * What type of performance was done
   */
  function?: ICodeableConcept;

  /**
   * Individual or organization who was performing
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
