import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';

/**
 * AuditEventSource Interface
 * 
 * Audit Event Reporter
 * 
 *
 * @see https://hl7.org/fhir/R4B/auditeventsource.html
 */
export interface IAuditEventSource extends IBackboneElement {
  /**
   * Logical source location within the enterprise
   */
  site?: string;
  /**
   * Extension for site
   */
  _site?: IElement;

  /**
   * The identity of source detecting the event
   */
  observer: IReference<'PractitionerRole' | 'Practitioner' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>;

  /**
   * The type of source where event originated
   */
  type?: ICoding[];

}
