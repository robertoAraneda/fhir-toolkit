import type { IBackboneElement, ICoding, IElement, IReference } from '../../base/index.js';
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
   * Type of entity involved
   */
  type?: ICoding;

  /**
   * What role the entity played
   */
  role?: ICoding;

  /**
   * Life-cycle stage for the entity
   */
  lifecycle?: ICoding;

  /**
   * Security labels on the entity
   */
  securityLabel?: ICoding[];

  /**
   * Descriptor for entity
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Descriptive text
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

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

}
