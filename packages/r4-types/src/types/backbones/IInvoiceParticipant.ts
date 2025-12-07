import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * InvoiceParticipant Interface
 * 
 * Participant in creation of this Invoice
 * 
 *
 * @see https://hl7.org/fhir/R4/invoiceparticipant.html
 */
export interface IInvoiceParticipant extends IBackboneElement {
  /**
   * Type of involvement in creation of this Invoice
   */
  role?: ICodeableConcept;

  /**
   * Individual who was involved
   */
  actor: IReference<'Practitioner' | 'Organization' | 'Patient' | 'PractitionerRole' | 'Device' | 'RelatedPerson'>;

}
