import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AuditEventSource Interface
 * 
 * Audit Event Reporter
 * 
 *
 * @see https://hl7.org/fhir/R5/auditeventsource.html
 */
export interface IAuditEventSource extends IBackboneElement {
  /**
   * Logical source location within the enterprise
   */
  site?: IReference<'Location'>;

  /**
   * The identity of source detecting the event
   */
  observer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * The type of source where event originated
   */
  type?: ICodeableConcept[];

}
