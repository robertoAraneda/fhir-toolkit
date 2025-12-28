import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ISubstanceIngredient } from '../backbones/ISubstanceIngredient.js';
import type { FHIRSubstanceStatusType } from '../../valuesets/index.js';

/**
 * Substance Interface
 * 
 * A homogeneous material with a definite composition.
 * 
 *
 * @see https://hl7.org/fhir/R5/substance.html
 */
export interface ISubstance extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Substance';

  /**
   * Unique identifier
   */
  identifier?: IIdentifier[];

  /**
   * Is this an instance of a substance or a kind of one
   */
  instance: boolean;
  /**
   * Extension for instance
   */
  _instance?: IElement;

  /**
   * active | inactive | entered-in-error
   */
  status?: FHIRSubstanceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * What class/type of substance this is
   */
  category?: ICodeableConcept[];

  /**
   * What substance this is
   */
  code: ICodeableReference;

  /**
   * Textual description of the substance, comments
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * When no longer valid to use
   */
  expiry?: string;
  /**
   * Extension for expiry
   */
  _expiry?: IElement;

  /**
   * Amount of substance in the package
   */
  quantity?: IQuantity;

  /**
   * Composition information about the substance
   */
  ingredient?: ISubstanceIngredient[];

}
