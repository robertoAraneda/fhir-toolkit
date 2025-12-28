import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IProvenanceAgent } from './IProvenanceAgent.js';
import type { ProvenanceEntityRoleType } from '../../valuesets/index.js';

/**
 * ProvenanceEntity Interface
 * 
 * An entity used in this activity
 * 
 *
 * @see https://hl7.org/fhir/R4B/provenanceentity.html
 */
export interface IProvenanceEntity extends IBackboneElement {
  /**
   * derivation | revision | quotation | source | removal
   */
  role: ProvenanceEntityRoleType;
  /**
   * Extension for role
   */
  _role?: IElement;

  /**
   * Identity of entity
   */
  what: IReference<'Resource'>;

  /**
   * Entity is attributed to this agent
   */
  agent?: IProvenanceAgent[];

}
