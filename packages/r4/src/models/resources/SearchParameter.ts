import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  ISearchParameter,
  ISearchParameterComponent,
  IUsageContext,
  PublicationStatusType,
  SearchComparatorType,
  SearchModifierCodeType,
  SearchParamTypeType,
  XPathUsageTypeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SearchParameter */
const SEARCH_PARAMETER_PROPERTIES = [
  'url',
  '_url',
  'version',
  '_version',
  'name',
  '_name',
  'derivedFrom',
  '_derivedFrom',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'code',
  '_code',
  'base',
  '_base',
  'type',
  '_type',
  'expression',
  '_expression',
  'xpath',
  '_xpath',
  'xpathUsage',
  '_xpathUsage',
  'target',
  '_target',
  'multipleOr',
  '_multipleOr',
  'multipleAnd',
  '_multipleAnd',
  'comparator',
  '_comparator',
  'modifier',
  '_modifier',
  'chain',
  '_chain',
  'component',
] as const;

/**
 * SearchParameter - A search parameter that defines a named search item that can be used to search/filter on a resource.
 *
 * @see https://hl7.org/fhir/R4/searchparameter.html
 *
 * @example
 * const searchParameter = new SearchParameter({
 *   resourceType: 'SearchParameter',
 *   // ... properties
 * });
 */
export class SearchParameter extends DomainResource implements ISearchParameter {
  readonly resourceType = 'SearchParameter' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this search parameter, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Business version of the search parameter */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this search parameter (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Original definition for the search parameter */
  derivedFrom?: string;

  /** Extension for derivedFrom */
  _derivedFrom?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the search parameter */
  description: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for search parameter (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this search parameter is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Code used in URL */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** The resource type(s) this search parameter applies to */
  base: string[];

  /** Extension for base */
  _base?: IElement;

  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: SearchParamTypeType;

  /** Extension for type */
  _type?: IElement;

  /** FHIRPath expression that extracts the values */
  expression?: string;

  /** Extension for expression */
  _expression?: IElement;

  /** XPath that extracts the values */
  xpath?: string;

  /** Extension for xpath */
  _xpath?: IElement;

  /** normal | phonetic | nearby | distance | other */
  xpathUsage?: XPathUsageTypeType;

  /** Extension for xpathUsage */
  _xpathUsage?: IElement;

  /** Types of resource (if a resource reference) */
  target?: string[];

  /** Extension for target */
  _target?: IElement;

  /** Allow multiple values per parameter (or) */
  multipleOr?: boolean;

  /** Extension for multipleOr */
  _multipleOr?: IElement;

  /** Allow multiple parameters (and) */
  multipleAnd?: boolean;

  /** Extension for multipleAnd */
  _multipleAnd?: IElement;

  /** eq | ne | gt | lt | ge | le | sa | eb | ap */
  comparator?: SearchComparatorType[];

  /** Extension for comparator */
  _comparator?: IElement;

  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType */
  modifier?: SearchModifierCodeType[];

  /** Extension for modifier */
  _modifier?: IElement;

  /** Chained names supported */
  chain?: string[];

  /** Extension for chain */
  _chain?: IElement;

  /** For Composite resources to define the parts */
  component?: ISearchParameterComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISearchParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, SEARCH_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SearchParameter from a JSON object
   */
  static fromJSON(json: ISearchParameter): SearchParameter {
    return new SearchParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SearchParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISearchParameter>): SearchParameter {
    return new SearchParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SearchParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISearchParameter) => Partial<ISearchParameter>): SearchParameter {
    const currentData = this.toJSON();
    return new SearchParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISearchParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISearchParameter {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SEARCH_PARAMETER_PROPERTIES);
    return result as ISearchParameter;
  }

  /**
   * Create a deep clone of this SearchParameter
   */
  clone(): SearchParameter {
    return new SearchParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SearchParameter
   */
  toString(): string {
    const parts: string[] = ['SearchParameter'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
