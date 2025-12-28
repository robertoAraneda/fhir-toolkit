import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMarketingStatus,
  IPackagedProductDefinition,
  IPackagedProductDefinitionLegalStatusOfSupply,
  IPackagedProductDefinitionPackage,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PackagedProductDefinition */
const PACKAGED_PRODUCT_DEFINITION_PROPERTIES = [
  'identifier',
  'name',
  '_name',
  'type',
  'packageFor',
  'status',
  'statusDate',
  '_statusDate',
  'containedItemQuantity',
  'description',
  '_description',
  'legalStatusOfSupply',
  'marketingStatus',
  'characteristic',
  'copackagedIndicator',
  '_copackagedIndicator',
  'manufacturer',
  'package',
] as const;

/**
 * PackagedProductDefinition - A medically related item or items, in a container or package.
 *
 * @see https://hl7.org/fhir/R4B/packagedproductdefinition.html
 *
 * @example
 * const packagedProductDefinition = new PackagedProductDefinition({
 *   // ... properties
 * });
 */
export class PackagedProductDefinition extends DomainResource implements IPackagedProductDefinition {
  readonly resourceType = 'PackagedProductDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** A unique identifier for this package as whole */
  identifier?: IIdentifier[];

  /** A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** A high level category e.g. medicinal product, raw material, shipping container etc */
  type?: ICodeableConcept;

  /** The product that this is a pack for */
  packageFor?: IReference<'MedicinalProductDefinition'>[];

  /** The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status */
  status?: ICodeableConcept;

  /** The date at which the given status became applicable */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size */
  containedItemQuantity?: IQuantity[];

  /** Textual description. Note that this is not the name of the package or product */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The legal status of supply of the packaged item as classified by the regulator */
  legalStatusOfSupply?: IPackagedProductDefinitionLegalStatusOfSupply[];

  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated */
  marketingStatus?: IMarketingStatus[];

  /** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable" */
  characteristic?: ICodeableConcept[];

  /** If the drug product is supplied with another item such as a diluent or adjuvant */
  copackagedIndicator?: boolean;

  /** Extension for copackagedIndicator */
  _copackagedIndicator?: IElement;

  /** Manufacturer of this package type (multiple means these are all possible manufacturers) */
  manufacturer?: IReference<'Organization'>[];

  /** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap */
  package?: IPackagedProductDefinitionPackage;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPackagedProductDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinition from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinition): PackagedProductDefinition {
    return new PackagedProductDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinition>): PackagedProductDefinition {
    return new PackagedProductDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinition) => Partial<IPackagedProductDefinition>): PackagedProductDefinition {
    const currentData = this.toJSON();
    return new PackagedProductDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PROPERTIES);
    return result as IPackagedProductDefinition;
  }

  /**
   * Create a deep clone of this PackagedProductDefinition
   */
  clone(): PackagedProductDefinition {
    return new PackagedProductDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinition
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
