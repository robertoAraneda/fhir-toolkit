import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { FHIRVersionType } from '../../valuesets/index.js';

/**
 * ImplementationGuideDefinitionResource Interface
 * 
 * Resource in the implementation guide
 * 
 *
 * @see https://hl7.org/fhir/R5/implementationguidedefinitionresource.html
 */
export interface IImplementationGuideDefinitionResource extends IBackboneElement {
  /**
   * Location of the resource
   */
  reference: IReference<'Resource'>;

  /**
   * Versions this applies to (if different to IG)
   */
  fhirVersion?: FHIRVersionType[];
  /**
   * Extension for fhirVersion
   */
  _fhirVersion?: IElement;

  /**
   * Human readable name for the resource
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Reason why included in guide
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Is this an example
   */
  isExample?: boolean;
  /**
   * Extension for isExample
   */
  _isExample?: IElement;

  /**
   * Profile(s) this is an example of
   */
  profile?: string[];
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Grouping this is part of
   */
  groupingId?: string;
  /**
   * Extension for groupingId
   */
  _groupingId?: IElement;

}
