import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAuditEventAgent } from './IAuditEventAgent.js';
import type { IAuditEventEntityDetail } from './IAuditEventEntityDetail.js';

/**
 * AuditEventEntity Interface
 * 
 * Data or objects used
 * 
 *
 * @see https://hl7.org/fhir/R4/auditevententity.html
 */
export interface IAuditEventEntity extends IBackboneElement {
  /**
   * Specific instance of resource
   */
  what?: IReference<'Resource'>;

  /**
   * What role the entity played
   */
  role?: ICodeableConcept;

  /**
   * Security labels on the entity
   */
  securityLabel?: ICodeableConcept[];

  /**
   * Query parameters
   */
  query?: string;
  /**
   * Extension for query
   */
  _query?: IElement;

  /**
   * Additional Information about the entity
   */
  detail?: IAuditEventEntityDetail[];

  /**
   * Entity is attributed to this agent
   */
  agent?: IAuditEventAgent[];

}
