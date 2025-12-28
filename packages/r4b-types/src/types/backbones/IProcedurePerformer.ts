import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ProcedurePerformer Interface
 * 
 * The people who performed the procedure
 * 
 *
 * @see https://hl7.org/fhir/R4B/procedureperformer.html
 */
export interface IProcedurePerformer extends IBackboneElement {
  /**
   * Type of performance
   */
  function?: ICodeableConcept;

  /**
   * The reference to the practitioner
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /**
   * Organization the device or practitioner was acting for
   */
  onBehalfOf?: IReference<'Organization'>;

}
