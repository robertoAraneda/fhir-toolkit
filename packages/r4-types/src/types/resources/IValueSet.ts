import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IValueSetCompose } from '../backbones/IValueSetCompose.js';
import type { IValueSetExpansion } from '../backbones/IValueSetExpansion.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ValueSet Interface
 * 
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
 * 
 *
 * @see https://hl7.org/fhir/R4/valueset.html
 */
export interface IValueSet extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ValueSet';

  /**
   * Canonical identifier for this value set, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the value set (business identifier)
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the value set
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this value set (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this value set (human friendly)
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
   * Natural language description of the value set
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
   * Intended jurisdiction for value set (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Indicates whether or not any change to the content logical definition may occur
   */
  immutable?: boolean;
  /**
   * Extension for immutable
   */
  _immutable?: IElement;

  /**
   * Why this value set is defined
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
   * Content logical definition of the value set (CLD)
   */
  compose?: IValueSetCompose;

  /**
   * Used when the value set is "expanded"
   */
  expansion?: IValueSetExpansion;

}
