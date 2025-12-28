import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * SpecimenDefinitionTypeTestedContainerAdditive Interface
 * 
 * Additive associated with container
 * 
 *
 * @see https://hl7.org/fhir/R4B/specimendefinitiontypetestedcontaineradditive.html
 */
export interface ISpecimenDefinitionTypeTestedContainerAdditive extends IBackboneElement {
  /**
   * Additive associated with container
   */
  additiveCodeableConcept?: ICodeableConcept;

  /**
   * Additive associated with container
   */
  additiveReference?: IReference;

}
