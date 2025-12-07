import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPackagedProductDefinitionPackage,
  IPackagedProductDefinitionPackageContainedItem,
  IPackagedProductDefinitionPackageProperty,
  IPackagedProductDefinitionPackageShelfLifeStorage,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PackagedProductDefinitionPackage */
const PACKAGED_PRODUCT_DEFINITION_PACKAGE_PROPERTIES = [
  'identifier',
  'type',
  'quantity',
  '_quantity',
  'material',
  'alternateMaterial',
  'shelfLifeStorage',
  'manufacturer',
  'property',
  'containedItem',
  'package',
] as const;

/**
 * PackagedProductDefinitionPackage - A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackage.html
 *
 * @example
 * const packagedProductDefinitionPackage = new PackagedProductDefinitionPackage({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackage extends BackboneElement implements IPackagedProductDefinitionPackage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier */
  identifier?: IIdentifier[];

  /** The physical type of the container of the items */
  type?: ICodeableConcept;

  /** The quantity of this level of packaging in the package that contains it (with the outermost level being 1) */
  quantity?: number;

  /** Extension for quantity */
  _quantity?: IElement;

  /** Material type of the package item */
  material?: ICodeableConcept[];

  /** A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material */
  alternateMaterial?: ICodeableConcept[];

  /** Shelf Life and storage information */
  shelfLifeStorage?: IPackagedProductDefinitionPackageShelfLifeStorage[];

  /** Manufacturer of this package Item (multiple means these are all possible manufacturers) */
  manufacturer?: IReference<'Organization'>[];

  /** General characteristics of this item */
  property?: IPackagedProductDefinitionPackageProperty[];

  /** The item(s) within the packaging */
  containedItem?: IPackagedProductDefinitionPackageContainedItem[];

  /** Allows containers (and parts of containers) within containers, still a single packaged product */
  package?: IPackagedProductDefinitionPackage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPackagedProductDefinitionPackage>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackage from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackage): PackagedProductDefinitionPackage {
    return new PackagedProductDefinitionPackage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackage>): PackagedProductDefinitionPackage {
    return new PackagedProductDefinitionPackage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackage) => Partial<IPackagedProductDefinitionPackage>): PackagedProductDefinitionPackage {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGE_PROPERTIES);
    return result as IPackagedProductDefinitionPackage;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackage
   */
  clone(): PackagedProductDefinitionPackage {
    return new PackagedProductDefinitionPackage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackage
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackage'];
    return parts.join(', ');
  }
}
