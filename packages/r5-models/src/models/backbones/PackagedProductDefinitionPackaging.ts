import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPackagedProductDefinitionPackaging,
  IPackagedProductDefinitionPackagingContainedItem,
  IPackagedProductDefinitionPackagingProperty,
  IProductShelfLife,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PackagedProductDefinitionPackaging */
const PACKAGED_PRODUCT_DEFINITION_PACKAGING_PROPERTIES = [
  'identifier',
  'type',
  'componentPart',
  '_componentPart',
  'quantity',
  '_quantity',
  'material',
  'alternateMaterial',
  'shelfLifeStorage',
  'manufacturer',
  'property',
  'containedItem',
  'packaging',
] as const;

/**
 * PackagedProductDefinitionPackaging - A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 *
 * @see https://hl7.org/fhir/R5/packagedproductdefinitionpackaging.html
 *
 * @example
 * const packagedProductDefinitionPackaging = new PackagedProductDefinitionPackaging({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackaging extends BackboneElement implements IPackagedProductDefinitionPackaging {

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier */
  identifier?: IIdentifier[];

  /** The physical type of the container of the items */
  type?: ICodeableConcept;

  /** Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial) */
  componentPart?: boolean;

  /** Extension for componentPart */
  _componentPart?: IElement;

  /** The quantity of this level of packaging in the package that contains it (with the outermost level being 1) */
  quantity?: number;

  /** Extension for quantity */
  _quantity?: IElement;

  /** Material type of the package item */
  material?: ICodeableConcept[];

  /** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material */
  alternateMaterial?: ICodeableConcept[];

  /** Shelf Life and storage information */
  shelfLifeStorage?: IProductShelfLife[];

  /** Manufacturer of this packaging item (multiple means these are all potential manufacturers) */
  manufacturer?: IReference<'Organization'>[];

  /** General characteristics of this item */
  property?: IPackagedProductDefinitionPackagingProperty[];

  /** The item(s) within the packaging */
  containedItem?: IPackagedProductDefinitionPackagingContainedItem[];

  /** Allows containers (and parts of containers) within containers, still as a part of single packaged product */
  packaging?: IPackagedProductDefinitionPackaging[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPackagedProductDefinitionPackaging>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackaging from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackaging): PackagedProductDefinitionPackaging {
    return new PackagedProductDefinitionPackaging(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackaging with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackaging>): PackagedProductDefinitionPackaging {
    return new PackagedProductDefinitionPackaging({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackaging by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackaging) => Partial<IPackagedProductDefinitionPackaging>): PackagedProductDefinitionPackaging {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackaging({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackaging)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackaging {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGING_PROPERTIES);
    return result as IPackagedProductDefinitionPackaging;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackaging
   */
  clone(): PackagedProductDefinitionPackaging {
    return new PackagedProductDefinitionPackaging(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackaging
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackaging'];
    return parts.join(', ');
  }
}
