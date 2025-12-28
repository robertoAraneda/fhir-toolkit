import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConditionalDeleteStatusType,
  ConditionalReadStatusType,
  ICapabilityStatementRestResource,
  ICapabilityStatementRestResourceInteraction,
  ICapabilityStatementRestResourceOperation,
  ICapabilityStatementRestResourceSearchParam,
  IElement,
  ReferenceHandlingPolicyType,
  ResourceVersionPolicyType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CapabilityStatementRestResource */
const CAPABILITY_STATEMENT_REST_RESOURCE_PROPERTIES = [
  'type',
  '_type',
  'profile',
  '_profile',
  'supportedProfile',
  '_supportedProfile',
  'documentation',
  '_documentation',
  'interaction',
  'versioning',
  '_versioning',
  'readHistory',
  '_readHistory',
  'updateCreate',
  '_updateCreate',
  'conditionalCreate',
  '_conditionalCreate',
  'conditionalRead',
  '_conditionalRead',
  'conditionalUpdate',
  '_conditionalUpdate',
  'conditionalPatch',
  '_conditionalPatch',
  'conditionalDelete',
  '_conditionalDelete',
  'referencePolicy',
  '_referencePolicy',
  'searchInclude',
  '_searchInclude',
  'searchRevInclude',
  '_searchRevInclude',
  'searchParam',
  'operation',
] as const;

/**
 * CapabilityStatementRestResource - Resource served on the REST interface
 *
 * @see https://hl7.org/fhir/R5/capabilitystatementrestresource.html
 *
 * @example
 * const capabilityStatementRestResource = new CapabilityStatementRestResource({
 *   // ... properties
 * });
 */
export class CapabilityStatementRestResource extends BackboneElement implements ICapabilityStatementRestResource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A resource type that is supported */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** System-wide profile */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  /** Use-case specific profiles */
  supportedProfile?: string[];

  /** Extension for supportedProfile */
  _supportedProfile?: IElement;

  /** Additional information about the use of the resource type */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** What operations are supported? */
  interaction?: ICapabilityStatementRestResourceInteraction[];

  /** no-version | versioned | versioned-update */
  versioning?: ResourceVersionPolicyType;

  /** Extension for versioning */
  _versioning?: IElement;

  /** Whether vRead can return past versions */
  readHistory?: boolean;

  /** Extension for readHistory */
  _readHistory?: IElement;

  /** If update can commit to a new identity */
  updateCreate?: boolean;

  /** Extension for updateCreate */
  _updateCreate?: IElement;

  /** If allows/uses conditional create */
  conditionalCreate?: boolean;

  /** Extension for conditionalCreate */
  _conditionalCreate?: IElement;

  /** not-supported | modified-since | not-match | full-support */
  conditionalRead?: ConditionalReadStatusType;

  /** Extension for conditionalRead */
  _conditionalRead?: IElement;

  /** If allows/uses conditional update */
  conditionalUpdate?: boolean;

  /** Extension for conditionalUpdate */
  _conditionalUpdate?: IElement;

  /** If allows/uses conditional patch */
  conditionalPatch?: boolean;

  /** Extension for conditionalPatch */
  _conditionalPatch?: IElement;

  /** not-supported | single | multiple - how conditional delete is supported */
  conditionalDelete?: ConditionalDeleteStatusType;

  /** Extension for conditionalDelete */
  _conditionalDelete?: IElement;

  /** literal | logical | resolves | enforced | local */
  referencePolicy?: ReferenceHandlingPolicyType[];

  /** Extension for referencePolicy */
  _referencePolicy?: IElement;

  /** _include values supported by the server */
  searchInclude?: string[];

  /** Extension for searchInclude */
  _searchInclude?: IElement;

  /** _revinclude values supported by the server */
  searchRevInclude?: string[];

  /** Extension for searchRevInclude */
  _searchRevInclude?: IElement;

  /** Search parameters supported by implementation */
  searchParam?: ICapabilityStatementRestResourceSearchParam[];

  /** Definition of a resource operation */
  operation?: ICapabilityStatementRestResourceOperation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRestResource>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_RESOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRestResource from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRestResource): CapabilityStatementRestResource {
    return new CapabilityStatementRestResource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRestResource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRestResource>): CapabilityStatementRestResource {
    return new CapabilityStatementRestResource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRestResource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRestResource) => Partial<ICapabilityStatementRestResource>): CapabilityStatementRestResource {
    const currentData = this.toJSON();
    return new CapabilityStatementRestResource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRestResource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRestResource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_RESOURCE_PROPERTIES);
    return result as ICapabilityStatementRestResource;
  }

  /**
   * Create a deep clone of this CapabilityStatementRestResource
   */
  clone(): CapabilityStatementRestResource {
    return new CapabilityStatementRestResource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRestResource
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRestResource'];
    return parts.join(', ');
  }
}
