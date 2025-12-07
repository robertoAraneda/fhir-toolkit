import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IElement,
  IPackagedProductDefinitionPackageShelfLifeStorage,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PackagedProductDefinitionPackageShelfLifeStorage */
const PACKAGED_PRODUCT_DEFINITION_PACKAGE_SHELF_LIFE_STORAGE_PROPERTIES = [
  'type',
  'periodDuration',
  'periodString',
  '_periodString',
  'specialPrecautionsForStorage',
] as const;

/**
 * PackagedProductDefinitionPackageShelfLifeStorage - Shelf Life and storage information
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackageshelflifestorage.html
 *
 * @example
 * const packagedProductDefinitionPackageShelfLifeStorage = new PackagedProductDefinitionPackageShelfLifeStorage({
 *   // ... properties
 * });
 */
export class PackagedProductDefinitionPackageShelfLifeStorage extends BackboneElement implements IPackagedProductDefinitionPackageShelfLifeStorage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
  type?: ICodeableConcept;

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  periodDuration?: IDuration;

  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  periodString?: string;

  /** Extension for periodString */
  _periodString?: IElement;

  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified */
  specialPrecautionsForStorage?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPackagedProductDefinitionPackageShelfLifeStorage>) {
    super(data);
    if (data) {
      this.assignProps(data, PACKAGED_PRODUCT_DEFINITION_PACKAGE_SHELF_LIFE_STORAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PackagedProductDefinitionPackageShelfLifeStorage from a JSON object
   */
  static fromJSON(json: IPackagedProductDefinitionPackageShelfLifeStorage): PackagedProductDefinitionPackageShelfLifeStorage {
    return new PackagedProductDefinitionPackageShelfLifeStorage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PackagedProductDefinitionPackageShelfLifeStorage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPackagedProductDefinitionPackageShelfLifeStorage>): PackagedProductDefinitionPackageShelfLifeStorage {
    return new PackagedProductDefinitionPackageShelfLifeStorage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PackagedProductDefinitionPackageShelfLifeStorage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPackagedProductDefinitionPackageShelfLifeStorage) => Partial<IPackagedProductDefinitionPackageShelfLifeStorage>): PackagedProductDefinitionPackageShelfLifeStorage {
    const currentData = this.toJSON();
    return new PackagedProductDefinitionPackageShelfLifeStorage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPackagedProductDefinitionPackageShelfLifeStorage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPackagedProductDefinitionPackageShelfLifeStorage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PACKAGED_PRODUCT_DEFINITION_PACKAGE_SHELF_LIFE_STORAGE_PROPERTIES);
    return result as IPackagedProductDefinitionPackageShelfLifeStorage;
  }

  /**
   * Create a deep clone of this PackagedProductDefinitionPackageShelfLifeStorage
   */
  clone(): PackagedProductDefinitionPackageShelfLifeStorage {
    return new PackagedProductDefinitionPackageShelfLifeStorage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PackagedProductDefinitionPackageShelfLifeStorage
   */
  toString(): string {
    const parts: string[] = ['PackagedProductDefinitionPackageShelfLifeStorage'];
    return parts.join(', ');
  }
}
