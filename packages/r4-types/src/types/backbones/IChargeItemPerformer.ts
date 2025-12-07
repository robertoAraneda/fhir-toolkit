import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ChargeItemPerformer Interface
 * 
 * Who performed charged service
 * 
 *
 * @see https://hl7.org/fhir/R4/chargeitemperformer.html
 */
export interface IChargeItemPerformer extends IBackboneElement {
  /**
   * What type of performance was done
   */
  function?: ICodeableConcept;

  /**
   * Individual who was performing
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

}
