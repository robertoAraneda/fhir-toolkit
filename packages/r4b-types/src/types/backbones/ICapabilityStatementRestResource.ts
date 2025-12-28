import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICapabilityStatementRestResourceInteraction } from './ICapabilityStatementRestResourceInteraction.js';
import type { ICapabilityStatementRestResourceOperation } from './ICapabilityStatementRestResourceOperation.js';
import type { ICapabilityStatementRestResourceSearchParam } from './ICapabilityStatementRestResourceSearchParam.js';
import type { ConditionalDeleteStatusType, ConditionalReadStatusType, ReferenceHandlingPolicyType, ResourceVersionPolicyType } from '../../valuesets/index.js';

/**
 * CapabilityStatementRestResource Interface
 * 
 * Resource served on the REST interface
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementrestresource.html
 */
export interface ICapabilityStatementRestResource extends IBackboneElement {
  /**
   * A resource type that is supported
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Base System profile for all uses of resource
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Profiles for use cases supported
   */
  supportedProfile?: string[];
  /**
   * Extension for supportedProfile
   */
  _supportedProfile?: IElement;

  /**
   * Additional information about the use of the resource type
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * What operations are supported?
   */
  interaction?: ICapabilityStatementRestResourceInteraction[];

  /**
   * no-version | versioned | versioned-update
   */
  versioning?: ResourceVersionPolicyType;
  /**
   * Extension for versioning
   */
  _versioning?: IElement;

  /**
   * Whether vRead can return past versions
   */
  readHistory?: boolean;
  /**
   * Extension for readHistory
   */
  _readHistory?: IElement;

  /**
   * If update can commit to a new identity
   */
  updateCreate?: boolean;
  /**
   * Extension for updateCreate
   */
  _updateCreate?: IElement;

  /**
   * If allows/uses conditional create
   */
  conditionalCreate?: boolean;
  /**
   * Extension for conditionalCreate
   */
  _conditionalCreate?: IElement;

  /**
   * not-supported | modified-since | not-match | full-support
   */
  conditionalRead?: ConditionalReadStatusType;
  /**
   * Extension for conditionalRead
   */
  _conditionalRead?: IElement;

  /**
   * If allows/uses conditional update
   */
  conditionalUpdate?: boolean;
  /**
   * Extension for conditionalUpdate
   */
  _conditionalUpdate?: IElement;

  /**
   * not-supported | single | multiple - how conditional delete is supported
   */
  conditionalDelete?: ConditionalDeleteStatusType;
  /**
   * Extension for conditionalDelete
   */
  _conditionalDelete?: IElement;

  /**
   * literal | logical | resolves | enforced | local
   */
  referencePolicy?: ReferenceHandlingPolicyType[];
  /**
   * Extension for referencePolicy
   */
  _referencePolicy?: IElement;

  /**
   * _include values supported by the server
   */
  searchInclude?: string[];
  /**
   * Extension for searchInclude
   */
  _searchInclude?: IElement;

  /**
   * _revinclude values supported by the server
   */
  searchRevInclude?: string[];
  /**
   * Extension for searchRevInclude
   */
  _searchRevInclude?: IElement;

  /**
   * Search parameters supported by implementation
   */
  searchParam?: ICapabilityStatementRestResourceSearchParam[];

  /**
   * Definition of a resource operation
   */
  operation?: ICapabilityStatementRestResourceOperation[];

}
