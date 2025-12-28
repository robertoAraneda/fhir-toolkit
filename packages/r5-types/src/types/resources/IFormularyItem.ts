import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { FormularyItemStatusType } from '../../valuesets/index.js';

/**
 * FormularyItem Interface
 * 
 * This resource describes a product or service that is available through a program and includes the conditions and constraints of availability.  All of the information in this resource is specific to the inclusion of the item in the formulary and is not inherent to the item itself.
 * 
 *
 * @see https://hl7.org/fhir/R5/formularyitem.html
 */
export interface IFormularyItem extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'FormularyItem';

  /**
   * Business identifier for this formulary item
   */
  identifier?: IIdentifier[];

  /**
   * Codes that identify this formulary item
   */
  code?: ICodeableConcept;

  /**
   * active | entered-in-error | inactive
   */
  status?: FormularyItemStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

}
