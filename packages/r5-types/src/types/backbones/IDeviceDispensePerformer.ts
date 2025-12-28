import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * DeviceDispensePerformer Interface
 * 
 * Who performed event
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedispenseperformer.html
 */
export interface IDeviceDispensePerformer extends IBackboneElement {
  /**
   * Who performed the dispense and what they did
   */
  function?: ICodeableConcept;

  /**
   * Individual who was performing
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>;

}
