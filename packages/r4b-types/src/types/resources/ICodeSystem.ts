import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ICodeSystemConcept } from '../backbones/ICodeSystemConcept.js';
import type { ICodeSystemFilter } from '../backbones/ICodeSystemFilter.js';
import type { ICodeSystemProperty } from '../backbones/ICodeSystemProperty.js';
import type { CodeSystemContentModeType, CodeSystemHierarchyMeaningType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * CodeSystem Interface
 * 
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 * 
 *
 * @see https://hl7.org/fhir/R4B/codesystem.html
 */
export interface ICodeSystem extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CodeSystem';

  /**
   * Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the code system (business identifier)
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the code system (Coding.version)
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this code system (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this code system (human friendly)
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
   * Natural language description of the code system
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
   * Intended jurisdiction for code system (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this code system is defined
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
   * If code comparison is case sensitive
   */
  caseSensitive?: boolean;
  /**
   * Extension for caseSensitive
   */
  _caseSensitive?: IElement;

  /**
   * Canonical reference to the value set with entire code system
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * grouped-by | is-a | part-of | classified-with
   */
  hierarchyMeaning?: CodeSystemHierarchyMeaningType;
  /**
   * Extension for hierarchyMeaning
   */
  _hierarchyMeaning?: IElement;

  /**
   * If code system defines a compositional grammar
   */
  compositional?: boolean;
  /**
   * Extension for compositional
   */
  _compositional?: IElement;

  /**
   * If definitions are not stable
   */
  versionNeeded?: boolean;
  /**
   * Extension for versionNeeded
   */
  _versionNeeded?: IElement;

  /**
   * not-present | example | fragment | complete | supplement
   */
  content: CodeSystemContentModeType;
  /**
   * Extension for content
   */
  _content?: IElement;

  /**
   * Canonical URL of Code System this adds designations and properties to
   */
  supplements?: string;
  /**
   * Extension for supplements
   */
  _supplements?: IElement;

  /**
   * Total concepts in the code system
   */
  count?: number;
  /**
   * Extension for count
   */
  _count?: IElement;

  /**
   * Filter that can be used in a value set
   */
  filter?: ICodeSystemFilter[];

  /**
   * Additional information supplied about each concept
   */
  property?: ICodeSystemProperty[];

  /**
   * Concepts in the code system
   */
  concept?: ICodeSystemConcept[];

}
