import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IStructureMapGroup } from '../backbones/IStructureMapGroup.js';
import type { IStructureMapStructure } from '../backbones/IStructureMapStructure.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * StructureMap Interface
 * 
 * A Map of relationships between 2 structures that can be used to transform data.
 * 
 *
 * @see https://hl7.org/fhir/R4/structuremap.html
 */
export interface IStructureMap extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'StructureMap';

  /**
   * Canonical identifier for this structure map, represented as a URI (globally unique)
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the structure map
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the structure map
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this structure map (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this structure map (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Date last changed
   */
  date?: string;
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
   * Natural language description of the structure map
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
   * Intended jurisdiction for structure map (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this structure map is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * Structure Definition used by this map
   */
  structure?: IStructureMapStructure[];

  /**
   * Other maps used by this map (canonical URLs)
   */
  import?: string[];
  /**
   * Extension for import
   */
  _import?: IElement;

  /**
   * Named sections for reader convenience
   */
  group: IStructureMapGroup[];

}
