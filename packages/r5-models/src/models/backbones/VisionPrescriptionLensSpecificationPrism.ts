import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IVisionPrescriptionLensSpecificationPrism,
  VisionBaseType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to VisionPrescriptionLensSpecificationPrism */
const VISION_PRESCRIPTION_LENS_SPECIFICATION_PRISM_PROPERTIES = [
  'amount',
  '_amount',
  'base',
  '_base',
] as const;

/**
 * VisionPrescriptionLensSpecificationPrism - Eye alignment compensation
 *
 * @see https://hl7.org/fhir/R4/visionprescriptionlensspecificationprism.html
 *
 * @example
 * const visionPrescriptionLensSpecificationPrism = new VisionPrescriptionLensSpecificationPrism({
 *   // ... properties
 * });
 */
export class VisionPrescriptionLensSpecificationPrism extends BackboneElement implements IVisionPrescriptionLensSpecificationPrism {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Amount of adjustment */
  amount: number;

  /** Extension for amount */
  _amount?: IElement;

  /** up | down | in | out */
  base: VisionBaseType;

  /** Extension for base */
  _base?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IVisionPrescriptionLensSpecificationPrism>) {
    super(data);
    if (data) {
      this.assignProps(data, VISION_PRESCRIPTION_LENS_SPECIFICATION_PRISM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VisionPrescriptionLensSpecificationPrism from a JSON object
   */
  static fromJSON(json: IVisionPrescriptionLensSpecificationPrism): VisionPrescriptionLensSpecificationPrism {
    return new VisionPrescriptionLensSpecificationPrism(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VisionPrescriptionLensSpecificationPrism with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVisionPrescriptionLensSpecificationPrism>): VisionPrescriptionLensSpecificationPrism {
    return new VisionPrescriptionLensSpecificationPrism({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VisionPrescriptionLensSpecificationPrism by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVisionPrescriptionLensSpecificationPrism) => Partial<IVisionPrescriptionLensSpecificationPrism>): VisionPrescriptionLensSpecificationPrism {
    const currentData = this.toJSON();
    return new VisionPrescriptionLensSpecificationPrism({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVisionPrescriptionLensSpecificationPrism)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVisionPrescriptionLensSpecificationPrism {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VISION_PRESCRIPTION_LENS_SPECIFICATION_PRISM_PROPERTIES);
    return result as IVisionPrescriptionLensSpecificationPrism;
  }

  /**
   * Create a deep clone of this VisionPrescriptionLensSpecificationPrism
   */
  clone(): VisionPrescriptionLensSpecificationPrism {
    return new VisionPrescriptionLensSpecificationPrism(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VisionPrescriptionLensSpecificationPrism
   */
  toString(): string {
    const parts: string[] = ['VisionPrescriptionLensSpecificationPrism'];
    return parts.join(', ');
  }
}
