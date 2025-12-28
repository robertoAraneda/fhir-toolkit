import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { FHIRVersionType } from '../../valuesets/index.js';

/**
 * ImplementationGuideDefinitionResource Interface
 * 
 * Resource in the implementation guide
 * 
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitionresource.html
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
   * Human Name for the resource
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
   * Is an example/What is this an example of?
   */
  exampleBoolean?: boolean;
  /**
   * Extension for exampleBoolean
   */
  _exampleBoolean?: IElement;

  /**
   * Is an example/What is this an example of?
   */
  exampleCanonical?: string;
  /**
   * Extension for exampleCanonical
   */
  _exampleCanonical?: IElement;

  /**
   * Grouping this is part of
   */
  groupingId?: string;
  /**
   * Extension for groupingId
   */
  _groupingId?: IElement;

}
