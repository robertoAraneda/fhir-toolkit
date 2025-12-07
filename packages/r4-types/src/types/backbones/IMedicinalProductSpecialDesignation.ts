import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * MedicinalProductSpecialDesignation Interface
 * 
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductspecialdesignation.html
 */
export interface IMedicinalProductSpecialDesignation extends IBackboneElement {
  /**
   * Identifier for the designation, or procedure number
   */
  identifier?: IIdentifier[];

  /**
   * The type of special designation, e.g. orphan drug, minor use
   */
  type?: ICodeableConcept;

  /**
   * The intended use of the product, e.g. prevention, treatment
   */
  intendedUse?: ICodeableConcept;

  /**
   * Condition for which the medicinal use applies
   */
  indicationCodeableConcept?: ICodeableConcept;

  /**
   * Condition for which the medicinal use applies
   */
  indicationReference?: IReference;

  /**
   * For example granted, pending, expired or withdrawn
   */
  status?: ICodeableConcept;

  /**
   * Date when the designation was granted
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Animal species for which this applies
   */
  species?: ICodeableConcept;

}
