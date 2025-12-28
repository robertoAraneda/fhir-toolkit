import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * EncounterHistoryLocation Interface
 * 
 * Location of the patient at this point in the encounter
 * 
 *
 * @see https://hl7.org/fhir/R5/encounterhistorylocation.html
 */
export interface IEncounterHistoryLocation extends IBackboneElement {
  /**
   * Location the encounter takes place
   */
  location: IReference<'Location'>;

  /**
   * The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.)
   */
  form?: ICodeableConcept;

}
