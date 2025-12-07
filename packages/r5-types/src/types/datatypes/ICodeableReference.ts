import type { ICodeableConcept, IDataType, IReference } from '../../base/index.js';

/**
 * CodeableReference Interface
 * 
 * A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).
 * 
 *
 * @see https://hl7.org/fhir/R4/codeablereference.html
 */
export interface ICodeableReference extends IDataType {
  /**
   * Reference to a concept (by class)
   */
  concept?: ICodeableConcept;

  /**
   * Reference to a resource (by instance)
   */
  reference?: IReference;

}
