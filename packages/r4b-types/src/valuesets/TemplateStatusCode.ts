/**
 * TemplateStatusCode
 * 
 * The status indicates the level of maturity of the design and may be used to manage the    use of the design.
 *
 * @see http://hl7.org/fhir/ValueSet/template-status-code
 */

export type TemplateStatusCodeType = 'draft' | 'pending' | 'active' | 'review' | 'cancelled' | 'rejected' | 'retired' | 'terminated';

export enum TemplateStatusCodeEnum {
  /** Draft */
  Draft = 'draft',
  /** Under pre-publication review */
  Pending = 'pending',
  /** Active */
  Active = 'active',
  /** In Review */
  Review = 'review',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Rejected */
  Rejected = 'rejected',
  /** Retired */
  Retired = 'retired',
  /** Terminated */
  Terminated = 'terminated',
}

export const TemplateStatusCodeValues = ['draft', 'pending', 'active', 'review', 'cancelled', 'rejected', 'retired', 'terminated'] as const;
