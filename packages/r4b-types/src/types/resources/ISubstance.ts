import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISubstanceIngredient } from '../backbones/ISubstanceIngredient.js';
import type { ISubstanceInstance } from '../backbones/ISubstanceInstance.js';
import type { FHIRSubstanceStatusType } from '../../valuesets/index.js';

/**
 * Substance Interface
 * 
 * A homogeneous material with a definite composition.
 * 
 *
 * @see https://hl7.org/fhir/R4/substance.html
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
  code: ICodeableConcept;

  /**
   * Textual description of the substance, comments
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * If this describes a specific package/container of the substance
   */
  instance?: ISubstanceInstance[];

  /**
   * Composition information about the substance
   */
  ingredient?: ISubstanceIngredient[];

}
