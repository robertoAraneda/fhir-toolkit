import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * ProcedurePerformer Interface
 * 
 * Who performed the procedure and what they did
 * 
 *
 * @see https://hl7.org/fhir/R4/procedureperformer.html
 */
export interface IProcedurePerformer extends IBackboneElement {
  /**
   * Type of performance
   */
  function?: ICodeableConcept;

  /**
   * Who performed the procedure
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device' | 'CareTeam' | 'HealthcareService'>;

  /**
   * Organization the device or practitioner was acting for
   */
  onBehalfOf?: IReference<'Organization'>;

  /**
   * When the performer performed the procedure
   */
  period?: IPeriod;

}
