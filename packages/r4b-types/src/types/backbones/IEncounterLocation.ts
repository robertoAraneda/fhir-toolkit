import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { EncounterLocationStatusType } from '../../valuesets/index.js';

/**
 * EncounterLocation Interface
 * 
 * List of locations where the patient has been
 * 
 *
 * @see https://hl7.org/fhir/R4B/encounterlocation.html
 */
export interface IEncounterLocation extends IBackboneElement {
  /**
   * Location the encounter takes place
   */
  location: IReference<'Location'>;

  /**
   * planned | active | reserved | completed
   */
  status?: EncounterLocationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The physical type of the location (usually the level in the location hierachy - bed room ward etc.)
   */
  physicalType?: ICodeableConcept;

  /**
   * Time period during which the patient was present at the location
   */
  period?: IPeriod;

}
