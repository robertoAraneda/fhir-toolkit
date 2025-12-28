import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ISearchParameterComponent } from '../backbones/ISearchParameterComponent.js';
import type { PublicationStatusType, SearchComparatorType, SearchModifierCodeType, SearchParamTypeType, XPathUsageTypeType } from '../../valuesets/index.js';

/**
 * SearchParameter Interface
 * 
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 * 
 *
 * @see https://hl7.org/fhir/R4B/searchparameter.html
 */
export interface ISearchParameter extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SearchParameter';

  /**
   * Canonical identifier for this search parameter, represented as a URI (globally unique)
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business version of the search parameter
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this search parameter (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Original definition for the search parameter
   */
  derivedFrom?: string;
  /**
   * Extension for derivedFrom
   */
  _derivedFrom?: IElement;

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
   * Natural language description of the search parameter
   */
  description: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for search parameter (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this search parameter is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Code used in URL
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * The resource type(s) this search parameter applies to
   */
  base: string[];
  /**
   * Extension for base
   */
  _base?: IElement;

  /**
   * number | date | string | token | reference | composite | quantity | uri | special
   */
  type: SearchParamTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * FHIRPath expression that extracts the values
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

  /**
   * XPath that extracts the values
   */
  xpath?: string;
  /**
   * Extension for xpath
   */
  _xpath?: IElement;

  /**
   * normal | phonetic | nearby | distance | other
   */
  xpathUsage?: XPathUsageTypeType;
  /**
   * Extension for xpathUsage
   */
  _xpathUsage?: IElement;

  /**
   * Types of resource (if a resource reference)
   */
  target?: string[];
  /**
   * Extension for target
   */
  _target?: IElement;

  /**
   * Allow multiple values per parameter (or)
   */
  multipleOr?: boolean;
  /**
   * Extension for multipleOr
   */
  _multipleOr?: IElement;

  /**
   * Allow multiple parameters (and)
   */
  multipleAnd?: boolean;
  /**
   * Extension for multipleAnd
   */
  _multipleAnd?: IElement;

  /**
   * eq | ne | gt | lt | ge | le | sa | eb | ap
   */
  comparator?: SearchComparatorType[];
  /**
   * Extension for comparator
   */
  _comparator?: IElement;

  /**
   * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType
   */
  modifier?: SearchModifierCodeType[];
  /**
   * Extension for modifier
   */
  _modifier?: IElement;

  /**
   * Chained names supported
   */
  chain?: string[];
  /**
   * Extension for chain
   */
  _chain?: IElement;

  /**
   * For Composite resources to define the parts
   */
  component?: ISearchParameterComponent[];

}
