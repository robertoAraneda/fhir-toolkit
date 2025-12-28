import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { INamingSystemUniqueId } from '../backbones/INamingSystemUniqueId.js';
import type { NamingSystemTypeType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * NamingSystem Interface
 * 
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 * 
 *
 * @see https://hl7.org/fhir/R4B/namingsystem.html
 */
export interface INamingSystem extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'NamingSystem';

  /**
   * Name for this naming system (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * codesystem | identifier | root
   */
  kind: NamingSystemTypeType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

  /**
   * Date last changed
   */
  date: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Who maintains system namespace?
   */
  responsible?: string;
  /**
   * Extension for responsible
   */
  _responsible?: IElement;

  /**
   * e.g. driver,  provider,  patient, bank etc.
   */
  type?: ICodeableConcept;

  /**
   * Natural language description of the naming system
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for naming system (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * How/where is it used
   */
  usage?: string;
  /**
   * Extension for usage
   */
  _usage?: IElement;

  /**
   * Unique identifiers used for system
   */
  uniqueId: INamingSystemUniqueId[];

}
