import { BackboneElement } from '../base/BackboneElement.js';
import type {
  BiologicallyDerivedProductStorageScaleType,
  IBiologicallyDerivedProductStorage,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BiologicallyDerivedProductStorage */
const BIOLOGICALLY_DERIVED_PRODUCT_STORAGE_PROPERTIES = [
  'description',
  '_description',
  'temperature',
  '_temperature',
  'scale',
  '_scale',
  'duration',
] as const;

/**
 * BiologicallyDerivedProductStorage - Product storage
 *
 * @see https://hl7.org/fhir/R4B/biologicallyderivedproductstorage.html
 *
 * @example
 * const biologicallyDerivedProductStorage = new BiologicallyDerivedProductStorage({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductStorage extends BackboneElement implements IBiologicallyDerivedProductStorage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of storage */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Storage temperature */
  temperature?: number;

  /** Extension for temperature */
  _temperature?: IElement;

  /** farenheit | celsius | kelvin */
  scale?: BiologicallyDerivedProductStorageScaleType;

  /** Extension for scale */
  _scale?: IElement;

  /** Storage timeperiod */
  duration?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBiologicallyDerivedProductStorage>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_STORAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductStorage from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductStorage): BiologicallyDerivedProductStorage {
    return new BiologicallyDerivedProductStorage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductStorage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductStorage>): BiologicallyDerivedProductStorage {
    return new BiologicallyDerivedProductStorage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductStorage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductStorage) => Partial<IBiologicallyDerivedProductStorage>): BiologicallyDerivedProductStorage {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductStorage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductStorage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductStorage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_STORAGE_PROPERTIES);
    return result as IBiologicallyDerivedProductStorage;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductStorage
   */
  clone(): BiologicallyDerivedProductStorage {
    return new BiologicallyDerivedProductStorage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductStorage
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductStorage'];
    return parts.join(', ');
  }
}
