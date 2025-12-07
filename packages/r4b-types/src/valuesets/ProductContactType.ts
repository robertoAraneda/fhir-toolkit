/**
 * ProductContactType
 * 
 * Contact type for a Medicinal Product.
 *
 * @see http://hl7.org/fhir/ValueSet/medicinal-product-contact-type
 */

export type ProductContactTypeType = 'ProposedMAH' | 'ProcedureContactDuring' | 'ProcedureContactAfter' | 'QPPV' | 'PVEnquiries';

export enum ProductContactTypeEnum {
  /** Proposed Marketing Authorisation Holder/Person */
  Proposedmah = 'ProposedMAH',
  /** Person/Company authorised for Communication during procedure */
  Procedurecontactduring = 'ProcedureContactDuring',
  /** Person/Company authorised for Communication after procedure */
  Procedurecontactafter = 'ProcedureContactAfter',
  /** Qualified Person Responsible for Pharmacovigilance */
  Qppv = 'QPPV',
  /** Pharmacovigilance Enquiry Information */
  Pvenquiries = 'PVEnquiries',
}

export const ProductContactTypeValues = ['ProposedMAH', 'ProcedureContactDuring', 'ProcedureContactAfter', 'QPPV', 'PVEnquiries'] as const;
