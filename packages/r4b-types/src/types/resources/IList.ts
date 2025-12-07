import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IListEntry } from '../backbones/IListEntry.js';
import type { ListModeType, ListStatusType } from '../../valuesets/index.js';

/**
 * List Interface
 * 
 * A list is a curated collection of resources.
 * 
 *
 * @see https://hl7.org/fhir/R4/list.html
 */
export interface IList extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'List';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * current | retired | entered-in-error
   */
  status: ListStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * working | snapshot | changes
   */
  mode: ListModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Descriptive name for the list
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * What the purpose of this list is
   */
  code?: ICodeableConcept;

  /**
   * If all resources have the same subject
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location'>;

  /**
   * Context in which list created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the list was prepared
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who and/or what defined the list contents (aka Author)
   */
  source?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'Device'>;

  /**
   * What order the list has
   */
  orderedBy?: ICodeableConcept;

  /**
   * Comments about the list
   */
  note?: IAnnotation[];

  /**
   * Entries in the list
   */
  entry?: IListEntry[];

  /**
   * Why list is empty
   */
  emptyReason?: ICodeableConcept;

}
